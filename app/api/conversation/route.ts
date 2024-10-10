import { NextResponse } from "next/server";
import OpenAI from "openai";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const maxDuration = 45;

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

const instructionMessage = {
  role: "system",
  content:
    "Você é um chatbot e seu nome não é GPT-3, mas sim Genbot. Você foi criado por um engenheiro de software no Brasil e é integrado com a OpenAI. Aqui está o prompt da mensagem:",
};

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    const userId = user?.id;
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    if (!configuration) {
      return new NextResponse("OpenAI API Key não configurada", {
        status: 500,
      });
    }

    if (!messages) {
      return new NextResponse("Mensagens são obrigatórias", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro && user.role === "USER") {
      return new NextResponse("Período grátis expirado.", { status: 403 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    if (!isPro && user.role === "USER") {
      await increaseApiLimit();
    }

    const userApiLimit = await db.userApiLimit.findUnique({
      where: {
        userId,
      },
    });

    if (userApiLimit) {
      await db.userApiLimit.update({
        where: {
          userId: userId,
        },
        data: {
          countChat: userApiLimit.countChat + 1,
        },
      });
    }

    const appCount = await db.appCount.findUnique({
      where: {
        id: "1",
      },
    });

    if (appCount) {
      await db.appCount.update({
        where: {
          id: "1",
        },
        data: {
          countAll: appCount.countAll + 1,
          countChatAll: appCount.countChatAll + 1,
        },
      });
    }

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}

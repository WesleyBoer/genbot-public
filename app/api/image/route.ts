import { NextResponse } from "next/server";
import { OpenAI } from "openai";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const maxDuration = 300;

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    const userId = user?.id;
    const body = await req.json();
    const { prompt, quality = "standard", resolution = "1024x1024" } = body;

    if (!userId) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    if (!configuration) {
      return new NextResponse("OpenAI API Key não configurada", {
        status: 500,
      });
    }

    if (!prompt) {
      return new NextResponse("Prompt é obrigatório", { status: 400 });
    }

    if (!quality) {
      return new NextResponse("Qualidade é obrigatória", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolução é obrigatória", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro && user.role === "USER") {
      return new NextResponse("Período grátis expirado.", { status: 403 });
    }

    if (freeTrial && !isPro && user.role === "USER") {
      if (quality !== "standard") {
        return new NextResponse(
          "Qualidade disponível apenas para usuários PRO.",
          { status: 403 }
        );
      }

      if (resolution !== "1024x1024") {
        return new NextResponse(
          "Resolução disponível apenas para usuários PRO.",
          { status: 403 }
        );
      }
    }

    const response = await openai.images.generate({
      prompt,
      n: 1,
      size: resolution,
      model: "dall-e-3",
      quality: quality,
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
          countImage: userApiLimit.countImage + 1,
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
          countImageAll: appCount.countImageAll + 1,
        },
      });
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.log("[IMAGE_ERROR]", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}

import { NextResponse } from "next/server";
import Replicate from "replicate";

import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const maxDuration = 300;

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    const userId = user?.id;
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Prompt é obrigatório.", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro && user.role === "USER") {
      return new NextResponse("Período grátis expirado.", { status: 403 });
    }

    const response = await replicate.run(
      "riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05",
      {
        input: {
          prompt_a: prompt,
        },
      }
    );

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
          countMusic: userApiLimit.countMusic + 1,
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
          countMusicAll: appCount.countMusicAll + 1,
        },
      });
    }

    return NextResponse.json(response);
  } catch (error) {
    console.log("[MUSIC_ERROR]", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}

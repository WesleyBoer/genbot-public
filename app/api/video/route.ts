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
      "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
      {
        input: {
          prompt: prompt,
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
          countVideo: userApiLimit.countVideo + 1,
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
          countVideoAll: appCount.countVideoAll + 1,
        },
      });
    }

    return NextResponse.json(response);
  } catch (error) {
    console.log("[VIDEO_ERROR]", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}

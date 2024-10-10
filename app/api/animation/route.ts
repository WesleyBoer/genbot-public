import { NextResponse } from "next/server";
import Replicate from "replicate";
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

    const { src, promptAnimation } = await req.json();

    const prompt = promptAnimation.toString();

    if (!userId) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    if (!src) {
      return new NextResponse("Imagem é obrigatório.", { status: 400 });
    }

    if (!user.isPro) {
      return new NextResponse(
        "Funcionalidade disponível apenas para usuários PRO.",
        { status: 403 }
      );
    }

    const response = await replicate.run(
      "stability-ai/stable-video-diffusion:3f0457e4619daac51203dedb472816fd4af51f3149fa7a9e0b5ffcf1b8172438",
      {
        input: {
          prompt: prompt,
          input_image: src,
        },
      }
    );

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
    console.log("[ANIMATION_ERROR]", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}

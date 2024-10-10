import { NextResponse } from "next/server";

import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/lib/utils";
import { currentUser } from "@/lib/auth";
import { APP_NAME } from "@/constants";
import { PRICE_MONTHLY } from "@/constants";

const settingsUrl = absoluteUrl("/settings");

export async function GET() {
  try {
    const user = await currentUser();
    const userId = user?.id;
    const userEmail = user?.email;

    if (!userEmail) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    if (!userId || !user) {
      return new NextResponse("Não autorizado", { status: 401 });
    }

    const userSubscription = await db.userSubscription.findUnique({
      where: {
        userId,
      },
    });

    if (userSubscription && userSubscription.stripeCostumerId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userSubscription.stripeCostumerId,
        return_url: settingsUrl,
      });

      return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    }

    const stripeSession = await stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "subscription",
      billing_address_collection: "auto",
      customer_email: userEmail,
      line_items: [
        {
          price_data: {
            currency: "BRL",
            product_data: {
              name: `${APP_NAME} Pro`,
              images: ["https://genbot.com.br/util/logo_maior.png"],
            },
            unit_amount: PRICE_MONTHLY,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        userId,
      },
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
  } catch (error) {
    console.log("[STRIPE_ERROR]", error);
    return new NextResponse("Erro interno", { status: 500 });
  }
}

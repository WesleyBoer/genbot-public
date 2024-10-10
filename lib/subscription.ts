import { currentUser } from "./auth";
import { db } from "./db";

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
  const user = await currentUser();
  const userId = user?.id;

  if (!userId) {
    return false;
  }

  const userSubscription = await db.userSubscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      stripeSubscriptionId: true,
      stripeCurrentPeriodEnd: true,
      stripeCostumerId: true,
      stripePriceId: true,
    },
  });

  if (!userSubscription) {
    if (user.role === "FRIEND" || user.role === "ADMIN") {
      return false;
    } else {
      await db.user.update({
        where: {
          id: userId,
        },
        data: {
          isPro: false,
        },
      });
    }
    return false;
  }

  const isValid =
    userSubscription.stripePriceId &&
    userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS >
      Date.now();

  if (!isValid) {
    await db.user.update({
      where: {
        id: userId,
      },
      data: {
        isPro: false,
      },
    });

    return false;
  }

  return !!isValid;
};

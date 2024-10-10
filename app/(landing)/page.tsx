import Loader from "@/components/loader";
import { Suspense, lazy } from "react";

const LandingNavbar = lazy(() => import("@/components/landing-navbar"));
const LandingHero = lazy(() => import("@/components/landing-hero"));
const LandingFeatures = lazy(() => import("@/components/landing-features"));
const LandingPlans = lazy(() => import("@/components/landing-plans"));
const LandingReviews = lazy(() => import("@/components/landing-reviews"));
const LandingFaq = lazy(() => import("@/components/landing-faq"));
const LandingFooter = lazy(() => import("@/components/landing-footer"));
const LandingVideo = lazy(() => import("@/components/landing-video"));
const LandingSatisfaction = lazy(
  () => import("@/components/landing-satisfaction")
);

export default function Home() {
  return (
    <div className="h-full">
      <Suspense fallback={<Loader noText />}>
        <LandingNavbar />
        <LandingHero />
        <LandingFeatures />
        <LandingVideo />
        <LandingReviews />
        <LandingPlans />
        <LandingSatisfaction />
        <LandingFaq />
        <LandingFooter />
      </Suspense>
    </div>
  );
}

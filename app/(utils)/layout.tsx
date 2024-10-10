import LandingNavbar from "@/components/landing-navbar";

const UtilsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full bg-[#111827] overflow-auto">
      <div className="mx-auto max-w-screen-xl h-full w-full">
        <LandingNavbar isGuidePage />
        <div className="mx-2 lg:mx-0 mt-8 p-6 lg:p-10 bg-zinc-100 rounded-lg">
          {children}
        </div>
      </div>
    </main>
  );
};

export default UtilsLayout;

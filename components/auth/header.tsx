import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { APP_NAME } from "@/constants";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <div className="flex items-center pl-3">
        <div className="relative w-8 h-8 mr-2">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-4xl font-semibold", font.className)}>
          {APP_NAME}
        </h1>
      </div>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;

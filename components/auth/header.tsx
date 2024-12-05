import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { FcLock } from "react-icons/fc";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center text-center">
      <div className="">
        <h1
          className={cn(
            "text-3xl font-semibold flex flex-row items-center justify-center",
            font.className
          )}
        >
          <FcLock />
          Auth
        </h1>
        <p className="text-muted-foreground text-sm">{label}</p>
      </div>
    </div>
  );
};

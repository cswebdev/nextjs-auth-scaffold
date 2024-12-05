import { FcLock } from "react-icons/fc";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LoginButton } from "@/components/auth/auth-button";
import { Card } from "@/components/ui/card";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default async function Home() {
  // useEffect(() => {
  //   console.log("mounted");
  // }, []);
  // console.log("WHERE AM I LOGGED? ");
  // blue-800/95
  // sky-500/90

  return (
    <main className="flex h-full flex-col items-center justify-center bg-skyblue-gradient-up">
      <Card className="h-80 w-80  flex flex-col justify-center items-center bg-white bg-opacity-80 shadow-lg backdrop-blur-sm border-slate-900/30">
        <div className="space-y-6 text-center">
          <h1
            className={cn(
              "text-6xl font-semibold text-gray-900 flex flex-row",
              font.className
            )}
          >
            <FcLock />
            Auth
          </h1>
          <p className="text-gray-900 text-lg ">
            A simple authentication service
          </p>
        </div>
        <LoginButton>
          <Button variant="default" size="lg" className="mt-7">
            Sign in
          </Button>
        </LoginButton>
      </Card>
    </main>
  );
}

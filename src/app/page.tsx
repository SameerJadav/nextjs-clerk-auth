import SignIn from "@/components/SignIn";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <p className="text-3xl font-bold underline">Hello world!</p>
      <SignIn />
    </main>
  );
}

import SignIn from "@/components/SignIn";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="p-4 text-3xl md:text-4xl">
      <SignIn />
    </main>
  );
}

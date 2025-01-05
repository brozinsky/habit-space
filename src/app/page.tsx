"use client";
import Image from "next/image";
import backgroundPNG from "./background.png";
import HabitDetails from "@/components/composites/habit-details";
import { HABITS } from "@/lib/habits";
interface IStore {
  count: number;
  increment: () => void;
}

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="relative w-full h-screen">
        {HABITS.map((item, i) => {
          return <HabitDetails key={i} {...item} />;
        })}
      </div>
      <Image
        className="w-screen h-screen absolute top-0 left-0 right-0 bottom-0 -z-10"
        src={backgroundPNG}
        width={1920}
        height={1080}
        alt=""
      />
    </div>
  );
}

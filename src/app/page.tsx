'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { create } from "zustand";

interface IStore {
  count: number;
  increment: () => void;
}

const useStore = create<IStore>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export default function Home() {
  const { count, increment,  } = useStore();

  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 self-center justify-self-center items-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Next.js Starter Template
        </h1>
        <p className="max-w-md text-center leading-7 [&:not(:first-child)]:mt-6">
          A modern and opinionated Next.js template with built-in libraries for
          styling, state management, and more.
        </p>
        <p className="max-w-md text-center leading-7 [&:not(:first-child)]:mt-6">
          Start building your app by editing{" "}
          <code className="bg-gray-100 rounded px-1 py-0.5 text-sm">
            src/app/page.tsx
          </code>
          .
        </p>

        <div className="flex flex-col items-center gap-4">
          <p className="text-lg font-medium">Counter: {count}</p>
          <Button onClick={increment}>Increment</Button>
        </div>
      </div>
    </div>
  );
}

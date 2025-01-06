"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { THabit } from "@/types/types";
import { useEffect } from "react";

function calculateStreaks(dates: { date: Date; completion: number }[]): {
  currentStreak: number;
  regularity: number;
  habitSize: number;
} {
  const sortedDates = dates
    .filter((entry) => entry.completion > 0)
    .map((entry) => new Date(entry.date))
    .sort((a, b) => a.getTime() - b.getTime());

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let currentStreak = 0;
  let regularity = 0;

  let tempregularity = 0;
  let lastDate = null;

  for (let i = 0; i < sortedDates.length; i++) {
    const currentDate = sortedDates[i];
    const prevDate = lastDate || currentDate;

    if (currentDate.getTime() <= yesterday.getTime()) {
      if (
        currentStreak === 0 &&
        currentDate.getTime() === yesterday.getTime()
      ) {
        currentStreak = 1;
      } else if (
        lastDate &&
        (currentDate.getTime() - lastDate.getTime()) / (1000 * 60 * 60 * 24) ===
          1
      ) {
        currentStreak++;
      } else if (currentDate.getTime() <= yesterday.getTime()) {
        currentStreak = 0;
      }
    }

    if (
      i === 0 ||
      (currentDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24) <= 4
    ) {
      tempregularity++;
    } else {
      tempregularity = 1; // Reset habit size if the gap is larger than 4 days
    }

    if (currentDate.getTime() <= today.getTime()) {
      regularity = Math.max(regularity, tempregularity); // Update max habit size
    }

    lastDate = currentDate;
  }

  const habitSize = Math.min(
    90,
    16 + (90 * Math.pow(regularity, 0.9)) / Math.pow(20, 0.9)
  );

  return { currentStreak, regularity, habitSize };
}

const HabitStar = (props: THabit) => {
  const { name, size, position, dates } = props;
  const { currentStreak, habitSize } = calculateStreaks(dates);

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            style={{
              bottom: `${position[0]}%`,
              left: `${position[1]}%`,
            }}
            className="absolute"
          >
            <div
              style={{
                width: habitSize,
                height: habitSize,
              }}
              className="z-10 bg-white rounded-full absolute cursor-pointer absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2"
            ></div>
            <div
              style={{
                width: habitSize + currentStreak,
                height: habitSize + currentStreak,
                opacity: "20%",
                animation: "glow 10s infinite",
              }}
              className="rounded-full absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 halo-glow"
            ></div>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default HabitStar;

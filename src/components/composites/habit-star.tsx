"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { THabit } from "@/types/types";

const HabitStar = (props: THabit) => {
  const { name, size, position } = props;

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            style={{
              width: size,
              height: size,
              bottom: `${position[0]}%`,
              left: `${position[1]}%`,
            }}
            className="bg-white rounded-full absolute cursor-pointer"
          ></div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default HabitStar;

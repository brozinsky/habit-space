import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import HabitStar from "./habit-star";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { THabit } from "@/types/types";
import { useHabitStore } from "@/hooks/stores/useHabitStore";
import { useEffect } from "react";

const HabitDetails = (props: THabit) => {
  const { selectedHabit, setSelectedHabit } = useHabitStore();

  const handleOpenDrawer = () => {
    setSelectedHabit(props.name);
  };

  const handleCloseDrawer = () => {
    setSelectedHabit(null);
  };
  useEffect(() => {
    console.log("Selected Habit:", selectedHabit);
  }, [selectedHabit]);
  return (
    <Drawer
      direction="bottom"
      open={selectedHabit !== null && props.name === selectedHabit}
      onOpenChange={(isOpen) => {
        if (!isOpen) handleCloseDrawer(); // Close drawer when dismissed
      }}
      onClose={() => setSelectedHabit(null)}
    >
      <div onClick={handleOpenDrawer}>
        <HabitStar {...props} />
      </div>
      <DrawerContent className="min-w-[370px] my-2 max-h-full">
        <DrawerHeader className="max-h-full flex flex-col gap-4">
          <DrawerTitle>Details</DrawerTitle>
          <div>"{props.name}"</div>
          {props.description && <div>{props.description}</div>}
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default HabitDetails;

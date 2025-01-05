import { THabit } from "@/types/types";
import { create } from "zustand";

type TSelectedHabit = THabit | null;

interface HabitStore {
  selectedHabit: string | null;
  setSelectedHabit: (habit: string | null) => void;
}

export const useHabitStore = create<HabitStore>((set) => ({
  selectedHabit: null,
  setSelectedHabit: (habit) => set({ selectedHabit: habit }),
}));

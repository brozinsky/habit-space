type THabitDate = {
  date: Date;
  completion: number;
}

export type THabit = {
  name: string;
  description?: string;
  size: number;
  streak?: number;
  position: number[];
  dates: THabitDate[]
};

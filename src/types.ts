export interface UserProfile {
  uid: string;
  name: string;
  lastPeriodDate: string; // ISO string
  dueDate: string; // ISO string
  currentWeek: number;
  onboarded: boolean;
  createdAt: string;
}

export interface DailyLog {
  id?: string;
  date: string; // YYYY-MM-DD
  symptoms: string[];
  mood: string;
  waterIntake: number; // in glasses or ml
  notes: string;
  createdAt: string;
}

export interface WeeklyData {
  week: number;
  fruit: {
    name: string;
    image: string;
    size: string;
  };
  milestones: string[];
  tips: string[];
  dietPlan?: string[];
  lifestyleTips?: string[];
  whatToAvoid?: string[];
}

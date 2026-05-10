import { WeeklyData } from './types';

export const WEEKLY_INSIGHTS: Record<number, WeeklyData> = {
  4: {
    week: 4,
    fruit: { name: 'Poppy Seed', image: '🌱', size: '2mm' },
    milestones: ['Implantation occurs', 'The blastocyst is officially an embryo'],
    tips: ['Start taking prenatal vitamins', 'Avoid sushi and unpasteurized cheese'],
  },
  6: {
    week: 6,
    fruit: { name: 'Sweet Pea', image: '🫛', size: '5mm' },
    milestones: ['Heart begins to beat', 'Neural tube is closing'],
    tips: ['Ginger tea can help with morning sickness', 'Stay hydrated'],
  },
  8: {
    week: 8,
    fruit: { name: 'Raspberry', image: '🍇', size: '1.6cm' },
    milestones: ['Webbed fingers and toes are forming', 'Ears and upper lip are developing'],
    tips: ['Eat small, frequent meals', 'Schedule your first prenatal appointment'],
  },
  10: {
    week: 10,
    fruit: { name: 'Prune', image: '🫐', size: '3cm' },
    milestones: ['Vital organs are starting to function', 'Tiny fingernails are forming'],
    tips: ['Try light walking for energy', 'Wear comfortable bras as breasts grow'],
  },
  12: {
    week: 12,
    fruit: { name: 'Lime', image: '🍋', size: '5.4cm' },
    milestones: ['Baby can make sucking motions', 'The skeleton is beginning to bone'],
    tips: ['Moisturize your skin to help with stretching', 'Tell close family the big news'],
  },
};

export const MOODS = [
  { label: 'Happy', icon: '😊' },
  { label: 'Tired', icon: '😴' },
  { label: 'Anxious', icon: '😟' },
  { label: 'Emotional', icon: '😭' },
  { label: 'Energetic', icon: '✨' },
];

export const SYMPTOMS = [
  'Nausea',
  'Fatigue',
  'Back Pain',
  'Headache',
  'Cravings',
  'Bloating',
  'Heartburn',
];

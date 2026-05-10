export function calculatePregnancyStats(lastPeriodDate: string) {
  const lmp = new Date(lastPeriodDate);
  const now = new Date();
  
  // Calculate Due Date (LMP + 280 days)
  const dueDate = new Date(lmp);
  dueDate.setDate(dueDate.getDate() + 280);
  
  // Calculate Current Week
  const diffTime = Math.abs(now.getTime() - lmp.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const currentWeek = Math.floor(diffDays / 7) || 1;
  
  return {
    dueDate: dueDate.toISOString(),
    currentWeek: Math.min(Math.max(currentWeek, 4), 42), // Simplified week range for demo
  };
}

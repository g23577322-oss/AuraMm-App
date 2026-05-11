import React from 'react';
import { motion } from 'motion/react';
import { Apple, Heart, ShieldAlert, Sparkles } from 'lucide-react';
import { WEEKLY_HEALTH_DATA } from '../../services/weeklyHealthData';

interface WeeklyHealthGuideProps {
  week: number;
}

export default function WeeklyHealthGuide({ week }: WeeklyHealthGuideProps) {
  const data = WEEKLY_HEALTH_DATA[week] || WEEKLY_HEALTH_DATA[1];

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <Sparkles className="text-pink-500" size={20} />
          Week {week} Health Guide
        </h2>
      </header>

      <div className="grid gap-4">
        {/* Diet Plan */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-[2rem] p-6 border border-pink-50 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-50 rounded-2xl text-green-600">
              <Apple size={24} />
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-slate-800">Weekly Diet Plan</h3>
              <ul className="grid grid-cols-1 gap-2">
                {data.dietPlan?.map((item, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Healthy Living */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-[2rem] p-6 border border-pink-50 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-50 rounded-2xl text-blue-600">
              <Heart size={24} />
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-slate-800">Healthy Living Tips</h3>
              <ul className="grid grid-cols-1 gap-2">
                {data.lifestyleTips?.map((item, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* What to Avoid */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[2rem] p-6 border border-red-50 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-50 rounded-2xl text-red-600">
              <ShieldAlert size={24} />
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-slate-800">What to Avoid</h3>
              <ul className="grid grid-cols-1 gap-2">
                {data.whatToAvoid?.map((item, i) => (
                  <li key={i} className="text-sm text-slate-600 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

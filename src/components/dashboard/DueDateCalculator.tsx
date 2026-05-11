import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, RefreshCw, Calculator, ArrowRight } from 'lucide-react';
import { calculatePregnancyStats } from '../../lib/utils';
import { doc, updateDoc } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../../services/firebase';

interface DueDateCalculatorProps {
  userId: string;
  currentLMP: string;
}

export default function DueDateCalculator({ userId, currentLMP }: DueDateCalculatorProps) {
  const [lmpDate, setLmpDate] = useState(currentLMP);
  const [isUpdating, setIsUpdating] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  const stats = calculatePregnancyStats(lmpDate);

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      await updateDoc(doc(db, 'users', userId), {
        lastPeriodDate: lmpDate,
        dueDate: stats.dueDate,
        currentWeek: stats.currentWeek
      });
      setShowConfig(false);
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `users/${userId}`);
    } finally {
      setIsUpdating(false);
    }
  };

  const resetToToday = () => {
    const today = new Date().toISOString().split('T')[0];
    setLmpDate(today);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-[2.5rem] p-8 text-white shadow-xl shadow-pink-500/20 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-125 transition-transform duration-1000"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
              <Calculator size={24} />
            </div>
            <div>
              <h3 className="font-bold text-xl tracking-tight">Timeline Calculator</h3>
              <p className="text-pink-100 text-xs font-medium uppercase tracking-widest">Based on your last period</p>
            </div>
          </div>
          <button 
            onClick={() => setShowConfig(!showConfig)}
            className="p-2 bg-white/10 hover:bg-white/20 rounded-xl transition-colors backdrop-blur-md"
          >
            {showConfig ? 'Close' : <RefreshCw size={20} />}
          </button>
        </div>

        {!showConfig ? (
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-pink-100 text-[10px] uppercase font-bold tracking-widest">Estimated Due Date</p>
              <p className="text-2xl font-bold">{new Date(stats.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            </div>
            <div className="space-y-1">
              <p className="text-pink-100 text-[10px] uppercase font-bold tracking-widest">Current Stage</p>
              <p className="text-2xl font-bold">Week {stats.currentWeek}</p>
            </div>
          </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-pink-100">Last Period Date (LMP)</label>
              <input 
                type="date" 
                value={lmpDate}
                onChange={(e) => setLmpDate(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-medium"
              />
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={handleUpdate}
                disabled={isUpdating}
                className="flex-1 bg-white text-pink-600 px-6 py-4 rounded-2xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isUpdating ? 'Saving...' : 'Update Dates'} <ArrowRight size={18} />
              </button>
              <button 
                onClick={resetToToday}
                className="px-6 py-4 bg-white/10 border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-all"
              >
                Reset
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

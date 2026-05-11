import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import DueDateCalculator from '../dashboard/DueDateCalculator';
import { UserProfile } from '../../types';

interface LandingPageProps {
  user: UserProfile;
  onStart: () => void;
}

const WELCOME_MESSAGES = [
  "Welcome, Beautiful Mom! Your baby is growing, and so is our love for you.",
  "Celebrating the miracle of life with you every day.",
  "You're doing an amazing job, nurture yourself and your little one.",
  "Every kick and flutter is a reminder of the beautiful journey you're on."
];

export default function LandingPage({ user, onStart }: LandingPageProps) {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % WELCOME_MESSAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1544126592-807daa2b565b?auto=format&fit=crop&q=80&w=2000" 
          alt="Happy Mother"
          className="w-full h-full object-cover opacity-60 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-slate-900/60"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 py-12 text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h2 className="text-pink-400 font-bold uppercase tracking-[0.25em] text-sm">AuraMom Companion</h2>
          <div className="h-32 md:h-20 flex items-center justify-center">
            <motion.h1 
              key={msgIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight"
            >
              {WELCOME_MESSAGES[msgIndex]}
            </motion.h1>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="w-full max-w-md shadow-2xl">
            <DueDateCalculator userId={user.uid} currentLMP={user.lastPeriodDate} />
          </div>

          <button 
            onClick={onStart}
            className="group relative inline-flex items-center gap-3 bg-white text-slate-900 px-10 py-5 rounded-[2rem] font-bold text-lg hover:bg-pink-50 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
          >
            Start My Journey
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1 }}
          className="text-white/60 text-xs font-medium uppercase tracking-[0.2em]"
        >
          Trusted by over 100,000+ Moms
        </motion.footer>
      </div>
    </div>
  );
}

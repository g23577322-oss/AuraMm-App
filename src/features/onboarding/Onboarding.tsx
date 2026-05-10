import React, { useState } from 'react';
import { Calendar, ChevronRight, LogIn } from 'lucide-react';
import { motion } from 'motion/react';
import { loginWithGoogle } from '../../services/firebase';

interface OnboardingProps {
  onComplete: (data: { name: string; lastPeriodDate: string; uid: string }) => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [lastPeriodDate, setLastPeriodDate] = useState('');
  const [uid, setUid] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoggingIn(true);
    try {
      const user = await loginWithGoogle();
      setUid(user.uid);
      setName(user.displayName || '');
      setStep(2);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleNext = () => {
    if (step === 2 && lastPeriodDate) {
      onComplete({ name, lastPeriodDate, uid });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-brand-blue">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotateY: -10 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-md w-full perspective-1000"
      >
        <div className="text-center mb-12">
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              scale: [1, 1.1, 1] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-32 h-32 mx-auto mb-6 relative"
          >
             <div className="absolute inset-0 bg-pink-400 rounded-full blur-3xl opacity-20"></div>
             <img 
               src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=400&h=400"
               alt="Baby"
               className="w-full h-full rounded-full object-cover border-4 border-white shadow-2xl relative z-10"
               referrerPolicy="no-referrer"
             />
          </motion.div>
          <h1 className="text-4xl mb-4 font-bold tracking-tight">Bloom & Bébé</h1>
          <p className="text-slate-500 text-lg">Your gentle 3D companion journey.</p>
        </div>

        <motion.div 
          layout
          className="card shadow-2xl shadow-pink-200/50 space-y-6"
        >
          {step === 1 ? (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center space-y-2">
                <h3 className="text-xl">Let's get started</h3>
                <p className="text-sm text-slate-400">Sign in to sync your journey across devices.</p>
              </div>
              <button
                onClick={handleGoogleLogin}
                disabled={isLoggingIn}
                className="btn-secondary w-full flex items-center justify-center gap-3 py-4 shadow-sm"
              >
                {isLoggingIn ? 'Connecting...' : (
                  <>
                    <LogIn size={20} className="text-blue-500" />
                    Continue with Google
                  </>
                )}
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold tracking-tight">Your Journey Details</h3>
                <p className="text-sm text-slate-400">When was your last period?</p>
              </div>

              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-pink-100 rounded-2xl blur-lg transition-opacity group-focus-within:opacity-100 opacity-0 -z-10"></div>
                  <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-pink-500 transition-colors" size={22} />
                  <input
                    type="date"
                    value={lastPeriodDate}
                    onChange={(e) => setLastPeriodDate(e.target.value)}
                    className="input-field pl-14 text-lg h-16 shadow-inner focus:border-pink-300"
                    autoFocus
                  />
                </div>
                <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">
                  Calculation base for your 40-week journey
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleNext}
                disabled={!lastPeriodDate}
                className="w-full h-16 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-slate-200 disabled:opacity-50 flex items-center justify-center gap-3 transition-all hover:bg-slate-800"
              >
                Launch Tracker
                <ChevronRight size={20} />
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

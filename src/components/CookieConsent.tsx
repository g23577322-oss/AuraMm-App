import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('auramom_cookie_consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1500);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('auramom_cookie_consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-[100] max-w-lg md:left-auto"
        >
          <div className="bg-slate-900 text-white rounded-[2rem] p-6 shadow-2xl border border-slate-800 backdrop-blur-xl bg-opacity-95">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-pink-500/20 rounded-2xl text-pink-500">
                <ShieldCheck size={24} />
              </div>
              <div className="flex-grow space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-lg">We use cookies</h3>
                  <button onClick={() => setIsVisible(false)} className="text-slate-500 hover:text-white transition-colors">
                    <X size={20} />
                  </button>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  We use cookies to improve your experience and show you relevant advertising. By continuing to use AuraMom, you agree to our <span className="text-pink-400 font-medium">Cookie Policy</span>.
                </p>
                <div className="flex gap-3 pt-2">
                  <button 
                    onClick={handleAccept}
                    className="flex-grow bg-white text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-pink-50 transition-colors text-sm"
                  >
                    Accept All
                  </button>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="px-6 py-3 bg-slate-800 text-slate-300 rounded-xl font-bold hover:bg-slate-700 transition-colors text-sm"
                  >
                    Essential Only
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

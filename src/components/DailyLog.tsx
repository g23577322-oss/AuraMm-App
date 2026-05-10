import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MOODS, SYMPTOMS } from '../../constants';
import { Droplets, Heart, CheckCircle2, Loader2 } from 'lucide-react';
import { useFirebase } from '../../components/FirebaseProvider';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db, handleFirestoreError, OperationType } from '../../services/firebase';

export default function DailyLog() {
  const { user } = useFirebase();
  const [water, setWater] = useState(4);
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const toggleSymptom = (s: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    );
  };

  const handleSave = async () => {
    if (!user || saving) return;
    setSaving(true);

    try {
      const today = new Date().toISOString().split('T')[0];
      await addDoc(collection(db, 'users', user.uid, 'logs'), {
        userId: user.uid,
        date: today,
        mood: selectedMood || 'Neutral',
        waterIntake: water,
        symptoms: selectedSymptoms,
        createdAt: serverTimestamp(),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `users/${user.uid}/logs`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-6 pb-32 space-y-8 max-w-2xl mx-auto">
      <header>
        <h1 className="text-3xl">Daily Check-in</h1>
        <p className="text-slate-500">How are you and the little one today?</p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Water Tracking */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="card-3d bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col gap-6"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-blue-500">
              <Droplets size={20} />
              <h3 className="text-xl font-bold tracking-tight">Hydration</h3>
            </div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{water} / 8 cups</span>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[...Array(8)].map((_, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setWater(i + 1)}
                className={`aspect-square rounded-2xl transition-all flex items-center justify-center ${
                  i < water ? 'bg-blue-500 text-white shadow-lg shadow-blue-200' : 'bg-blue-50 text-blue-300 hover:bg-blue-100'
                }`}
              >
                <Droplets size={18} />
              </motion.button>
            ))}
          </div>
        </motion.section>

        {/* Mood Tracking */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="card-3d bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 flex flex-col gap-6"
        >
          <div className="flex items-center gap-2 text-pink-500">
            <Heart size={20} />
            <h3 className="text-xl font-bold tracking-tight">Mood</h3>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {MOODS.map((m) => (
              <motion.button
                key={m.label}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedMood(m.label)}
                className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all ${
                  selectedMood === m.label ? 'bg-pink-50 ring-2 ring-pink-200' : 'hover:bg-slate-50 opacity-60 grayscale hover:grayscale-0 hover:opacity-100'
                }`}
              >
                <span className="text-2xl">{m.icon}</span>
                <span className="text-[9px] uppercase font-bold text-slate-400">{m.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Symptom Tracking */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="card bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 space-y-6"
      >
        <h3 className="text-xl font-bold tracking-tight">Symptoms</h3>
        <div className="flex flex-wrap gap-2">
          {SYMPTOMS.map((s) => (
            <motion.button
              key={s}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleSymptom(s)}
              className={`px-5 py-2.5 rounded-full border-2 transition-all text-sm font-semibold ${
                selectedSymptoms.includes(s) 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg' 
                  : 'bg-white border-slate-100 text-slate-500 hover:border-pink-200'
              }`}
            >
              {s}
            </motion.button>
          ))}
        </div>
      </motion.section>

      <button
        onClick={handleSave}
        disabled={saving || !selectedMood}
        className="btn-primary w-full flex items-center justify-center gap-2 py-4 text-lg disabled:opacity-50"
      >
        {saving ? (
          <Loader2 className="animate-spin" />
        ) : saved ? (
          <motion.span 
            initial={{ scale: 0.5 }} 
            animate={{ scale: 1 }}
            className="flex items-center gap-2"
          >
            <CheckCircle2 /> Log Saved
          </motion.span>
        ) : 'Save Daily Log'}
      </button>
    </div>
  );
}

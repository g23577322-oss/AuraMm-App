import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Droplets, Heart } from 'lucide-react';
import { UserProfile, WeeklyData } from '../../types';
import { WEEKLY_INSIGHTS } from '../../constants';

interface DashboardProps {
  user: UserProfile;
}

export default function Dashboard({ user }: DashboardProps) {
  const currentWeek = user.currentWeek;
  const weeklyData: WeeklyData = WEEKLY_INSIGHTS[currentWeek] || {
    week: currentWeek,
    fruit: { name: 'Little One', image: '👶', size: 'Developing' },
    milestones: ['Rapid growth continuing', 'Organ systems maturing'],
    tips: ['Eat a balanced diet', 'Stay hydrated'],
  };

  return (
    <div className="p-8 pb-32 space-y-10 max-w-5xl mx-auto">
      <header className="flex justify-between items-center bg-white p-6 rounded-3xl shadow-sm border border-pink-50">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold border-2 border-white shadow-sm font-sans">
            {user.name.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{user.name}</h1>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1">
              Week {currentWeek} • Trimester {currentWeek < 13 ? '1' : currentWeek < 27 ? '2' : '3'}
            </p>
          </div>
        </div>
        <div className="text-right hidden sm:block">
          <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Due Date</p>
          <p className="font-semibold text-pink-600">
            {new Date(user.dueDate).toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </header>

      {/* Baby Growth Card */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', damping: 20 }}
        className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-pink-50 flex flex-col md:flex-row gap-10 items-center relative overflow-hidden card-3d"
      >
        <div className="absolute -top-4 -right-4 pointer-events-none select-none opacity-[0.03] text-[200px] font-bold text-pink-600 leading-none">
          {currentWeek}
        </div>
        
        <div className="relative z-10 w-full md:w-48 h-48 flex-shrink-0 flex items-center justify-center">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotateZ: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-20 transform scale-150"></div>
              <img 
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=400&h=400"
                alt="Baby"
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-xl relative z-20"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-2 -right-2 bg-white p-3 rounded-2xl shadow-lg z-30">
                <span className="text-3xl">{weeklyData.fruit.image}</span>
              </div>
            </motion.div>
        </div>

        <div className="z-10 flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-light leading-tight">
            You're <span className="font-bold text-pink-600">{currentWeek} Weeks</span> along
          </h2>
          <p className="text-slate-500 max-w-lg leading-relaxed">
            Your baby is now the size of a <span className="font-bold text-slate-800">{weeklyData.fruit.name}</span>! {weeklyData.milestones[0]}.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
            <div className="bg-pink-50/50 rounded-2xl p-5 flex flex-col items-center justify-center min-w-[120px] border border-pink-100/50 hover:bg-pink-100/50 transition-colors cursor-pointer">
              <span className="text-3xl mb-2">{weeklyData.fruit.image}</span>
              <p className="text-[10px] uppercase tracking-wider text-pink-600 font-bold">Baby Size</p>
              <p className="font-bold">{weeklyData.fruit.size}</p>
            </div>
            <div className="bg-blue-50/50 rounded-2xl p-5 flex flex-col items-center justify-center min-w-[120px] border border-blue-100/50">
              <span className="text-3xl mb-2">⚖️</span>
              <p className="text-[10px] uppercase tracking-wider text-blue-600 font-bold">Progress</p>
              <p className="font-bold">{Math.round((currentWeek / 40) * 100)}%</p>
            </div>
            <div className="bg-green-50/50 rounded-2xl p-5 flex flex-col items-center justify-center min-w-[120px] border border-green-100/50">
              <Sparkles className="text-green-600 mb-2" size={32} />
              <p className="text-[10px] uppercase tracking-wider text-green-600 font-bold">Milestones</p>
              <p className="font-bold">{weeklyData.milestones.length} New</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-12 gap-8">
        {/* Milestones */}
        <motion.section 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="lg:col-span-10 lg:col-start-2 xl:col-span-7 xl:col-start-1 space-y-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-8 bg-pink-400 rounded-full"></div>
            <h3 className="text-xl font-bold tracking-tight">This Week's Journey</h3>
          </div>
          
          <div className="grid gap-4">
            {weeklyData.milestones.map((m, i) => (
              <motion.div 
                key={i} 
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                className="flex items-start gap-5 p-6 rounded-3xl bg-white border border-slate-100 hover:border-pink-200 transition-all shadow-sm card-3d cursor-default"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shadow-inner text-xl shrink-0">
                  {i === 0 ? '✨' : i === 1 ? '🌱' : '💓'}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Development</h4>
                  <p className="text-sm text-slate-500 mt-1 leading-relaxed">{m}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tips & Health */}
        <section className="lg:col-span-5 space-y-8">
           <div className="card bg-slate-900 text-white border-none shadow-xl overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform"></div>
              <h3 className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-6">Expert Tips</h3>
              <ul className="space-y-6">
                {weeklyData.tips.map((t, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-pink-400 font-bold text-xs ring-1 ring-slate-700">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed pt-1.5">{t}</p>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors text-xs font-bold uppercase tracking-widest border border-white/10">
                View All Advice
              </button>
           </div>

           {/* Quick Stats Grid */}
           <div className="grid grid-cols-2 gap-4">
             <div className="p-6 rounded-[2rem] bg-blue-50/50 border border-blue-100 shadow-sm">
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">Hydration</p>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-bold">1.2</span>
                  <span className="text-xs text-blue-400 font-bold">/ 2.5L</span>
                </div>
                <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[48%] transition-all"></div>
                </div>
             </div>
             <div className="p-6 rounded-[2rem] bg-pink-50/50 border border-pink-100 shadow-sm">
                <p className="text-[10px] font-bold text-pink-600 uppercase tracking-widest mb-4">Wellbeing</p>
                <div className="flex items-center gap-3">
                  <span className="text-4xl">😊</span>
                  <div className="leading-tight">
                    <p className="font-bold text-slate-800">Happy</p>
                    <p className="text-[10px] text-pink-400 italic">Feeling good</p>
                  </div>
                </div>
             </div>
           </div>
        </section>
      </div>
    </div>
  );
}

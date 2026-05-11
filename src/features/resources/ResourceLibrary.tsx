import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Heart, Activity, Apple, Baby, Brain, ShieldCheck, ArrowLeft } from 'lucide-react';

const ARTICLES = [
  {
    id: 1,
    title: "The First Trimester: What to Expect",
    category: "Guides",
    icon: <Baby size={20} />,
    color: "bg-pink-100 text-pink-600",
    excerpt: "From morning sickness to your first ultrasound, here is your complete guide to the first 12 weeks."
  },
  {
    id: 2,
    title: "Nutrition for a Healthy Pregnancy",
    category: "Health",
    icon: <Apple size={20} />,
    color: "bg-green-100 text-green-600",
    excerpt: "Essential vitamins, what to eat, and which foods to avoid to ensure your baby gets the best start."
  },
  {
    id: 3,
    title: "Gentle Exercises for Every Stage",
    category: "Fitness",
    icon: <Activity size={20} />,
    color: "bg-blue-100 text-blue-600",
    excerpt: "Yoga, swimming, and walking tips that keep you active and comfortable throughout your journey."
  },
  {
    id: 4,
    title: "Mental Wellbeing & Pregnancy",
    category: "Wellness",
    icon: <Brain size={20} />,
    color: "bg-purple-100 text-purple-600",
    excerpt: "Managing anxiety, mood swings, and finding peace during one of life's biggest transitions."
  },
  {
    id: 5,
    title: "Preparing Your Labor Delivery Plan",
    category: "Preparation",
    icon: <ShieldCheck size={20} />,
    color: "bg-orange-100 text-orange-600",
    excerpt: "Communicating your wishes and understanding the different options for your big day."
  },
  {
    id: 6,
    title: "Newborn Care 101: The First Week",
    category: "Parenting",
    icon: <Heart size={20} />,
    color: "bg-red-100 text-red-600",
    excerpt: "Sleeping, feeding, and bonding with your new arrival during those precious early days."
  },
  {
    id: 7,
    title: "Second Trimester: The Golden Era",
    category: "Guides",
    icon: <Baby size={20} />,
    color: "bg-pink-100 text-pink-600",
    excerpt: "Energy returns and your bump begins to show. Learn more about the most comfortable stage."
  },
  {
    id: 8,
    title: "Staying Hydrated: Why It Matters",
    category: "Health",
    icon: <Apple size={20} />,
    color: "bg-green-100 text-green-600",
    excerpt: "How much water do you really need, and how it impacts your baby's development."
  },
  {
    id: 9,
    title: "Pelvic Floor Health for Moms",
    category: "Fitness",
    icon: <Activity size={20} />,
    color: "bg-blue-100 text-blue-600",
    excerpt: "Simple daily exercises to strengthen your core and prepare for recovery post-delivery."
  },
  {
    id: 10,
    title: "Sleep Tips for the Third Trimester",
    category: "Wellness",
    icon: <Brain size={20} />,
    color: "bg-purple-100 text-purple-600",
    excerpt: "Finding comfort as your belly grows and preparing for the sleepless nights ahead."
  },
  {
    id: 11,
    title: "What to Pack in Your Hospital Bag",
    category: "Preparation",
    icon: <ShieldCheck size={20} />,
    color: "bg-orange-100 text-orange-600",
    excerpt: "The essentials for you, your partner, and your baby to make hospital stay comfortable."
  },
  {
    id: 12,
    title: "Busting Common Pregnancy Myths",
    category: "Knowledge",
    icon: <BookOpen size={20} />,
    color: "bg-indigo-100 text-indigo-600",
    excerpt: "The science behind old wives' tales and what you really need to know."
  }
];

interface ResourceLibraryProps {
  onBack?: () => void;
}

export default function ResourceLibrary({ onBack }: ResourceLibraryProps) {
  return (
    <div className="p-6 pb-32 space-y-10 max-w-5xl mx-auto">
      <header className="flex items-center gap-4">
        {onBack && (
          <button 
            onClick={onBack}
            className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-pink-500 border border-transparent hover:border-pink-50"
          >
            <ArrowLeft size={24} />
          </button>
        )}
        <div className="space-y-1">
          <h1 className="text-4xl font-bold tracking-tight">Resource Library</h1>
          <p className="text-slate-500 text-lg">Curated insights for your unique journey.</p>
        </div>
      </header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTICLES.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="card-3d group cursor-pointer"
          >
            <div className="card h-full flex flex-col hover:border-pink-200">
              <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-2xl ${article.color}`}>
                  {article.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {article.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-pink-600 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
                {article.excerpt}
              </p>
              <div className="flex items-center text-pink-500 text-xs font-bold uppercase tracking-widest gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Read Article <BookOpen size={14} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
        <div className="relative z-10 space-y-6 max-w-2xl">
          <h2 className="text-3xl font-bold">Ask Aura Anything</h2>
          <p className="text-slate-400">Can't find what you're looking for? Our AI companion is trained on thousands of medical-grade resources to help you with quick answers.</p>
          <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-pink-50 transition-colors flex items-center gap-2">
            Chat with Aura <Brain size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

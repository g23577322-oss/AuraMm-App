/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { UserProfile } from './types';
import { calculatePregnancyStats } from './lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Onboarding from './features/onboarding/Onboarding';
import Dashboard from './components/dashboard/Dashboard';
import DailyLog from './components/DailyLog';
import Chat from './features/chat/Chat';
import ResourceLibrary from './features/resources/ResourceLibrary';
import LegalPage from './features/legal/LegalPage';
import CookieConsent from './components/CookieConsent';
import LandingPage from './components/LandingPage';
import { LogOut, Loader2, Calendar, ArrowLeft, Shield, Scale, ScrollText, UserCircle } from 'lucide-react';
import { FirebaseProvider, useFirebase } from './components/FirebaseProvider';
import { doc, setDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, logout, handleFirestoreError, OperationType } from './services/firebase';

function MainApp() {
  const { user, profile, loading } = useFirebase();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [hasStarted, setHasStarted] = useState(false);

  const handleOnboardingComplete = async (data: { name: string; lastPeriodDate: string; uid: string }) => {
    const stats = calculatePregnancyStats(data.lastPeriodDate);
    const newUserProfile: UserProfile = {
      uid: data.uid,
      name: data.name,
      lastPeriodDate: data.lastPeriodDate,
      dueDate: stats.dueDate,
      currentWeek: stats.currentWeek,
      onboarded: true,
      createdAt: new Date().toISOString(),
    };

    try {
      await setDoc(doc(db, 'users', data.uid), {
        ...newUserProfile,
        createdAt: serverTimestamp()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, `users/${data.uid}`);
    }
  };

  const handleUpdateDate = async (newDate: string) => {
    if (!profile) return;
    const stats = calculatePregnancyStats(newDate);
    try {
      await updateDoc(doc(db, 'users', profile.uid), {
        lastPeriodDate: newDate,
        dueDate: stats.dueDate,
        currentWeek: stats.currentWeek
      });
    } catch (err) {
      handleFirestoreError(err, OperationType.UPDATE, `users/${profile.uid}`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-bg">
        <Loader2 className="animate-spin text-pink-500" size={40} />
      </div>
    );
  }

  if (!user || !profile) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  const renderContent = () => {
    if (activeTab === 'privacy' || activeTab === 'terms' || activeTab === 'cookies') {
      return <LegalPage type={activeTab as any} onBack={() => setActiveTab('profile')} />;
    }

    if (!hasStarted && activeTab === 'dashboard') {
      return (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full"
        >
          <LandingPage user={profile!} onStart={() => setHasStarted(true)} />
        </motion.div>
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="animate-in fade-in duration-1000"
          >
            <Dashboard user={profile!} />
          </motion.div>
        );
      case 'log':
        return <DailyLog onBack={() => setActiveTab('dashboard')} />;
      case 'library':
        return <ResourceLibrary onBack={() => setActiveTab('dashboard')} />;
      case 'chat':
        return <Chat onBack={() => setActiveTab('dashboard')} />;
      case 'profile':
        return (
          <div className="p-6 pb-32 space-y-8 max-w-2xl mx-auto">
            <header className="flex items-center gap-4">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-pink-500 border border-transparent hover:border-pink-50"
              >
                <ArrowLeft size={24} />
              </button>
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
                <p className="text-slate-500">Manage your journey and details</p>
              </div>
            </header>

            <div className="card space-y-6">
              <div className="flex items-center gap-6 pb-6 border-b border-slate-100">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-3xl flex items-center justify-center text-white text-3xl font-bold font-sans shadow-lg shadow-pink-200">
                  {profile!.name.substring(0, 1).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Expectant Mom</p>
                  <h2 className="text-2xl font-bold text-slate-800">{profile!.name}</h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Due Date</p>
                  <p className="font-bold text-slate-700">
                    {new Date(profile!.lastPeriodDate).toLocaleDateString()}
                  </p>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl">
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Current Progress</p>
                  <p className="font-bold text-slate-700">Week {profile!.currentWeek}</p>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Journey Settings</h3>
              <button 
                onClick={() => { setHasStarted(false); setActiveTab('dashboard'); }}
                className="flex items-center justify-between w-full p-5 bg-white rounded-2xl border border-slate-100 hover:border-pink-200 transition-colors group"
              >
                <div className="flex items-center gap-4 text-slate-700 font-medium">
                  <UserCircle size={20} className="text-pink-400" /> Back to Welcome Screen
                </div>
                <ArrowLeft size={18} className="text-slate-300 rotate-180 group-hover:text-pink-400 transition-colors" />
              </button>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">App Settings</h3>
              <div className="grid gap-2">
                <div className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-4 text-slate-700 font-medium">
                    <Calendar size={20} className="text-pink-400" /> Update Due Date
                  </div>
                  <input 
                    type="date"
                    className="w-10 h-10 opacity-0 absolute cursor-pointer"
                    onChange={(e) => handleUpdateDate(e.target.value)}
                  />
                  <Calendar size={18} className="text-slate-300" />
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Legal & Privacy</h3>
              <div className="grid gap-2">
                <button onClick={() => setActiveTab('privacy')} className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 hover:border-pink-200 transition-colors group">
                  <div className="flex items-center gap-4 text-slate-700 font-medium">
                    <Shield size={20} className="text-pink-400" /> Privacy Policy
                  </div>
                  <ArrowLeft size={18} className="text-slate-300 rotate-180 group-hover:text-pink-400 transition-colors" />
                </button>
                <button onClick={() => setActiveTab('terms')} className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 hover:border-pink-200 transition-colors group">
                  <div className="flex items-center gap-4 text-slate-700 font-medium">
                    <Scale size={20} className="text-pink-400" /> Terms of Service
                  </div>
                  <ArrowLeft size={18} className="text-slate-300 rotate-180 group-hover:text-pink-400 transition-colors" />
                </button>
                <button onClick={() => setActiveTab('cookies')} className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-100 hover:border-pink-200 transition-colors group">
                  <div className="flex items-center gap-4 text-slate-700 font-medium">
                    <ScrollText size={20} className="text-pink-400" /> Cookie Policy
                  </div>
                  <ArrowLeft size={18} className="text-slate-300 rotate-180 group-hover:text-pink-400 transition-colors" />
                </button>
              </div>
            </div>

            <button 
              onClick={() => logout()}
              className="btn-secondary w-full flex items-center justify-center gap-2 text-red-500 border-red-100 hover:bg-red-50 py-4"
            >
              <LogOut size={20} /> Logout
            </button>
          </div>
        );
      default:
        return <Dashboard user={profile!} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg font-sans text-slate-900 overflow-x-hidden selection:bg-pink-100 selection:text-pink-600">
      <main className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>
      
      {hasStarted && !['privacy', 'terms', 'cookies', 'log', 'chat', 'library'].includes(activeTab) && (
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      )}

      {hasStarted && ['log', 'chat', 'library'].includes(activeTab) && (
        <div className="fixed bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      )}

      <CookieConsent />
    </div>
  );
}

export default function App() {
  return (
    <FirebaseProvider>
      <MainApp />
    </FirebaseProvider>
  );
}

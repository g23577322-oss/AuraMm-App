/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { UserProfile } from './types';
import { calculatePregnancyStats } from './lib/utils';
import Navigation from './components/Navigation';
import Onboarding from './features/onboarding/Onboarding';
import Dashboard from './features/dashboard/Dashboard';
import DailyLog from './features/log/DailyLog';
import Chat from './features/chat/Chat';
import { LogOut, Loader2 } from 'lucide-react';
import { FirebaseProvider, useFirebase } from './components/FirebaseProvider';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db, logout, handleFirestoreError, OperationType } from './services/firebase';

function MainApp() {
  const { user, profile, loading } = useFirebase();
  const [activeTab, setActiveTab] = useState('dashboard');

  const handleOnboardingComplete = async (data: { name: string; lastPeriodDate: string; uid: string }) => {
    const stats = calculatePregnancyStats(data.lastPeriodDate);
    const newUserProfile: UserProfile = {
      uid: data.uid,
      name: data.name,
      lastPeriodDate: data.lastPeriodDate,
      dueDate: stats.dueDate,
      currentWeek: stats.currentWeek,
      onboarded: true,
      createdAt: new Date().toISOString(), // This will be overridden by serverTimestamp in firestore for better security
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-brand-pink">
        <Loader2 className="animate-spin text-pink-500" size={40} />
      </div>
    );
  }

  if (!user || !profile) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard user={profile} />;
      case 'log':
        return <DailyLog />;
      case 'chat':
        return <Chat />;
      case 'profile':
        return (
          <div className="p-6 space-y-6 max-w-2xl mx-auto">
            <h1 className="text-3xl">Your Profile</h1>
            <div className="card space-y-4">
              <div className="flex justify-between border-b pb-4">
                <span className="text-slate-500">Name</span>
                <span className="font-medium">{profile.name}</span>
              </div>
              <div className="flex justify-between border-b pb-4">
                <span className="text-slate-500">Due Date</span>
                <span className="font-medium">{new Date(profile.dueDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between pb-2">
                <span className="text-slate-500">Current Week</span>
                <span className="font-medium">Week {profile.currentWeek}</span>
              </div>
            </div>
            <button 
              onClick={() => logout()}
              className="btn-secondary w-full flex items-center justify-center gap-2 text-red-500 border-red-100 hover:bg-red-50"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        );
      default:
        return <Dashboard user={profile} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg pb-20">
      <main className="transition-all duration-300">
        {renderContent()}
      </main>
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
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

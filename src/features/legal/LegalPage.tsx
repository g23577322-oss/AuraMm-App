import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, Scale, ScrollText } from 'lucide-react';

interface LegalPageProps {
  onBack: () => void;
  type: 'privacy' | 'terms' | 'cookies';
}

export default function LegalPage({ onBack, type }: LegalPageProps) {
  const content = {
    privacy: {
      title: "Privacy Policy",
      icon: <Shield className="text-pink-500" size={32} />,
      sections: [
        {
          heading: "1. Information We Collect",
          body: "We collect information you provide directly to us, such as your name, estimated due date, and health logs. This data is stored securely in Firebase."
        },
        {
          heading: "2. How We Use Information",
          body: "We use your information to provide personalized pregnancy insights, track your baby's development, and improve the AuraMom experience. We do not sell your personal health data."
        },
        {
          heading: "3. Data Security",
          body: "We implement industry-standard security measures to protect your information. However, no method of transmission over the internet is 100% secure."
        },
        {
          heading: "4. Your Rights",
          body: "You can update or delete your data at any time through your profile settings. You have the right to access the data we hold about you."
        }
      ]
    },
    terms: {
      title: "Terms of Service",
      icon: <Scale className="text-pink-500" size={32} />,
      sections: [
        {
          heading: "1. Use of Service",
          body: "AuraMom is an informational tool. It is NOT a substitute for professional medical advice, diagnosis, or treatment."
        },
        {
          heading: "2. User Accounts",
          body: "You are responsible for maintaining the confidentiality of your account and password."
        },
        {
          heading: "3. Content",
          body: "All content provided on AuraMom is for general informational purposes. Always seek the advice of your physician with any questions regarding a medical condition."
        },
        {
          heading: "4. Modifications",
          body: "We reserve the right to modify or terminate the service for any reason, without notice, at any time."
        }
      ]
    },
    cookies: {
      title: "Cookie Policy",
      icon: <ScrollText className="text-pink-500" size={32} />,
      sections: [
        {
          heading: "1. What are Cookies?",
          body: "Cookies are small text files stored on your device that help us recognize you and provide a better experience."
        },
        {
          heading: "2. How We Use Cookies",
          body: "We use cookies for authentication (keeping you logged in), remembering your preferences, and analyzing how users interact with the app."
        },
        {
          heading: "3. Third-Party Cookies",
          body: "We may use third-party services like Google Analytics or AdSense that may set their own cookies."
        },
        {
          heading: "4. Managing Cookies",
          body: "You can control or delete cookies through your browser settings. However, some features of the app may not function correctly if cookies are disabled."
        }
      ]
    }
  }[type];

  return (
    <div className="min-h-screen bg-brand-bg p-6 pb-32">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 bg-white rounded-full transition-colors text-slate-400 hover:text-pink-500 border border-transparent hover:border-pink-50 shadow-sm"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-3xl font-bold tracking-tight text-slate-800">{content.title}</h1>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card space-y-10 p-10"
        >
          <div className="flex justify-center mb-4">
            <div className="p-5 bg-pink-50 rounded-[2rem]">
              {content.icon}
            </div>
          </div>

          <div className="space-y-8">
            {content.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h2 className="text-xl font-bold text-slate-800">{section.heading}</h2>
                <p className="text-slate-600 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="pt-10 border-t border-slate-100 italic text-sm text-slate-400 text-center">
            Last updated: May 11, 2026
          </div>
        </motion.div>
      </div>
    </div>
  );
}

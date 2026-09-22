/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PortalHome } from './components/PortalHome';
import { WhatsAppChat } from './components/WhatsAppChat';
import { OppoSurveyView } from './components/OppoSurveyView';
import LegacySurvey from './components/legacy/LegacySurvey';
import LegacyProfile from './components/legacy/LegacyProfile';

type ViewMode = 'home' | 'whatsapp' | 'survey_new' | 'survey_legacy' | 'profile';
type SurveyFlow = 'new' | 'legacy';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('home');
  const [activeFlow, setActiveFlow] = useState<SurveyFlow>('legacy');

  // Navigasi dari Menu Utama
  const handleSelectFlow = (flow: SurveyFlow) => {
    setActiveFlow(flow);
    setCurrentView('whatsapp');
  };

  // Navigasi langsung ke link survei
  const handleDirectSurvey = (flow: SurveyFlow) => {
    setActiveFlow(flow);
    if (flow === 'new') {
      setCurrentView('survey_new');
    } else {
      setCurrentView('survey_legacy');
    }
  };

  // Navigasi dari WhatsApp Chat
  const handleStartSurvey = () => {
    if (activeFlow === 'new') {
      setCurrentView('survey_new');
    } else {
      setCurrentView('survey_legacy');
    }
  };

  const handleOpenProfile = () => {
    setCurrentView('profile');
  };

  const handleBackToWhatsApp = () => {
    setCurrentView('whatsapp');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] flex flex-col">
      {/* Konten Halaman dengan Animasi Transisi Halus (Fade & Slide) */}
      <div className="flex-1 w-full relative">
        <AnimatePresence mode="wait">
          {/* 1. Halaman Awal Portal Pilihan */}
          {currentView === 'home' && (
            <motion.div
              key="view-home"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="w-full min-h-full"
            >
              <PortalHome
                onSelectFlow={handleSelectFlow}
                onDirectSurvey={handleDirectSurvey}
              />
            </motion.div>
          )}

          {/* 2. Simulasi WhatsApp Chat (Menerima Pesan & Klik Link) */}
          {currentView === 'whatsapp' && (
            <motion.div
              key={`view-whatsapp-${activeFlow}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="w-full min-h-full"
            >
              <WhatsAppChat
                surveyType={activeFlow}
                onStartSurvey={handleStartSurvey}
                onOpenProfile={handleOpenProfile}
                onBackToHome={handleBackToHome}
              />
            </motion.div>
          )}

          {/* 3. Tampilan Survei Baru (100% Sesuai Screenshot OPPO) */}
          {currentView === 'survey_new' && (
            <motion.div
              key="view-survey-new"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="w-full min-h-full"
            >
              <OppoSurveyView
                onBack={handleBackToWhatsApp}
                onSubmit={(data) => {
                  console.log('Survei Baru Terkirim:', data);
                }}
              />
            </motion.div>
          )}

          {/* 4. Tampilan Survei Lama (5 Pertanyaan dari Repositori GitHub) */}
          {currentView === 'survey_legacy' && (
            <motion.div
              key="view-survey-legacy"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="w-full min-h-full"
            >
              <div className="min-h-screen bg-gray-50 py-6">
                <LegacySurvey onBack={handleBackToWhatsApp} />
              </div>
            </motion.div>
          )}

          {/* 5. Tampilan Profil Kontak Bisnis WhatsApp OPPO */}
          {currentView === 'profile' && (
            <motion.div
              key="view-profile"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="w-full min-h-full"
            >
              <div className="max-w-[480px] mx-auto min-h-screen shadow-md">
                <LegacyProfile onBack={handleBackToWhatsApp} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

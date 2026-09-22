import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';

interface PortalHomeProps {
  onSelectFlow: (flow: 'new' | 'legacy') => void;
  onDirectSurvey?: (flow: 'new' | 'legacy') => void;
}

export const PortalHome: React.FC<PortalHomeProps> = ({
  onSelectFlow,
}) => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#1e293b] flex flex-col justify-between selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Header dengan animasi pulse */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 sm:px-8 py-3.5 sticky top-0 z-20 shadow-xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#00b649] text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-sm animate-pulse-glow">
              OPPO
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                  Portal Edukasi Survei Layanan Pelanggan
                </h1>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  Live
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Simulasi Terpadu Alur WhatsApp &amp; Survei Kepuasan Pelanggan
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-200 transition-colors shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 animate-bounce" />
            <span className="font-medium">Mode Edukasi Aktif</span>
          </div>
        </div>
      </header>

      {/* Main Content dengan Motion & CSS Animations */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#e7f7ed] text-[#008a37] mb-3.5 border border-emerald-200/80 shadow-2xs animate-float">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" /> 
            Pilih Jenis Survei
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-3">
            Simulasi Edukasi Pesan &amp; Pengisian Survei
          </h2>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
            Silakan pilih opsi survei di bawah ini untuk melihat simulasi alur pesan WhatsApp resmi dari OPPO dan membuka survei layanan.
          </p>
        </motion.div>

        {/* 2 Flow Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          {/* Card 1: Survey Pelayanan Sederhana dan Antigores */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border-2 border-[#00b649] p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-50 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                Survey Pelayanan Sederhana dan Antigores
              </h3>
            </div>

            <div>
              <button
                type="button"
                onClick={() => onSelectFlow('new')}
                className="w-full py-4 px-5 rounded-xl bg-[#00b649] hover:bg-[#009c3e] active:scale-[0.98] text-white font-semibold text-base flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Mulai Alur WhatsApp</span>
                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Card 2: Survey Pelayanan Servis RO */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 hover:border-gray-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-gray-100 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none" />

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                Survey Pelayanan Servis RO
              </h3>
            </div>

            <div>
              <button
                type="button"
                onClick={() => onSelectFlow('legacy')}
                className="w-full py-4 px-5 rounded-xl bg-gray-900 hover:bg-gray-800 active:scale-[0.98] text-white font-semibold text-base flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Mulai Alur WhatsApp</span>
                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Info Box */}
        <div className="p-4 rounded-xl bg-white border border-gray-200 text-xs text-gray-600 flex items-center justify-between flex-wrap gap-3 shadow-2xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00b649] shrink-0 animate-badge-glow" />
            <span>Kedua survei terhubung langsung dengan alur resmi layanan pelanggan OPPO.</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-gray-400">
            <span>OPPO Service ID • v2.0</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-4 px-4 text-center text-xs text-gray-500">
        Simulasi Edukasi Layanan Pelanggan OPPO • Semua data dan respons berjalan lokal untuk tujuan pelatihan
      </footer>
    </div>
  );
};

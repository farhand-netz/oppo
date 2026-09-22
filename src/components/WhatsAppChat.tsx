import React from 'react';
import { ChevronLeft, MoreVertical, Paperclip, Mic, Smile, Camera } from 'lucide-react';

interface WhatsAppChatProps {
  onStartSurvey: () => void;
  onOpenProfile: () => void;
  onBackToHome: () => void;
  surveyType: 'new' | 'legacy';
}

const LOGO_URL = "/56a9c6e3093d7e5d7963a4bcd6e10451.jpg";

// Logo Bulat Hitam dengan teks putih OPPO persis seperti tangkapan layar
const OppoAvatar = ({ size = 'sm' }: { size?: 'sm' | 'lg' }) => {
  const [imgError, setImgError] = React.useState(false);

  if (size === 'lg') {
    return (
      <div className="w-20 h-20 rounded-full bg-black mx-auto mb-3 overflow-hidden shadow-xs flex items-center justify-center">
        {!imgError ? (
          <img
            src={LOGO_URL}
            alt="OPPO Service"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover rounded-full"
          />
        ) : (
          <span className="font-extrabold text-[16px] tracking-wider text-white">OPPO</span>
        )}
      </div>
    );
  }

  return (
    <div className="w-10 h-10 rounded-full bg-black shrink-0 overflow-hidden shadow-xs flex items-center justify-center">
      {!imgError ? (
        <img
          src={LOGO_URL}
          alt="OPPO Service"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover rounded-full"
        />
      ) : (
        <span className="font-bold text-[11px] tracking-wider text-white">OPPO</span>
      )}
    </div>
  );
};

// Lencana Centang Biru Terverifikasi WhatsApp
const VerifiedBadge = () => (
  <span className="w-4 h-4 bg-[#1d9bf0] text-white rounded-full inline-flex items-center justify-center shrink-0">
    <svg className="w-2.5 h-2.5 stroke-[3.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  </span>
);

export const WhatsAppChat: React.FC<WhatsAppChatProps> = ({
  onStartSurvey,
  onOpenProfile,
  onBackToHome,
  surveyType,
}) => {
  const surveyUrl = 'https://t.oppo.com/1aStzN';

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-start">
      <div className="w-full max-w-[440px] bg-white min-h-screen flex flex-col justify-between border-x border-gray-100 shadow-sm">
        
        {/* Top Header WhatsApp - Sesuai Persis Tangkapan Layar */}
        <header className="bg-white px-2.5 py-2 flex items-center justify-between sticky top-0 z-20 border-b border-gray-200">
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            {/* Tombol Panah Kembali */}
            <button
              type="button"
              onClick={onBackToHome}
              className="p-1.5 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-gray-700 shrink-0"
              aria-label="Kembali ke Menu"
              title="Kembali ke Menu"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>

            {/* Profile Avatar & Title Info (Bisa diklik untuk melihat profil) */}
            <div 
              onClick={onOpenProfile}
              className="flex items-center gap-2.5 cursor-pointer select-none flex-1 min-w-0"
            >
              <OppoAvatar size="sm" />

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5">
                  <h1 className="text-[16px] font-semibold text-gray-900 leading-tight truncate">
                    OPPO Service
                  </h1>
                  <VerifiedBadge />
                </div>
                <p className="text-[12.5px] text-gray-500 leading-tight">
                  Business Account
                </p>
              </div>
            </div>
          </div>

          {/* Menu Tiga Titik Vertikal di Kanan Header */}
          <button
            type="button"
            className="p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer text-gray-600 shrink-0"
            aria-label="Menu Opsi Lainnya"
          >
            <MoreVertical className="w-5 h-5 text-gray-700" />
          </button>
        </header>

        {/* Chat Feed */}
        <main className="flex-1 px-4 pt-3.5 pb-4 bg-white flex flex-col justify-start overflow-y-auto">
          {/* Today Badge */}
          <div className="flex justify-center mb-4">
            <span className="text-[12px] text-gray-600 bg-[#eef0f3] px-3.5 py-1 rounded-lg font-normal">
              Today
            </span>
          </div>

          {/* Meta Security Info Box */}
          <div className="mb-4">
            <div className="bg-[#d2f8ef] rounded-2xl p-3.5 text-center">
              <p className="text-[13px] text-[#0f4d40] leading-snug">
                This business uses a secure service from Meta to manage this chat. Tap to learn more.
              </p>
            </div>
          </div>

          {/* Business Profile Card */}
          <div className="bg-[#f6f7f9] rounded-2xl p-6 text-center mb-4">
            <button
              type="button"
              onClick={onOpenProfile}
              className="focus:outline-none cursor-pointer block mx-auto"
            >
              <OppoAvatar size="lg" />
            </button>

            <div className="flex items-center justify-center gap-1.5 mb-1.5">
              <h2 className="text-[17px] font-bold text-gray-900">OPPO Service</h2>
              <VerifiedBadge />
            </div>

            <p className="text-[12.5px] text-gray-500 leading-relaxed max-w-[280px] mx-auto">
              Phone number from Malaysia • Business account • Joined in the last month
            </p>
          </div>

          {/* Announcement text */}
          <p className="text-[13px] text-gray-700 text-center my-2 px-2">
            You are getting offers and announcements from this business.
          </p>

          {/* Stop and Profile Buttons */}
          <div className="grid grid-cols-2 gap-3 my-3">
            <button
              type="button"
              className="py-2.5 px-4 rounded-xl bg-[#eef0f3] hover:bg-[#e4e7eb] text-gray-900 font-semibold text-[13.5px] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>✋</span>
              <span>Stop</span>
            </button>

            <button
              type="button"
              onClick={onOpenProfile}
              className="py-2.5 px-4 rounded-xl bg-[#eef0f3] hover:bg-[#e4e7eb] text-gray-900 font-semibold text-[13.5px] flex items-center justify-center transition-colors cursor-pointer"
            >
              Profile
            </button>
          </div>

          {/* Incoming Message Bubble */}
          <div className="my-2">
            <div className="bg-[#f6f7f9] rounded-2xl p-4 text-left">
              <p className="text-[13.5px] text-gray-900 leading-relaxed mb-2.5">
                Untuk Pengguna : Terimakasih atas kepercayaannya di OPPO Servis. Untuk meningkatkan pelayanan kami, kami mengundang anda untuk berpartisipasi mengisi survey layanan ini.{' '}
                <button
                  type="button"
                  onClick={onStartSurvey}
                  className="text-[#0c66e4] underline font-normal cursor-pointer break-all inline hover:text-[#094bb0] transition-colors"
                >
                  {surveyUrl}
                </button>
                {' '}Terimakasih
              </p>

              <span className="text-[12px] text-gray-400 block">
                13.53
              </span>
            </div>
          </div>
        </main>

        {/* WhatsApp Bottom Input Bar */}
        <footer className="bg-white border-t border-gray-100 px-3 py-2.5">
          <div className="flex items-center gap-2.5">
            <button type="button" className="text-gray-500 hover:text-gray-700 cursor-pointer" aria-label="Emoji">
              <Smile className="w-6 h-6" />
            </button>
            <div className="flex-1 bg-[#f0f2f5] rounded-full px-4 py-2 text-[14px] text-gray-400 select-none">
              Message
            </div>
            <button type="button" className="text-gray-500 hover:text-gray-700 cursor-pointer" aria-label="Attach">
              <Paperclip className="w-5 h-5" />
            </button>
            <button type="button" className="text-gray-500 hover:text-gray-700 cursor-pointer" aria-label="Camera">
              <Camera className="w-5 h-5" />
            </button>
            <button type="button" className="w-9 h-9 rounded-full bg-[#00a884] text-white flex items-center justify-center shrink-0 hover:bg-[#008f70] transition-colors cursor-pointer shadow-2xs" aria-label="Voice note">
              <Mic className="w-5 h-5" />
            </button>
          </div>

          {/* Home indicator bar (garis bawah layar smartphone) */}
          <div className="w-32 h-1 bg-gray-300 rounded-full mx-auto mt-2" />
        </footer>

      </div>
    </div>
  );
};

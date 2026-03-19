import { ChevronLeft, MoreVertical, Paperclip, Mic, Check, Smile, Camera } from 'lucide-react';

interface LandingProps {
  onStartSurvey: () => void;
  onOpenProfile: () => void;
}

// 👇 GANTI URL ini dengan URL gambar logo Anda
const LOGO_URL = "https://placehold.co/64x64/1a1a1a/ffffff?text=OPPO";

export default function Landing({ onStartSurvey, onOpenProfile }: LandingProps) {
  const currentTime = new Date().toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  return (
    <div className="min-h-screen w-full bg-white flex flex-col">
      {/* Chat Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <ChevronLeft className="w-6 h-6 text-gray-600" />
          {/* Profile picture - Header (clickable) */}
          <button onClick={onOpenProfile} className="rounded-full overflow-hidden focus:outline-none">
            <img
              src={LOGO_URL}
              alt="OPPO Service"
              className="w-10 h-10 rounded-full object-cover"
            />
          </button>
          <div>
            <div className="flex items-center gap-1.5">
              <h3 className="text-sm font-semibold text-gray-900">OPPO Service</h3>
              <Check className="w-5 h-5 text-blue-500 fill-blue-500 rounded-full bg-blue-500 text-white p-0.5" />
            </div>
            <p className="text-xs text-gray-500">Business Account</p>
          </div>
        </div>
        <MoreVertical className="w-5 h-5 text-gray-600" />
      </div>

      {/* Chat Content */}
      <div className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-2xl mx-auto">
          {/* Date separator */}
          <div className="flex justify-center py-3">
            <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Today</span>
          </div>

          {/* Meta Security Message */}
          <div className="px-4 py-3">
            <div className="bg-teal-100 rounded-lg p-3 text-center">
              <p className="text-xs text-teal-900">
                This business uses a secure service from Meta to manage this chat. Tap to learn more.
              </p>
            </div>
          </div>

          {/* OPPO Service Card */}
          <div className="px-4 py-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              {/* Profile picture - Card (large, clickable) */}
              <button onClick={onOpenProfile} className="rounded-full overflow-hidden mx-auto mb-2 block focus:outline-none">
                <img
                  src={LOGO_URL}
                  alt="OPPO Service"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </button>
              <div className="flex items-center justify-center gap-1.5">
                <h2 className="text-sm font-bold text-gray-900">OPPO Service</h2>
                <Check className="w-5 h-5 text-blue-500 fill-blue-500 rounded-full bg-blue-500 text-white p-0.5" />
              </div>
              <p className="text-xs text-gray-600 mb-3">
                Phone number from Malaysia • Business account • Joined in the last month
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="px-4 py-2">
            <p className="text-xs text-gray-700 text-center mb-4">
              You are getting offers and announcements from this business.
            </p>
          </div>

          {/* Buttons */}
          <div className="px-4 pb-3 flex gap-3">
            <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-900 text-xs font-semibold rounded-lg hover:bg-gray-200 transition">
              ✋ Stop
            </button>
            <button
              onClick={onOpenProfile}
              className="flex-1 px-4 py-2 bg-gray-100 text-gray-900 text-xs font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Profile
            </button>
          </div>

          {/* Survey Message */}
          <div className="px-4 py-3 pb-8">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-xs text-gray-700 leading-relaxed">
                Untuk Pengguna : Terimakasih atas kepercayaannya di OPPO Servis. Untuk meningkatkan pelayanan kami, kami mengundang anda untuk berpartisipasi mengisi survey layanan ini.{' '}
                <button
                  onClick={onStartSurvey}
                  className="text-blue-500 font-semibold hover:text-blue-700 transition underline inline"
                >
                  https://t.oppo.com/1aStzN
                </button>
                {' '}Terimakasih
              </p>
              <p className="text-xs text-gray-500 mt-2">{currentTime}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="bg-white border-t px-4 py-3 flex items-center gap-3 sticky bottom-0">
        <Smile className="w-5 h-5 text-gray-400 flex-shrink-0" />
        <input
          type="text"
          placeholder="Message"
          className="flex-1 text-sm bg-gray-100 rounded-full px-4 py-2.5 outline-none text-gray-700 placeholder-gray-500"
          disabled
        />
        <Paperclip className="w-5 h-5 text-gray-400 flex-shrink-0" />
        <Camera className="w-5 h-5 text-gray-400 flex-shrink-0" />
        <Mic className="w-5 h-5 text-green-500 flex-shrink-0" />
      </div>
    </div>
  );
}

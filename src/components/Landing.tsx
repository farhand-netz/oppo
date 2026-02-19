import { useState } from 'react';
import { ChevronLeft, MoreVertical, MessageCircle, Paperclip, Mic } from 'lucide-react';

interface LandingProps {
  onStartSurvey: () => void;
}

export default function Landing({ onStartSurvey }: LandingProps) {
  const [activeTab, setActiveTab] = useState('chat');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Phone Frame */}
      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-sm bg-black rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900">
          {/* Status Bar */}
          <div className="bg-gray-900 px-6 py-2 flex justify-between items-center text-white text-xs">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="w-4 h-3 border border-white rounded-sm"></div>
              <div className="w-4 h-3 border border-white rounded-sm"></div>
              <div className="w-4 h-3 border border-white rounded-sm bg-white"></div>
            </div>
          </div>

          {/* Chat Header */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-b">
            <div className="flex items-center gap-3">
              <ChevronLeft className="w-6 h-6 text-gray-600" />
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">O</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">OPPO Service</h3>
                <p className="text-xs text-gray-500">Business Account</p>
              </div>
            </div>
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </div>

          {/* Chat Content */}
          <div className="bg-white h-96 overflow-y-auto">
            {/* Date separator */}
            <div className="flex justify-center py-3">
              <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Yesterday</span>
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
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-2xl font-bold">O</span>
                </div>
                <h2 className="text-sm font-bold text-gray-900 mb-1">OPPO Service</h2>
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
              <button className="flex-1 px-4 py-2 bg-gray-100 text-gray-900 text-xs font-semibold rounded-lg hover:bg-gray-200 transition">
                Profile
              </button>
            </div>

            {/* Survey Message */}
            <div className="px-4 py-3">
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
                <span className="text-xs text-gray-500 mt-2 block text-right">18:10</span>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="bg-white border-t px-4 py-3 flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-gray-400" />
            <Paperclip className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Message"
              className="flex-1 text-sm bg-gray-100 rounded-full px-3 py-2 outline-none text-gray-700 placeholder-gray-500"
              disabled
            />
            <Mic className="w-5 h-5 text-green-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

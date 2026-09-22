import { ChevronLeft, MoreVertical, Share2, FileText, UserPlus, Info, Image, Bell, Eye, Lock, Shield, Globe, Phone, Users, Ban, Flag } from 'lucide-react';

interface ProfileProps {
  onBack: () => void;
}

const LOGO_URL = "/56a9c6e3093d7e5d7963a4bcd6e10451.jpg";

export default function Profile({ onBack }: ProfileProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button onClick={onBack}>
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <span className="text-base font-semibold text-gray-900">Contact info</span>
        </div>
        <MoreVertical className="w-5 h-5 text-gray-600" />
      </div>

      {/* Profile Header Section */}
      <div className="flex flex-col items-center pt-8 pb-6 px-4 border-b">
        {/* Profile Image */}
        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow-md">
          <img
            src={LOGO_URL}
            alt="OPPO Service"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Verified */}
        <div className="flex items-center gap-2 mb-1">
          <h2 className="text-xl font-bold text-gray-900">OPPO Service</h2>
          {/* Blue verified checkmark */}
          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Phone Number */}
        <p className="text-sm text-gray-500 mb-5">+60 3-7660 9322</p>

        {/* Share Button */}
        <button className="flex flex-col items-center gap-1 px-8 py-3 border border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
          <Share2 className="w-5 h-5 text-green-600" />
          <span className="text-xs text-gray-700 font-medium">Share</span>
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 divide-y divide-gray-100">

        {/* Add notes */}
        <button className="w-full flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition-colors text-left">
          <div className="w-10 h-10 flex items-center justify-center">
            <FileText className="w-5 h-5 text-gray-500" />
          </div>
          <span className="text-sm text-gray-800">Add notes</span>
        </button>

        {/* Add to contacts */}
        <button className="w-full flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition-colors text-left">
          <div className="w-10 h-10 flex items-center justify-center">
            <UserPlus className="w-5 h-5 text-gray-500" />
          </div>
          <span className="text-sm text-gray-800">Add to contacts</span>
        </button>

        {/* Business Account */}
        <div className="flex items-start gap-4 px-4 py-4">
          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
            <Info className="w-5 h-5 text-gray-500" />
          </div>
          <div>
            <p className="text-sm text-gray-800 font-medium">Business Account</p>
            <p className="text-xs text-gray-500 mt-0.5">This account uses WhatsApp Business</p>
          </div>
        </div>

        {/* Media, links, and docs */}
        <button className="w-full flex items-center justify-between px-4 py-4 hover:bg-gray-50 transition-colors text-left">
          <span className="text-sm text-gray-800">Media, links, and docs</span>
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-sm">1</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        {/* Notifications */}
        <button className="w-full flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition-colors text-left">
          <div className="w-10 h-10 flex items-center justify-center">
            <Bell className="w-5 h-5 text-gray-500" />
          </div>
          <span className="text-sm text-gray-800">Notifications</span>
        </button>

        {/* Media visibility */}
        <button className="w-full flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition-colors text-left">
          <div className="w-10 h-10 flex items-center justify-center">
            <Image className="w-5 h-5 text-gray-500" />
          </div>
          <span className="text-sm text-gray-800">Media visibility</span>
        </button>

        {/* Chat lock */}
        <div className="flex items-center gap-4 px-4 py-4">
          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
            <Lock className="w-5 h-5 text-gray-500" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-800">Chat lock</p>
            <p className="text-xs text-gray-500 mt-0.5">Lock and hide this chat on this device.</p>
          </div>
          {/* Toggle */}
          <div className="w-12 h-6 bg-gray-200 rounded-full relative flex-shrink-0">
            <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
          </div>
        </div>

        {/* Security */}
        <div className="flex items-start gap-4 px-4 py-4">
          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-gray-500" />
          </div>
          <div>
            <p className="text-sm text-gray-800">Security</p>
            <p className="text-xs text-gray-500 mt-0.5">
              This business uses a secure service from Meta to manage this chat.{' '}
              <span className="text-green-600 font-medium">Learn more</span>
            </p>
          </div>
        </div>

        {/* Translate messages */}
        <div className="flex items-center gap-4 px-4 py-4">
          <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
            <Globe className="w-5 h-5 text-gray-500" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-gray-800">Translate messages</p>
          </div>
          {/* Toggle */}
          <div className="w-12 h-6 bg-gray-200 rounded-full relative flex-shrink-0">
            <div className="w-5 h-5 bg-white rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
          </div>
        </div>

        {/* Phone number section */}
        <div className="px-4 py-4">
          <p className="text-xs text-gray-500 mb-2">Phone number</p>
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-800">+60 3-7660 9322</p>
            <div className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
          </div>
        </div>

        {/* No groups in common */}
        <div className="px-4 py-3">
          <p className="text-xs text-gray-500 mb-3">No groups in common</p>
          <button className="w-full flex items-center gap-4 hover:bg-gray-50 transition-colors text-left py-2 rounded-lg">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="text-sm text-gray-800">Create group with OPPO Service</span>
          </button>
        </div>

        {/* Block business */}
        <button className="w-full flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition-colors text-left">
          <div className="w-10 h-10 flex items-center justify-center">
            <Ban className="w-5 h-5 text-red-500" />
          </div>
          <span className="text-sm text-red-500 font-medium">Block business</span>
        </button>

        {/* Report business */}
        <button className="w-full flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition-colors text-left">
          <div className="w-10 h-10 flex items-center justify-center">
            <Flag className="w-5 h-5 text-red-500" />
          </div>
          <span className="text-sm text-red-500 font-medium">Report business</span>
        </button>

        {/* Bottom padding & Home bar */}
        <div className="py-4">
          <div className="w-32 h-1 bg-gray-300 rounded-full mx-auto" />
        </div>
      </div>
    </div>
  );
}

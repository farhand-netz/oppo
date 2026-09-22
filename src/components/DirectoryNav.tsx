import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Folder, 
  ChevronRight, 
  Copy, 
  Check, 
  Globe, 
  Home, 
  MessageSquare, 
  FileText, 
  User,
  ArrowUpRight
} from 'lucide-react';

export type CurrentDirectoryView = 'home' | 'whatsapp' | 'survey_new' | 'survey_legacy' | 'profile';

interface DirectoryNavProps {
  currentView: CurrentDirectoryView;
  activeFlow: 'new' | 'legacy';
  onNavigate: (view: CurrentDirectoryView, flow?: 'new' | 'legacy') => void;
}

export const DirectoryNav: React.FC<DirectoryNavProps> = ({
  currentView,
  activeFlow,
  onNavigate,
}) => {
  const [copied, setCopied] = useState(false);

  // Alamat tautan survei aktif
  const activeUrl = activeFlow === 'new' 
    ? 'https://t.oppo.com/survey-pelayanan' 
    : 'https://t.oppo.com/1aStzN';

  // Path direktori aktif
  const getPathSegments = () => {
    const segments: Array<{
      id: CurrentDirectoryView;
      label: string;
      icon: React.ComponentType<{ className?: string }>;
      path: string;
    }> = [
      { id: 'home', label: 'Portal', icon: Home, path: '/' },
    ];

    if (currentView === 'whatsapp') {
      segments.push({
        id: 'whatsapp' as const,
        label: `WhatsApp (${activeFlow === 'new' ? 'Skenario 1' : 'Skenario 2'})`,
        icon: MessageSquare,
        path: `/whatsapp/${activeFlow}`,
      });
    } else if (currentView === 'survey_new') {
      segments.push({
        id: 'whatsapp' as const,
        label: 'WhatsApp (Skenario 1)',
        icon: MessageSquare,
        path: '/whatsapp/new',
      });
      segments.push({
        id: 'survey_new' as const,
        label: 'Survei Sederhana & Antigores',
        icon: FileText,
        path: '/survey/sederhana',
      });
    } else if (currentView === 'survey_legacy') {
      segments.push({
        id: 'whatsapp' as const,
        label: 'WhatsApp (Skenario 2)',
        icon: MessageSquare,
        path: '/whatsapp/legacy',
      });
      segments.push({
        id: 'survey_legacy' as const,
        label: 'Survei Servis RO',
        icon: FileText,
        path: '/survey/servis-ro',
      });
    } else if (currentView === 'profile') {
      segments.push({
        id: 'whatsapp' as const,
        label: `WhatsApp (${activeFlow === 'new' ? 'Skenario 1' : 'Skenario 2'})`,
        icon: MessageSquare,
        path: `/whatsapp/${activeFlow}`,
      });
      segments.push({
        id: 'profile' as const,
        label: 'Profil Bisnis OPPO',
        icon: User,
        path: '/profil/oppo-service',
      });
    }

    return segments;
  };

  const segments = getPathSegments();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(activeUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-white/95 backdrop-blur-md border-b border-gray-200/90 text-xs px-3 sm:px-6 py-2 sticky top-0 z-40 shadow-xs transition-all duration-300">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        {/* 1. Direktori Breadcrumbs */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none">
          <span className="flex items-center gap-1 text-gray-400 font-semibold uppercase tracking-wider text-[10px] shrink-0 mr-1">
            <Folder className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">Direktori:</span>
          </span>

          {segments.map((seg, idx) => {
            const isLast = idx === segments.length - 1;
            const Icon = seg.icon;
            return (
              <React.Fragment key={seg.path}>
                <button
                  type="button"
                  onClick={() => onNavigate(seg.id, activeFlow)}
                  className={`flex items-center gap-1.5 px-2 py-1 rounded-md transition-all duration-200 cursor-pointer text-xs shrink-0 ${
                    isLast
                      ? 'bg-emerald-50 text-emerald-800 font-semibold shadow-2xs'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  title={`Menuju ke ${seg.label}`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isLast ? 'text-emerald-600' : 'text-gray-500'}`} />
                  <span>{seg.label}</span>
                </button>
                {!isLast && <ChevronRight className="w-3.5 h-3.5 text-gray-300 shrink-0" />}
              </React.Fragment>
            );
          })}
        </div>

        {/* 2. Alamat Link (URL Simulator & Copy Action) */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center bg-gray-50 border border-gray-200 hover:border-emerald-300 px-2.5 py-1 rounded-lg text-[11px] text-gray-700 transition-colors shadow-2xs max-w-full">
            <Globe className="w-3.5 h-3.5 text-emerald-600 mr-1.5 shrink-0" />
            <span className="text-gray-400 font-mono text-[10px] mr-1 hidden md:inline">Alamat Link:</span>
            <span className="font-mono text-gray-800 truncate max-w-[150px] sm:max-w-[210px] select-all">
              {activeUrl}
            </span>
            <button
              type="button"
              onClick={handleCopyLink}
              className="ml-2 pl-1.5 border-l border-gray-200 text-gray-500 hover:text-emerald-700 transition-colors cursor-pointer flex items-center gap-1 font-medium"
              title="Salin alamat tautan ini"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span className="hidden sm:inline">Salin</span>
                </>
              )}
            </button>
          </div>

          {currentView === 'home' && (
            <button
              type="button"
              onClick={() => onNavigate(activeFlow === 'new' ? 'survey_new' : 'survey_legacy', activeFlow)}
              className="px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-[11px] flex items-center gap-1 transition-all duration-200 cursor-pointer shadow-2xs hover:scale-102"
              title="Langsung buka survei tanpa lewat WhatsApp"
            >
              <span>Buka Link</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';

interface Question1Props {
  value?: number;
  onChange: (value: number) => void;
}

// Emoticon Hijau Senyum (Rating 9-10) sama persis dengan survei baru
const GreenSmileIcon = ({ className = 'w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={`${className} text-[#00b649] transition-transform pointer-events-none select-none`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="8.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="15.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
    <path d="M7.8 14.2c1.2 2 3.1 2.6 4.2 2.6s3-.6 4.2-2.6" />
  </svg>
);

// Emoticon Kuning Datar/Netral (Rating 1-8) sama persis dengan survei baru
const YellowNeutralIcon = ({ className = 'w-[28px] h-[28px] sm:w-[32px] sm:h-[32px]' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={`${className} text-[#f59e0b] transition-transform pointer-events-none select-none`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="8.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="15.5" cy="9.5" r="1" fill="currentColor" stroke="none" />
    <line x1="8" y1="15" x2="16" y2="15" />
  </svg>
);

export default function Question1({ value, onChange }: Question1Props) {
  const currentRating = value !== undefined ? value : null;
  const isHighRating = currentRating !== null && currentRating >= 9;

  return (
    <div>
      <div className="flex items-start gap-2 mb-4">
        <span className="text-red-500 font-bold text-lg mt-1">*</span>
        <div className="flex-1">
          <h3 className="text-gray-900 font-semibold text-base">
            1. Sejauh mana tingkat kepuasan Anda terhadap pengalaman layanan kali ini?
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Silakan berikan penilaian dari 1-10, di mana 1 berarti sangat tidak puas dan 10 berarti sangat puas.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl px-3 py-4 border border-gray-100 shadow-2xs">
        {/* Label baris: Sangat tidak puas vs Sangat puas (Sesuai dengan project survei baru) */}
        <div className="flex items-center justify-between text-[13px] sm:text-[13.5px] mb-3 px-0.5 select-none">
          <span className="text-[#4b5563]">Sangat tidak puas</span>
          <span
            className={`transition-colors duration-200 ${
              isHighRating
                ? 'text-[#00b649] font-medium'
                : 'text-[#4b5563]'
            }`}
          >
            Sangat puas
          </span>
        </div>

        {/* Emoticon Rating 1 - 10 (Sama persis dengan project survei baru) */}
        <div className="flex items-center justify-between gap-1 sm:gap-1.5 select-none">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
            return (
              <button
                key={num}
                type="button"
                onClick={() => onChange(num)}
                className="w-[29px] h-[29px] sm:w-[33px] sm:h-[33px] flex items-center justify-center transition-all duration-150 cursor-pointer active:scale-90 hover:scale-105 focus:outline-none"
                aria-label={`Beri nilai ${num}`}
                title={`Rating ${num}`}
              >
                {currentRating === null ? (
                  <span className="pointer-events-none w-full h-full rounded-full bg-[#e5e7eb] text-[#4b5563] text-[13px] sm:text-[14px] flex items-center justify-center hover:bg-[#dcdfe3] transition-colors">
                    {num}
                  </span>
                ) : num <= currentRating ? (
                  isHighRating ? (
                    <GreenSmileIcon />
                  ) : (
                    <YellowNeutralIcon />
                  )
                ) : (
                  <span className="pointer-events-none w-full h-full rounded-full bg-[#e5e7eb] text-[#4b5563] text-[13px] sm:text-[14px] flex items-center justify-center hover:bg-[#dcdfe3] transition-colors">
                    {num}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Indikator nilai yang telah dipilih */}
        {value !== undefined && (
          <div className="mt-3.5 pt-2.5 border-t border-gray-200/80 flex items-center justify-between text-xs text-gray-500">
            <span>
              Nilai terpilih:{' '}
              <strong className={value >= 9 ? 'text-[#00b649]' : 'text-[#f59e0b]'}>
                {value} / 10
              </strong>
            </span>
            <span className="text-[11px] text-gray-400">
              {value >= 9 ? 'Kepuasan Maksimal' : 'Perlu Peningkatan'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

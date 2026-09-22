import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Check, ChevronLeft } from 'lucide-react';

interface OppoSurveyViewProps {
  onRatingSelect?: (rating: number) => void;
  onSubmit?: (data: { rating: number; aspects: string[]; customFeedback?: string }) => void;
  onBack?: () => void;
}

// Emoticon Hijau Senyum (Rating 9-10)
const GreenSmileIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-[28px] h-[28px] sm:w-[31px] sm:h-[31px] text-[#00b649] transition-transform pointer-events-none select-none"
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

// Emoticon Kuning Datar/Netral (Rating 1-8)
const YellowNeutralIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-[28px] h-[28px] sm:w-[31px] sm:h-[31px] text-[#f59e0b] transition-transform pointer-events-none select-none"
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

// Pilihan untuk Kepuasan (Rating 9-10)
const SATISFACTION_OPTIONS = [
  'Proaktif menjelaskan karakteristik pelindung layar atau manfaat layanan pembaruan perangkat',
  'Hasil pemasangan pelindung layar baik',
  'Sikap petugas ramah',
  'Proaktif menawarkan layanan pembersihan & perawatan',
  'Lainnya',
];

// Pilihan untuk Perbaikan / Evaluasi (Rating 1-8)
const IMPROVEMENT_OPTIONS = [
  'Harap staf lebih ramah',
  'Keterampilan pemasangan pelindung layar perlu ditingkatkan',
  'Setelah dipasang, kecepatan buka kunci layar melambat',
  'Kualitas/tekstur pelindung layar kurang baik',
  'Lainnya',
];

export const OppoSurveyView: React.FC<OppoSurveyViewProps> = ({
  onRatingSelect,
  onSubmit,
  onBack,
}) => {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedAspects, setSelectedAspects] = useState<string[]>([]);
  const [otherText, setOtherText] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Status rating aktif berdasarkan nilai yang dipilih
  const isHighRating = selectedRating !== null && selectedRating >= 9;
  const isHighRatingSelected = isHighRating;

  const handleSelectRating = (num: number) => {
    if (selectedRating !== num) {
      setSelectedRating(num);
      setSelectedAspects([]); // Reset aspek terpilih saat rating berganti
    }
    setValidationError(null);
    if (onRatingSelect) {
      onRatingSelect(num);
    }
  };

  const toggleAspect = (option: string) => {
    setValidationError(null);
    if (selectedAspects.includes(option)) {
      setSelectedAspects(selectedAspects.filter((item) => item !== option));
    } else {
      if (selectedAspects.length >= 2) {
        setValidationError('Paling banyak hanya dapat memilih 2 pilihan.');
        return;
      }
      setSelectedAspects([...selectedAspects, option]);
    }
  };

  const handleKirim = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRating === null) {
      setValidationError('Silakan berikan penilaian pada pertanyaan nomor 1 terlebih dahulu.');
      return;
    }
    if (selectedAspects.length === 0) {
      setValidationError('Paling sedikit dipilih 1 pilihan pada pertanyaan nomor 2.');
      return;
    }

    setSubmitted(true);
    if (onSubmit) {
      onSubmit({
        rating: selectedRating,
        aspects: selectedAspects,
        customFeedback: otherText,
      });
    }
  };

  const handleReset = () => {
    setSelectedRating(null);
    setSelectedAspects([]);
    setOtherText('');
    setSubmitted(false);
    setValidationError(null);
  };

  const currentOptions = isHighRatingSelected ? SATISFACTION_OPTIONS : IMPROVEMENT_OPTIONS;

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-[#222222] flex flex-col items-center justify-start sm:py-6 px-0 sm:px-4">
      {/* Back Navigation Bar if onBack is active */}
      {onBack && (
        <div className="w-full max-w-[440px] bg-white border-b border-gray-100 px-3 py-2 flex items-center justify-between text-xs text-gray-700 sm:rounded-t-2xl sm:border sm:border-b-0 sm:border-gray-200/80 sticky top-0 z-30 shadow-xs">
          <button
            type="button"
            onClick={onBack}
            className="p-1 -ml-1 text-gray-700 hover:text-gray-950 rounded-full hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Kembali"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-[11px] text-gray-400 font-medium">Survei OPPO</span>
        </div>
      )}

      {/* Main Survey Card Container */}
      <main
        id="oppo-survey-card"
        className={`w-full bg-white transition-all duration-200 max-w-[440px] ${
          onBack ? 'sm:rounded-b-2xl' : 'sm:rounded-2xl'
        } sm:shadow-md sm:border sm:border-gray-200/80 min-h-screen sm:min-h-auto overflow-hidden flex flex-col`}
      >
        <div className="px-5 pt-8 pb-10 flex-1 flex flex-col">
          {/* Header Title: Survey Layanan OPPO */}
          <h1
            id="survey-title"
            className="text-[19px] sm:text-[20px] font-semibold text-center text-[#222222] tracking-normal mb-5"
          >
            Survey Layanan OPPO
          </h1>

          {/* Intro Description */}
          <p
            id="survey-intro"
            className="text-[14px] leading-[1.65] text-[#333333] text-left mb-6"
          >
            Terima kasih atas kepercayaan Anda terhadap layanan OPPO. Untuk
            memberikan pengalaman layanan yang lebih baik, kami dengan hormat
            mengundang Anda untuk berpartisipasi dalam survei ini. Kami sangat
            menghargai pendapat Anda dan akan menjaga kerahasiaan isi survei
            secara ketat.
          </p>

          {/* Green Divider Line */}
          <div
            id="survey-green-divider"
            className="w-full h-[2.5px] bg-[#00b649] mb-8"
            aria-hidden="true"
          />

          {!submitted ? (
            <form onSubmit={handleKirim} className="flex flex-col flex-1">
              {/* Question 1 */}
              <div id="survey-question-1" className="mb-4">
                <p className="text-[14.5px] sm:text-[15px] font-medium leading-[1.6] text-[#222222]">
                  <span className="text-[#e11d48] font-semibold mr-1">*</span>
                  1. Sejauh mana tingkat kepuasan Anda terhadap pengalaman
                  layanan kali ini? Silakan berikan penilaian dari 1–10, di mana
                  1 berarti sangat tidak puas dan 10 berarti sangat puas.
                </p>
              </div>

              {/* Rating Scale Labels */}
              <div
                id="rating-labels"
                className="flex items-center justify-between text-[13.5px] mb-3 px-0.5 select-none"
              >
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

              {/* Rating Emoticons / Circles (1 to 10) */}
              <div
                id="rating-options-container"
                className="flex items-center justify-between gap-1 sm:gap-1.5 mb-8 select-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                  return (
                    <button
                      key={num}
                      id={`rating-btn-${num}`}
                      type="button"
                      onClick={() => handleSelectRating(num)}
                      className="w-[29px] h-[29px] sm:w-[32px] sm:h-[32px] flex items-center justify-center transition-all duration-150 cursor-pointer active:scale-90 hover:scale-105 focus:outline-none"
                      aria-label={`Beri nilai ${num}`}
                    >
                      {selectedRating === null ? (
                        <span className="pointer-events-none w-full h-full rounded-full bg-[#e5e7eb] text-[#4b5563] text-[13.5px] sm:text-[14px] flex items-center justify-center hover:bg-[#dcdfe3]">
                          {num}
                        </span>
                      ) : num <= selectedRating ? (
                        isHighRating ? (
                          <GreenSmileIcon />
                        ) : (
                          <YellowNeutralIcon />
                        )
                      ) : (
                        <span className="pointer-events-none w-full h-full rounded-full bg-[#e5e7eb] text-[#4b5563] text-[13.5px] sm:text-[14px] flex items-center justify-center hover:bg-[#dcdfe3]">
                          {num}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Question 2: Muncul ketika angka rating diklik */}
              <AnimatePresence>
                {selectedRating !== null && (
                  <motion.div
                    id="survey-question-2-container"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden mb-6"
                  >
                    {/* Header Pertanyaan 2 */}
                    <div id="survey-question-2" className="mb-2.5">
                      <p className="text-[14.5px] sm:text-[15px] font-medium leading-[1.6] text-[#222222]">
                        <span className="text-[#e11d48] font-semibold mr-1">*</span>
                        {isHighRatingSelected ? (
                          <>
                            2. Terima kasih atas kepuasan Anda. Boleh kami tahu,
                            aspek apa dari pengalaman layanan kali ini yang
                            menurut Anda paling memuaskan?
                          </>
                        ) : (
                          <>
                            2. Terima kasih atas penilaian Anda. Boleh kami tahu,
                            aspek apa dari pengalaman layanan kali ini yang
                            menurut Anda masih perlu diperbaiki atau yang Anda
                            harap OPPO bisa lakukan lebih baik?
                          </>
                        )}
                      </p>
                    </div>

                    {/* Sub-instruksi Pilihan */}
                    <div className="flex items-center flex-wrap gap-x-2 text-[13px] mb-4">
                      <span className="text-[#f43f5e]">
                        Paling sedikit dipilih 1 Pilihan
                      </span>
                      <span className="text-[#00b649]">
                        Paling banyak dipilih 2 Pilihan
                      </span>
                    </div>

                    {/* Daftar Opsi Checkbox */}
                    <div className="space-y-3.5 mb-2">
                      {currentOptions.map((option, idx) => {
                        const isChecked = selectedAspects.includes(option);
                        return (
                          <label
                            key={idx}
                            id={`option-label-${idx}`}
                            onClick={() => toggleAspect(option)}
                            className="flex items-start gap-3 cursor-pointer select-none group"
                          >
                            {/* Checkbox Rounded Rectangle khas OPPO */}
                            <div
                              className={`w-[19px] h-[19px] mt-0.5 rounded-[4px] border flex items-center justify-center transition-colors shrink-0 ${
                                isChecked
                                  ? 'bg-[#00b649] border-[#00b649] text-white'
                                  : 'bg-white border-gray-300 group-hover:border-gray-400'
                              }`}
                            >
                              {isChecked && (
                                <Check className="w-3.5 h-3.5 stroke-[3]" />
                              )}
                            </div>
                            <span className="text-[13.5px] sm:text-[14px] leading-[1.55] text-[#333333]">
                              {option}
                            </span>
                          </label>
                        );
                      })}
                    </div>

                    {/* Input tambahan jika opsi 'Lainnya' dipilih */}
                    {selectedAspects.includes('Lainnya') && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 pl-8"
                      >
                        <input
                          type="text"
                          id="input-lainnya"
                          value={otherText}
                          onChange={(e) => setOtherText(e.target.value)}
                          placeholder="Tuliskan aspek lainnya di sini..."
                          className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-[5px] focus:outline-none focus:border-[#00b649]"
                        />
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Validation Warning Notice */}
              <AnimatePresence>
                {validationError && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="mb-4 p-2.5 rounded-[6px] bg-[#fff1f2] border border-[#fecdd3] text-[#e11d48] text-xs text-center font-medium"
                  >
                    {validationError}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button "Kirim" */}
              <button
                id="btn-kirim"
                type="submit"
                className="w-full py-3 px-4 rounded-[6px] bg-[#00b649] hover:bg-[#00a341] active:bg-[#00913a] text-white text-[15.5px] font-medium text-center shadow-xs transition-colors cursor-pointer mb-6"
              >
                Kirim
              </button>

              {/* Disclaimer / Privacy Policy Note */}
              <p
                id="survey-privacy-notice"
                className="text-[13px] leading-[1.65] text-[#333333] text-left"
              >
                Setiap informasi pribadi yang Anda berikan dalam survei ini tidak
                akan digunakan untuk tujuan lain selain penelitian pengguna dan
                survei. Dengan mengklik &quot;Kirim&quot;, Anda menyetujui
                Kebijakan Perlindungan Informasi Pribadi OPPO.
              </p>
            </form>
          ) : (
            /* Submission Confirmation Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center justify-center text-center flex-1"
            >
              <div className="w-16 h-16 rounded-full bg-[#eefaf2] text-[#00b649] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="text-xl font-semibold text-[#222222] mb-2">
                Terima Kasih!
              </h2>
              <p className="text-sm text-[#4b5563] max-w-xs mb-1">
                Penilaian Anda: <strong className="text-[#00b649]">{selectedRating}/10</strong>
              </p>
              <p className="text-xs text-[#6b7280] max-w-xs mb-6">
                Aspek yang dipilih: {selectedAspects.join(', ')}
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#00b649] text-white text-sm font-medium rounded-md hover:bg-[#00a341] transition-colors"
              >
                Isi Ulang Survei
              </button>
            </motion.div>
          )}

          {/* Phone Bottom Home Indicator */}
          <div className="mt-auto pt-6 flex justify-center">
            <div className="w-28 h-1 bg-gray-300/80 rounded-full" />
          </div>
        </div>
      </main>
    </div>
  );
};


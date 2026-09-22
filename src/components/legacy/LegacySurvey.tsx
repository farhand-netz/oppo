import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Check, ChevronLeft } from 'lucide-react';

interface SurveyProps {
  onBack?: () => void;
  onSubmit?: (data: any) => void;
}

// Emoticon Hijau Senyum (Rating 9-10) - Sama persis dengan project baru
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

// Emoticon Kuning Datar/Netral (Rating 1-8) - Sama persis dengan project baru
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

// Opsi Pertanyaan 2 (Aspek Kepuasan Servis RO)
const Q2_OPTIONS = [
  'Waktu tunggu singkat, perbaikan cepat',
  'Perangkat berfungsi normal setelah diperbaiki / kualitas perbaikan baik',
  'Biaya perbaikan wajar dan transparan',
  'Masalah berhasil diselesaikan dengan baik',
  'Lokasi Service Center mudah ditemukan',
  'Proses layanan jelas (misalnya: reservasi, pengambilan nomor antrian, pemeriksaan, pengambilan perangkat, dll.)',
  'Hasil pemeriksaan masuk akal',
  'Sikap petugas ramah dan penuh semangat',
  'Lainnya',
];

// Opsi Pertanyaan 3 (Perbaikan Hari yang Sama)
const Q3_OPTIONS = [
  { value: 'ya', label: 'Iya' },
  { value: 'tidak', label: 'Tidak' },
];

// Opsi Pertanyaan 4 (Total Waktu Layanan)
const Q4_OPTIONS = [
  { value: 'dalam1jam', label: 'Dalam 1 jam' },
  { value: 'dalam2jam', label: 'Dalam 2 jam' },
  { value: 'melebihi2jam', label: 'Lebih dari 2 jam' },
];

// Opsi Pertanyaan 5 (Apresiasi / Fasilitas Tambahan Servis RO)
const Q5_OPTIONS = [
  'Memberikan hadiah kecil / kupon',
  'Pembersihan ponsel',
  'Layanan yang sangat ramah dan proaktif',
  'Menyediakan teh, minuman, dan camilan',
  'Gratis pemasangan pelindung layar (anti gores)',
  'Perhatian khusus kepada lansia & anak-anak',
  'Menyediakan koran, majalah, atau perangkat hiburan seperti game',
  'Menyediakan minuman dingin saat cuaca panas (atau minuman hangat saat cuaca dingin)',
  'Layanan perbaikan lainnya (misalnya: perbaikan lembar, antar-jemput, dll.)',
  'Tidak merasakan adanya layanan yang membuat saya merasa diperhitungkan',
];

export default function LegacySurvey({ onBack, onSubmit }: SurveyProps) {
  // State Jawaban Survei RO
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [q2Aspects, setQ2Aspects] = useState<string[]>([]);
  const [q2OtherText, setQ2OtherText] = useState<string>('');
  const [q3SameDay, setQ3SameDay] = useState<string>('');
  const [q4Duration, setQ4Duration] = useState<string>('');
  const [q5Appreciations, setQ5Appreciations] = useState<string[]>([]);

  const [submitted, setSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Status rating aktif berdasarkan nilai yang dipilih
  const isHighRating = selectedRating !== null && selectedRating >= 9;
  const isHighRatingSelected = isHighRating;

  const handleSelectRating = (num: number) => {
    setSelectedRating(num);
    setValidationError(null);
  };

  const toggleQ2Aspect = (option: string) => {
    setValidationError(null);
    if (q2Aspects.includes(option)) {
      setQ2Aspects(q2Aspects.filter((item) => item !== option));
    } else {
      if (q2Aspects.length >= 2) {
        setValidationError('Pertanyaan 2: Paling banyak hanya dapat memilih 2 pilihan.');
        return;
      }
      setQ2Aspects([...q2Aspects, option]);
    }
  };

  const toggleQ5Option = (option: string) => {
    setValidationError(null);
    if (q5Appreciations.includes(option)) {
      setQ5Appreciations(q5Appreciations.filter((item) => item !== option));
    } else {
      if (q5Appreciations.length >= 3) {
        setValidationError('Pertanyaan 5: Paling banyak hanya dapat memilih 3 pilihan.');
        return;
      }
      setQ5Appreciations([...q5Appreciations, option]);
    }
  };

  const handleKirim = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedRating === null) {
      setValidationError('Silakan berikan penilaian pada pertanyaan nomor 1 terlebih dahulu.');
      return;
    }
    if (q2Aspects.length === 0) {
      setValidationError('Paling sedikit dipilih 1 pilihan pada pertanyaan nomor 2.');
      return;
    }
    if (!q3SameDay) {
      setValidationError('Silakan pilih salah satu jawaban pada pertanyaan nomor 3.');
      return;
    }
    if (!q4Duration) {
      setValidationError('Silakan pilih salah satu jawaban pada pertanyaan nomor 4.');
      return;
    }
    if (q5Appreciations.length === 0) {
      setValidationError('Paling sedikit dipilih 1 pilihan pada pertanyaan nomor 5.');
      return;
    }

    setSubmitted(true);
    if (onSubmit) {
      onSubmit({
        q1: selectedRating,
        q2: q2Aspects,
        q2Other: q2OtherText,
        q3: q3SameDay,
        q4: q4Duration,
        q5: q5Appreciations,
      });
    }
  };

  const handleReset = () => {
    setSelectedRating(null);
    setQ2Aspects([]);
    setQ2OtherText('');
    setQ3SameDay('');
    setQ4Duration('');
    setQ5Appreciations([]);
    setSubmitted(false);
    setValidationError(null);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f6] text-[#222222] flex flex-col items-center justify-start sm:py-6 px-0 sm:px-4">
      {/* Back Navigation Bar (Identik dengan survei baru) */}
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
          <span className="text-[11px] text-gray-400 font-medium">Survei OPPO - Servis RO</span>
        </div>
      )}

      {/* Main Survey Card Container (Ukuran & Style 100% Identik dengan Survei Baru) */}
      <main
        id="oppo-survey-card-ro"
        className={`w-full bg-white transition-all duration-200 max-w-[440px] ${
          onBack ? 'sm:rounded-b-2xl' : 'sm:rounded-2xl'
        } sm:shadow-md sm:border sm:border-gray-200/80 min-h-screen sm:min-h-auto overflow-hidden flex flex-col`}
      >
        <div className="px-5 pt-8 pb-10 flex-1 flex flex-col">
          {/* Header Title */}
          <h1
            id="survey-title-ro"
            className="text-[19px] sm:text-[20px] font-semibold text-center text-[#222222] tracking-normal mb-5"
          >
            Survey Layanan OPPO
          </h1>

          {/* Intro Description */}
          <p
            id="survey-intro-ro"
            className="text-[14px] leading-[1.65] text-[#333333] text-left mb-6"
          >
            Terima kasih atas kepercayaan Anda terhadap layanan OPPO. Untuk
            memberikan pengalaman layanan yang lebih baik, kami dengan hormat
            mengundang Anda untuk berpartisipasi dalam survei ini. Kami sangat
            menghargai pendapat Anda dan akan menjaga kerahasiaan isi survei
            secara ketat.
          </p>

          {/* Green Divider Line khas OPPO */}
          <div
            id="survey-green-divider-ro"
            className="w-full h-[2.5px] bg-[#00b649] mb-8"
            aria-hidden="true"
          />

          {!submitted ? (
            <form onSubmit={handleKirim} className="flex flex-col flex-1 space-y-7">
              {/* ===================== PERTANYAAN 1: Rating Kepuasan 1-10 ===================== */}
              <div id="survey-question-1" className="space-y-3">
                <p className="text-[14.5px] sm:text-[15px] font-medium leading-[1.6] text-[#222222]">
                  <span className="text-[#e11d48] font-semibold mr-1">*</span>
                  1. Sejauh mana tingkat kepuasan Anda terhadap pengalaman
                  layanan kali ini? Silakan berikan penilaian dari 1–10, di mana
                  1 berarti sangat tidak puas dan 10 berarti sangat puas.
                </p>

                {/* Rating Scale Labels */}
                <div
                  id="rating-labels-ro"
                  className="flex items-center justify-between text-[13.5px] mb-2 px-0.5 select-none"
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
                  id="rating-options-ro"
                  className="flex items-center justify-between gap-1 sm:gap-1.5 select-none"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                    return (
                      <button
                        key={num}
                        id={`rating-ro-btn-${num}`}
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
              </div>

              {/* ===================== PERTANYAAN 2: Aspek Kepuasan Layanan ===================== */}
              <div id="survey-question-2" className="pt-2 border-t border-gray-100">
                <div className="mb-2">
                  <p className="text-[14.5px] sm:text-[15px] font-medium leading-[1.6] text-[#222222]">
                    <span className="text-[#e11d48] font-semibold mr-1">*</span>
                    2. Terima kasih atas penilaian Anda. Boleh kami tahu, aspek
                    apa dari pengalaman layanan kali ini yang menurut Anda paling
                    memuaskan?
                  </p>
                </div>

                {/* Sub-instruksi Pilihan */}
                <div className="flex items-center flex-wrap gap-x-2 text-[13px] mb-3.5">
                  <span className="text-[#f43f5e]">
                    Paling sedikit dipilih 1 Pilihan
                  </span>
                  <span className="text-[#00b649]">
                    Paling banyak dipilih 2 Pilihan
                  </span>
                </div>

                {/* Daftar Opsi Checkbox */}
                <div className="space-y-3 mb-2">
                  {Q2_OPTIONS.map((option, idx) => {
                    const isChecked = q2Aspects.includes(option);
                    return (
                      <label
                        key={idx}
                        id={`q2-option-${idx}`}
                        onClick={() => toggleQ2Aspect(option)}
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

                {/* Input teks jika memilih Lainnya */}
                {q2Aspects.includes('Lainnya') && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2.5 pl-8"
                  >
                    <input
                      type="text"
                      id="q2-input-lainnya"
                      value={q2OtherText}
                      onChange={(e) => setQ2OtherText(e.target.value)}
                      placeholder="Tuliskan aspek lainnya di sini..."
                      className="w-full px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-[5px] focus:outline-none focus:border-[#00b649]"
                    />
                  </motion.div>
                )}
              </div>

              {/* ===================== PERTANYAAN 3: Selesai di Hari yang Sama ===================== */}
              <div id="survey-question-3" className="pt-2 border-t border-gray-100">
                <div className="mb-3">
                  <p className="text-[14.5px] sm:text-[15px] font-medium leading-[1.6] text-[#222222]">
                    <span className="text-[#e11d48] font-semibold mr-1">*</span>
                    3. Apakah perangkat Anda berhasil diperbaiki pada hari yang
                    sama?
                  </p>
                </div>

                {/* Radio Button kustom OPPO */}
                <div className="space-y-3">
                  {Q3_OPTIONS.map((opt) => {
                    const isSelected = q3SameDay === opt.value;
                    return (
                      <label
                        key={opt.value}
                        id={`q3-option-${opt.value}`}
                        onClick={() => {
                          setQ3SameDay(opt.value);
                          setValidationError(null);
                        }}
                        className="flex items-center gap-3 cursor-pointer select-none group"
                      >
                        <div
                          className={`w-[19px] h-[19px] rounded-full border flex items-center justify-center transition-colors shrink-0 ${
                            isSelected
                              ? 'border-[#00b649]'
                              : 'border-gray-300 bg-white group-hover:border-gray-400'
                          }`}
                        >
                          {isSelected && (
                            <div className="w-[9px] h-[9px] rounded-full bg-[#00b649]" />
                          )}
                        </div>
                        <span className="text-[13.5px] sm:text-[14px] leading-[1.55] text-[#333333]">
                          {opt.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* ===================== PERTANYAAN 4: Durasi Waktu Layanan ===================== */}
              <div id="survey-question-4" className="pt-2 border-t border-gray-100">
                <div className="mb-3">
                  <p className="text-[14.5px] sm:text-[15px] font-medium leading-[1.6] text-[#222222]">
                    <span className="text-[#e11d48] font-semibold mr-1">*</span>
                    4. Sejak Anda masuk ke Service Center hingga perbaikan
                    selesai, berapa lama total waktu layanan yang Anda habiskan?
                  </p>
                </div>

                {/* Radio Button kustom OPPO */}
                <div className="space-y-3">
                  {Q4_OPTIONS.map((opt) => {
                    const isSelected = q4Duration === opt.value;
                    return (
                      <label
                        key={opt.value}
                        id={`q4-option-${opt.value}`}
                        onClick={() => {
                          setQ4Duration(opt.value);
                          setValidationError(null);
                        }}
                        className="flex items-center gap-3 cursor-pointer select-none group"
                      >
                        <div
                          className={`w-[19px] h-[19px] rounded-full border flex items-center justify-center transition-colors shrink-0 ${
                            isSelected
                              ? 'border-[#00b649]'
                              : 'border-gray-300 bg-white group-hover:border-gray-400'
                          }`}
                        >
                          {isSelected && (
                            <div className="w-[9px] h-[9px] rounded-full bg-[#00b649]" />
                          )}
                        </div>
                        <span className="text-[13.5px] sm:text-[14px] leading-[1.55] text-[#333333]">
                          {opt.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* ===================== PERTANYAAN 5: Apresiasi & Fasilitas ===================== */}
              <div id="survey-question-5" className="pt-2 border-t border-gray-100">
                <div className="mb-2">
                  <p className="text-[14.5px] sm:text-[15px] font-medium leading-[1.6] text-[#222222]">
                    <span className="text-[#e11d48] font-semibold mr-1">*</span>
                    5. Apakah ada hal dari layanan perbaikan ini yang membuat Anda
                    merasa dihargai atau diperhitungkan?
                  </p>
                </div>

                {/* Sub-instruksi Pilihan */}
                <div className="flex items-center flex-wrap gap-x-2 text-[13px] mb-3.5">
                  <span className="text-[#f43f5e]">
                    Paling sedikit dipilih 1 Pilihan
                  </span>
                  <span className="text-[#00b649]">
                    Paling banyak dipilih 3 Pilihan
                  </span>
                </div>

                {/* Daftar Opsi Checkbox */}
                <div className="space-y-3 mb-2">
                  {Q5_OPTIONS.map((option, idx) => {
                    const isChecked = q5Appreciations.includes(option);
                    return (
                      <label
                        key={idx}
                        id={`q5-option-${idx}`}
                        onClick={() => toggleQ5Option(option)}
                        className="flex items-start gap-3 cursor-pointer select-none group"
                      >
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
              </div>

              {/* Validation Warning Notice */}
              <AnimatePresence>
                {validationError && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="p-2.5 rounded-[6px] bg-[#fff1f2] border border-[#fecdd3] text-[#e11d48] text-xs text-center font-medium"
                  >
                    {validationError}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button "Kirim" */}
              <div className="pt-2">
                <button
                  id="btn-kirim-ro"
                  type="submit"
                  className="w-full py-3 px-4 rounded-[6px] bg-[#00b649] hover:bg-[#00a341] active:bg-[#00913a] text-white text-[15.5px] font-medium text-center shadow-xs transition-colors cursor-pointer"
                >
                  Kirim
                </button>
              </div>

              {/* Disclaimer / Privacy Policy Note */}
              <p
                id="survey-privacy-notice-ro"
                className="text-[13px] leading-[1.65] text-[#333333] text-left pt-2"
              >
                Setiap informasi pribadi yang Anda berikan dalam survei ini tidak
                akan digunakan untuk tujuan lain selain penelitian pengguna dan
                survei. Dengan mengklik &quot;Kirim&quot;, Anda menyetujui
                Kebijakan Perlindungan Informasi Pribadi OPPO.
              </p>
            </form>
          ) : (
            /* Submission Confirmation Screen (Identik dengan survei baru) */
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
                Tanggapan Anda telah berhasil dikirimkan ke tim Layanan OPPO.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#00b649] text-white text-sm font-medium rounded-md hover:bg-[#00a341] transition-colors cursor-pointer"
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
}

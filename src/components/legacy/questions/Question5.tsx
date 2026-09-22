interface Question5Props {
  value: string[];
  onChange: (value: string[]) => void;
}

const options = [
  'Memberikan hadiah kecil / kupon',
  'Pembersishan ponsel',
  'Pemberian hadiah kecil / kupon',
  'Layanan yang sangat ramah dan proaktif',
  'Menyediakan teh, minuman, dan camilan',
  'Gratis pemasangan pelindung layar (anti gores)',
  'Perhatian khusus kepada lansia & anak-anak',
  'Menyediakan koran, majalah, atau perangkat hiburan seperti game',
  'Menyediakan minuman dingin saat cuaca panas (atau minuman hangat saat cuaca dingin)',
  'Tidak merasakan adanya layanan yang membuat saya merasa diperhitungkan',
  'Layanan perbaikan lainnya (misalnya: perbaikan lembar, antar-jemput, dll.)',
];

export default function Question5({ value, onChange }: Question5Props) {
  const toggleOption = (option: string) => {
    const newValue = value.includes(option)
      ? value.filter(v => v !== option)
      : [...value, option];
    onChange(newValue);
  };

  return (
    <div>
      <div className="flex items-start gap-2 mb-4">
        <span className="text-red-500 font-bold text-lg mt-1">*</span>
        <div className="flex-1">
          <h3 className="text-gray-900 font-semibold text-base mb-2">
            5. Apakah ada hal dari layanan perbaikan ini yang membuat Anda merasa dihargai atau diperhitungkan?
          </h3>
          <div className="flex gap-4 mt-2 flex-wrap">
            <span className="text-green-500 text-xs font-semibold">Paling sedikit dipilih 1 Pilihan Paling banyak dipilih 3 Pilihan</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
            <input
              type="checkbox"
              checked={value.includes(option)}
              onChange={() => toggleOption(option)}
              disabled={value.length >= 3 && !value.includes(option)}
              className="w-5 h-5 accent-green-500 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <span className="text-gray-700 text-sm">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

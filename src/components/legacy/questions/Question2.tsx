interface Question2Props {
  value: string[];
  onChange: (value: string[]) => void;
}

const options = [
  'Waktu tunggu singkat, perbaikan cepat',
  'Perangkat berfungsi normal setelah diperbaiki / kualitas perbaikan baik',
  'Biaya perbaikan wajar dan transparan',
  'Masalah berhasil diselesaikan dengan baik',
  'Lokasi Service Center suit ditemukan',
  'Proses layanan jelas (misalnya: reservasi, pengambilan nomor antrian, pemeriksaan, pengambilan perangkat, dll.)',
  'Hasil pemeriksaan masuk akal',
  'Sikap petugas ramah dan penuh semangat',
  'Lokasi Service Center mudah ditemukan',
  'Lainnya',
];

export default function Question2({ value, onChange }: Question2Props) {
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
            2. Terima kasih atas penilaian Anda.
          </h3>
          <p className="text-gray-700 text-sm mb-1">
            Boleh kami tahu, aspek apa dari pengalaman layanan kali ini yang menurut Anda paling memuaskan?
          </p>
          <div className="flex gap-4 mt-2 flex-wrap">
            <span className="text-green-500 text-xs font-semibold">Paling sedikit dipilih 1 Pilihan Paling banyak dipilih 2 Pilihan</span>
          </div>
          <p className="text-gray-600 text-xs mt-2">Waktu tunggu singkat, perbaikan cepat</p>
        </div>
      </div>

      <div className="space-y-3">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
            <input
              type="checkbox"
              checked={value.includes(option)}
              onChange={() => toggleOption(option)}
              disabled={value.length >= 2 && !value.includes(option)}
              className="w-5 h-5 accent-green-500 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <span className="text-gray-700 text-sm">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

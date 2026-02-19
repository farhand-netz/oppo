interface Question3Props {
  value?: string;
  onChange: (value: string) => void;
}

export default function Question3({ value, onChange }: Question3Props) {
  return (
    <div>
      <div className="flex items-start gap-2 mb-4">
        <span className="text-red-500 font-bold text-lg mt-1">*</span>
        <h3 className="text-gray-900 font-semibold text-base">
          3. Apakah perangkat Anda berhasil diperbaiki pada hari yang sama?
        </h3>
      </div>

      <div className="space-y-3">
        <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
          <input
            type="radio"
            name="q3"
            value="ya"
            checked={value === 'ya'}
            onChange={(e) => onChange(e.target.value)}
            className="w-5 h-5 accent-green-500 cursor-pointer"
          />
          <span className="text-green-500 font-semibold text-sm">Iya</span>
        </label>

        <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
          <input
            type="radio"
            name="q3"
            value="tidak"
            checked={value === 'tidak'}
            onChange={(e) => onChange(e.target.value)}
            className="w-5 h-5 accent-green-500 cursor-pointer"
          />
          <span className="text-gray-700 text-sm">Tidak</span>
        </label>
      </div>
    </div>
  );
}

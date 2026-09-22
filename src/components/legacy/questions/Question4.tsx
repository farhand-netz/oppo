interface Question4Props {
  value?: string;
  onChange: (value: string) => void;
}

export default function Question4({ value, onChange }: Question4Props) {
  return (
    <div>
      <div className="flex items-start gap-2 mb-4">
        <span className="text-red-500 font-bold text-lg mt-1">*</span>
        <h3 className="text-gray-900 font-semibold text-base">
          4. Sejak Anda masuk ke Service Center hingga perbaikan selesai, berapa lama total waktu layanan yang Anda habiskan?
        </h3>
      </div>

      <div className="space-y-3">
        <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
          <input
            type="radio"
            name="q4"
            value="dalam1jam"
            checked={value === 'dalam1jam'}
            onChange={(e) => onChange(e.target.value)}
            className="w-5 h-5 accent-green-500 cursor-pointer"
          />
          <span className="text-green-500 font-semibold text-sm">Dalam 1 jam</span>
        </label>

        <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
          <input
            type="radio"
            name="q4"
            value="dalam2jam"
            checked={value === 'dalam2jam'}
            onChange={(e) => onChange(e.target.value)}
            className="w-5 h-5 accent-green-500 cursor-pointer"
          />
          <span className="text-gray-700 text-sm">Dalam 2 jam</span>
        </label>

        <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
          <input
            type="radio"
            name="q4"
            value="melebihi2jam"
            checked={value === 'melebihi2jam'}
            onChange={(e) => onChange(e.target.value)}
            className="w-5 h-5 accent-green-500 cursor-pointer"
          />
          <span className="text-gray-700 text-sm">Lebih dari 2 jam</span>
        </label>
      </div>
    </div>
  );
}

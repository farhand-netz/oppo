interface Question1Props {
  value?: number;
  onChange: (value: number) => void;
}

const ratings = [
  { value: 1, emoji: '😞' },
  { value: 2, emoji: '😕' },
  { value: 3, emoji: '😐' },
  { value: 4, emoji: '🙂' },
  { value: 5, emoji: '😊' },
  { value: 6, emoji: '😄' },
  { value: 7, emoji: '😁' },
  { value: 8, emoji: '😆' },
  { value: 9, emoji: '😍' },
  { value: 10, emoji: '🤩' },
];

export default function Question1({ value, onChange }: Question1Props) {
  return (
    <div>
      <div className="flex items-start gap-2 mb-4">
        <span className="text-red-500 font-bold text-lg mt-1">*</span>
        <div className="flex-1">
          <h3 className="text-gray-900 font-semibold text-base">
            1. Sejau mana tingkat kepuasan Anda terhadap pengalaman layanan kali ini?
          </h3>
          <p className="text-gray-600 text-sm mt-2">
            Silakan berikan penilaian dari 1-10, di mana 1 berarti sangat tidak puas dan 10 berarti sangat puas.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-2 px-2 py-6 bg-gray-50 rounded-lg">
        <span className="text-green-500 text-xs font-semibold whitespace-nowrap">Sangat tidak puas</span>
        <div className="flex justify-center items-center gap-2 flex-1">
          {ratings.map((item) => (
            <button
              key={item.value}
              onClick={() => onChange(item.value)}
              className={`transition-all transform hover:scale-110 flex items-center justify-center rounded-full w-10 h-10 ${
                value === item.value
                  ? 'text-2xl ring-2 ring-green-500 scale-110 bg-green-50'
                  : 'text-sm font-semibold text-gray-600 bg-gray-200 hover:bg-gray-300'
              }`}
              title={`Rating ${item.value}`}
            >
              {value === item.value ? item.emoji : item.value}
            </button>
          ))}
        </div>
        <span className="text-green-500 text-xs font-semibold whitespace-nowrap">Sangat puas</span>
      </div>
    </div>
  );
}

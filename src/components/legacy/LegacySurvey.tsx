import { useState } from 'react';
import { ChevronDown, ChevronLeft } from 'lucide-react';
import Question1 from './questions/Question1';
import Question2 from './questions/Question2';
import Question3 from './questions/Question3';
import Question4 from './questions/Question4';
import Question5 from './questions/Question5';

interface SurveyResponse {
  q1?: number;
  q2?: string[];
  q3?: string;
  q4?: string;
  q5?: string[];
}

interface SurveyProps {
  onBack?: () => void;
}

export default function Survey({ onBack }: SurveyProps) {
  const [responses, setResponses] = useState<SurveyResponse>({});
  const [submitted, setSubmitted] = useState(false);

  const handleQ1Change = (value: number) => {
    setResponses(prev => ({ ...prev, q1: value }));
  };

  const handleQ2Change = (value: string[]) => {
    setResponses(prev => ({ ...prev, q2: value }));
  };

  const handleQ3Change = (value: string) => {
    setResponses(prev => ({ ...prev, q3: value }));
  };

  const handleQ4Change = (value: string) => {
    setResponses(prev => ({ ...prev, q4: value }));
  };

  const handleQ5Change = (value: string[]) => {
    setResponses(prev => ({ ...prev, q5: value }));
  };

  const handleSubmit = () => {
    if (responses.q1 && responses.q2 && responses.q3 && responses.q4 && responses.q5) {
      setSubmitted(true);
      console.log('Survey submitted:', responses);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Terima Kasih!</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Kami sangat menghargai masukan Anda. Respons Anda telah berhasil disimpan dan akan membantu kami meningkatkan layanan.
            </p>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setResponses({});
            }}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded transition-colors"
          >
            Isi Survei Baru
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {onBack && (
        <div className="mb-3 flex items-center">
          <button
            type="button"
            onClick={onBack}
            className="p-1.5 -ml-1.5 text-gray-700 hover:text-gray-950 hover:bg-gray-200/60 rounded-full transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Kembali"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
      )}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">Survey Layanan OPPO</h1>

          <div className="mt-6 mb-8 pb-6 border-b-2 border-green-400">
            <p className="text-gray-700 text-sm leading-relaxed">
              Terima kasih atas kepercayaan Anda terhadap layanan OPPO. Untuk memberikan pengalaman layanan yang lebih baik, kami dengan hormat mengundang Anda untuk berpartisipasi dalam survei ini. Kami sangat menghargai pendapat Anda dan akan menjaga kerahasiaan isi survei secara ketat.
            </p>
          </div>

          <div className="space-y-8">
            <Question1 value={responses.q1} onChange={handleQ1Change} />
            <Question2 value={responses.q2 || []} onChange={handleQ2Change} />
            <Question3 value={responses.q3} onChange={handleQ3Change} />
            <Question4 value={responses.q4} onChange={handleQ4Change} />
            <Question5 value={responses.q5 || []} onChange={handleQ5Change} />
          </div>

          <div className="mt-10 pt-6 border-t border-gray-200">
            <button
              onClick={handleSubmit}
              disabled={!responses.q1 || !responses.q2 || !responses.q3 || !responses.q4 || !responses.q5}
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-3 px-4 rounded transition-colors text-lg"
            >
              Kirim
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600 text-xs leading-relaxed">
              Setiap informasi pribadi yang Anda berikan dalam survei ini tidak akan digunakan untuk kepentingan lain selain penelitian penggunaan data. Dengan mengklik "Kirim", Anda menyetujui Kebijakan Perlindungan Informasi Pribadi OPPO.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

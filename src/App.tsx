import { useState } from 'react';
import Landing from './components/Landing';
import Survey from './components/Survey';

function App() {
  const [showSurvey, setShowSurvey] = useState(false);

  return (
    <div>
      {showSurvey ? (
        <Survey />
      ) : (
        <Landing onStartSurvey={() => setShowSurvey(true)} />
      )}
    </div>
  );
}

export default App;

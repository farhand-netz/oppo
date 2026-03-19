import { useState } from 'react';
import Landing from './components/Landing';
import Survey from './components/Survey';
import Profile from './components/Profile';

type Page = 'landing' | 'survey' | 'profile';

function App() {
  const [page, setPage] = useState<Page>('landing');

  return (
    <div>
      {page === 'landing' && (
        <Landing
          onStartSurvey={() => setPage('survey')}
          onOpenProfile={() => setPage('profile')}
        />
      )}
      {page === 'survey' && <Survey />}
      {page === 'profile' && <Profile onBack={() => setPage('landing')} />}
    </div>
  );
}

export default App;

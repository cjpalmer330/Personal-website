import Projects from './Projects';
import Current from './Current';
import AboutThis from './AboutThis';
import NotFoundPage from './NotFoundPage'
import { Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />}/>
      <Route path="/Projects" element={<Projects />}/>
      <Route path="/Current" element={<Current />}/>
      <Route path="/AboutThisWebsite" element={<AboutThis />}/>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

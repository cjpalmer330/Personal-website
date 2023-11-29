import Projects from './Pages/Projects';
import AboutThis from './Pages/AboutThis';
import NotFoundPage from './Pages/NotFoundPage'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import FlightPlanner from './Pages/FlightPlanner';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/AboutMe" element={<AboutMe />}/>
      <Route path="/Projects" element={<Projects />}/>
      <Route path="/Projects/PersonalWebsite" element={<AboutThis />}/>
      <Route path="/Projects/FlightPlanner" element={<FlightPlanner />}/>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;

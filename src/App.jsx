import Projects from './Pages/Projects';
import AboutThis from './Pages/AboutThis';
import NotFoundPage from './Pages/NotFoundPage';
import './main.css';
import GoodreadsClone from './Pages/GoodreadsClone'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import FlightPlanner from './Pages/FlightPlanner';
import Resume from './Pages/resume';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/AboutMe" element={<AboutMe />}/>
      <Route path="/Projects" element={<Projects />}/>
      <Route path="/Projects/PersonalWebsite" element={<AboutThis />}/>
      <Route path="/Projects/GoodreadsClone" element={<GoodreadsClone />}/>
      <Route path="/Projects/FlightPlanner" element={<FlightPlanner />}/>
      <Route path="/resume-v4.pdf" element={<Resume/>}/>
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
    </div>
  );
}

export default App;

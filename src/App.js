import Projects from './Pages/Projects';
import AboutThis from './Pages/AboutThis';
import NotFoundPage from './Pages/NotFoundPage'
import GoodreadsClone from './Pages/GoodreadsClone'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import FlightPlanner from './Pages/FlightPlanner';
import Resume from './Pages/resume';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/AboutMe" element={<AboutMe />}/>
      <Route path="/Projects" element={<Projects />}/>
      <Route path="/Projects/PersonalWebsite" element={<AboutThis />}/>
      <Route path="/Projects/GoodreadsClone" element={<GoodreadsClone />}/>
      <Route path="/Projects/FlightPlanner" element={<FlightPlanner />}/>
      <Route path="/Resume" element={<Resume/>}/>
    </Routes>
  );
}

export default App;

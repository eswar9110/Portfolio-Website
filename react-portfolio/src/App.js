import './App.scss';

// Importing components
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Works from './components/Works/Works';
import About from './components/About/About';

// React Router
import { HashRouter, Routes, Route } from 'react-router-dom';
import Intro from './components/About/RouteComponents/Intro';
import Experience from './components/About/RouteComponents/Experience';
import Internships from './components/About/RouteComponents/Internships';
import Graduation from './components/About/RouteComponents/Graduation';
import Skill from './components/Skill/Skill';
//import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header /> <Hero /> 
                <section id="work">
                  <Works />
                </section>
                <section id="work">
                  <About />
                </section>
                <section id="work">
                  <Skill />
                </section>
                <section id="work">
                  <Contact />
                </section>
              </>
            }
          />
          <Route exact path="/about/intro" element={<Intro />} />
          <Route exact path="/about/experience" element={<Experience />} />
          <Route exact path="/about/internships" element={<Internships />} />
          <Route exact path="/about/graduation" element={<Graduation />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;

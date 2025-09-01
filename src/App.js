import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Skill from './Skill';
import Contact from './Contact';
import Usefetch from './Usefetch';
import Footer from './Footer';
import About from './About';

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-black">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Fetch Component (if needed globally) */}
      <Usefetch />

      {/* Scrollable Sections */}
      <div className="pt-16 scroll-smooth">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <Home />
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center">
          <About />
        </section>

        <section id="skill" className="min-h-screen flex items-center justify-center">
          <Skill />
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <Contact />
        </section>
      </div>

      <Footer />
    </div>
  );
}


export default App;

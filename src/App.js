
import './App.css';
import { BrowserRouter as Router,Route,Switch,} from 'react-router-dom';
import Home from './Home';
import Skill from './Skill';
import Achievement from './Achievement';
import Contact from './Contact';
import Usefetch from './Usefetch';
import Navbar from './Navbar';


function App() {
  return (
   <Router>
  {/* Fullscreen container that prevents overflow */}
  <div className="w-screen h-screen overflow-x-hidden relative">

    {/* Background Image fixed behind everything */}
    <div
      className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
      style={{ backgroundImage: "url('/space.jpg')" }}
    ></div>

    {/* Scrollable content area */}
    <div className="absolute inset-0 overflow-y-auto">
      <Navbar />
      <Usefetch />
      
      <div className="pt-12">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Skill" component={Skill} />
          <Route path="/Achievement" component={Achievement} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </div>
    </div>

  </div>
</Router>

  );
}

export default App;

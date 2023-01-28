
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Education from './Pages/Education';
import GitCalendar from './Pages/GitCalender';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';


function App() {
  return (
    <div className="App">
     
    <Navbar/>
    <br></br>
    <br></br>
     <About/>
     <br></br>
 <Skills/>
 <br></br>
 <Education/>
 <br></br>

<Projects/>
<br></br>
<GitCalendar/>
<br></br>
 <Contact/>
 <Footer/>

    </div>
  );
}

export default App;

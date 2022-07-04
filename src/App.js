import Navbar from "./Component/Navbar/Navbar";
import './App.css'
import Intro from "./Component/Intro/Intro";
import Services from "./Component/Services/Services";
import Exprience from "./Component/Exprience/Exprience";
import Works from "./Component/Works/Works";
import Portfolio from "./Component/Portfolio/Portfolio";
import Testimonial from "./Component/Testimonials/Testimonial";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import {themeContext} from './Context'
import {useContext} from 'react'
function App() {
  const theme = useContext(themeContext);
  const darkMode=theme.state.darkMode

  return (
    <div className="App"
    style={{
      background:darkMode? 'black':'',
      color: darkMode? 'white':''
      }}
    >
    <Navbar/>
    <Intro/>
    <Services/>
    <Exprience/>
    <Works/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;

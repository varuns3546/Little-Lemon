import './App.css';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavigationBar/>
      <Hero/>
      <Highlights/>
      <About/>
      <Testimonials/>
      <Footer/>
    </>
    
  );
}

export default App;

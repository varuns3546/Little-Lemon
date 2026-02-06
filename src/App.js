
import './App.css';
import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (  
    <div>
      <NavigationBar />
      <Hero />
      <Highlights /> 
      <Testimonials />
      <About />
      <Footer />
    </div>
  
  );
}

export default App;

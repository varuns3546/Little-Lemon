import NavigationBar from '../components/homeScreen/NavigationBar';
import Hero from '../components/homeScreen/Hero';
import Highlights from '../components/homeScreen/Highlights';
import Testimonials from '../components/homeScreen/Testimonials';
import About from '../components/homeScreen/About';
import Footer from '../components/homeScreen/Footer';

const HomeScreen = () => {
    return(
        <div>
            <NavigationBar />
            <Hero />
            <Highlights /> 
            <Testimonials />
            <About />
            <Footer />
        </div>
    )
}

export default HomeScreen;
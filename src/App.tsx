import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import HomeTours from './components/HomeTours';
import WhyChooseUs from './components/WhyChooseUs';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <HomeTours />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
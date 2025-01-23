 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeroSection from './assets/components/HeroSection';
import Header from './assets/components/Header';
import FreelanceBusinessSection from './assets/components/FreelanceBusinessSection';
import Services from './assets/components/Services';
import About from './assets/components/About';
import WhyRegister from './assets/components/WhyRegister';
import VideoIntroduction from './assets/components/VideoIntroduction';

function App() {
  return (
    <div className="App">
    <Header />
    <HeroSection />
    <FreelanceBusinessSection/>
    <Services />
    <About />
    <WhyRegister />
    <VideoIntroduction />
    </div>
  );
}

export default App;

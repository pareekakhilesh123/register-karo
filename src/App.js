 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HeroSection from './assets/components/HeroSection';
import Header from './assets/components/Header';
import FreelanceBusinessSection from './assets/components/FreelanceBusinessSection';
import Services from './assets/components/Services';
import About from './assets/components/About';
import WhyRegister from './assets/components/WhyRegister';
import VideoIntroduction from './assets/components/VideoIntroduction';
import OurHappyClinet from './assets/components/OurHappyClinet';
import Process from './assets/components/Process';
import BlogLayout from './assets/components/BlogLayout';
import TestimonialsSection from './assets/components/TestimonialsSection';
import FAQ from './assets/components/FAQ';
import MobileAppServices from './assets/components/MobileAppServices';
import SomeRegisterNo from './assets/components/SomeRegisterNo';
import SubscriptionForm from './assets/components/SubscriptionForm';
import Footer from './assets/components/Footer';

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
    <OurHappyClinet />
    <Process />
    <BlogLayout />
    <TestimonialsSection />
    <FAQ />
    <MobileAppServices />
    <SomeRegisterNo />
   <SubscriptionForm /> 
   <Footer/>
    </div>
  );
}

export default App;

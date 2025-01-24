import React, { Suspense } from "react";
 
const HeroSection = React.lazy(() => import("./assets/components/HeroSection"));
const Header = React.lazy(() => import("./assets/components/Header"));
const FreelanceBusinessSection = React.lazy(() =>
  import("./assets/components/FreelanceBusinessSection")
);
const Services = React.lazy(() => import("./assets/components/Services"));
const About = React.lazy(() => import("./assets/components/About"));
const WhyRegister = React.lazy(() => import("./assets/components/WhyRegister"));
const VideoIntroduction = React.lazy(() =>
  import("./assets/components/VideoIntroduction")
);
const OurHappyClinet = React.lazy(() =>
  import("./assets/components/OurHappyClinet")
);
const Process = React.lazy(() => import("./assets/components/Process"));
const BlogLayout = React.lazy(() => import("./assets/components/BlogLayout"));
const TestimonialsSection = React.lazy(() =>
  import("./assets/components/TestimonialsSection")
);
const FAQ = React.lazy(() => import("./assets/components/FAQ"));
const MobileAppServices = React.lazy(() =>
  import("./assets/components/MobileAppServices")
);
const SomeRegisterNo = React.lazy(() =>
  import("./assets/components/SomeRegisterNo")
);
const SubscriptionForm = React.lazy(() =>
  import("./assets/components/SubscriptionForm")
);
const Footer = React.lazy(() => import("./assets/components/Footer"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <HeroSection />
        <FreelanceBusinessSection />
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
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

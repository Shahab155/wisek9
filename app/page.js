
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Topbar  from "./components/Topbar";
import Certifications from "./components/Certifications";
import AboutSection from "./components/AboutSection";
import EliteSecurity from "./components/EliteSecurity";
import ProfessionalExellence from "./components/ProfessionalExellence";
import Regions from "./components/Regions";
import CityCards from "./components/CityCards";
import BlogSection from "./components/blogSection";
import ContactSection from "./components/ContactSection";



export default function Home() {
  return (
 
    <div >
     <Topbar/>
     <Navbar/>
     <Hero/>
     <Certifications/>
     <AboutSection/>
      <EliteSecurity/>
      <ProfessionalExellence/>
      <Regions/>
      <ContactSection/>
      <CityCards/>
      <BlogSection/>
      
     <Footer/>
    </div>
   
  );
}








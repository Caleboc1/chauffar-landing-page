import AboutHero from "@/components/about-page/Hero";
import Mission from "@/components/about-page/Mission";
import Values from "@/components/about-page/Values";
import WhoWeAre from "@/components/about-page/Whoweare";
import Footer from "@/components/Footer";
import CTA from "@/components/home-page/CTA";
import Navbar from "@/components/Navbar";


const About = () => {
    return (
        <div className="min-h-screen bg-background">
        <Navbar/>
        <AboutHero/>
        <WhoWeAre/>
        <Mission/>
        <Values/>
        <CTA/>
        <Footer/>
        </div>
    );
}

export default About;
import Footer from "@/components/Footer";
import CTA from "@/components/home-page/CTA";
import Navbar from "@/components/Navbar";
import ComfortClasses from "@/components/riders-page/ComfortClasses";
import RidersHero from "@/components/riders-page/Hero";
import WhyChoose from "@/components/riders-page/WhyChoose";


const Riders = () => {
    return (
        <div className="min-h-screen bg-background">
        <Navbar/>
        <RidersHero/>
        <WhyChoose/>
        <ComfortClasses/>
        <CTA/>
        <Footer/>
        </div>
    );
}

export default Riders;
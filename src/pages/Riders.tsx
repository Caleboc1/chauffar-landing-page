import Footer from "@/components/Footer";
import CTA from "@/components/home-page/CTA";
import Navbar from "@/components/Navbar";
import AbooutChauffer from "@/components/riders-page/AboutChauffer";
import ComfortClasses from "@/components/riders-page/ComfortClasses";
import RidersHero from "@/components/riders-page/Hero";
import StartBooking from "@/components/riders-page/StartBooking";
import VIPBanner from "@/components/riders-page/VipBanner";
import WhyChoose from "@/components/riders-page/WhyChoose";


const Riders = () => {
    return (
        <div className="min-h-screen bg-background">
        <Navbar/>
        <RidersHero/>
        <WhyChoose/>
        <ComfortClasses/>
        <StartBooking/>
        <VIPBanner/>
        <AbooutChauffer/>
        <CTA/>
        <Footer/>
        </div>
    );
}

export default Riders;
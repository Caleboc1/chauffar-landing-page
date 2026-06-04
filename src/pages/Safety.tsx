import Footer from "@/components/Footer";
import CTA from "@/components/home-page/CTA";
import Navbar from "@/components/Navbar";
import Accountability from "@/components/safety-page/Accountability";
import SafetyHero from "@/components/safety-page/Hero";
import PassengerDriverSafety from "@/components/safety-page/PassengerDriverSafety";
import SafetyFeatures from "@/components/safety-page/SafetyFeatures";


const Safety = () => {
    return (
        <div className="min-h-screen bg-background">
        <Navbar/>
        <SafetyHero/>
        <SafetyFeatures/>
        <PassengerDriverSafety/>
        <Accountability/>
        <CTA/>
        <Footer/>
        </div>
    );
}

export default Safety;
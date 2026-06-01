import Footer from "@/components/Footer";
import CTA from "@/components/home-page/CTA";
import Navbar from "@/components/Navbar";
import RidersHero from "@/components/riders-page/Hero";


const Riders = () => {
    return (
        <div className="min-h-screen bg-background">
        <Navbar/>
        <RidersHero/>
        <CTA/>
        <Footer/>
        </div>
    );
}

export default Riders;
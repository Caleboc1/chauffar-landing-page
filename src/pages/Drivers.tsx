import FAQ from "@/components/about-page/Faqs";
import DriverGetStarted from "@/components/drivers-page/DriverGetStarted";
import DriversHero from "@/components/drivers-page/Hero";
import WhyDrivers from "@/components/drivers-page/WhyDrivers";
import Footer from "@/components/Footer";
import CTA from "@/components/home-page/CTA";
import Navbar from "@/components/Navbar";


const Drivers = () => {
    return (
        <div className="min-h-screen bg-background">
        <Navbar/>
        <DriversHero/>
        <WhyDrivers/>
        <DriverGetStarted/>
        <FAQ/>
        <CTA/>
        <Footer/>
        </div>
    );
}

export default Drivers;
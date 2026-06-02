import FAQ from "@/components/about-page/Faqs";
import DriversHero from "@/components/drivers-page/Hero";
import Footer from "@/components/Footer";
import CTA from "@/components/home-page/CTA";
import Navbar from "@/components/Navbar";


const Drivers = () => {
    return (
        <div className="min-h-screen bg-background">
        <Navbar/>
        <DriversHero/>
        <FAQ/>
        <CTA/>
        <Footer/>
        </div>
    );
}

export default Drivers;
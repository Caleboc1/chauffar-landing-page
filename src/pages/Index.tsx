import Footer from "@/components/Footer";
import Audience from "@/components/home-page/Audience";
import BrandMosaic from "@/components/home-page/BrandMosiac";
import CTA from "@/components/home-page/CTA";
import Features from "@/components/home-page/Features";
import Hero from "@/components/home-page/Hero";
import HowItWorks from "@/components/home-page/HowItWorks";
import Tiers from "@/components/home-page/Tiers";
import Navbar from "@/components/Navbar";


const Index = () => {
    return (
        <div className="min-h-screen bg-background">
        <Navbar/>
        <Hero/>
        <Features/>
        <Tiers/>
        <HowItWorks/>
        <Audience/>
        <BrandMosaic/>
        <CTA/>
        <Footer/>
        </div>
    );
}

export default Index;
import Footer from "@/components/Footer";
import CTA from "@/components/home-page/CTA";
import Navbar from "@/components/Navbar";
import HelpCenter from "@/components/support-page/HelpCenter";


const Support = () => {
    return (
        <div className="min-h-screen bg-background">
        <Navbar/>
        <HelpCenter/>
        <CTA/>
        <Footer/>
        </div>
    );
}

export default Support;
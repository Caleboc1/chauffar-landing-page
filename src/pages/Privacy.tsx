import Footer from "@/components/Footer";
import CTA from "@/components/home-page/CTA";
import Navbar from "@/components/Navbar";
import TermsAndConditions from "@/components/privacy-page/TermsAndConditions";


const Privacy = () => {
    return (
        <div className="min-h-screen bg-background">
        <Navbar/>
        <TermsAndConditions/>
        <CTA/>
        <Footer/>
        </div>
    );
}

export default Privacy;
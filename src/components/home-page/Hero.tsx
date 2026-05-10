
import { Button } from "../ui/button"
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5"

function Hero() {
    return (
        <>
            <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 ">
                <div className="container mx-auto">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 ">Premium Rides.</h1>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 ">Zero Compromise.</h1>

                        <p className="text-lgmd:text-xl max-w-3xl mx-auto mb-8">Chauffar delivers reliable, professional, and transparent ride experiences for<br /> executives, families, and businesses who can&apos;t afford uncertainty.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Button className="bg-foreground p-2 gap-3 h-auto">  
                                <FaApple style={{ width: '32px', height: '32px', flexShrink: 0 }} />
                                <span className="flex flex-col text-left">
                                    <small>Download on the</small>
                                    <h3 className="text-lg">App Store</h3>
                                </span>
                            </Button>
                            <Button className="bg-foreground p-2 gap-3 h-auto">  
                                <IoLogoGooglePlaystore style={{ width: '32px', height: '32px', flexShrink: 0 }} />
                                <span className="flex flex-col text-left">
                                    <small>GET IT ON</small>
                                    <h3 className="text-lg">Google Play</h3>
                                </span>
                            </Button>
                        </div>
                    </div>
                    <div className="relative max-w-6xl mx-auto animate-float">
                        <div className="relative rounded-2xl p-8">
                            <img src="/public/image 1.png" alt="Chauffar homepage" 
                            className="w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
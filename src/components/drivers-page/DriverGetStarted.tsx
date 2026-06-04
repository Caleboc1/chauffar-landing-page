import { FaApple } from "react-icons/fa"
import { IoLogoGooglePlaystore } from "react-icons/io5"

const steps = [
    {
        title: "Download the App",
        description: "Arrive composed and on time. Use the commute to prepare for your presentation in a quiet, climate-controlled environment.",
    },
    {
        title: "Complete Verification",
        description: "Elevate your evening. From weddings to gala dinners, Chauffar provides the prestige your event deserves.",
    },
    {
        title: "Accept & Complete Rides",
        description: "Reliable pickups for early morning flights or late-night arrivals. Your driver will be waiting with your name displayed.",
    },
]

function DriverGetStarted() {
    return (
        <section className="w-full">
            <div className="flex flex-col md:flex-row min-h-145">

                {/* Left — dark bg with pattern image */}
                <div className="relative w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-12 py-14 overflow-hidden" data-aos="fade-right">

                    {/* Background pattern image */}
                    <img
                        src="/bannerbg2.png"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover object-center"
                    />

                    {/* Content */}
                    <div className="relative z-10">

                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-8">
                            How to Get<br />Started as a Driver
                        </h2>

                        {/* Steps */}
                        <div className="flex flex-col">
                            {steps.map((step, i) => (
                                <div key={i} data-aos="fade-up" data-aos-delay={i * 80}>
                                    <div className="py-4">
                                        <h3 className="text-[#0DFF91] text-sm font-semibold mb-1.5">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/50 text-xs leading-relaxed max-w-xs">
                                            {step.description}
                                        </p>
                                    </div>
                                    {i < steps.length - 1 && (
                                        <hr className="border-white/10" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* App store buttons */}
                        <div className="flex flex-row gap-3 mt-8">
                            <button className="flex items-center gap-2 bg-black border border-white/20 rounded-xl px-4 py-2.5 hover:bg-white/10 transition-colors">
                                <IoLogoGooglePlaystore size={20} className="text-white shrink-0" />
                                <span className="flex flex-col text-left leading-tight">
                                    <span className="text-[9px] text-white/60 uppercase tracking-wide">Get it on</span>
                                    <span className="text-xs font-semibold text-white">Google Play</span>
                                </span>
                            </button>
                            <button className="flex items-center gap-2 bg-black border border-white/20 rounded-xl px-4 py-2.5 hover:bg-white/10 transition-colors">
                                <FaApple size={20} className="text-white shrink-0" />
                                <span className="flex flex-col text-left leading-tight">
                                    <span className="text-[9px] text-white/60 uppercase tracking-wide">Download on the</span>
                                    <span className="text-xs font-semibold text-white">App Store</span>
                                </span>
                            </button>
                        </div>

                    </div>
                </div>

                {/* Right — black bg with phone image */}
                <div className="relative w-full md:w-1/2 bg-black flex items-center justify-center px-8 py-14" data-aos="fade-left" data-aos-delay="120">
                    <img
                        src="/iPhone2.png"
                        alt="Chauffar driver app"
                        className="relative z-10 h-105 sm:h-125 w-auto object-contain"
                    />
                </div>

            </div>
        </section>
    )
}

export default DriverGetStarted

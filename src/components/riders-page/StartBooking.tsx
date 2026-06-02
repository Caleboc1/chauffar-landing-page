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

function StartBooking() {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-8xl">

                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                    {/* Left — phone in gray box */}
                    <div className="w-full md:w-[45%] shrink-0">
                        <div
                            className="w-full rounded-2xl flex items-center justify-center pt-15 px-8"
                            style={{ backgroundColor: "#E3E3E3" }}
                        >
                            <img
                                src="/iPhone.png"
                                alt="Chauffar app on iPhone"
                                className="w-full max-w-75 h-auto object-contain"
                            />
                        </div>
                    </div>

                    {/* Right — content */}
                    <div className="w-full md:w-[55%]">

                        {/* Heading */}
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                            Start Booking Rides
                        </h2>

                        {/* Steps */}
                        <div className="flex flex-col">
                            {steps.map((step, i) => (
                                <div key={i}>
                                    <div className="py-5">
                                        <h3 className="text-[#09BB6A] text-sm font-semibold mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-foreground/50 text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                    {i < steps.length - 1 && (
                                        <hr className="border-gray-200" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* App store buttons */}
                        <div className="flex flex-row gap-3 mt-8">
                            <button className="flex items-center gap-2 bg-black rounded-xl px-4 py-2.5 hover:bg-black/80 transition-colors">
                                <IoLogoGooglePlaystore size={22} className="text-white shrink-0" />
                                <span className="flex flex-col text-left leading-tight">
                                    <span className="text-[9px] text-white/60 uppercase tracking-wide">Get it on</span>
                                    <span className="text-sm font-semibold text-white">Google Play</span>
                                </span>
                            </button>
                            <button className="flex items-center gap-2 bg-black rounded-xl px-4 py-2.5 hover:bg-black/80 transition-colors">
                                <FaApple size={22} className="text-white shrink-0" />
                                <span className="flex flex-col text-left leading-tight">
                                    <span className="text-[9px] text-white/60 uppercase tracking-wide">Download on the</span>
                                    <span className="text-sm font-semibold text-white">App Store</span>
                                </span>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartBooking
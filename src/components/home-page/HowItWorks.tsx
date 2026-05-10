import { FaApple } from "react-icons/fa"
import { IoLogoGooglePlaystore } from "react-icons/io5"
import { FaCheck } from "react-icons/fa"

const steps = [
    "Book your ride in seconds",
    "Get matched with a vetted professional driver",
    "Enjoy a smooth, stress-free ride",
    "Arrive on time—every time",
]

function HowItWorks() {
    return (
        <section className="bg-[#111111] text-white">
            <div className="flex flex-col md:flex-row min-h-85">

                {/* Left — image, takes up half */}
                <div className="w-full md:w-1/2 relative">
                    <img
                        src="/picture1.png"
                        alt="Chauffar driver opening car door"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right — content */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-10 py-12">

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight mb-6">
                        Simple. Reliable.<br />Seamless.
                    </h2>

                    {/* Checklist */}
                    <ul className="flex flex-col gap-3 mb-8">
                        {steps.map((step, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                                <FaCheck size={13} className="text-white flex-shrink-0" />
                                {step}
                            </li>
                        ))}
                    </ul>

                    {/* App store buttons */}
                    <div className="flex flex-row gap-3">
                        {/* App Store */}
                        <button className="flex items-center gap-3 bg-black border border-white/20 rounded-xl px-4 py-2.5 hover:bg-white/10 transition-colors">
                            <FaApple size={24} className="text-white flex-shrink-0" />
                            <span className="flex flex-col text-left leading-tight">
                                <span className="text-[10px] text-white/70">Download on the</span>
                                <span className="text-sm font-semibold text-white">App Store</span>
                            </span>
                        </button>

                        {/* Google Play */}
                        <button className="flex items-center gap-3 bg-black border border-white/20 rounded-xl px-4 py-2.5 hover:bg-white/10 transition-colors">
                            <IoLogoGooglePlaystore size={24} className="text-white flex-shrink-0" />
                            <span className="flex flex-col text-left leading-tight">
                                <span className="text-[10px] text-white/70">GET IT ON</span>
                                <span className="text-sm font-semibold text-white">Google Play</span>
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HowItWorks
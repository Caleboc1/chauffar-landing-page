import { useState } from "react"
import { Button } from "../ui/button"

const tabs = [
    {
        label: "Guaranteed Pickup",
        badge: "Reliability",
        title: "Your Ride Won't Cancel on You",
        description1: "No more last-minute cancellations or scrambling for alternatives. Once your ride is confirmed, it stays confirmed.",
        description2: "Chauffar enforces strict driver accountability to ensure you're never left stranded—especially when it matters most.",
        quote: '"Be on time. Every time."',
    },
    {
        label: "Transparent Pricing",
        badge: "Pricing",
        title: "No Surprises. Ever.",
        description1: "See the full fare before you book. No surge pricing, no hidden fees, no awkward moments at the end of your trip.",
        description2: "Chauffar locks in your price the moment you confirm—what you see is exactly what you pay.",
        quote: '"Finally, a ride app I can trust with my budget."',
    },
    {
        label: "Professional Drivers",
        badge: "Quality",
        title: "Every Driver is Vetted and Trained",
        description1: "Chauffar drivers go through rigorous background checks, training, and regular performance reviews.",
        description2: "You're not just getting a ride—you're getting a professional who takes your safety seriously.",
        quote: '"The driver was punctual, polite, and professional."',
    },
    {
        label: "Premium Vehicles",
        badge: "Comfort",
        title: "Ride in Comfort Every Single Time",
        description1: "Every vehicle on Chauffar meets strict quality standards—clean, modern, and well-maintained.",
        description2: "Whether it's a daily commute or an airport run, you'll always arrive in style.",
        quote: '"Felt like a VIP from door to door."',
    },
    {
        label: "24/7 Support",
        badge: "Support",
        title: "Help is Always One Tap Away",
        description1: "Our support team is available around the clock to resolve any issue before, during, or after your ride.",
        description2: "Real humans, fast responses—because you deserve more than a chatbot when something goes wrong.",
        quote: '"Support sorted my issue in under 2 minutes."',
    },
]

function Features() {
    const [active, setActive] = useState(0)
    const current = tabs[active]

    return (
        <section className="bg-[#131313] text-white pt-16">

            {/* Heading */}
            <div className="text-center mb-10 px-4">
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
                    A Better Ride Experience<br />Engineered Into Every Detail
                </h2>
            </div>

            {/* Tab switcher — scrollable on mobile */}
            <div className="px-4 relative z-20 -mb-4 flex justify-center">
                <div className="flex flex-row overflow-x-auto scrollbar-none gap-1 bg-[#131313] rounded-full p-2 border border-[#222222] max-w-full">
                    {tabs.map((tab, i) => (
                        <button
                            key={tab.label}
                            onClick={() => setActive(i)}
                            className={`px-3 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap flex-shrink-0 ${
                                active === i
                                    ? "bg-[#0DFF91] text-black"
                                    : "text-white/70 hover:text-white"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content card */}
            <div className="relative w-full overflow-hidden rounded-t-3xl">

                {/* Background image */}
                <img
                    src="/picture.png"
                    alt="Feature visual"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                {/* Dark overlay — full on mobile, right-side fade on desktop */}
                <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-black/10 md:via-black/30 md:to-black/80" />

                {/* Content — stacked on mobile, right panel on desktop */}
                <div className="relative z-10 flex flex-col md:flex-row min-h-[520px] md:min-h-[620px]">

                    {/* Spacer — pushes content to right on desktop */}
                    <div className="hidden md:block md:w-[65%]" />

                    {/* Content panel */}
                    <div className="w-full md:w-[35%] flex flex-col justify-between p-6 sm:p-8 md:p-10 pt-12 md:pt-14">

                        {/* Top content */}
                        <div className="flex flex-col gap-4">
                            {/* Badge */}
                            <div className="flex items-center gap-2 text-white/50 text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                {current.badge}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
                                {current.title}
                            </h3>

                            {/* Descriptions */}
                            <p className="text-white/70 text-sm leading-relaxed">
                                {current.description1}
                            </p>
                            <p className="text-white/70 text-sm leading-relaxed hidden sm:block">
                                {current.description2}
                            </p>

                            {/* CTA */}
                            <Button className="bg-[#0DFF91] text-black font-semibold hover:bg-[#00e07a] rounded-full px-6 py-5 w-fit mt-1">
                                Download App
                            </Button>
                        </div>

                        {/* Bottom — testimonial */}
                        <div className="mt-8">
                            <hr className="border-white/10 mb-4" />
                            <div className="flex items-center gap-3 bg-white rounded-tl-xl rounded-br-xl overflow-hidden">
                                <img
                                    src="/container.png"
                                    alt="Testimonial"
                                    className="w-12 h-12 sm:w-14 sm:h-14 object-cover shrink-0"
                                />
                                <p className="text-black text-xs sm:text-sm font-medium pr-3">{current.quote}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Features
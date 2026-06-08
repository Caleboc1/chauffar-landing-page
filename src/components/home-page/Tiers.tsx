import { useState } from "react"
import TierVehicle from "@/assets/svgIcons/TierVehicle"
import TierDrivers from "@/assets/svgIcons/TierDrivers"
import TierPricing from "@/assets/svgIcons/TierPricing"
import TierPassenger from "@/assets/svgIcons/TierPassenger"

const tiers = [
    {
        label: "Standard",
        title: "Standard",
        image: "/standard.png",
        description: "Reliable, everyday rides designed for comfort and convenience. Standard gives you access to clean vehicles and professional drivers—without compromising on Chauffar's core promise of safety and transparency.",
        capacity: 4,
        features: [
            { icon: <TierVehicle />, text: "Clean, well-maintained vehicles" },
            { icon: <TierDrivers />, text: "Professional, vetted drivers" },
            { icon: <TierPricing />, text: "Fixed, transparent pricing" },
        ],
    },
    {
        label: "Executive",
        title: "Executive",
        image: "/executive.png",
        description: "Reliable, everyday rides designed for comfort and convenience. Standard gives you access to clean vehicles and professional drivers—without compromising on Chauffar's core promise of safety and transparency.",
        capacity: 4,
        features: [
            { icon: <TierVehicle />, text: "Clean, well-maintained vehicles" },
            { icon: <TierDrivers />, text: "Professional, vetted drivers" },
            { icon: <TierPricing />, text: "Fixed, transparent pricing" },
        ],
    },
    {
        label: "Premium",
        title: "Premium",
        image: "/premium.png",
        description: "Reliable, everyday rides designed for comfort and convenience. Standard gives you access to clean vehicles and professional drivers—without compromising on Chauffar's core promise of safety and transparency.",
        capacity: 4,
        features: [
            { icon: <TierVehicle />, text: "Clean, well-maintained vehicles" },
            { icon: <TierDrivers />, text: "Professional, vetted drivers" },
            { icon: <TierPricing />, text: "Fixed, transparent pricing" },
        ],
    },
    {
        label: "VIP",
        title: "VIP",
        image: "/vip.png",
        description: "Reliable, everyday rides designed for comfort and convenience. Standard gives you access to clean vehicles and professional drivers—without compromising on Chauffar's core promise of safety and transparency.",
        capacity: 3,
        features: [
            { icon: <TierVehicle />, text: "Clean, well-maintained vehicles" },
            { icon: <TierDrivers />, text: "Professional, vetted drivers" },
            { icon: <TierPricing />, text: "Fixed, transparent pricing" },
        ],
    },
]

function Tiers() {
    const [active, setActive] = useState(0)
    const current = tiers[active]

    return (
        <section className="bg-white text-foreground py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-4xl">

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight" data-aos="fade-up">
                    Choose the Right Ride for<br />Every Moment
                </h2>

               {/* Tab switcher — scrollable on mobile, spread on desktop */}
<div className="flex flex-row overflow-x-auto scrollbar-none border-b border-gray-200 mb-6 sm:mb-8" data-aos="fade-up" data-aos-delay="100">
    {tiers.map((tier, i) => (
        <button
            key={tier.label}
            onClick={() => setActive(i)}
            className={`flex-1 min-w-fit pb-3 px-2 text-xs sm:text-sm font-extrabold tracking-widest uppercase transition-all duration-200 whitespace-nowrap ${
                active === i
                    ? "text-[#1a5c35] border-b-2 border-[#1a5c35] -mb-px"
                    : "text-gray-400 hover:text-gray-600"
            }`}
        >
            {tier.label}
        </button>
    ))}
</div>

                {/* Card */}
                <div className="relative overflow-hidden rounded-2xl min-h-[680px] sm:min-h-[720px] lg:min-h-[430px]" data-aos="fade-up" data-aos-delay="180">

                    {/* Background image */}
                    <img
                        src="/bg.jpg"
                        alt="Tier background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay — stronger on mobile for readability */}
                    <div className="absolute inset-0 bg-black/40 sm:bg-black/20" />

                    {/* Tab-specific vehicle and content */}
                    <div className="relative z-10 grid min-h-[680px] grid-cols-1 gap-4 p-5 sm:min-h-[720px] sm:p-8 lg:min-h-[430px] lg:grid-cols-[minmax(280px,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-8">
                        <div className="flex flex-col justify-center rounded-lg bg-black/15 p-1 sm:p-2 lg:bg-transparent lg:p-0">
                            <h3 className="mb-2 text-2xl font-bold text-white sm:text-3xl">
                                {current.title}
                            </h3>

                            <p className="mb-4 max-w-md text-xs leading-relaxed text-white/80 sm:text-sm">
                                {current.description}
                            </p>

                            <div className="mb-5 flex w-fit items-center gap-1.5 rounded-full border border-white/20 bg-white px-3 py-1">
                                <TierPassenger />
                                <span className="text-xs font-medium text-[#1A1A1A]">{current.capacity}</span>
                            </div>

                            <div className="flex flex-col gap-2">
                                {current.features.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex w-fit max-w-full items-center gap-3 rounded-lg border border-white/15 bg-white/10 px-3 py-2"
                                    >
                                        <span className="flex-shrink-0 text-white/70">{feature.icon}</span>
                                        <span className="text-xs font-semibold text-white">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex min-h-[230px] items-center justify-center self-end sm:min-h-[300px] lg:min-h-0 lg:self-center">
                            <img
                                key={current.image}
                                src={current.image}
                                alt={`${current.title} Chauffar vehicle`}
                                className="h-auto max-h-[260px] w-full max-w-[620px] object-contain drop-shadow-[0_22px_30px_rgba(0,0,0,0.4)] transition-opacity duration-300 sm:max-h-[330px] lg:max-h-[310px]"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Tiers

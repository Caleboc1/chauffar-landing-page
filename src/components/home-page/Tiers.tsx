import { useState } from "react"
import { FaUsers } from "react-icons/fa"
import { MdDirectionsCar, MdPublic, MdAttachMoney } from "react-icons/md"

const tiers = [
    {
        label: "Standard",
        title: "Standard",
        description: "Reliable, everyday rides designed for comfort and convenience. Standard gives you access to clean vehicles and professional drivers—without compromising on Chauffar's core promise of safety and transparency.",
        capacity: 4,
        features: [
            { icon: <MdDirectionsCar size={16} />, text: "Clean, well-maintained vehicles" },
            { icon: <MdPublic size={16} />, text: "Professional, vetted drivers" },
            { icon: <MdAttachMoney size={16} />, text: "Fixed, transparent pricing" },
        ],
    },
    {
        label: "Executive",
        title: "Executive",
        description: "Elevated rides for professionals who value comfort and discretion. Executive offers premium sedans with experienced drivers trained for business travel.",
        capacity: 4,
        features: [
            { icon: <MdDirectionsCar size={16} />, text: "Premium sedans & SUVs" },
            { icon: <MdPublic size={16} />, text: "Business-trained drivers" },
            { icon: <MdAttachMoney size={16} />, text: "Priority dispatch" },
        ],
    },
    {
        label: "Premium",
        title: "Premium",
        description: "A step above the rest. Premium gives you access to luxury vehicles and white-glove service for occasions that demand the best.",
        capacity: 4,
        features: [
            { icon: <MdDirectionsCar size={16} />, text: "Luxury vehicle fleet" },
            { icon: <MdPublic size={16} />, text: "Top-rated chauffeurs" },
            { icon: <MdAttachMoney size={16} />, text: "Complimentary amenities" },
        ],
    },
    {
        label: "VIP",
        title: "VIP",
        description: "The ultimate Chauffar experience. VIP is reserved for those who expect nothing but the finest—exclusive vehicles, dedicated drivers, and complete privacy.",
        capacity: 3,
        features: [
            { icon: <MdDirectionsCar size={16} />, text: "Exclusive, high-end vehicles" },
            { icon: <MdPublic size={16} />, text: "Dedicated personal driver" },
            { icon: <MdAttachMoney size={16} />, text: "Full privacy & discretion" },
        ],
    },
]

function Tiers() {
    const [active, setActive] = useState(0)
    const current = tiers[active]

    return (
        <section className="bg-white text-foreground py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-4xl">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-10 leading-tight">
                    Choose the Right Ride for<br />Every Moment
                </h2>

                {/* Tab switcher — underline style */}
                <div className="flex flex-row justify-between gap-8 border-b border-gray-200 mb-8">
                    {tiers.map((tier, i) => (
                        <button
                            key={tier.label}
                            onClick={() => setActive(i)}
                            className={`flex-1 pb-3 text-sm font-extrabold tracking-widest uppercase transition-all duration-200 relative whitespace-nowrap ${
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
                <div className="relative rounded-2xl overflow-hidden h-100">

                    {/* Background image */}
                    <img
                        src="/bg.jpg"
                        alt="Tier background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Content — bottom left */}
                    <div className="absolute inset-0 flex flex-col justify-start p-8 z-10">

                        {/* Title */}
                        <h3 className="text-white text-3xl font-bold mb-2">
                            {current.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/70 text-xs max-w-xs leading-relaxed mb-4">
                            {current.description}
                        </p>

                        {/* Capacity badge */}
                        <div className="flex items-center gap-1.5 bg-white/10 border border-white/20 rounded-full px-3 py-1 w-fit mb-6">
                            <FaUsers size={12} className="text-white/70" />
                            <span className="text-white text-xs font-medium">{current.capacity}</span>
                        </div>

                        {/* Features */}
                        <div className="flex flex-col gap-3">
                            {current.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-lg px-3 py-2 w-fit">
                                    <span className="text-white/70">{feature.icon}</span>
                                    <span className="text-white text-xs font-semibold">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Tiers
import { MdHandshake, MdCalendarMonth, MdFlight, MdShield } from "react-icons/md"

const useCases = [
    {
        icon: <MdHandshake size={22} />,
        title: "Business Meetings",
        description: "Arrive composed and on time. Use the commute to prepare for your presentation in a quiet, climate-controlled environment.",
    },
    {
        icon: <MdCalendarMonth size={22} />,
        title: "Special Occasions",
        description: "Elevate your evening. From weddings to gala dinners, Chauffar provides the prestige your event deserves.",
    },
    {
        icon: <MdFlight size={22} />,
        title: "Airport Transfers",
        description: "Reliable pickups for early morning flights or late-night arrivals. Your driver will be waiting with your name displayed.",
    },
    {
        icon: <MdShield size={22} />,
        title: "Family Safety",
        description: "Secure, monitored travel for your loved ones. Peace of mind knowing they are in safe hands with a professional.",
    },
]

function DesignedFor() {
    return (
        <section className="relative w-full overflow-hidden">

            {/* Background image */}
            <img
                src="/bannerbg1.jpg"
                alt="Chauffar passenger"
                className="absolute inset-0 w-full h-full object-cover object-right"
            />

            {/* Light overlay — stronger on left for text readability */}
            <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-transparent" />

            {/* Content */}
            <div className="relative z-10 px-4 sm:px-8 lg:px-16 py-14 sm:py-20 max-w-2xl" data-aos="fade-right">

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-10">
                    Designed for<br />When It Matters Most
                </h2>

                {/* Use case list */}
                <div className="flex flex-col gap-7">
                    {useCases.map((item, i) => (
                        <div key={item.title} className="flex items-start gap-4" data-aos="fade-up" data-aos-delay={i * 80}>

                            {/* Icon box */}
                            <div className="w-11 h-11 rounded-xl bg-[#111111] flex items-center justify-center text-[#0DFF91] shrink-0">
                                {item.icon}
                            </div>

                            {/* Text */}
                            <div>
                                <h3 className="text-sm font-bold text-foreground mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-foreground/50 text-xs leading-relaxed max-w-xs">
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default DesignedFor

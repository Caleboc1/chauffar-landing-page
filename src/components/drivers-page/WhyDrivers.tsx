const cards = [
    {
        image: "/drivercar.png",
        title: "Premium Trips",
        description: "Drivers undergo rigorous background checks and etiquette training to ensure executive-level service.",
    },
    {
        image: "/driverwallet.png",
        title: "Reliable Earning",
        description: "Drivers undergo rigorous background checks and etiquette training to ensure executive-level service.",
    },
    {
        image: "/drivercalendar.png",
        title: "Flexibility",
        description: "Drivers undergo rigorous background checks and etiquette training to ensure executive-level service.",
    },
]

function WhyDrivers() {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-4xl">

                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-10">
                    Why Drivers Choose Us?
                </h2>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {cards.map((card) => (
                        <div
                            key={card.title}
                            className="bg-[#F2F2F2] rounded-2xl p-6 flex flex-col"
                        >
                            {/* Image */}
                            <div className="h-40 flex items-center justify-center mb-6">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="h-full w-auto object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-bold text-foreground mb-2">
                                {card.title}
                            </h3>

                            {/* Description */}
                            <p className="text-foreground/50 text-xs leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default WhyDrivers
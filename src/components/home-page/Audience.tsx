const cards = [
    {
        image: "/professionals.png",
        label: "For Professionals",
    },
    {
        image: "/businesses.png",
        label: "For Businesses",
    },
    {
        image: "/family.png",
        label: "For Family",
    },
]

function Audience() {
    return (
        <section className="bg-white text-foreground py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 leading-tight">
                    Built for People Who Expect More<br />from Every Ride
                </h2>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {cards.map((card) => (
                        <div
                            key={card.label}
                            className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer"
                        >
                            {/* Grayscale image */}
                            <img
                                src={card.image}
                                alt={card.label}
                                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />

                            {/* Subtle bottom gradient for text legibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                            {/* Label */}
                            <div className="absolute bottom-20 left-5 z-10">
                                <span className="text-white text-3xl font-semibold">
                                    {card.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Audience
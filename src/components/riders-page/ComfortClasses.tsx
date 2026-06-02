const cars = [
    {
        image: "/car1.png",
        title: "Standard",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum h",
    },
    {
        image: "/car1.png",
        title: "Premium",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum h",
    },
    {
        image: "/car3.png",
        title: "Executive",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum h",
    },
]

function ComfortClasses() {
    return (
        <section className="bg-[#0a0a0a]">

            {/* Banner image — full width, no padding */}
            <div className="w-full h-full">
                <img
                    src="/banner.jpg"
                    alt="Chauffar rider"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Dark content below */}
            <div className="px-4 sm:px-6 lg:px-8 py-14">
                <div className="container mx-auto max-w-6xl">

                    {/* Heading */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                            Comfort for Every Class
                        </h2>
                        <p className="text-white/40 text-sm leading-relaxed max-w-md mx-auto">
                            From the moment you request a ride to the second you reach your destination, our technology works silently in the background. We integrate live GPS tracking, emergency assistance, and vetted professional chauffeurs to ensure the highest standards of luxury travel safety.
                        </p>
                    </div>

                    {/* Car cards grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {cars.map((car) => (
                            <div key={car.title}>
                                {/* Card — dark box with car image */}
                                <div className="bg-[#1a1a1a] rounded-xl flex items-center justify-center h-[180px] sm:h-[200px] mb-4 overflow-hidden px-4">
                                    <img
                                        src={car.image}
                                        alt={car.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="text-white text-sm font-bold mb-2">
                                    {car.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/40 text-xs leading-relaxed">
                                    {car.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    )
}

export default ComfortClasses
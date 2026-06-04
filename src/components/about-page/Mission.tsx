function Mission() {
    return (
        <section className="bg-white">

            {/* Full width image — no padding, edge to edge */}
            <div className="w-full h-80 sm:h-105 md:h-130" data-aos="fade-up">
                <img
                    src="/mission.png"
                    alt="Chauffar rider"
                    className="w-full h-full object-cover object-top"
                />
            </div>

            {/* Bottom — dark panel with mission & vision */}
            <div className="bg-[#000000] px-4 sm:px-6">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row md:divide-x md:divide-white/10">

                        {/* Our Mission */}
                        <div className="w-full md:w-1/2 py-10 md:pr-12" data-aos="fade-up">
                            <h3 className="text-[#0DFF91] text-sm font-semibold mb-3">
                                Our Mission
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                To provide reliable, professional, and comfortable ride experiences through technology, accountability, and customer-focused service — making everyday transportation more seamless, dependable, and stress-free for both riders and drivers.
                            </p>
                        </div>

                        {/* Our Vision */}
                        <div className="w-full md:w-1/2 py-10 md:pl-12 border-t border-white/10 md:border-t-0" data-aos="fade-up" data-aos-delay="120">
                            <h3 className="text-[#0DFF91] text-sm font-semibold mb-3">
                                Our Vision
                            </h3>
                            <p className="text-white/60 text-sm leading-relaxed">
                                To become the leading standard for premium urban mobility by building a ride-hailing platform centered around trust, safety, professionalism, and a consistently better travel experience for modern city movement.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}

export default Mission

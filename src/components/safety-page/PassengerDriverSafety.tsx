function PassengerDriverSafety() {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">

                {/* Row 1 — text left, image right */}
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 md:mb-24">

                    {/* Left — text */}
                    <div className="w-full md:w-1/2 order-2 md:order-1" data-aos="fade-right">
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                            Passenger Safety
                        </h2>
                        <div className="flex flex-col gap-4">
                            <p className="text-foreground/50 text-sm leading-relaxed">
                                Verified drivers with profile photos and vehicle license numbers displayed before entry.
                            </p>
                            <p className="text-foreground/50 text-sm leading-relaxed">
                                Live trip visibility allowing you to see your exact path on the app at all times.
                            </p>
                            <p className="text-foreground/50 text-sm leading-relaxed">
                                2-Way rating system to maintain a high-quality community of professionals.
                            </p>
                        </div>
                    </div>

                    {/* Right — image */}
                    <div className="w-full md:w-1/2 order-1 md:order-2" data-aos="fade-left" data-aos-delay="120">
                        <img
                            src="/passenger-safety.png"
                            alt="Passenger Safety"
                            className="w-full h-75 sm:h-90 object-cover rounded-2xl"
                        />
                    </div>

                </div>

                {/* Row 2 — image left, text right */}
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                    {/* Left — image */}
                    <div className="w-full md:w-1/2" data-aos="fade-right">
                        <img
                            src="/driver-safety.png"
                            alt="Driver Safety"
                            className="w-full h-75 sm:h-90 object-cover rounded-2xl"
                        />
                    </div>

                    {/* Right — text */}
                    <div className="w-full md:w-1/2" data-aos="fade-left" data-aos-delay="120">
                        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                            Driver Safety
                        </h2>
                        <div className="flex flex-col gap-4">
                            <p className="text-foreground/50 text-sm leading-relaxed">
                                Passenger verification records and trip ratings to ensure chauffeur security.
                            </p>
                            <p className="text-foreground/50 text-sm leading-relaxed">
                                Immediate assistance through a specialized chauffeur-only support line.
                            </p>
                            <p className="text-foreground/50 text-sm leading-relaxed">
                                Cashless transactions only, reducing risks associated with physical payments.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default PassengerDriverSafety

function WhoWeAre() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto max-w-8xl px-4 sm:px-6">

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

                    {/* Left — text content */}
                    <div className="w-full md:w-[45%] px-2 sm:px-0">
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
                            Who We Are
                        </h2>

                        <p className="text-foreground/60 text-sm leading-relaxed mb-5">
                            Chauffar is more than a transportation service; it is a premium platform engineered for the executive experience. We believe that urban mobility should be an extension of one's professional standard—quiet, controlled, and exceptionally reliable.
                        </p>

                        <p className="text-foreground/60 text-sm leading-relaxed">
                            Founded on the principles of "Quiet Luxury," we prioritize substance over flash. Our network consists of elite professionals who understand that their role is to provide a sanctuary of productivity and calm amidst the chaos of the city.
                        </p>
                    </div>

                    {/* Right — image, takes more space */}
                    <div className="w-full md:w-[55%]">
                        <img
                            src="/whoweare.jpg"
                            alt="Chauffar branded vehicle"
                            className="w-full h-[320px] sm:h-[400px] md:h-[460px] rounded-2xl object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default WhoWeAre
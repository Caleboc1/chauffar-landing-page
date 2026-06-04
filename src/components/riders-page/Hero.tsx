function RidersHero() {
    return (
        <section className="relative w-full md:min-h-170 overflow-hidden pt-24">

            {/* Background image */}
            <img
                src="/ridersherobg.png"
                alt="About Chauffar background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content */}
            <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-10 sm:py-14 max-w-2xl" data-aos="fade-up">

                {/* Badge */}
                <div className="inline-block bg-[#0DFF91] text-black text-xs font-bold uppercase tracking-widest px-4 py-2 mb-6">
                   RIDE WITH CHAUFFER
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                  A Better Way to Ride
                </h1>

                {/* Subtext */}
                <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                Chauffar is always committed to give you a smoother ride experience from pickup to drop-off.
                </p>

            </div>
        </section>
    )
}

export default RidersHero

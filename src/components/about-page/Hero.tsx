function AboutHero() {
    return (
        <section className="relative w-full min-h-70 sm:min-h-80 overflow-hidden pt-20">

            {/* Background image */}
            <img
                src="/aboutherobg.png"
                alt="About Chauffar background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content */}
            <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-10 sm:py-14 max-w-2xl">

                {/* Badge */}
                <div className="inline-block bg-[#0DFF91] text-black text-xs font-bold uppercase tracking-widest px-4 py-2 mb-6">
                    About Us
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                    About Chauffer
                </h1>

                {/* Subtext */}
                <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                    Chauffar was built to create a more reliable, professional, and
                    stress-free way for people to move around the city.
                </p>

            </div>
        </section>
    )
}

export default AboutHero
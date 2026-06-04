function DriversHero() {
    return (
        <section className="relative w-full md:min-h-170 overflow-hidden pt-24">

            {/* Background image */}
            <img
                src="/driverherobg.png"
                alt="About Chauffar background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Content */}
            <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-10 sm:py-14 max-w-2xl" data-aos="fade-up">

                {/* Badge */}
                <div className="inline-block bg-[#0DFF91] text-black text-xs font-bold uppercase tracking-widest px-4 py-2 mb-6">
                   CHAUFFER DRIVER
                </div>

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-4">
                Make money driving with Chauffer
                </h1>

                {/* Subtext */}
                <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                Join a platform built around professionalism, quality riders, and a better driving experience.</p>

            </div>
        </section>
    )
}

export default DriversHero

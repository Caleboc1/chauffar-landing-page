function Accountability() {
    return (
        <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-6xl">

                {/* Heading */}
                <div className="mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                        Built on Accountability
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                        Our safety ecosystem is sustained by mutual respect and high professional standards. We believe transparency is the foundation of trust.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <div className="flex flex-col gap-4">
                        <div className="w-full h-50 sm:h-55 rounded-xl overflow-hidden bg-[#1a1a1a]">
                            <img
                                src="/accountability1.png"
                                alt="Rigorous Standards"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-[#0DFF91] text-sm font-semibold">
                            Rigorous Standards
                        </h3>
                        <p className="text-white/50 text-xs leading-relaxed">
                            Strict vehicle maintenance logs and chauffeur licensing requirements.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col gap-4">
                        <div className="w-full h-50 sm:h-55 rounded-xl overflow-hidden bg-[#1a1a1a]">
                            <img
                                src="/accountability2.png"
                                alt="Constant Monitoring"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-[#0DFF91] text-sm font-semibold">
                            Constant Monitoring
                        </h3>
                        <p className="text-white/50 text-xs leading-relaxed">
                            Anomaly detection technology that flags unexpected stops or route deviations.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col gap-4">
                        <div className="w-full h-50 sm:h-55 rounded-xl overflow-hidden bg-[#1a1a1a]">
                            <img
                                src="/accountability3.png"
                                alt="Incident Handling"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h3 className="text-[#0DFF91] text-sm font-semibold">
                            Incident Handling
                        </h3>
                        <p className="text-white/50 text-xs leading-relaxed">
                            Rapid response protocol with a neutral, thorough investigation process for all reports.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Accountability
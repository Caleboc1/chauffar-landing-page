import { Button } from "../ui/button"

function CTA() {
    return (
        <section className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl">

                {/* Card */}
                <div className="relative rounded-3xl overflow-hidden bg-[#005629] min-h-[340px] sm:min-h-[420px] md:min-h-[460px]">

                    {/* Left — text content */}
                    <div className="relative z-30 w-full md:w-[55%] p-8 sm:p-10 md:p-14">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-3 sm:mb-4">
                            Ready to Experience<br />Ride-Hailing Done<br />Right?
                        </h2>
                        <p className="text-white/70 text-sm mb-6 sm:mb-8 max-w-sm leading-relaxed">
                            Join Chauffar and experience reliability, professionalism, and true premium service.
                        </p>
                        <div className="flex flex-row flex-wrap gap-3">
                            <Button className="p-5 sm:p-6 text-sm text-black font-semibold hover:bg-[#00e07a] rounded-full px-5 sm:px-6">
                                Book Your First Ride
                            </Button>
                            <Button variant="outline" className="rounded-full p-5 sm:p-6 text-sm bg-white text-[#005629]">
                                Partner With Us
                            </Button>
                        </div>
                    </div>

                    {/* Yellow block — hidden on mobile, visible md+ */}
                    <div className="hidden md:block absolute bottom-0 right-0 w-[45%] h-[70%] bg-[#F5C842] rounded-tl-[40px] z-10" />

                    {/* Hands image — smaller and repositioned on mobile */}
                    <img
                        src="/hands.png"
                        alt="Chauffar app on phone"
                        className="absolute bottom-0 right-0 
                            h-[45%] sm:h-[60%] md:h-[90%]
                            w-auto object-contain object-bottom 
                            z-20 opacity-20 sm:opacity-40 md:opacity-100"
                    />

                </div>
            </div>
        </section>
    )
}

export default CTA
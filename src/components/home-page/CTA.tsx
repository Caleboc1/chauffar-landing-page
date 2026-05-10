import { Button } from "../ui/button"

function CTA() {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl">

                {/* Card */}
                <div className="relative rounded-3xl overflow-hidden bg-[#005629] min-h-115">

                    {/* Left — text content */}
                    <div className="relative z-10 w-full md:w-[55%] p-10 md:p-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                            Ready to Experience<br />Ride-Hailing Done<br />Right?
                        </h2>
                        <p className="text-white/70 text-sm mb-8 max-w-sm leading-relaxed">
                            Join Chauffar and experience reliability, professionalism, and true premium service.
                        </p>
                        <div className="flex flex-row gap-3">
                            <Button className="p-6 text-black font-semibold hover:bg-[#00e07a] rounded-full px-6">
                                Book Your First Ride
                            </Button>
                            <Button variant="outline" className="rounded-full p-6 bg-white text-[#005629]">
                                Partner With Us
                            </Button>
                        </div>
                    </div>

                    {/* Yellow block — wide, bottom right, behind hands */}
                    <div className="absolute bottom-0 right-0 w-[45%] h-[70%] bg-[#F5C842] rounded-tl-[40px] z-10" />

                    {/* Hands image — bottom right, in front of yellow block */}
                    <img
                        src="/hands.png"
                        alt="Chauffar app on phone"
                        className="absolute bottom-0 right-0 h-[90%] w-auto object-contain object-bottom z-20"
                    />

                </div>
            </div>
        </section>
    )
}

export default CTA
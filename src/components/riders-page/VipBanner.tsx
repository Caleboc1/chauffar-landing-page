
import { Button } from "../ui/button"
import Crown from "@/assets/svgIcons/Crown"

function VIPBanner() {
    return (
        <section className="relative w-full min-h-screen  overflow-hidden">

            {/* Background image */}
            <img
                src="/bannerbg.png"
                alt="Chauffar VIP fleet"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />
            {/* Content — centered */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full min-h-120 sm:min-h-140 px-4" data-aos="zoom-in">

                {/* Crown icon */}
                <Crown/>
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                    Chauffar VIP
                </h2>

                {/* Subtext */}
                <p className="text-white/70 text-sm leading-relaxed max-w-sm mb-8">
                    Every ride on Chauffar is backed by clear standards, real accountability, and systems designed to keep both passengers and drivers protected
                </p>

                {/* CTA */}
                <Button className="bg-[#0DFF91] text-black font-semibold hover:bg-[#00e07a] rounded-full px-8 py-5">
                    Book VIP Ride
                </Button>

            </div>
        </section>
    )
}

export default VIPBanner

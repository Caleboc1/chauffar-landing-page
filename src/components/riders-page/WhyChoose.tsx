import { useEffect, useRef, useState } from "react"

const slides = [
    {
        image: "/carousel1.png",
        title: "Reliable Pickups",
        description: "When you ride with Chauffar, the car shows up. No cancellations. No excuses. We value your time as much as you do.",
    },
    {
        image: "/carousel2.png",
        title: "Premium Rides",
        description: "Every vehicle in our fleet is maintained to the highest standards of cleanliness and mechanical integrity.",
    },
    {
        image: "/carousel3.png",
        title: "Transparent Pricing",
        description: "The price you see is the price you pay. No hidden fees, no off-app negotiations.",
    },
    {
        image: "/carousel4.png",
        title: "Professional Drivers",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever.",
    },
    {
        image: "/carousel5.png",
        title: "Safer Ride Experience",
        description: "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever.",
    },
]

const CARD_WIDTH = 280
const GAP = 16

function WhyChoose() {
    const trackRef = useRef<HTMLDivElement>(null)
    const [current, setCurrent] = useState(0)
    const [visibleCount, setVisibleCount] = useState(3)
    const maxIndex = slides.length - visibleCount

    // Update visibleCount based on screen width
    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) setVisibleCount(1)
            else if (window.innerWidth < 1024) setVisibleCount(2)
            else setVisibleCount(3)
        }
        update()
        window.addEventListener("resize", update)
        return () => window.removeEventListener("resize", update)
    }, [])

    const next = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1))

    useEffect(() => {
        const interval = setInterval(next, 3000)
        return () => clearInterval(interval)
    }, [current, maxIndex])

    useEffect(() => {
        if (!trackRef.current) return
        trackRef.current.scrollTo({
            left: current * (CARD_WIDTH + GAP),
            behavior: "smooth",
        })
    }, [current])

    // Reset current if it exceeds new maxIndex on resize
    useEffect(() => {
        if (current > maxIndex) setCurrent(0)
    }, [maxIndex])

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-8xl">

                {/* Heading + description */}
                <div className="flex flex-col  md:items-start mb-10">
                    <div className="md:w-[40%] mb-4 ">
                        <h1 className="text-3xl sm:text-3xl font-bold text-foreground leading-tight">
                            Why Riders Choose Chauffar
                        </h1>
                    </div>
                    <div className="">
                        <p className="text-foreground/50 text-sm leading-relaxed">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>

                {/* Carousel — no overflow-hidden so last card isn't clipped */}
                <div
                    ref={trackRef}
                    className="flex gap-4 overflow-x-auto scrollbar-none"
                    style={{ scrollSnapType: "x mandatory" }}
                >
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className="flex flex-col gap-3"
                            style={{
                                scrollSnapAlign: "start",
                                minWidth: `${CARD_WIDTH}px`,
                                width: `${CARD_WIDTH}px`,
                                flexShrink: 0,
                            }}
                        >
                            {/* Image */}
                            <div className="w-full h-65 rounded-xl overflow-hidden">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text */}
                            <h3 className="text-sm font-bold text-foreground">
                                {slide.title}
                            </h3>
                            <p className="text-xs text-foreground/50 leading-relaxed">
                                {slide.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChoose
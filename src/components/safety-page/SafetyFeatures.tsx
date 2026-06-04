import Caution from "@/assets/svgIcons/Caution"
import Contacts from "@/assets/svgIcons/Contacts"
import Location from "@/assets/svgIcons/Location"

const features = [
    {
        icon: <Caution />,
        title: "Emergency SOS",
        description: "Immediate access to emergency services with your location data automatically shared for rapid response.",
    },
    {
        icon: <Location />,
        title: "Trip Tracking",
        description: "Share your live trip status with loved ones so they can follow your journey in real-time.",
    },
    {
        icon: <Contacts />,
        title: "Emergency Contacts",
        description: "Nominate trusted contacts who will be notified instantly if you use the in-app emergency button.",
    },
    {
        icon: <Caution />,
        title: "Driver Verification",
        description: "Every chauffeur undergoes comprehensive background checks and regular performance audits.",
    },
    {
        icon: <Caution />,
        title: "Ride Records",
        description: "A permanent digital log of every trip, including route history and driver details, for your security.",
    },
    {
        icon: <Caution />,
        title: "Support Access",
        description: "Dedicated safety specialists are available 24/7 to assist with any concerns during or after your ride.",
    },
]

function SafetyFeatures() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F2F2F2" }}>
            <div className="container mx-auto max-w-6xl">

                {/* Heading */}
                <div className="text-center mb-12" data-aos="fade-up">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Designed with Safety in Mind
                    </h2>
                    <p className="text-foreground/50 text-sm leading-relaxed max-w-xl mx-auto">
                        From the moment you request a ride to the second you reach your destination, our technology works silently in the background. We integrate live GPS tracking, emergency assistance, and vetted professional chauffeurs to ensure the highest standards of luxury travel safety.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {features.map((feature, i) => (
                        <div
                            key={feature.title}
                            className="bg-white rounded-2xl p-6 flex flex-col gap-4"
                            data-aos="fade-up"
                            data-aos-delay={(i % 3) * 90}
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-[#f5f5f5] flex items-center justify-center text-foreground">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-bold text-foreground">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-foreground/50 text-xs leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default SafetyFeatures

import Badge from "@/assets/svgIcons/badge"
import EyeScan from "@/assets/svgIcons/eyescan"
import Ribbon from "@/assets/svgIcons/Ribbon"
import Shield from "@/assets/svgIcons/Shield"

const values = [
    {
        icon: <Badge />,
        title: "Reliability",
        description: "Passengers should be able to count on every ride. Punctuality isn't a goal; it is our baseline requirement.",
    },
    {
        icon: <Ribbon />,
        title: "Professionalism",
        description: "Drivers and riders deserve respectful, dignified experiences that honor their personal space and time.",
    },
    {
        icon: <EyeScan/>,
        title: "Transparency",
        description: "Clear pricing and honest communication at every step. We build trust through visibility and accountability.",
    },
    {
        icon: <Shield />,
        title: "Safety",
        description: "Advanced technology and rigorous vetting designed to protect both riders and drivers on every journey.",
    },
]

function Values() {
    return (
        <section className="bg-[#0C0C0C] text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-5xl">

                {/* Heading */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        What We Value
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed max-w-md mx-auto">
                        The principles that shape how Chauffar delivers safe, reliable, and professional ride experiences every day.
                    </p>
                </div>

                {/* Divider */}
                <hr className="border-white/10 mb-16" />

                {/* Values grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
                    {values.map((value, i) => (
                        <div key={value.title} className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay={i * 90}>

                            {/* Icon box */}
                            <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#0DFF91]">
                                {value.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-white text-base font-semibold">
                                {value.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/40 text-xs leading-relaxed">
                                {value.description}
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Values

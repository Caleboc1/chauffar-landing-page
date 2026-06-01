import { useState } from "react"
import { HiPlus, HiMinus } from "react-icons/hi"

const faqs = [
    {
        question: "How do I book a ride on Chauffar?",
        answer: "Download the Chauffar app, create an account, enter your pickup and drop-off location, choose your ride tier, and confirm your booking. A vetted driver will be assigned to you instantly.",
    },
    {
        question: "Are Chauffar drivers background checked?",
        answer: "Yes. Every driver on the Chauffar platform goes through a rigorous background check, document verification, and performance training before they're allowed to accept rides.",
    },
    {
        question: "How is pricing determined?",
        answer: "Chauffar uses fixed, transparent pricing. You'll see the full fare before you confirm your booking — no surge pricing, no hidden fees, no surprises at the end of your trip.",
    },
    {
        question: "What ride tiers are available?",
        answer: "Chauffar offers four tiers — Standard, Executive, Premium, and VIP — each designed for different needs, from everyday commutes to high-end executive travel.",
    },
    {
        question: "Can I schedule a ride in advance?",
        answer: "Yes. Chauffar allows you to schedule rides ahead of time so your driver is ready and waiting when you need them — perfect for airport runs, meetings, or events.",
    },
    {
        question: "What happens if my driver cancels?",
        answer: "Chauffar enforces strict driver accountability. In the rare event of a cancellation, you'll be immediately matched with another available driver at no extra cost.",
    },
]

function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggle = (i: number) => {
        setOpenIndex(openIndex === i ? null : i)
    }

    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-3xl">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                        Frequently Asked Question
                    </h2>
                    <p className="text-foreground/50 text-sm leading-relaxed max-w-sm mx-auto">
                        Every vehicle in our fleet is maintained to the highest standards of cleanliness and mechanical integrity.
                    </p>
                </div>

                {/* Accordion list */}
                <div className="flex flex-col gap-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="border border-gray-200 rounded-xl overflow-hidden bg-[#f7f7f7]"
                        >
                            {/* Question row */}
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                            >
                                <span className="text-sm font-medium text-foreground">
                                    {faq.question}
                                </span>
                                <span className="shrink-0 text-foreground/60">
                                    {openIndex === i
                                        ? <HiMinus size={18} />
                                        : <HiPlus size={18} />
                                    }
                                </span>
                            </button>

                            {/* Answer — expands/collapses */}
                            {openIndex === i && (
                                <div className="px-5 pb-5">
                                    <p className="text-sm text-foreground/50 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default FAQ
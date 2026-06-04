import { useState } from "react"
import { HiChevronRight } from "react-icons/hi"
import { HiMagnifyingGlass } from "react-icons/hi2"

const riderFaqs = [
    { question: "How do I book a ride on Chauffar?", answer: "Simply enter your pickup and destination, choose a ride option, and confirm your booking." },
    { question: "Can I schedule a ride in advance?", answer: "Yes, Chauffar allows you to schedule rides for a later date and time." },
    { question: "How do wallet payments work?", answer: "You can top up your wallet with Ride Credits and use them to pay for rides seamlessly." },
    { question: "Can I add multiple stops to a trip?", answer: "Yes, you can add multiple stops during the booking process." },
    { question: "What happens if my payment fails after a trip?", answer: "You'll be prompted to retry payment or choose another payment method before booking another ride." },
    { question: "How do I contact my driver?", answer: "You can call or chat with your driver directly from the trip screen." },
    { question: "Can I cancel a ride after booking?", answer: "Yes, rides can be canceled, though cancellation charges may apply in certain cases." },
    { question: "What safety features does Chauffar provide?", answer: "Chauffar includes ride tracking, emergency SOS, emergency contacts, and driver verification features." },
    { question: "How do I access Chauffar VIP?", answer: "You can switch to the VIP experience directly from the app to access premium ride options and personalized preferences." },
    { question: "Where can I view my trip history and receipts?", answer: "All completed trips and receipts are available in the Trips or Ride History section of your account." },
]

const driverFaqs = [
    { question: "How do I sign up as a Chauffar driver?", answer: "Download the app, complete your profile, submit your documents, and pass the verification process to get started." },
    { question: "What documents do I need to register?", answer: "You'll need a valid driver's license, vehicle registration, proof of insurance, and a recent background check clearance." },
    { question: "How do I receive ride requests?", answer: "Once online, ride requests appear automatically on your driver screen based on your location and availability." },
    { question: "How and when do I get paid?", answer: "Earnings are transferred to your linked bank account on a weekly basis, with instant payout options available." },
    { question: "Can I choose my own working hours?", answer: "Yes, you have full flexibility to go online and offline whenever you choose." },
    { question: "What happens if a passenger cancels?", answer: "If a passenger cancels after a certain threshold, you'll receive a cancellation fee to compensate for your time." },
    { question: "How does the rating system work?", answer: "Passengers rate your service after each trip. Maintaining a high rating keeps you eligible for premium ride tiers." },
    { question: "What should I do in an emergency during a trip?", answer: "Use the in-app SOS button to alert emergency services and Chauffar support simultaneously." },
    { question: "Can I drive for Chauffar VIP?", answer: "VIP is invitation-based. Top-rated drivers with excellent track records are selected to join the VIP fleet." },
    { question: "How do I report an issue with a trip?", answer: "Go to your trip history, select the relevant trip, and use the Report Issue option to contact support." },
]

function HelpCenter() {
    const [tab, setTab] = useState<"Rider" | "Driver">("Rider")
    const [search, setSearch] = useState("")
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = tab === "Rider" ? riderFaqs : driverFaqs

    const filtered = faqs.filter((f) =>
        f.question.toLowerCase().includes(search.toLowerCase()) ||
        f.answer.toLowerCase().includes(search.toLowerCase())
    )

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

    return (
        <section className="bg-white">

            {/* Hero — dark top */}
            <div className="bg-black text-white text-center py-16 pt-26 px-4">
                <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                    How Can We Help?
                </h1>
                <p className="text-white/50 text-sm mb-8 max-w-sm mx-auto leading-relaxed">
                    Find answers, manage ride issues, or contact support for assistance with your Chauffar experience.
                </p>

                {/* Search bar */}
                <div className="relative max-w-lg mx-auto">
                    <HiMagnifyingGlass
                        size={16}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40"
                    />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                            setOpenIndex(null)
                        }}
                        placeholder="Search for help topics, billing, or ride issues..."
                        className="w-full bg-white text-foreground text-sm rounded-full pl-10 pr-5 py-3.5 outline-none placeholder:text-foreground/40"
                    />
                </div>
            </div>

            {/* FAQ body */}
            <div className="px-4 sm:px-6 lg:px-8 py-16">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col md:flex-row gap-12 md:gap-16">

                        {/* Left — heading */}
                        <div className="w-full md:w-[35%] shrink-0">
                            <h2 className="text-2xl font-bold text-foreground leading-tight mb-4">
                                Frequently Asked<br />Question
                            </h2>
                            <p className="text-foreground/50 text-sm leading-relaxed">
                                Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>
                        </div>

                        {/* Right — toggle + accordion */}
                        <div className="w-full md:w-[65%] ">

                            {/* Rider / Driver toggle */}
                            <div className="flex flex-row bg-[#f2f2f2] rounded-full p-1 w-fit mb-6">
                                {(["Rider", "Driver"] as const).map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => {
                                            setTab(t)
                                            setOpenIndex(null)
                                            setSearch("")
                                        }}
                                        className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                                            tab === t
                                                ? "bg-[#0DFF91] text-black"
                                                : "text-foreground/50 hover:text-foreground"
                                        }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>

                            {/* FAQ list */}
                            <div className="flex flex-col gap-2">
                                {filtered.length === 0 ? (
                                    <p className="text-foreground/40 text-sm py-6 text-center">
                                        No results found for "{search}"
                                    </p>
                                ) : (
                                    filtered.map((faq, i) => (
                                        <div
                                            key={i}
                                            className="border border-gray-100 rounded-xl overflow-hidden bg-white shadow-sm"
                                        >
                                            <button
                                                onClick={() => toggle(i)}
                                                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                                            >
                                                <span className="text-sm font-medium text-foreground">
                                                    {faq.question}
                                                </span>
                                                <HiChevronRight
                                                    size={18}
                                                    className={`flex-shrink-0 text-foreground/40 transition-transform duration-200 ${
                                                        openIndex === i ? "rotate-90" : ""
                                                    }`}
                                                />
                                            </button>
                                            {openIndex === i && (
                                                <div className="px-5 pb-4">
                                                    <p className="text-sm text-foreground/50 leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HelpCenter
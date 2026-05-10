import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { FaApple } from "react-icons/fa"
import { IoLogoGooglePlaystore } from "react-icons/io5"
import { MdLanguage } from "react-icons/md"
import Logo from "./svgIcons/Logo"

const footerLinks = [
    {
        heading: "Company",
        links: ["About Chauffar", "Mission", "Careers", "Blog"],
    },
    {
        heading: "Product",
        links: ["Chauffar Drive", "Rides"],
    },
    {
        heading: "Support",
        links: ["Riders", "Drivers"],
    },
    {
        heading: "Safety",
        links: ["Rider safety", "Driver safety"],
    },
    {
        heading: "Resources",
        links: ["Help center", "Term & Conditions", "Privacy", "Company Policy", "Security"],
    },
]

const socialLinks = [
    { icon: <FaFacebookF size={16} />, label: "Facebook" },
    { icon: <FaXTwitter size={16} />, label: "X" },
    { icon: <FaInstagram size={16} />, label: "Instagram" },
    { icon: <FaLinkedinIn size={16} />, label: "LinkedIn" },
    { icon: <FaTiktok size={16} />, label: "TikTok" },
]

function AppStoreButtons() {
    return (
        <div className="flex flex-row gap-3">
            <button className="flex items-center gap-2 border border-white/30 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                <IoLogoGooglePlaystore size={20} className="text-white" />
                <span className="flex flex-col text-left leading-tight">
                    <span className="text-[9px] text-white/60 uppercase tracking-wide">Get it on</span>
                    <span className="text-xs font-semibold text-white">Google Play</span>
                </span>
            </button>
            <button className="flex items-center gap-2 border border-white/30 rounded-lg px-3 py-2 hover:bg-white/10 transition-colors">
                <FaApple size={20} className="text-white" />
                <span className="flex flex-col text-left leading-tight">
                    <span className="text-[9px] text-white/60 uppercase tracking-wide">Download on the</span>
                    <span className="text-xs font-semibold text-white">App Store</span>
                </span>
            </button>
        </div>
    )
}

function Footer() {
    return (
        <footer className="bg-black text-white px-4 sm:px-6 lg:px-8 pt-12 pb-8">
            <div className="container mx-auto max-w-5xl">

                {/* Logo + socials */}
                <div className="mb-8">
                    <Logo />
                    <div className="flex flex-row gap-4 mt-4">
                        {socialLinks.map((s) => (
                            <button
                                key={s.label}
                                aria-label={s.label}
                                className="text-white/70 hover:text-white transition-colors"
                            >
                                {s.icon}
                            </button>
                        ))}
                    </div>
                </div>

                <hr className="border-white/10 mb-10" />

                {/* Link columns */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
                    {footerLinks.map((col) => (
                        <div key={col.heading}>
                            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                                {col.heading}
                            </p>
                            <ul className="flex flex-col gap-2.5">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-white/80 text-sm hover:text-white transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className="border-white/10 mb-10" />

                {/* App download section */}
                <div className="flex flex-col md:flex-row gap-12 mb-12">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
                            Download Driver App
                        </p>
                        <AppStoreButtons />
                    </div>
                    <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
                            Download Customer App
                        </p>
                        <AppStoreButtons />
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="flex flex-row items-center justify-between">
                    <button className="flex items-center gap-1.5 text-white/50 text-sm hover:text-white transition-colors">
                        <MdLanguage size={16} />
                        English
                        <span className="text-xs">▾</span>
                    </button>
                    <p className="text-white/30 text-xs">
                        © 2017–2026 Chauffar™
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
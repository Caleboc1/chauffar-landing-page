import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { Link, NavLink } from 'react-router-dom'
import { Button } from './ui/button'

const navigation = [
    { type: 'link', label: 'About Us', href: '/about' },
    { type: 'link', label: 'Riders', href: '/riders' },
    { type: 'link', label: 'Drivers', href: '/drivers' },
    { type: 'link', label: 'Safety', href: '/safety' },
    { type: 'link', label: 'Support', href: '/support' },
    { type: 'action', label: 'Download App' },
] as const

function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 z-50 w-full bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link to="/" onClick={() => setOpen(false)}>
                        <img src="/logo.png" alt="Chauffar logo" className="h-8 w-auto" />
                    </Link>

                    <nav className="hidden items-center gap-4 md:flex" aria-label="Primary navigation">
                        {navigation.map((item) => (
                            item.type === 'link' ? (
                                <NavLink
                                    key={item.label}
                                    to={item.href}
                                    className={({ isActive }) =>
                                        `text-sm transition-colors ${
                                            isActive
                                                ? 'font-semibold text-[#1a5c35]'
                                                : 'text-foreground hover:text-[#1a5c35]'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ) : (
                                <Button key={item.label} className="rounded-full px-4 py-6 text-foreground">
                                    {item.label}
                                </Button>
                            )
                        ))}
                    </nav>

                    <button
                        type="button"
                        className="p-1 text-foreground md:hidden"
                        onClick={() => setOpen((current) => !current)}
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                        aria-controls="mobile-navigation"
                    >
                        {open ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            {open && (
                <div id="mobile-navigation" className="border-t border-gray-200 bg-white shadow-lg md:hidden">
                    <nav
                        className="container mx-auto flex flex-col gap-1 px-4 py-6"
                        aria-label="Mobile navigation"
                    >
                        {navigation.map((item) => (
                            item.type === 'link' ? (
                                <NavLink
                                    key={item.label}
                                    to={item.href}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `border-b border-gray-200 py-3 text-base transition-colors ${
                                            isActive
                                                ? 'font-semibold text-[#1a5c35]'
                                                : 'text-foreground hover:text-[#1a5c35]'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ) : (
                                <div key={item.label} className="pt-4">
                                    <Button
                                        onClick={() => setOpen(false)}
                                        className="w-full rounded-full bg-[#0DFF91] px-6 py-6 font-semibold text-black hover:bg-[#00e07a]"
                                    >
                                        {item.label}
                                    </Button>
                                </div>
                            )
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Navbar


import { Button } from './ui/button'
import { HiMenu, HiX } from 'react-icons/hi'
import { useState } from 'react'

const navLinks = [
    { label: 'About Us', href: '/' },
    { label: 'Why Chauffar', href: '/about' },
    { label: 'Drivers', href: '/drivers' },
    { label: 'Riders', href: '/riders' },
    { label: 'Safety', href: '/safety' },
    { label: 'Support', href: '/support' },
    { label: 'Help', href: '/help' },
]


function Navbar() {
    const [open, setOpen] = useState(false);
  return (
    <header className='fixed top-0 w-full bg-transparent backdrop-blur-md z-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div>
                  <a href="/">
            <img src="/logo.png" alt="Chauffar logo"
            className='h-8 w-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' /></a>    
                </div>
              
              {/* Desktop nav */}
              <nav className='hidden md:flex items-center space-x-4'>
                        {navLinks.map((link) => (
                            <a key={link.label} href={link.href} className='text-sm hover:text-white/70 transition-colors'>
                                {link.label}
                            </a>
                        ))}
                        <Button className='rounded-full px-4 py-6 text-foreground'>Download App</Button>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        className='md:hidden text-foreground p-1'
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className='md:hidden bg-black/95 backdrop-blur-md border-t border-white/10'>
                    <nav className='container mx-auto px-4 py-6 flex flex-col gap-1'>
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className='text-white/80 hover:text-white text-base py-3 border-b border-white/10 last:border-none transition-colors'
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className='pt-4'>
                            <Button className='rounded-full px-6 py-6 w-full bg-[#0DFF91] text-black font-semibold hover:bg-[#00e07a]'>
                                Download App
                            </Button>
                        </div>
                    </nav>
            </div>)}
    </header>
  )
}

export default Navbar

import { Button } from './ui/button'


function Navbar() {
  return (
    <header className='fixed top-0 w-full bg-transparent backdrop-blur-md z-50'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div>
                  <a href="/">
            <img src="/public/logo.png" alt="Chauffar logo"
            className='h-8 w-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' /></a>    
                </div>
              
              <nav className='hidden md:flex items-center space-x-4'>
                <a href="/" className=''>About Us</a>
                <a href="/about" className=''>Why Chauffar</a>
                <a href="/contact" className=''>Drivers</a>
                <a href="/contact" className=''>Riders</a>
                <a href="/contact" className=''>Safety</a>
                <a href="/contact" className=''>Support</a>
                <a href="/contact" className=''>Help</a>

                <Button className='rounded-full px-4 py-6 text-foreground'>Download App</Button>
              </nav>
            </div>
            
        </div>
    </header>
  )
}

export default Navbar
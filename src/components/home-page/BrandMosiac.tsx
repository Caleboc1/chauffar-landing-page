function BrandMosaic() {
    return (
        <section className="w-full overflow-hidden">

            {/* Mobile — stacked vertically */}
            <div className="flex flex-col md:hidden">
                <div className="w-full h-[260px]">
                    <img src="/frame1.png" alt="Chauffar branded vehicle" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[260px]">
                    <img src="/frame2.jpg" alt="Chauffar street branding" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[260px]">
                    <img src="/frame3.png" alt="Chauffar branded vehicle" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Desktop — side by side */}
            <div className="hidden md:flex flex-row h-[420px]">
                <div className="w-[40%] flex-shrink-0">
                    <img src="/frame1.png" alt="Chauffar branded vehicle" className="w-full h-full object-cover" />
                </div>
                <div className="w-[20%] flex-shrink-0">
                    <img src="/frame2.jpg" alt="Chauffar street branding" className="w-full h-full object-cover" />
                </div>
                <div className="w-[40%] flex-shrink-0">
                    <img src="/frame3.png" alt="Chauffar branded vehicle" className="w-full h-full object-cover" />
                </div>
            </div>

        </section>
    )
}

export default BrandMosaic
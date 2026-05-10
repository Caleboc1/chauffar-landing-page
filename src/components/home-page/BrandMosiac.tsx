function BrandMosaic() {
    return (
        <section className="w-full overflow-hidden">
            <div className="flex flex-row h-[420px]">

                {/* Frame 1 — wide left panel */}
                <div className="w-[40%] flex-shrink-0">
                    <img
                        src="/frame1.png"
                        alt="Chauffar branded vehicle"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Frame 2 — narrow tall center */}
                <div className="w-[20%] flex-shrink-0">
                    <img
                        src="/frame2.jpg"
                        alt="Chauffar street branding"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Frame 3 — wide right panel */}
                <div className="w-[40%] flex-shrink-0">
                    <img
                        src="/frame3.png"
                        alt="Chauffar branded vehicle"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </section>
    )
}

export default BrandMosaic
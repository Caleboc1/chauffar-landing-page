function BrandMosaic() {
    return (
        <section className="w-full overflow-hidden">
            {/* Mobile: all images stack at their natural aspect ratios. */}
            <div className="flex flex-col md:hidden">
                <img
                    src="/mosaic.png"
                    alt="Chauffar brand mosaic"
                    className="block h-auto w-full"
                    data-aos="fade-up"
                />
                <img
                    src="/mosaic1.png"
                    alt="Chauffar brand mosaic"
                    className="block h-auto w-full"
                    data-aos="fade-up"
                    data-aos-delay="100"
                />
                <img
                    src="/mosaic2.png"
                    alt="Chauffar brand mosaic"
                    className="block h-auto w-full"
                    data-aos="fade-up"
                    data-aos-delay="200"
                />
            </div>

            {/* Desktop: two stacked images on the left, one full-height image on the right. */}
            <div className="hidden grid-cols-2 md:grid">
                <div className="flex min-w-0 flex-col" data-aos="fade-right">
                    <img
                        src="/mosaic.png"
                        alt="Chauffar brand mosaic"
                        className="block h-auto w-full"
                    />
                    <img
                        src="/mosaic1.png"
                        alt="Chauffar brand mosaic"
                        className="block h-auto w-full"
                    />
                </div>
                <div className="min-w-0" data-aos="fade-left" data-aos-delay="100">
                    <img
                        src="/mosaic2.png"
                        alt="Chauffar brand mosaic"
                        className="block h-auto w-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default BrandMosaic

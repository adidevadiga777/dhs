import React from 'react';
import bladeImg from '../../assets/blade.png';
import forehandImg from '../../assets/forhand.png';
import backhandImg from '../../assets/backhand.webp';

const setupItems = [
    {
        id: 'blade',
        title: 'Blade — Hurricane Long 5',
        description:
            "A 7-ply pure wood blade engineered for Ma Long's all-round offensive style. It delivers a soft, controlled feel on the swing with surprising power on contact — built for players who want precision without sacrificing speed.",
        image: bladeImg,
        alt: 'DHS Hurricane Long 5 Blade',
        imageOnRight: false,
    },
    {
        id: 'forehand',
        title: 'Forehand — Hurricane 3 National',
        description:
            "The rubber behind Ma Long's signature heavy topspin. Tacky and high-friction, it grips the ball for maximum spin generation, letting him open up rallies and finish points with the same stroke.",
        image: forehandImg,
        alt: 'DHS Hurricane 3 National Forehand Rubber',
        imageOnRight: true,
    },
    {
        id: 'backhand',
        title: 'Backhand — Hurricane 3 National (Blue Sponge)',
        description:
            "Specially crafted with DHS's signature blue sponge for enhanced catapult effect and precision control on backhand drives and counter-loops.",
        image: backhandImg,
        alt: 'DHS Hurricane 3 National Blue Sponge Backhand Rubber',
        imageOnRight: false,
    },
];

const Info = () => {
    return (
        <section className="w-full bg-black text-white pt-2 pb-20 md:py-24 px-6 sm:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-28">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-10 h-px bg-amber-400 block" />
                        <span className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase">
                            Double Happiness
                        </span>
                        <span className="w-10 h-px bg-amber-400 block" />
                    </div>

                    <h2 className="font-black uppercase text-white tracking-tighter text-4xl sm:text-5xl md:text-6xl mb-6">
                        Ma Long's Setup
                    </h2>

                    <p className="text-white/70 text-sm sm:text-base md:text-lg font-normal leading-relaxed">
                        Ma Long — five-time World Champion and the most decorated player in table tennis history — trusts DHS equipment built for total control and explosive attack. Here's what's in his bag:
                    </p>
                </div>

                {/* Product Layout */}
                <div className="space-y-24 md:space-y-32">
                    {setupItems.map((item) => (
                        <div
                            key={item.id}
                            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
                        >
                            {/* Image Container */}
                            <div
                                className={`flex justify-center items-center ${item.imageOnRight ? 'md:order-2' : 'md:order-1'
                                    }`}
                            >
                                <div className="relative w-full max-w-sm md:max-w-md flex justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="relative w-full h-auto max-h-[320px] md:max-h-[380px] object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
                                    />
                                </div>
                            </div>

                            {/* Text Content */}
                            <div
                                className={`flex flex-col items-start ${item.imageOnRight ? 'md:order-1' : 'md:order-2'
                                    }`}
                            >
                                <h3 className="font-black uppercase text-2xl sm:text-3xl lg:text-4xl tracking-tight text-white mb-4">
                                    {item.title}
                                </h3>

                                <p className="text-white/75 font-normal leading-relaxed text-sm sm:text-base md:text-lg mb-8 max-w-xl">
                                    {item.description}
                                </p>

                                <a
                                    href="#buy"
                                    className="bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-black font-bold text-xs sm:text-sm uppercase tracking-[0.15em] px-8 py-4 transition-all duration-200 inline-flex items-center gap-3 shadow-lg group/btn"
                                >
                                    <span>Buy Now</span>
                                    <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-transform duration-200 group-hover/btn:translate-x-1"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Info;



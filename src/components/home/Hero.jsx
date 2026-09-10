import React from 'react';
import heroBg from '../../assets/herobg.png';
import maLongBg from '../../assets/malongbg.png';

const Hero = () => {
    return (
        <section
            className="relative w-full overflow-hidden"
            style={{ minHeight: 'calc(100vh - 68px)', backgroundColor: '#6b0a0a' }}
        >
            {/* Background — full opacity, let it breathe */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${heroBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom center',
                }}
            />


            {/* Ma Long — center-right, full brightness, mid height */}
            <div
                className="absolute hidden lg:block pointer-events-none select-none"
                style={{
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '46%',
                    zIndex: 2,
                }}
            >
                <img
                    src={maLongBg}
                    alt=""
                    aria-hidden="true"
                    className="w-full h-auto object-contain"
                    style={{
                        opacity: 0.3,
                        filter: 'drop-shadow(-15px 0 40px rgba(0, 0, 0, 0.8))',
                    }}
                />
            </div>

            {/* ─── Content ─── */}
            <div
                className="relative flex flex-col"
                style={{ minHeight: 'calc(100vh - 68px)', zIndex: 10 }}
            >
                {/* Main body — vertically centered */}
                <div className="flex-1 flex items-center">
                    <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-12">

                        {/* Brand line */}
                        <div className="flex items-center gap-3 mb-10">
                            <span className="w-10 h-px bg-amber-400 block" />
                            <span className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase">
                                红双喜 · Double Happiness · Since 1959
                            </span>
                        </div>

                        {/* Headline */}
                        <h1
                            className="font-black uppercase text-white leading-none tracking-tighter mb-7"
                            style={{ fontSize: 'clamp(3rem, 8vw, 7.5rem)', maxWidth: '12ch' }}
                        >
                            Play Like
                            <br />
                            <span style={{
                                WebkitTextStroke: '3px #f59e0b',
                                color: 'transparent',
                                display: 'block',
                            }}>
                                A Legend.
                            </span>
                        </h1>

                        {/* Description */}
                        <p
                            className="text-white/70 font-normal leading-loose mb-10"
                            style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)', letterSpacing: '0.02em' }}
                        >
                            The blade of Ma Long. The rubber of Wang Hao.
                            <br />
                            Equipment trusted by 90% of Olympic champions.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#"
                                className="bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-black font-bold text-sm uppercase tracking-[0.15em] px-8 py-4 transition-colors duration-150 inline-flex items-center gap-3"
                            >
                                Shop Equipment
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer stat bar */}
                <div
                    className="w-full"
                >
                    <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 xl:px-20 py-10 flex flex-wrap gap-8">
                        {[
                            { val: '#1', label: 'Global TT Brand', gold: true },
                            { val: '1959', label: 'Founded' },
                            { val: '60+', label: 'Years of Excellence' },
                            { val: '40+', label: 'Olympic Medals' },
                        ].map(({ val, label, gold }, i) => (
                            <div key={i} className="flex items-baseline gap-2">
                                <span className={`text-xl font-black ${gold ? 'text-amber-400' : 'text-white'}`}>{val}</span>
                                <span className="text-white/40 text-xs uppercase tracking-widest">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
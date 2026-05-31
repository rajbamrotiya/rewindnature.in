import { useEffect, useState } from 'react';
import { router } from '@inertiajs/react';

export default function PageLoader() {
    // Start as loading and visible to show a premium transition on initial full page load/refresh
    const [loading, setLoading] = useState(true);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Smoothly fade out the initial page load loader after React mounts
        const initialTimer = setTimeout(() => {
            setLoading(false);
            const initialFadeTimer = setTimeout(() => {
                setVisible(false);
            }, 300);
            return () => clearTimeout(initialFadeTimer);
        }, 600);

        let delayTimer: ReturnType<typeof setTimeout>;
        let fadeOutTimer: ReturnType<typeof setTimeout>;

        const startListener = () => {
            clearTimeout(fadeOutTimer);
            clearTimeout(initialTimer);
            // Show loader on navigations that take longer than 50ms
            delayTimer = setTimeout(() => {
                setVisible(true);
                // Allow DOM to update before triggering transition
                setTimeout(() => setLoading(true), 10);
            }, 50);
        };

        const finishListener = () => {
            clearTimeout(delayTimer);
            setLoading(false);
            // Maintain visibility during the opacity fade-out animation
            fadeOutTimer = setTimeout(() => {
                setVisible(false);
            }, 300); // Matches transition-all duration-300
        };

        const unsubscribeStart = router.on('start', startListener);
        const unsubscribeFinish = router.on('finish', finishListener);

        return () => {
            clearTimeout(initialTimer);
            clearTimeout(delayTimer);
            clearTimeout(fadeOutTimer);
            unsubscribeStart();
            unsubscribeFinish();
        };
    }, []);

    if (!visible) {
        return null;
    }

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/80 backdrop-blur-2xl transition-all duration-300 ${
                loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            {/* Ambient glowing organic blob in brand colors */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-gradient-to-tr from-emerald-500/20 to-orange-500/15 animate-blob blur-3xl pointer-events-none" />

            {/* Background Floating Leaves / Nature Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Leaf 1 */}
                <svg className="absolute top-1/4 left-1/6 size-6 text-emerald-600/30 animate-[bounce_6s_infinite_ease-in-out]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L7.58,20.28C9.5,21.1 11.5,21 13,20C17,17 19.5,12 21,8H17M13,16C11,16 9,15 8,13C10,11 13,9 16,9C15,11 14,14 13,16Z" />
                </svg>
                {/* Leaf 2 */}
                <svg className="absolute bottom-1/4 right-1/6 size-8 text-emerald-700/25 animate-[bounce_8s_infinite_ease-in-out_1s]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L7.58,20.28C9.5,21.1 11.5,21 13,20C17,17 19.5,12 21,8H17M13,16C11,16 9,15 8,13C10,11 13,9 16,9C15,11 14,14 13,16Z" />
                </svg>
                {/* Soft Spark 1 */}
                <div className="absolute top-1/3 right-1/4 size-3 bg-orange-400/30 rounded-full blur-xs animate-[pulse_3s_infinite]" />
                {/* Soft Spark 2 */}
                <div className="absolute bottom-1/3 left-1/4 size-2 bg-emerald-400/40 rounded-full blur-xs animate-[pulse_4s_infinite_2s]" />
            </div>

            {/* Responsive Wobbling Suspended Logo & Ripples Area */}
            <div className="relative flex items-center justify-center h-72 sm:h-80 md:h-96 w-full select-none">
                
                {/* Responsive Concentric Water Wave Ripples radiating outwards */}
                <div className="absolute top-1/2 left-1/2 size-56 sm:size-72 md:size-80 rounded-full border border-emerald-500/25 animate-ripple [animation-delay:0s] pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 size-56 sm:size-72 md:size-80 rounded-full border border-orange-400/15 animate-ripple [animation-delay:1s] pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 size-56 sm:size-72 md:size-80 rounded-full border border-emerald-400/10 animate-ripple [animation-delay:2s] pointer-events-none"></div>

                {/* Wobbling / Suspended Logo System */}
                <div className="relative animate-wobble">
                    
                    {/* Orbiting Orange Firefly 1 (Clockwise) */}
                    <div className="absolute inset-0 -m-3 sm:-m-4 animate-[spin_5s_linear_infinite] pointer-events-none">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-2.5 sm:size-3 rounded-full bg-orange-500 shadow-[0_0_12px_#f97316,0_0_22px_#f97316]"></div>
                        {/* Soft guide line */}
                        <div className="absolute inset-0 rounded-full border border-orange-400/15"></div>
                    </div>

                    {/* Orbiting Emerald Firefly 2 (Counter-Clockwise) */}
                    <div className="absolute inset-0 -m-1.5 sm:-m-2 animate-[spin_3.5s_linear_infinite_reverse] pointer-events-none">
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-2 sm:size-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981,0_0_22px_#10b981]"></div>
                        {/* Soft guide line */}
                        <div className="absolute inset-0 rounded-full border border-emerald-600/10"></div>
                    </div>

                    {/* Circular Logo Wrapper */}
                    <div className="flex aspect-square size-40 sm:size-52 md:size-64 items-center justify-center rounded-full bg-white border border-emerald-100/80 p-7 sm:p-9 md:p-12 shadow-[0_8px_30px_rgba(4,47,31,0.04)] relative z-10">
                        <img 
                            src="/Logo.png" 
                            alt="Rewind Nature Logo" 
                            className="size-full object-contain"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center gap-3.5 w-full relative z-20 mt-4">
                {/* Thin responsive progress indicator bar in brand colors */}
                <div className="w-36 sm:w-44 md:w-52 h-[3px] bg-stone-100 rounded-full overflow-hidden relative">
                    <div className="absolute top-0 bottom-0 left-0 w-1/3 bg-gradient-to-r from-emerald-600 via-orange-400 to-emerald-600 rounded-full animate-infinite-loading"></div>
                </div>

                {/* Custom brand-aligned load text */}
                <span className="text-xs sm:text-sm font-extrabold tracking-[0.35em] bg-gradient-to-r from-emerald-950 via-emerald-800 to-emerald-950 bg-clip-text text-transparent uppercase mt-1.5 animate-pulse">
                    Rewinding Nature...
                </span>
            </div>
        </div>
    );
}

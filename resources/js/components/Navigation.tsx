import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Fruits', href: '/fruits' },
        { name: 'Contact', href: '/contact' },
        { name: 'Schedule', href: '/schedule' },
    ];

    return (
        <motion.nav
            className={`fixed top-0 z-50 w-full transition-all duration-500 ${
                isScrolled
                    ? 'bg-white/90 dark:bg-stone-900/90 backdrop-blur-md shadow-sm border-b border-emerald-950/10 py-2 sm:py-3'
                    : 'bg-transparent py-4 sm:py-6'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1, type: 'spring', stiffness: 120, damping: 20 }}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo: Dynamic scale on scroll */}
                    <motion.div
                        className="shrink-0 flex items-center"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                    >
                        <Link href="/">
                            <img
                                src="/Logo.png"
                                alt="Rewind Nature Farm"
                                className={`w-auto object-contain drop-shadow-sm transition-all duration-500 ${
                                    isScrolled 
                                        ? 'h-14 md:h-16 brightness-100 invert-0' 
                                        : 'h-20 md:h-24 brightness-0 invert'
                                }`}
                            />
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-6 md:flex">
                        {navLinks.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                whileHover={{ y: -1 }}
                            >
                                <Link
                                    href={item.href}
                                    className={`group relative px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${
                                        isScrolled
                                            ? 'text-emerald-950 hover:text-orange-600 hover:bg-emerald-50/50'
                                            : 'text-white hover:text-orange-400 hover:bg-white/10'
                                    }`}
                                >
                                    {item.name}
                                    {/* Centering expanding underline */}
                                    <span
                                        className={`absolute bottom-2 left-4 right-4 h-0.5 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                                            isScrolled ? 'bg-orange-500' : 'bg-orange-400'
                                        }`}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Link
                                href="/farmhouse"
                                className="flex items-center gap-2.5 rounded-full bg-emerald-800 hover:bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_15px_rgba(6,78,59,0.15)] hover:shadow-[0_6px_20px_rgba(6,78,59,0.25)] hover:scale-[1.03] active:scale-95 transition-all duration-300"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                Farmhouse (Soon)
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className={`md:hidden rounded-full p-2.5 transition-colors ${
                            isScrolled
                                ? 'hover:bg-emerald-50/50'
                                : 'hover:bg-white/10'
                        }`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg
                            className={`h-6 w-6 transition-colors ${
                                isScrolled ? 'text-emerald-950' : 'text-white'
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                            />
                        </svg>
                    </motion.button>
                </div>

                {/* Mobile Navigation Menu */}
                <motion.div
                    className="overflow-hidden md:hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isMobileMenuOpen ? 'auto' : 0,
                        opacity: isMobileMenuOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <div className="space-y-1.5 border-t border-stone-200/50 dark:border-stone-800/30 pb-4 pt-3 bg-white/90 dark:bg-stone-900/90 backdrop-blur-xl rounded-b-3xl px-2 mt-2 shadow-lg">
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block rounded-2xl px-4 py-3 text-base font-bold text-emerald-950 dark:text-emerald-50 transition-colors hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 hover:text-emerald-700 dark:hover:text-emerald-400"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="pt-2 px-2">
                            <Link
                                href="/farmhouse"
                                className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-emerald-800 px-4 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                                Farmhouse (Soon)
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.nav>
    );
}

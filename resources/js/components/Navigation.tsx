import { Link } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Fruits', href: '/fruits' },
    { name: 'Farmhouse', href: '/farmhouse' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-b border-stone-200/50'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.1, type: 'spring', stiffness: 120, damping: 20 }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
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
                className="h-24 md:h-32 w-auto object-contain drop-shadow-sm"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={item.href}
                  className={`relative text-sm font-semibold tracking-wide transition-colors ${
                    isScrolled
                      ? 'text-emerald-950 hover:text-orange-600'
                      : 'text-stone-800 hover:text-orange-500'
                  }`}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 w-0 bg-orange-500"
                    whileHover={{ w: '100%' }}
                    transition={{ duration: 0.2 }}
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
                className="flex items-center gap-2 rounded-full bg-emerald-800 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-emerald-700 hover:shadow-lg hover:ring-2 hover:ring-emerald-700/50 hover:ring-offset-2"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse"></span>
                Farmhouse (Soon)
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden rounded-full p-2 hover:bg-stone-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className={`h-7 w-7 transition-colors ${
                isScrolled ? 'text-emerald-950' : 'text-stone-800'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
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
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="space-y-1 border-t border-stone-200/50 pb-4 pt-2 bg-white/50 backdrop-blur-xl rounded-b-2xl px-2">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-base font-medium text-emerald-950 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 px-2">
              <Link
                href="/farmhouse"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-800 px-4 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse"></span>
                Farmhouse (Soon)
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}


import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Head } from '@inertiajs/react'

export default function Welcome() {
  const [isMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=2000&q=80',
      title: 'Rewind Nature Farm',
      subtitle: "Experience the pristine beauty of Gir's lush landscape, home to the majestic Asiatic Lion."
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1635716279493-d1e30afc25a0?auto=format&fit=crop&w=2000&q=80',
      title: 'Premium Kesar Mangoes',
      subtitle: 'Taste the golden sweetness of our organic, sun-kissed orchards.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=2000&q=80',
      title: 'Serene Farmhouse Retreats',
      subtitle: 'Escape the city and reconnect with nature in our luxury cottages.'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const slideInRightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  const scaleHoverVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  }

  return (
    <div className="min-h-screen overflow-hidden bg-stone-50 text-emerald-900">
      <Head>
        <title>Rewind Nature Farm | Gir Forest Farmhouse & Organic Fruits</title>
        <meta name="description" content="Welcome to Rewind Nature Farm in Gir, Gujarat. Discover pristine farmhouse retreats and premium organic Kesar mangoes from our sun-kissed orchards." />
      </Head>
      <Navigation />
      {/* ===== HERO SECTION ===== */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-emerald-950"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 h-full w-full"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </AnimatePresence>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/70 via-emerald-900/50 to-stone-900/70" />

        {/* Hero Content */}
        <div className="relative z-10 flex w-full flex-col items-center justify-center px-4 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <h1 className="mb-6 font-serif text-5xl font-bold text-white sm:text-6xl lg:text-7xl drop-shadow-xl">
                {slides[currentSlide].title}
              </h1>
              <p className="mb-10 text-lg font-medium text-stone-200 sm:text-xl drop-shadow-md">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button
              onClick={() => scrollToSection('fruits')}
              className="group flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600 hover:shadow-orange-500/30 active:scale-95"
            >
              Order Fruits
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollToSection('farmhouse')}
              className="rounded-full border-2 border-white/80 bg-white/10 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-white hover:text-emerald-950 active:scale-95"
            >
              Farmhouse (Soon)
            </button>
          </motion.div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-24 z-20 flex gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'w-8 bg-orange-500' : 'w-2 bg-white/50 hover:bg-white/90'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="h-8 w-8 text-white/80 hover:text-white transition-colors" />
        </motion.div>
      </section>

      {/* ===== ABOUT / LOCATION SECTION ===== */}
      <section id="about" className="relative bg-stone-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text Content */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideInLeftVariants}
            >
              <h2 className="font-serif text-3xl font-bold text-emerald-900 sm:text-4xl">
                Nestled in the Heart of Gir
              </h2>

              <p className="text-lg text-emerald-800">
                Rewind Nature Farm sits in the pristine Gir region of Gujarat, where lush forests
                meet agricultural excellence. Our location offers the perfect blend of natural
                beauty and sustainable farming practices.
              </p>

              <p className="text-lg text-emerald-800">
                Every mango harvest celebrates the unique terroir of Gir, and every stay on our
                farm is a journey back to nature. Whether you're seeking premium fruit or a
                peaceful retreat, Gir's magic awaits.
              </p>

              <motion.div
                className="flex gap-4 pt-4"
                whileHover={{ x: 5 }}
              >
                <a
                  href="https://share.google/iHLlAr07emFNLXArf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-emerald-900 px-6 py-2 text-stone-50 font-semibold transition hover:bg-emerald-950 hover:shadow-lg"
                >
                  Find Us on Google Maps
                </a>
              </motion.div>
            </motion.div>

            {/* Image Placeholder */}
            <motion.div
              className="relative aspect-square overflow-hidden rounded-lg shadow-xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={slideInRightVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?auto=format&fit=crop&w=800&q=80"
                alt="Gir Lion"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-emerald-900/30 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== OFFERINGS SECTION ===== */}
      <section id="offerings" className="bg-linear-to-b from-stone-50 to-orange-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-16 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUpVariants}
          >
            <h2 className="font-serif text-3xl font-bold text-emerald-900 sm:text-4xl">
              Our Offerings
            </h2>
            <p className="mt-4 text-lg text-emerald-800">
              Discover the best of what Rewind Nature Farm has to offer
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Fruits Supply Card */}
            <motion.div
              id="fruits"
              className="relative overflow-hidden rounded-lg bg-linear-to-br from-orange-400 to-orange-600 p-8 shadow-lg"
              initial="rest"
              whileHover="hover"
              variants={scaleHoverVariants}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-orange-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              <div className="relative z-10">
                <h3 className="font-serif text-3xl font-bold text-stone-50">Fresh Organic Fruits</h3>
                <p className="mt-4 text-lg text-stone-100">
                  Experience the natural sweetness of freshly harvested organic fruits, hand-selected from our orchards. Enjoy seasonal varieties at peak ripeness.
                </p>

                <ul className="mt-6 space-y-2 text-stone-50">
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-stone-50" />
                    Organic & pesticide-free
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-stone-50" />
                    Seasonal availability
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-stone-50" />
                    Direct farm-to-table delivery
                  </li>
                </ul>

                <motion.button
                  className="mt-8 rounded-full bg-stone-50 px-6 py-2 font-semibold text-orange-600 transition hover:bg-stone-100"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Order Now
                </motion.button>
              </div>
            </motion.div>

            {/* Farmhouse Stays Card */}
            <motion.div
              id="farmhouse"
              className="relative overflow-hidden rounded-lg bg-linear-to-br from-emerald-600 to-emerald-800 p-8 shadow-lg"
              initial="rest"
              whileHover="hover"
              variants={scaleHoverVariants}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.div
                className="absolute -left-12 -bottom-12 h-40 w-40 rounded-full bg-emerald-700/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              <div className="relative z-10">
                <h3 className="font-serif text-3xl font-bold text-stone-50">Farmhouse Retreats</h3>
                <p className="mt-4 text-lg text-stone-100">
                  Escape the hustle and bustle. Experience serene farmhouse stays surrounded by
                  nature, with authentic farm experiences and warm hospitality.
                </p>

                <ul className="mt-6 space-y-2 text-stone-50">
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-stone-50" />
                    Comfortable, eco-friendly accommodations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-stone-50" />
                    Farm-to-table meals
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-stone-50" />
                    Activities & wildlife experiences
                  </li>
                </ul>

                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-900/50 px-6 py-2 font-semibold text-stone-200 shadow-inner">
                  <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse"></span>
                  Coming Soon
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT / FOOTER ===== */}
      <Footer />
    </div>
  )
}

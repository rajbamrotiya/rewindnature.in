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

  // Load and process Instagram Embed script
  useEffect(() => {
    const scriptId = 'instagram-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else {
      // @ts-ignore
      if (window.instgrm) {
        // @ts-ignore
        window.instgrm.Embeds.process();
      }
    }
  }, []);

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
              <title>
                  Rewind Nature Farm | Gir Forest Farmhouse & Organic Fruits
              </title>
              <meta
                  name="description"
                  content="Welcome to Rewind Nature Farm in Gir, Gujarat. Discover pristine farmhouse retreats and premium organic Kesar mangoes from our sun-kissed orchards."
              />
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
                          transition={{ duration: 0.8, ease: 'easeOut' }}
                          className="max-w-4xl"
                      >
                          <h1 className="mb-6 font-serif text-5xl font-bold text-white drop-shadow-xl sm:text-6xl lg:text-7xl">
                              {slides[currentSlide].title}
                          </h1>
                          <p className="mb-10 text-lg font-medium text-stone-200 drop-shadow-md sm:text-xl">
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
                              currentSlide === idx
                                  ? 'w-8 bg-orange-500'
                                  : 'w-2 bg-white/50 hover:bg-white/90'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                      />
                  ))}
              </div>

              {/* Scroll Indicator */}
              <motion.div
                  className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 cursor-pointer"
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                  }}
                  onClick={() => scrollToSection('about')}
              >
                  <ChevronDown className="h-8 w-8 text-white/80 transition-colors hover:text-white" />
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
                              Rewind Nature Farm sits in the pristine Gir region
                              of Gujarat, where lush forests meet agricultural
                              excellence. Our location offers the perfect blend
                              of natural beauty and sustainable farming
                              practices.
                          </p>

                          <p className="text-lg text-emerald-800">
                              Every mango harvest celebrates the unique terroir
                              of Gir, and every stay on our farm is a journey
                              back to nature. Whether you're seeking premium
                              fruit or a peaceful retreat, Gir's magic awaits.
                          </p>

                          <motion.div
                              className="flex gap-4 pt-4"
                              whileHover={{ x: 5 }}
                          >
                              <a
                                  href="https://share.google/iHLlAr07emFNLXArf"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-block rounded-full bg-emerald-900 px-6 py-2 font-semibold text-stone-50 transition hover:bg-emerald-950 hover:shadow-lg"
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
          <section
              id="offerings"
              className="bg-linear-to-b from-stone-50 to-orange-50 py-20 sm:py-32"
          >
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
                          Discover the best of what Rewind Nature Farm has to
                          offer
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
                              className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-orange-500/20"
                              animate={{ rotate: 360 }}
                              transition={{
                                  duration: 20,
                                  repeat: Infinity,
                                  ease: 'linear',
                              }}
                          />

                          <div className="relative z-10">
                              <h3 className="font-serif text-3xl font-bold text-stone-50">
                                  Fresh Organic Fruits
                              </h3>
                              <p className="mt-4 text-lg text-stone-100">
                                  Experience the natural sweetness of freshly
                                  harvested organic fruits, hand-selected from
                                  our orchards. Enjoy seasonal varieties at peak
                                  ripeness.
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
                              className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-emerald-700/20"
                              animate={{ rotate: -360 }}
                              transition={{
                                  duration: 20,
                                  repeat: Infinity,
                                  ease: 'linear',
                              }}
                          />

                          <div className="relative z-10">
                              <h3 className="font-serif text-3xl font-bold text-stone-50">
                                  Farmhouse Retreats
                              </h3>
                              <p className="mt-4 text-lg text-stone-100">
                                  Escape the hustle and bustle. Experience
                                  serene farmhouse stays surrounded by nature,
                                  with authentic farm experiences and warm
                                  hospitality.
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
                                  <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400"></span>
                                  Coming Soon
                              </div>
                          </div>
                      </motion.div>
                  </div>
              </div>
          </section>

          {/* ===== LIFE AT REWIND NATURE FARM (INSTAGRAM REEL) ===== */}
          <section id="life-at-farm" className="bg-stone-150 py-20 sm:py-32">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                      {/* Left Info Column */}
                      <motion.div
                          className="space-y-6"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: '-100px' }}
                          variants={slideInLeftVariants}
                      >
                          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-800">
                              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500"></span>
                              Follow Our Journey
                          </div>

                          <h2 className="font-serif text-4xl font-bold text-emerald-950 sm:text-5xl">
                              Life at Rewind Nature Farm
                          </h2>

                          <p className="text-lg leading-relaxed text-emerald-900/90">
                              Take a virtual walk through our lush orchards
                              nestled in the heart of Gir. Watch daily
                              activities on the farm, witness the golden harvest
                              of organic Kesar mangoes, and experience the
                              beautiful ecosystem we nurture every day.
                          </p>

                          <p className="text-base leading-relaxed text-stone-500">
                              We believe in sustainable agriculture that
                              respects local wildlife and enriches the soil.
                              Follow us on Instagram for regular reels, photos,
                              and updates from the farm.
                          </p>

                          <div className="pt-4">
                              <a
                                  href="https://www.instagram.com/rewind.nature"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition-all hover:scale-105 hover:bg-orange-600 active:scale-95"
                              >
                                  Watch More Reels
                              </a>
                          </div>
                      </motion.div>

                      {/* Right Reel Column */}
                      <motion.div
                          className="flex justify-center"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: '-100px' }}
                          variants={slideInRightVariants}
                      >
                          <div 
                              className="w-full max-w-[326px] sm:max-w-[400px] flex justify-center bg-white rounded-lg overflow-hidden shadow-2xl"
                              dangerouslySetInnerHTML={{ __html: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DZAnQ0kMUbm/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DZAnQ0kMUbm/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DZAnQ0kMUbm/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Rewind Nature Farm (@rewind.nature)</a></p></div></blockquote>` }}
                          />
                      </motion.div>
                  </div>
              </div>
          </section>

          {/* ===== INVESTMENT OPPORTUNITY ===== */}
          <section className="bg-emerald-950 py-20 text-stone-50">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                      <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: '-100px' }}
                          variants={slideInLeftVariants}
                      >
                          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-1.5 text-sm font-semibold text-orange-400">
                              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500"></span>
                              Project in Development
                          </div>
                          <h2 className="font-serif text-4xl font-bold text-stone-50 sm:text-5xl">
                              Farmhouse <span className="text-orange-400">Investment</span> Opportunity
                          </h2>
                          <p className="mt-6 text-lg leading-relaxed text-emerald-100">
                              We are inviting visionary investors and strategic partners to collaborate on our upcoming eco-luxury Farmhouse retreats in the Gir forest. Be part of a sustainable hospitality project that harmonizes nature, agriculture, and premium stays.
                          </p>
                          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                              <a href="/farmhouse" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600">
                                  View Farmhouse Details
                              </a>
                              <a href="/schedule" className="inline-flex items-center justify-center rounded-full border border-emerald-700 bg-emerald-900/50 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition-all hover:scale-105 hover:bg-emerald-800">
                                  Schedule Meeting
                              </a>
                          </div>
                      </motion.div>
                      <motion.div
                          className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: '-100px' }}
                          variants={slideInRightVariants}
                      >
                          <img src="/farm.jpeg" alt="Farmhouse Render" className="h-full w-full object-cover opacity-80 transition-transform duration-700 hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950/50 to-transparent pointer-events-none" />
                      </motion.div>
                  </div>
              </div>
          </section>

          {/* ===== CONTACT / FOOTER ===== */}
          <Footer />
      </div>
  );
}

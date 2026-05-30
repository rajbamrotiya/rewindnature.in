import { motion } from 'framer-motion'
import { Heart, Leaf, Truck } from 'lucide-react'
import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Head } from '@inertiajs/react'

export default function Fruits() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    )
  }

  const products = [
    {
      id: 1,
      name: 'Kesar Mango',
      image: 'https://images.unsplash.com/photo-1635716279493-d1e30afc25a0?auto=format&fit=crop&w=500&q=60',
      season: 'April - July',
      description: 'Premium golden Kesar mangoes, hand-picked at peak ripeness.',
      features: ['Organic', 'No Pesticides'],
    },
    {
      id: 2,
      name: 'Desi Mango',
      image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?auto=format&fit=crop&w=500&q=60',
      season: 'April - July',
      description: 'Traditional local mangoes with a unique, rich flavor.',
      features: ['Local Variety', 'Rich Flavor'],
    },
    {
      id: 3,
      name: 'Chiku (Sapodilla)',
      image: 'https://images.unsplash.com/photo-1563147592-6767f86ba8da?auto=format&fit=crop&w=500&q=60',
      season: 'Year Round',
      description: 'Sweet, malty chiku grown with organic farming practices.',
      features: ['Sweet', 'Energy Booster'],
    },
    {
      id: 4,
      name: 'Water Apple',
      image: 'https://images.unsplash.com/photo-1777181035510-2dddd29dc433?auto=format&fit=crop&w=500&q=60',
      season: 'Summer',
      description: 'Refreshing and crisp water apples, perfect for hot days.',
      features: ['Hydrating', 'Crisp'],
    },
    {
      id: 5,
      name: 'Green Coconut',
      image: 'https://images.unsplash.com/photo-1659057107895-dcab0d85cbcb?auto=format&fit=crop&w=500&q=60',
      season: 'Year Round',
      description: 'Fresh tender coconuts full of natural electrolytes.',
      features: ['Hydrating', 'Natural Electrolytes'],
    },
    {
      id: 6,
      name: 'Mulberry',
      image: 'https://images.unsplash.com/photo-1660418056478-66fa71ceb526?auto=format&fit=crop&w=500&q=60',
      season: 'Spring',
      description: 'Sweet and tart fresh mulberries, hand-picked daily.',
      features: ['Antioxidants', 'Tart & Sweet'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-stone-50 text-emerald-900">
      <Head>
        <title>Fresh Organic Fruits | Rewind Nature Farm</title>
        <meta name="description" content="Browse our selection of fresh organic fruits including Kesar Mango, Desi Mango, Chiku, Water Apple, and Green Coconut directly from our Gir orchards." />
      </Head>
      <Navigation />
      <section className="relative min-h-96 bg-linear-to-br from-orange-500 to-orange-600 px-4 pt-40 pb-20 text-center text-stone-50 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl">
            Fresh Organic Fruits
          </h1>
          <p className="mb-8 text-lg text-orange-100">
            Experience the natural sweetness of freshly harvested fruits from Gir's finest orchards

          </p>
          <motion.button
            className="rounded-full bg-stone-50 px-8 py-3 font-semibold text-orange-600 transition hover:bg-stone-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now
          </motion.button>
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Leaf,
                title: 'Organic Farming',
                description: 'No pesticides, pure natural farming methods',
              },
              {
                icon: Truck,
                title: 'Farm to Door',
                description: 'Direct delivery within 24 hours of harvest',
              },
              {
                icon: Heart,
                title: 'Quality Assured',
                description: 'Hand-selected, graded for perfection',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="rounded-lg bg-gradient-to-br from-emerald-50 to-orange-50 p-8 text-center shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <feature.icon className="mx-auto mb-4 h-12 w-12 text-orange-500" />
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-emerald-800">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            className="mb-4 text-center font-serif text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Fresh Fruits

          </motion.h2>
          <p className="mb-12 text-center text-emerald-700">
            Each variety handpicked for quality and taste
          </p>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                className="overflow-hidden rounded-lg bg-white shadow-lg transition"
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 25px rgba(0,0,0,0.1)' }}
              >
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-300 hover:scale-110"
                  />
                  <motion.button
                    className="absolute right-4 top-4 rounded-full bg-stone-50 p-2 shadow-lg"
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart
                      className={`h-5 w-5 transition ${
                        favorites.includes(product.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-400'
                      }`}
                    />
                  </motion.button>
                </div>
                <div className="p-4">
                  <h3 className="mb-1 font-semibold">{product.name}</h3>
                  <p className="mb-2 text-sm text-orange-600">{product.season}</p>
                  <p className="mb-3 text-sm text-emerald-700">{product.description}</p>
                  <div className="mb-4 space-y-1">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-block rounded-full bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700 mr-1"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-end">
                    <motion.button
                      className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-stone-50 transition hover:bg-orange-600"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Inquire Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seasonal Info */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 px-4 py-16 text-stone-50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h2
            className="mb-4 font-serif text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Seasonal Availability
          </motion.h2>
          <p className="mb-8 text-orange-100">
            Our fruits are harvested seasonally to ensure peak ripeness and maximum flavor.
            Pre-order now for your preferred variety.
          </p>
          <motion.button
            className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-stone-50 transition hover:bg-orange-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pre-Order Your Favorites
          </motion.button>
        </div>
      </section>

      <Footer />
    </div>
  )
}


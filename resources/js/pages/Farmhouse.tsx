import { motion } from 'framer-motion'
import { MapPin, Wifi, Users, Utensils, Calendar, Star } from 'lucide-react'
import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Head } from '@inertiajs/react'

export default function Farmhouse() {
  const [selectedRoom, setSelectedRoom] = useState(0)

  const rooms = [
    {
      id: 1,
      name: 'Luxury Suite',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      price: '₹8,500/night',
      capacity: '2-4 guests',
      rating: 4.9,
      reviews: 156,
      features: ['AC', 'WiFi', 'Private Balcony', 'Hot Water'],
      description: 'Spacious suite with modern amenities and stunning views of the farm',
    },
    {
      id: 2,
      name: 'Garden Villa',
      image: 'https://images.unsplash.com/photo-1604368556146-e1e1b7c8f57e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60',
      price: '₹12,000/night',
      capacity: '4-6 guests',
      rating: 5.0,
      reviews: 98,
      features: ['AC', 'Kitchen', 'Outdoor Patio', 'WiFi'],
      description: 'Private villa with garden access and farm views',
    },
    {
      id: 3,
      name: 'Nature Retreat',
      image: '/farm.jpeg',
      price: '₹6,500/night',
      capacity: '2 guests',
      rating: 4.8,
      reviews: 203,
      features: ['WiFi', 'Bathroom', 'Nature View', 'Quiet Area'],
      description: 'Cozy cottage perfect for couples seeking peace and nature',
    },
  ]

  const experiences = [
    {
      icon: Utensils,
      title: 'Farm-to-Table Dining',
      description: 'Fresh meals prepared with our own organic produce',
    },
    {
      icon: MapPin,
      title: 'Guided Farm Tours',
      description: 'Learn about sustainable farming and mango cultivation',
    },
    {
      icon: Users,
      title: 'Community Events',
      description: 'Connect with other guests through evening gatherings',
    },
    {
      icon: Wifi,
      title: 'Modern Comfort',
      description: 'Stay connected with high-speed WiFi throughout',
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-stone-50 text-emerald-900">
      <Head>
        <title>Farmhouse Retreats | Rewind Nature Farm</title>
        <meta name="description" content="Experience peaceful and luxurious farmhouse retreats in the heart of Gir. Book your stay at Rewind Nature Farm." />
      </Head>
      <Navigation />
      <section className="relative min-h-96 bg-linear-to-br from-emerald-600 to-emerald-700 px-4 pt-40 pb-20 text-center text-stone-50 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl">
            Farmhouse Retreats
          </h1>
          <p className="mb-8 text-lg text-emerald-100">
            Escape to nature. Experience authentic farm life in serene accommodations surrounded by lush gardens
          </p>
          <motion.button
            className="rounded-full bg-stone-50 px-8 py-3 font-semibold text-emerald-700 transition hover:bg-stone-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Stay
          </motion.button>
        </motion.div>
      </section>

      {/* Experiences */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            className="mb-4 text-center font-serif text-3xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What You'll Experience
          </motion.h2>
          <p className="mb-12 text-center text-emerald-700">
            More than just accommodation—a complete farm experience
          </p>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="rounded-lg bg-gradient-to-br from-emerald-50 to-green-50 p-8 text-center shadow-lg"
                variants={itemVariants}
              >
                <exp.icon className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
                <h3 className="mb-2 font-semibold">{exp.title}</h3>
                <p className="text-sm text-emerald-700">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="bg-orange-50 px-4 py-16 sm:px-6 lg:px-8 border-y border-orange-100">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Calendar className="mx-auto mb-6 h-16 w-16 text-orange-500" />
            <h2 className="mb-6 font-serif text-4xl font-bold text-emerald-950">Opening Soon</h2>
            <p className="mb-8 text-lg text-emerald-800 leading-relaxed">
              We are currently putting the finishing touches on our beautiful farmhouse retreats. 
              We can't wait to welcome you to experience authentic farm life in serene accommodations 
              surrounded by lush gardens. Stay tuned for our grand opening!
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-8 py-3 font-semibold text-stone-50">
              <Star className="h-5 w-5 text-orange-400" />
              Project Currently in Development
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investors & Partners Section */}
      <section className="bg-emerald-950 px-4 py-20 sm:px-6 lg:px-8 text-stone-50">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 font-serif text-4xl font-bold text-orange-400">Partner With Us</h2>
            <p className="mb-8 text-lg text-emerald-100 leading-relaxed">
              We are actively seeking visionary investors and strategic partners to join us in bringing the Rewind Nature Farmhouse project to life. This is a unique opportunity to collaborate on a sustainable, eco-friendly luxury retreat in the beautiful Gir region.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3.5 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-orange-600">
                Contact for Partnership
              </a>
              <a href="/schedule" className="inline-flex items-center justify-center rounded-full border-2 border-emerald-700 bg-emerald-800/50 px-8 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-emerald-800">
                Schedule a Meeting
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}


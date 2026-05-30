import { motion } from 'framer-motion'
import { CheckCircle, Target, Leaf, Users } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Head } from '@inertiajs/react'

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We practice organic farming and preserve the natural ecosystem of Gir',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Supporting local farmers and creating authentic cultural experiences',
    },
    {
      icon: Target,
      title: 'Quality',
      description: 'Every mango and experience is carefully crafted for excellence',
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'Transparent practices and honest relationships with our guests',
    },
  ]

  const timeline = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'Started with traditional mango farming in the heart of Gir forest',
    },
    {
      year: '2015',
      title: 'Going Organic',
      description: 'Transitioned to 100% organic farming practices',
    },
    {
      year: '2018',
      title: 'Farmhouse Opened',
      description: 'Launched our farmhouse retreat program for guests',
    },
    {
      year: '2023',
      title: 'Present Day',
      description: 'Serving thousands of happy customers and guests worldwide',
    },
  ]

  const stats = [
    { number: '500+', label: 'Acres of Farm' },
    { number: '10,000+', label: 'Trees Planted' },
    { number: '50,000+', label: 'Happy Customers' },
    { number: '100%', label: 'Organic Certified' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  return (
    <div className="min-h-screen bg-stone-50 text-emerald-900">
      <Head>
        <title>About Us | Rewind Nature Farm</title>
        <meta name="description" content="Learn more about Rewind Nature Farm in Gir. Our story, sustainable farming practices, and commitment to delivering the best organic produce." />
      </Head>
      <Navigation />
      {/* Hero */}
      <section className="relative min-h-96 bg-linear-to-br from-emerald-700 to-emerald-800 px-4 pt-40 pb-20 text-center text-stone-50 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-6 font-serif text-4xl font-bold sm:text-5xl">
            About Rewind Nature Farm
          </h1>
          <p className="mb-8 text-lg text-emerald-100">
            A journey of sustainability, quality, and authentic farm experiences since 2010
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 font-serif text-3xl font-bold">Our Mission</h2>
              <p className="mb-4 text-lg leading-relaxed text-emerald-800">
                To provide premium, organic mangoes and authentic farmhouse experiences while
                preserving the pristine natural beauty of Gir forest.
              </p>
              <p className="text-emerald-700">
                We believe in sustainable farming practices, direct relationships with our customers,
                and creating memories that last a lifetime. Every product and experience is crafted
                with love and dedication.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 font-serif text-3xl font-bold">Our Vision</h2>
              <p className="mb-4 text-lg leading-relaxed text-emerald-800">
                To become the world's leading sustainable farm-to-table brand, known for exceptional
                quality and transformative hospitality experiences.
              </p>
              <p className="text-emerald-700">
                We envision a future where organic farming is the standard, where guests experience
                true connection with nature, and where every stakeholder—from farmers to customers—thrives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-linear-to-r from-orange-500 to-orange-600 px-4 py-16 text-stone-50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="grid gap-8 md:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="mb-2 font-serif text-4xl font-bold">{stat.number}</div>
                <div className="text-orange-100">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            className="mb-4 text-center font-serif text-3xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          <p className="mb-12 text-center text-emerald-700">
            The principles that guide everything we do
          </p>

          <motion.div
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                className="rounded-lg bg-gradient-to-br from-emerald-50 to-green-50 p-8 text-center shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <value.icon className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
                <h3 className="mb-2 font-semibold">{value.title}</h3>
                <p className="text-sm text-emerald-700">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            className="mb-4 text-center font-serif text-3xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <p className="mb-12 text-center text-emerald-700">A timeline of growth and sustainability</p>

          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex gap-8"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-stone-50 font-bold">
                    {item.year}
                  </div>
                  {idx < timeline.length - 1 && (
                    <div className="mt-4 h-24 w-1 bg-emerald-200" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="mb-2 font-semibold text-emerald-900">{item.title}</h3>
                  <p className="text-emerald-700">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-16 text-stone-50 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <motion.h2
            className="mb-4 font-serif text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Dedicated Team
          </motion.h2>
          <p className="mb-8 text-emerald-100">
            Passionate individuals committed to delivering excellence
          </p>
          <motion.button
            className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-stone-50 transition hover:bg-orange-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Meet Our Team
          </motion.button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            className="mb-4 text-center font-serif text-3xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What Our Guests Say
          </motion.h2>
          <p className="mb-12 text-center text-emerald-700">
            Real stories from our happy customers and guests
          </p>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                name: 'Priya Sharma',
                role: 'Mango Enthusiast',
                text: 'The Kesar mangoes are absolutely divine! Cannot imagine summer without them.',
                rating: 5,
              },
              {
                name: 'Rajesh Patel',
                role: 'Farm Guest',
                text: 'Spent 3 days at the farmhouse. The experience was magical and rejuvenating.',
                rating: 5,
              },
              {
                name: 'Sarah Anderson',
                role: 'International Guest',
                text: 'Best farm experience ever! The hospitality and care are outstanding.',
                rating: 5,
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                className="rounded-lg bg-white p-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-4 text-emerald-800">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-emerald-900">{testimonial.name}</p>
                  <p className="text-sm text-emerald-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-linear-to-br from-orange-500 to-orange-600 px-4 py-16 text-center text-stone-50 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <h2 className="mb-4 font-serif text-3xl font-bold">Join the Rewind Nature Community</h2>
          <p className="mb-8 text-orange-100">
            Experience the magic of organic farming and premium mangoes today
          </p>
          <motion.button
            className="rounded-full bg-stone-50 px-8 py-3 font-semibold text-orange-600 transition hover:bg-stone-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
        </motion.div>
      </section>
      
      <Footer />
    </div>
  )
}


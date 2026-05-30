import { motion } from 'framer-motion'
import { MapPin, Send, Clock, Leaf } from 'lucide-react'
import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Head } from '@inertiajs/react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-stone-50 text-emerald-900">
      <Head>
        <title>Contact Us | Rewind Nature Farm</title>
        <meta name="description" content="Get in touch with Rewind Nature Farm for inquiries about fresh fruit orders, farmhouse retreat bookings, or general questions." />
      </Head>
      <Navigation />
      
      {/* Hero Section with Image */}
      <section className="relative h-[55vh] min-h-[450px] w-full bg-emerald-950">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1444201983204-c43cbd584d93?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-stone-50/10 to-transparent" />
        
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pt-20 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="mb-6 font-serif text-5xl font-bold text-emerald-950 drop-shadow-md sm:text-6xl lg:text-7xl">
              Let's Connect
            </h1>
            <p className="mx-auto text-lg font-medium text-emerald-900 drop-shadow-sm sm:text-xl">
              Whether you're looking to order fresh Gir fruits or escape to our serene farmhouse, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Layout */}
      <section className="relative z-20 px-4 pb-24 sm:px-6 lg:px-8 -mt-20">
        <div className="mx-auto max-w-7xl">
          <motion.div 
            className="overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-stone-200 lg:flex"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            {/* Left Column - Form */}
            <div className="p-8 sm:p-12 lg:w-3/5 lg:p-16">
              <h2 className="mb-2 font-serif text-3xl font-bold text-emerald-950">Send us a Message</h2>
              <p className="mb-10 text-stone-500">We'll respond to your inquiry as soon as possible.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-emerald-950">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border-0 bg-stone-100 px-5 py-4 text-emerald-950 transition-all focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-inner"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-emerald-950">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border-0 bg-stone-100 px-5 py-4 text-emerald-950 transition-all focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-inner"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-emerald-950">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border-0 bg-stone-100 px-5 py-4 text-emerald-950 transition-all focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-inner"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-emerald-950">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full resize-none rounded-xl border-0 bg-stone-100 px-5 py-4 text-emerald-950 transition-all focus:bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none shadow-inner"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className={`group relative mt-4 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-4 font-semibold text-white transition-all sm:w-auto shadow-lg ${
                    submitted ? 'bg-green-500 hover:bg-green-600 shadow-green-500/30' : 'bg-orange-500 hover:bg-orange-600 shadow-orange-500/30'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {submitted ? (
                    <span className="flex items-center gap-2">
                      <span className="text-xl">✓</span> Message Sent!
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>

            {/* Right Column - Info & Map */}
            <div className="relative bg-emerald-900 p-8 text-stone-50 sm:p-12 lg:w-2/5 lg:p-16">
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fb923c 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <h3 className="mb-8 font-serif text-3xl font-bold text-orange-400">Visit Us</h3>
                
                <div className="mb-10 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-orange-400 shadow-inner">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-50 text-lg">Location</h4>
                      <p className="mt-1 text-sm leading-relaxed text-emerald-100">
                        Behind Nature Study Camp road Sasan - Talala Road, Chitravad, Talala, Gujarat 362150
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-orange-400 shadow-inner">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-50 text-lg">Office Hours</h4>
                      <p className="mt-1 text-sm leading-relaxed text-emerald-100">
                        Mon - Sun: 9:00 AM - 6:00 PM<br />
                        Best Time: Oct - March
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-orange-400 shadow-inner">
                      <Leaf className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-50 text-lg">Mango Season</h4>
                      <p className="mt-1 text-sm leading-relaxed text-emerald-100">
                        April - September (Peak harvest)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Embed inside the card */}
                <div className="mt-auto overflow-hidden rounded-2xl shadow-2xl ring-1 ring-emerald-800">
                  <iframe
                    src="https://maps.google.com/maps?q=3GXW%2B97%20Talala,%20Gujarat&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

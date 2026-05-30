import { Link } from '@inertiajs/react'
import { motion } from 'framer-motion'
import { MapPin, Facebook, Instagram, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Fruits', href: '/fruits' },
    { name: 'Farmhouse', href: '/farmhouse' },
    { name: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  return (
    <footer className="relative mt-20 overflow-hidden bg-stone-100 pt-20 pb-10 text-emerald-950">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-[50px] w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-stone-50"
          ></path>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            className="md:col-span-12 lg:col-span-4 flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Link href="/" className="inline-block">
              <motion.img
                src="/Logo.png"
                alt="Rewind Nature Farm"
                className="mb-6 h-20 md:h-24 w-auto drop-shadow-md"
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            </Link>
            <h3 className="font-serif text-2xl font-bold text-emerald-900">Rewind Nature Farm</h3>
            <p className="mt-4 text-base leading-relaxed text-stone-600 max-w-sm">
              Discover the true essence of Gir with our premium Kesar mangoes and peaceful farmhouse retreats. Nature is calling.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="md:col-span-4 lg:col-span-2 lg:col-start-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-6 font-serif text-lg font-bold text-emerald-950">Explore</h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-stone-600 transition-colors hover:text-orange-600 font-medium"
                  >
                    <span className="mr-2 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-orange-500">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="md:col-span-4 lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-6 font-serif text-lg font-bold text-emerald-950">Contact</h4>
            <ul className="space-y-4 text-stone-600">
              <li className="flex items-start gap-3 group">
                <div className="rounded-full bg-emerald-100 p-2 text-emerald-700 transition-colors group-hover:bg-emerald-200">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="mt-1 font-medium leading-tight">Behind Nature Study Camp road Sasan - Talala Road, Chitravad, Talala, Gujarat 362150</span>
              </li>
              <li className="flex items-start gap-3 group">
                <a href="mailto:info@rewindnature.in" className="flex items-start gap-3 group">
                  <div className="rounded-full bg-emerald-100 p-2 text-emerald-700 transition-colors group-hover:bg-emerald-200">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="mt-1 font-medium leading-tight transition-colors hover:text-orange-600">info@rewindnature.in</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social & Maps */}
          <motion.div
            className="md:col-span-4 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="mb-6 font-serif text-lg font-bold text-emerald-950">Follow Us</h4>
            <div className="mb-8 flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-200 text-stone-600 transition-all hover:bg-orange-500 hover:text-white hover:shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
            <motion.a
              href="https://share.google/iHLlAr07emFNLXArf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-900 shadow-sm ring-1 ring-stone-200 transition-all hover:shadow-md hover:ring-emerald-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <MapPin className="h-4 w-4 text-orange-500" />
              View on Map
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-stone-200" />

        {/* Copyright */}
        <motion.div
          className="flex flex-col items-center justify-between gap-4 text-sm text-stone-500 md:flex-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="font-medium">
            © {new Date().getFullYear()} Rewind Nature Farm. All rights reserved.
          </p>
          <p className="flex items-center gap-1 font-medium">
            Cultivated with <span className="text-orange-500 animate-pulse">♥</span> for nature
          </p>
        </motion.div>
      </div>
    </footer>
  )
}


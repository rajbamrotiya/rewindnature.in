import { motion } from 'framer-motion';
import { Head } from '@inertiajs/react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useEffect } from 'react';
import { PhoneCall, CalendarCheck, Leaf, Home, Users } from 'lucide-react';

export default function Schedule() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-emerald-900">
      <Head>
        <title>Schedule a Meeting | Rewind Nature Farm</title>
        <meta name="description" content="Schedule a call or visit with Rewind Nature Farm using our Calendly integration." />
      </Head>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[45vh] min-h-[350px] w-full bg-emerald-950">
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
            <h1 className="mb-6 font-serif text-5xl font-bold text-emerald-950 drop-shadow-md sm:text-6xl">
              Schedule a Meeting
            </h1>
            <p className="mx-auto text-lg font-medium text-emerald-900 drop-shadow-sm sm:text-xl">
              Select a time to discuss how we can help you experience Rewind Nature.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative z-20 px-4 pb-24 sm:px-6 lg:px-8 -mt-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-5">
            
            {/* Left Column: Information */}
            <motion.div 
              className="lg:col-span-2 space-y-8 lg:mt-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-stone-200">
                <h2 className="font-serif text-3xl font-bold text-emerald-950 mb-6">Why Book a Call?</h2>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  We want to ensure you get exactly what you're looking for. Scheduling a quick call allows us to give you personalized attention and direct answers to your questions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <Leaf className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-900 text-lg">Bulk Fruit Orders</h3>
                      <p className="text-sm text-stone-500 mt-1">Discuss pricing, availability, and delivery logistics for large orders of our premium Gir mangoes.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <Home className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-900 text-lg">Farmhouse Retreats</h3>
                      <p className="text-sm text-stone-500 mt-1">Plan your perfect getaway. We can talk about accommodations, dates, and special requests.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                      <Users className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-emerald-900 text-lg">Partnerships & Events</h3>
                      <p className="text-sm text-stone-500 mt-1">Looking to collaborate or host an event at our farm? Let's explore the possibilities together.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-emerald-900 p-8 shadow-xl text-stone-50 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fb923c 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
                 <div className="relative z-10">
                   <h3 className="font-serif text-2xl font-bold text-orange-400 mb-4">What to expect</h3>
                   <ul className="space-y-4">
                     <li className="flex items-center gap-3">
                       <CalendarCheck className="h-5 w-5 text-emerald-300" />
                       <span>Confirmation email instantly</span>
                     </li>
                     <li className="flex items-center gap-3">
                       <PhoneCall className="h-5 w-5 text-emerald-300" />
                       <span>We call you at the scheduled time</span>
                     </li>
                   </ul>
                 </div>
              </div>
            </motion.div>

            {/* Right Column: Calendly Widget */}
            <motion.div 
              className="lg:col-span-3 overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-stone-200"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
               {/* Calendly inline widget begin */}
               <div 
                 className="calendly-inline-widget w-full" 
                 data-url="https://calendly.com/rajbamrotiya" 
                 style={{ minWidth: '320px', height: '700px' }}
               ></div>
               {/* Calendly inline widget end */}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

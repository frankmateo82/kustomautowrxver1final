import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ServicesPage from './components/ServicesPage';
import PricingPage from './components/PricingPage';
import GalleryPage from './components/GalleryPage';
import CarCarePage from './components/CarCarePage';
import FAQPage from './components/FAQPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ThemeToggle from './components/ThemeToggle';
import AppointmentModal from './components/AppointmentModal';
import Logo from './components/Logo';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [isDark, setIsDark] = React.useState(true);
  const [isAppointmentOpen, setIsAppointmentOpen] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const getPageTitle = (page: string) => {
    if (page === 'faq') return 'FAQ';
    return page.charAt(0).toUpperCase() + page.slice(1);
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
      
      <header className="bg-black/50 backdrop-blur-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="flex space-x-6 overflow-x-auto pb-2 scrollbar-hide">
              {['home', 'services', 'pricing', 'car-care', 'gallery', 'faq', 'about', 'contact'].map((page) => (
                <motion.span
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`text-white font-medium cursor-pointer transition-colors whitespace-nowrap ${
                    currentPage === page ? 'text-blue-400' : 'hover:text-blue-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {getPageTitle(page)}
                </motion.span>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAppointmentOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.3 }}
          >
            {currentPage === 'home' && <Hero onOpenAppointment={() => setIsAppointmentOpen(true)} />}
            {currentPage === 'services' && <ServicesPage onOpenAppointment={() => setIsAppointmentOpen(true)} />}
            {currentPage === 'pricing' && <PricingPage onOpenAppointment={() => setIsAppointmentOpen(true)} />}
            {currentPage === 'car-care' && <CarCarePage />}
            {currentPage === 'gallery' && <GalleryPage />}
            {currentPage === 'faq' && <FAQPage />}
            {currentPage === 'about' && <AboutPage />}
            {currentPage === 'contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />
    </div>
  );
}

export default App;
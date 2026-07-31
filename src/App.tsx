/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ServicesView from './components/ServicesView';
import ContactView from './components/ContactView';
import ConsultationModal from './components/ConsultationModal';
import { Tab, BookingFormState } from './types';
import { ShieldAlert, BookOpen, Clock, Calendar, Check } from 'lucide-react';

// High-quality, ultra-resilient Unsplash CDN images of Black scholars & academic research to guarantee Vercel build succeeds without local file dependencies
const HERO_IMAGE_PATH = 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=1200&q=80'; // Black scholars/mentors collaborating with research books and computer
const STATS_IMAGE_PATH = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80'; // Academic research desk with books, thesis drafting, and statistics analysis

export default function App() {
  const [currentTab, setCurrentTab] = useState<Tab>('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('Thesis Coaching');
  const [bookings, setBookings] = useState<Array<BookingFormState & { id: string; date: string; status: string }>>([]);

  // Load bookings from local storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('elimu_bookings');
      if (stored) {
        setBookings(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to load bookings:', e);
    }
  }, []);

  // Save bookings to local storage
  const saveBookings = (newBookings: typeof bookings) => {
    setBookings(newBookings);
    try {
      localStorage.setItem('elimu_bookings', JSON.stringify(newBookings));
    } catch (e) {
      console.error('Failed to save bookings:', e);
    }
  };

  const handleBookSuccess = (newBooking: BookingFormState & { id: string; date: string; status: string }) => {
    const updatedBookings = [newBooking, ...bookings];
    saveBookings(updatedBookings);
  };

  const handleCancelBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    saveBookings(updated);
  };

  const handleOpenBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    } else {
      setSelectedService('Thesis Coaching');
    }
    setIsModalOpen(true);
  };

  const handleNavigate = (tab: Tab) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col font-sans antialiased">
      {/* Top micro-banner for ads compliance & contact quick link */}
      <div className="bg-slate-900 text-[11px] text-slate-300 py-2.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-sm bg-indigo-500/20 text-indigo-300 font-bold uppercase tracking-wider text-[9px]">
              Support
            </span>
            <span>
              Professional Thesis Coaching, Statistics Help & Academic Proofreading
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-400 font-semibold">
            <a href="tel:0720646916" className="hover:text-white transition-colors">Call: 0720 646 916</a>
            <span>•</span>
            <a href="mailto:noble.consultants@yahoo.com" className="hover:text-white transition-colors">noble.consultants@yahoo.com</a>
          </div>
        </div>
      </div>

      {/* Header component */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
      />

      {/* Main Body with animated route transitions */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {currentTab === 'home' && (
              <HomeView
                onNavigate={handleNavigate}
                onOpenBooking={handleOpenBooking}
                heroImageSrc={HERO_IMAGE_PATH}
              />
            )}

            {currentTab === 'services' && (
              <ServicesView
                onOpenBooking={handleOpenBooking}
                statisticsImageSrc={STATS_IMAGE_PATH}
              />
            )}

            {currentTab === 'contact' && (
              <ContactView
                onOpenBooking={() => handleOpenBooking()}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer component */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Consultation Form Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBookSuccess={handleBookSuccess}
        initialService={selectedService}
      />
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Tab, BookingFormState } from '../types';
import { GraduationCap, Calendar, Phone, Check, Clock, Trash2, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentTab: Tab;
  onNavigate: (tab: Tab) => void;
  onOpenBooking: () => void;
  bookings: Array<BookingFormState & { id: string; date: string; status: string }>;
  onCancelBooking: (id: string) => void;
}

export default function Header({
  currentTab,
  onNavigate,
  onOpenBooking,
  bookings,
  onCancelBooking,
}: HeaderProps) {
  const [showAppointmentsDropdown, setShowAppointmentsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand section */}
          <div className="flex flex-col text-left cursor-pointer" onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}>
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-indigo-600 text-white shadow-xs">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-slate-900 tracking-tight text-xl leading-none">
                Elimu Consultants
              </span>
            </div>
            <span className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-1 pl-11">
              www.elimuconsultants.co.ke
            </span>
          </div>

          {/* Desktop Navigation Tabs */}
          <nav className="hidden md:flex space-x-1" aria-label="Main Navigation">
            {(['home', 'services', 'contact'] as Tab[]).map((tab) => {
              const isActive = currentTab === tab;
              const label = tab === 'home' ? 'Home' : tab === 'services' ? 'Our Services' : 'Contact Us';
              return (
                <button
                  key={tab}
                  onClick={() => onNavigate(tab)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Right Header Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Appointment Tracker Button */}
            <div className="relative">
              <button
                onClick={() => setShowAppointmentsDropdown(!showAppointmentsDropdown)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-slate-200 hover:border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>My Bookings</span>
                {bookings.length > 0 && (
                  <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                    {bookings.length}
                  </span>
                )}
              </button>

              {/* Bookings dropdown menu */}
              {showAppointmentsDropdown && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-xl shadow-xl p-4 space-y-3 z-50 text-left">
                  <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                    <span className="font-bold text-slate-900 text-xs uppercase tracking-wider">Your Schedule</span>
                    <button
                      onClick={() => setShowAppointmentsDropdown(false)}
                      className="text-slate-400 hover:text-slate-600 text-xs"
                    >
                      Close
                    </button>
                  </div>

                  {bookings.length === 0 ? (
                    <div className="py-6 text-center space-y-1">
                      <p className="text-slate-400 text-xs">No active consultation calls scheduled.</p>
                      <button
                        onClick={() => {
                          onOpenBooking();
                          setShowAppointmentsDropdown(false);
                        }}
                        className="text-indigo-600 hover:text-indigo-800 text-[11px] font-semibold underline cursor-pointer"
                      >
                        Book your free call
                      </button>
                    </div>
                  ) : (
                    <div className="max-h-60 overflow-y-auto space-y-2.5 pr-1">
                      {bookings.map((b) => (
                        <div key={b.id} className="p-2.5 bg-slate-50 rounded-lg border border-slate-100 relative space-y-1 text-xs">
                          <button
                            onClick={() => onCancelBooking(b.id)}
                            className="absolute top-2 right-2 text-slate-400 hover:text-rose-500 transition-colors"
                            title="Cancel schedule"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                          <div className="font-semibold text-slate-900 pr-5">{b.fullName}</div>
                          <div className="text-slate-500 text-[11px]">{b.serviceNeeded}</div>
                          <div className="flex items-center gap-3 text-[10px] text-slate-400 pt-1">
                            <span className="flex items-center gap-1">
                              <Clock className="w-3 h-3 text-emerald-500" /> {b.date}
                            </span>
                            <span className="text-emerald-600 font-medium">Status: {b.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Quick Consultation CTA */}
            <button
              onClick={() => onOpenBooking()}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-2">
            {bookings.length > 0 && (
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-indigo-600 text-[10px] font-bold text-white">
                {bookings.length}
              </span>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 focus:outline-hidden"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white py-4 px-4 space-y-3 shadow-inner">
          <nav className="flex flex-col space-y-1">
            {(['home', 'services', 'contact'] as Tab[]).map((tab) => {
              const isActive = currentTab === tab;
              const label = tab === 'home' ? 'Home' : tab === 'services' ? 'Our Services' : 'Contact Us';
              return (
                <button
                  key={tab}
                  onClick={() => {
                    onNavigate(tab);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    isActive ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Bookings Tracker for Mobile */}
          {bookings.length > 0 && (
            <div className="border-t border-slate-100 pt-3 space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-4">Scheduled Consultations</div>
              <div className="space-y-1.5 pl-4">
                {bookings.map((b) => (
                  <div key={b.id} className="text-xs text-slate-700 flex justify-between items-center pr-4">
                    <span>{b.serviceNeeded} - {b.date}</span>
                    <button
                      onClick={() => onCancelBooking(b.id)}
                      className="text-rose-500 hover:text-rose-700"
                    >
                      Cancel
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="border-t border-slate-100 pt-3 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm rounded-lg text-center cursor-pointer"
            >
              Book a Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

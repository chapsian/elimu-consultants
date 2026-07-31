/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, ShieldAlert, CheckCircle } from 'lucide-react';

interface ContactViewProps {
  onOpenBooking: () => void;
}

export default function ContactView({ onOpenBooking }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your question or inquiry';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSuccess(true);
  };

  const handleResetForm = () => {
    setFormData({ name: '', email: '', phone: '', message: '' });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="space-y-12 text-left">
      {/* Intro section */}
      <section className="bg-slate-50 border border-slate-200/60 p-6 md:p-8 rounded-2xl">
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">Get in Touch</span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
            Contact Elimu Consultants
          </h1>
          <p className="text-sm md:text-base text-slate-700 leading-relaxed font-light">
            Have questions about your thesis, dissertation, or statistical analysis? Reach out to our team today to schedule an initial consultation or request more information about our educational coaching programs.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Col: Contact Details card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-xs space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
              Contact Details
            </h3>

            <div className="space-y-5">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Office Address</h4>
                  <p className="text-sm text-slate-800 font-medium whitespace-pre-line">
                    Elimu Consultants
                    Applewood Building, 10th Floor
                    Adams Arcade, Ngong Road
                    Nairobi, Kenya
                  </p>
                </div>
              </div>

              {/* Telephone */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Telephone</h4>
                  <p className="text-sm text-slate-800 font-semibold hover:text-indigo-600 transition-colors">
                    <a href="tel:0720646916">0720 646 916</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email</h4>
                  <p className="text-sm text-indigo-600 font-semibold hover:underline">
                    <a href="mailto:noble.consultants@yahoo.com">noble.consultants@yahoo.com</a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Hours of Operation</h4>
                  <p className="text-sm text-slate-800 font-medium">
                    Monday – Sunday (available on calls all the time)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Consultation Callout */}
          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm space-y-4">
            <h4 className="font-bold text-base">Schedule 1-on-1 Guidance</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We offer structured step-by-step thesis coaching, editing, and professional statistics help tailored to your university requirements.
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition-all shadow-xs cursor-pointer"
            >
              Book Consultation Call
            </button>
          </div>
        </div>

        {/* Right Col: Inquiry / Contact form */}
        <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-xs">
          <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3 mb-6">
            Send Us an Inquiry
          </h3>

          {!isSuccess ? (
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-2 border rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors ${
                    errors.name ? 'border-red-500 bg-red-50/10' : 'border-slate-200'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-2 border rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors ${
                      errors.email ? 'border-red-500 bg-red-50/10' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Telephone Number (Optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 0720 000 000"
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Your Question / Research Requirements</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your thesis chapter, variables, or statistical challenges..."
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors ${
                    errors.message ? 'border-red-500 bg-red-50/10' : 'border-slate-200'
                  }`}
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
                Submit Message
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">Message Received Successfully</h4>
                <p className="text-slate-500 text-sm mt-1 max-w-md mx-auto">
                  Thank you for reaching out to Elimu Consultants! We have received your question and will respond to your email (<strong>{formData.email}</strong>) or phone within 24 hours.
                </p>
              </div>
              <button
                onClick={handleResetForm}
                className="mt-4 px-6 py-2 border border-slate-200 hover:bg-slate-50 text-slate-600 text-sm font-medium rounded-lg transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

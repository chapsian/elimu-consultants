/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Phone, Mail, User, BookOpen, CheckCircle } from 'lucide-react';
import { BookingFormState } from '../types';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookSuccess: (booking: BookingFormState & { id: string; date: string; status: string }) => void;
  initialService?: string;
}

const SERVICES_LIST = [
  'Thesis Coaching',
  'Academic Proofreading',
  'Dissertation Statistics Help',
  'Research Methodology Tutor',
];

export default function ConsultationModal({
  isOpen,
  onClose,
  onBookSuccess,
  initialService = 'Thesis Coaching',
}: ConsultationModalProps) {
  const [formData, setFormData] = useState<BookingFormState>({
    fullName: '',
    email: '',
    phone: '',
    serviceNeeded: initialService,
    message: '',
  });

  const [errors, setErrors] = useState<Partial<BookingFormState>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<BookingFormState> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Telephone number is required';
    } else if (formData.phone.length < 9) {
      newErrors.phone = 'Please enter a valid telephone number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newBooking = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleDateString('en-KE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      status: 'Confirmed',
    };

    onBookSuccess(newBooking);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      serviceNeeded: initialService,
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden bg-white rounded-xl shadow-2xl border border-slate-200 z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <h3 className="font-semibold text-slate-800 text-lg">Book a Consultation</h3>
              </div>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <User className="w-4 h-4" />
                      </span>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className={`w-full pl-10 pr-4 py-2 border rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors ${
                          errors.fullName ? 'border-red-500 bg-red-50/10' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                          <Mail className="w-4 h-4" />
                        </span>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="johndoe@example.com"
                          className={`w-full pl-10 pr-4 py-2 border rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors ${
                            errors.email ? 'border-red-500 bg-red-50/10' : 'border-slate-200'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Telephone Number
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                          <Phone className="w-4 h-4" />
                        </span>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0720 000 000"
                          className={`w-full pl-10 pr-4 py-2 border rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors ${
                            errors.phone ? 'border-red-500 bg-red-50/10' : 'border-slate-200'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Service Requested
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        <BookOpen className="w-4 h-4" />
                      </span>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-slate-800 bg-white focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors appearance-none"
                      >
                        {SERVICES_LIST.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Message / Research Details (Optional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share details about your research project, topic, or specific challenges..."
                      rows={3}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-600 font-medium rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm transition-colors"
                    >
                      Schedule Free Call
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-6 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900">Consultation Scheduled!</h4>
                    <p className="text-slate-500 text-sm mt-1">
                      Thank you, {formData.fullName}. We will reach out to you shortly via telephone (
                      {formData.phone}) or email ({formData.email}) to coordinate our call regarding{' '}
                      <strong>{formData.serviceNeeded}</strong>.
                    </p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

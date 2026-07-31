/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Tab } from '../types';
import { GraduationCap, MapPin, Phone, Mail, Clock, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: Tab) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-slate-800">
        
        {/* Brand Col */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center h-8 w-8 rounded-md bg-indigo-600 text-white">
              <GraduationCap className="w-4.5 h-4.5" />
            </div>
            <span className="font-extrabold text-white tracking-tight text-lg">
              Elimu Consultants
            </span>
          </div>
          <p className="text-xs text-slate-400 font-light max-w-sm leading-relaxed">
            Empowering master&apos;s and doctoral scholars to develop robust research methodologies and analytical clarity.
          </p>
          <div className="text-[11px] text-indigo-400 font-semibold tracking-wider uppercase">
            www.elimuconsultants.co.ke
          </div>
        </div>

        {/* Links Col */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Home / Landing
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('services')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Our Academic Services
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('contact')}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info Col */}
        <div className="md:col-span-5 space-y-4">
          <h4 className="text-xs font-bold text-slate-200 uppercase tracking-widest">Office & Contact Details</h4>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <span>
                Applewood Building, 10th Floor, Adams Arcade, Ngong Road, Nairobi, Kenya
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-slate-500 shrink-0" />
              <span className="font-semibold text-slate-300">
                Telephone: 0720 646 916
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-slate-500 shrink-0" />
              <span className="hover:text-white transition-colors">
                <a href="mailto:noble.consultants@yahoo.com">noble.consultants@yahoo.com</a>
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-slate-500 shrink-0" />
              <span>
                Hours of Operation: Monday – Sunday (available on calls all the time)
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Compliance / Policy Section - Essential for Google Ads Compliance */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-6">
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row items-start gap-4">
          <div className="p-1.5 bg-slate-900 rounded-lg text-amber-500 shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h5 className="text-xs font-bold text-slate-300">Academic Integrity Notice & Compliance</h5>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Academic Integrity Notice: Elimu Consultants provides educational coaching, statistical advice, methodology tutoring, and editing services only. We do not write, generate, or complete academic assignments, theses, or dissertations for students.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 gap-4">
          <span>&copy; {new Date().getFullYear()} Elimu Consultants. All Rights Reserved.</span>
          <div className="flex gap-4">
            <span className="text-slate-500">Professional Academic Mentoring & Coaching</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

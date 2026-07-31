/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, BarChart3, Edit3, HelpCircle, ArrowRight, ShieldAlert, CheckCircle2, Phone } from 'lucide-react';
import { Tab } from '../types';

interface HomeViewProps {
  onNavigate: (tab: Tab) => void;
  onOpenBooking: (serviceName?: string) => void;
  heroImageSrc: string;
}

export default function HomeView({ onNavigate, onOpenBooking, heroImageSrc }: HomeViewProps) {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 border-b border-slate-100 py-12 md:py-20 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
              Official Academic Consultation & Tutoring
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Elevate Your Academic Research with Expert Guidance
            </h1>

            {/* Large Rectangular Icon/Callout */}
            <div className="pt-2 pb-3">
              <a
                href="tel:0720646916"
                className="inline-flex items-center gap-4 px-8 py-5 bg-slate-900 hover:bg-indigo-600 text-white font-bold rounded-xl shadow-lg transition-all group hover:scale-[1.02] active:scale-[0.98] border-l-4 border-indigo-500"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-slate-800 text-indigo-400 group-hover:bg-indigo-700 group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest group-hover:text-indigo-200 transition-colors">
                    24/7 Telephone Hotline
                  </span>
                  <span className="text-xl sm:text-2xl font-extrabold tracking-wide">
                    Call Us: 0720 646 916
                  </span>
                </div>
              </a>
            </div>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-light leading-relaxed">
              Master your thesis, dissertation, and research projects with 1-on-1 coaching, statistical support, and professional proofreading.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                Book a Consultation
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-medium rounded-lg hover:border-slate-300 transition-all cursor-pointer"
              >
                Explore Our Services
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-100 aspect-16/10 lg:aspect-square bg-slate-100">
              <img
                src={heroImageSrc}
                alt="Graduate study session and thesis coaching with academic mentor"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent"></div>
              
              {/* Overlay badge with strict integrity label */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-lg border border-slate-100/50 shadow-lg">
                <p className="text-xs text-slate-800 font-medium flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>Educational Tutoring Only:</strong> Fully aligned with international university integrity standards.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Elimu Consultants? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Why Choose Elimu Consultants?
          </h2>
          <div className="h-1 w-16 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-xs transition-all">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-left">
              <h3 className="font-semibold text-slate-900 text-lg">Methodology Mastery</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learn how to structure robust research frameworks, align your objectives, and design sound data collection methods.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-xs transition-all">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-left">
              <h3 className="font-semibold text-slate-900 text-lg">Data Confidence</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Gain clarity on SPSS, R, STATA, or Excel analysis without getting bogged down by raw numbers.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-xs transition-all">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <Edit3 className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-left">
              <h3 className="font-semibold text-slate-900 text-lg">Polished Submissions</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Present your work with clear academic tone, precise formatting, and flawless grammar.
              </p>
            </div>
          </div>

          <div className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-xs transition-all">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="space-y-1.5 text-left">
              <h3 className="font-semibold text-slate-900 text-lg">Independent Ownership</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Build the skills and confidence required to defend your work successfully before your academic committee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-slate-50 py-12 rounded-2xl border border-slate-100">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Core Services Overview
          </h2>
          <div className="h-1 w-16 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs flex flex-col justify-between hover:border-indigo-200 transition-all text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">01. Service</span>
              <h3 className="font-bold text-slate-900 text-lg">Thesis Coaching</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structured, step-by-step guidance from proposal development to final defense preparation.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Learn More <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs flex flex-col justify-between hover:border-indigo-200 transition-all text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">02. Service</span>
              <h3 className="font-bold text-slate-900 text-lg">Academic Proofreading</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive editing for clarity, tone, flow, and institutional style guides (APA, MLA, Harvard, etc.).
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Learn More <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs flex flex-col justify-between hover:border-indigo-200 transition-all text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">03. Service</span>
              <h3 className="font-bold text-slate-900 text-lg">Dissertation Statistics Help</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expert assistance with data cleaning, statistical modeling, hypothesis testing, and result interpretation.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Learn More <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-xs flex flex-col justify-between hover:border-indigo-200 transition-all text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">04. Service</span>
              <h3 className="font-bold text-slate-900 text-lg">Research Methodology Tutor</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Direct instruction on qualitative, quantitative, and mixed-methods research designs.
              </p>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              Learn More <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Trust & Ethics Callout */}
      <section className="max-w-3xl mx-auto px-4 text-center py-6 bg-amber-50 rounded-xl border border-amber-200/60">
        <div className="flex flex-col sm:flex-row items-center gap-4 text-left">
          <div className="p-2 bg-amber-100 rounded-lg text-amber-800">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 text-sm">Academic Integrity Notice</h4>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Elimu Consultants provides educational coaching, statistical advice, methodology tutoring, and editing services only. We do not write, generate, or complete academic assignments, theses, or dissertations for students.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Check, Award, AlertCircle, HelpCircle, BarChart, PenTool } from 'lucide-react';

interface ServicesViewProps {
  onOpenBooking: (serviceName?: string) => void;
  statisticsImageSrc: string;
}

export default function ServicesView({ onOpenBooking, statisticsImageSrc }: ServicesViewProps) {
  const services = [
    {
      id: 'thesis-coaching',
      title: 'Thesis Coaching',
      description: 'Navigating a master’s or doctoral thesis can feel overwhelming. Our coaching service provides one-on-one mentorship to keep your research project on track from start to finish.',
      offers: [
        'Topic refinement and problem statement alignment.',
        'Literature review structuring and synthesis techniques.',
        'Chapter-by-chapter progress reviews and actionable feedback.',
        'Defense preparation, mock oral exams, and slide deck guidance.',
      ],
      note: 'Coaching focuses on teaching you how to write and structure your thesis effectively.',
      icon: BookOpen,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    {
      id: 'academic-proofreading',
      title: 'Academic Proofreading',
      description: 'Ensure your academic writing reflects the quality of your underlying research. Our editors help you eliminate errors while preserving your unique scholarly voice.',
      offers: [
        'Correction of grammar, punctuation, spelling, and sentence syntax.',
        'Alignment with referencing styles (APA, Harvard, Chicago, IEEE, MLA).',
        'Improvements to academic tone, transition words, and paragraph flow.',
        'Formatting of margins, headings, tables of contents, and references.',
      ],
      icon: PenTool,
      color: 'bg-blue-50 text-blue-700 border-blue-100',
    },
    {
      id: 'dissertation-statistics-help',
      title: 'Dissertation Statistics Help',
      description: 'Data analysis is often the most challenging part of post-graduate research. We help you understand and execute the right analytical techniques for your data set.',
      offers: [
        'Guidance on selecting parametric vs. non-parametric tests.',
        'Step-by-step training in software tools (SPSS, STATA, R, Excel).',
        'Interpreting p-values, regression outputs, and ANOVA tables.',
        'Help with presenting statistical output clearly in charts and narrative text.',
      ],
      icon: BarChart,
      color: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    },
    {
      id: 'research-methodology-tutor',
      title: 'Research Methodology Tutor',
      description: 'A solid methodology is the backbone of any credible research paper. We coach you on choosing and defending the correct framework for your study.',
      offers: [
        'Clarification of qualitative, quantitative, and mixed-method approaches.',
        'Sampling technique design and sample size estimation.',
        'Instrument design (questionnaires, interview protocols, observation guides).',
        'Validity and reliability testing strategies.',
      ],
      icon: HelpCircle,
      color: 'bg-violet-50 text-violet-700 border-violet-100',
    },
  ];

  return (
    <div className="space-y-16 text-left">
      {/* Header Banner */}
      <section className="bg-slate-950 text-white rounded-2xl overflow-hidden relative py-12 md:py-16 px-6 md:px-12 shadow-md">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-radial-gradient from-slate-900 to-slate-950 opacity-95"></div>
        <div className="relative z-10 max-w-4xl space-y-4">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Premium Educational Support</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Our Academic Support Services</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-light">
            We empower master&apos;s and doctoral scholars in Kenya and globally to achieve rigorous, sound academic output through structured tutoring and coaching.
          </p>
        </div>
      </section>

      {/* Grid of Services and Image Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: The Services List */}
        <div className="lg:col-span-8 space-y-10">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl border border-slate-200/80 p-6 md:p-8 hover:shadow-md transition-all space-y-6"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg border ${service.color} shrink-0`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-950 tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    What We Offer
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2.5">
                    {service.offers.map((offer, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400 mt-2 shrink-0" />
                        <span>{offer}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {service.note && (
                  <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-lg text-xs text-slate-600 italic">
                    <strong>Note:</strong> {service.note}
                  </div>
                )}

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">1-on-1 Guidance &bull; Expert Consultants</span>
                  <button
                    onClick={() => onOpenBooking(service.title)}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
                  >
                    Request Coaching on This
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Right: Sticky Informational Sidebar with Image */}
        <div className="lg:col-span-4 lg:sticky lg:top-6 space-y-6">
          <div className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xs">
            <div className="aspect-4/3 bg-slate-100">
              <img
                src={statisticsImageSrc}
                alt="Dissertation statistics help and academic literature analysis workspace"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5 space-y-4 text-left">
              <h4 className="font-bold text-slate-950 text-base">Methodology & Data Guidance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether you need assistance with structured data cleaning in SPSS or understanding complex qualitative frameworks, Elimu Consultants offers tailored educational support.
              </p>
              <div className="pt-3 border-t border-slate-100 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Award className="w-4 h-4 text-indigo-600" />
                  Expert SPSS / R / STATA Mentorship
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <Award className="w-4 h-4 text-indigo-600" />
                  APA / Harvard Reference Proofreading
                </div>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-xl space-y-3">
            <h4 className="font-bold text-indigo-950 text-sm">Have Questions First?</h4>
            <p className="text-xs text-indigo-800 leading-relaxed">
              Reach out to our team to discuss your dissertation goals. We will match you with a tutor specialized in your research domain.
            </p>
            <button
              onClick={() => onOpenBooking()}
              className="w-full py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg shadow-xs transition-colors cursor-pointer"
            >
              Book Consultation Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

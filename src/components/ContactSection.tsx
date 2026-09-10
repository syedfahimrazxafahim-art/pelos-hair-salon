import React from 'react';
import { BUSINESS_INFO } from '../data/businessData';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { PelosLogo } from './PelosLogo';

export const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-[#050505] dark:bg-[#050505] light:bg-[#F8F9FA] relative transition-colors duration-300"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-white dark:text-white light:text-[#0A0A0A]"
          >
            CONTACT <span className="text-[#00AEEF]">PELOS</span>
          </h2>
          <div className="w-20 h-[3px] bg-[#00AEEF] mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(0,174,239,0.7)]" />
          <p className="mt-4 text-base sm:text-lg text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
            Connect directly with our Los Angeles grooming studio.
          </p>
        </div>

        {/* Premium Charcoal Contact Card */}
        <div className="bg-[#111111] dark:bg-[#111111] light:bg-white p-8 sm:p-12 rounded-sm border border-white/10 dark:border-white/10 light:border-black/10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Brand & Location */}
            <div className="md:col-span-6 space-y-6">
              <PelosLogo size="lg" id="contact-card-logo" />

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded bg-[#181818] dark:bg-[#181818] light:bg-[#F1F3F5] border border-[#00AEEF]/40 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#00AEEF]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-[#00AEEF]">
                      Studio Location
                    </h3>
                    <p className="text-lg font-heading font-semibold text-white dark:text-white light:text-[#0A0A0A]">
                      {BUSINESS_INFO.location}
                    </p>
                    <p className="text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
                      Primary Service: {BUSINESS_INFO.primaryService}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded bg-[#181818] dark:bg-[#181818] light:bg-[#F1F3F5] border border-[#00AEEF]/40 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#00AEEF]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-[#00AEEF]">
                      Direct Telephone
                    </h3>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-lg font-heading font-semibold text-white dark:text-white light:text-[#0A0A0A] hover:text-[#00AEEF] transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded bg-[#181818] dark:bg-[#181818] light:bg-[#F1F3F5] border border-[#00AEEF]/40 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#00AEEF]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-heading font-bold uppercase tracking-wider text-[#00AEEF]">
                      Email Inquiries
                    </h3>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="text-base sm:text-lg font-mono text-white dark:text-white light:text-[#0A0A0A] hover:text-[#00AEEF] transition-colors break-all"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Action Buttons & Social Links */}
            <div className="md:col-span-6 space-y-6 md:pl-6 md:border-l border-white/10 dark:border-white/10 light:border-black/10">
              
              <div className="space-y-3.5">
                {/* CALL NOW Button */}
                <a
                  id="contact-call-now-btn"
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full py-4 px-6 bg-[#00AEEF] hover:bg-[#18C8FF] text-[#050505] font-extrabold text-sm sm:text-base tracking-widest uppercase rounded-sm electric-glow transition-all duration-300 flex items-center justify-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>CALL NOW</span>
                </a>

                {/* EMAIL US Button */}
                <a
                  id="contact-email-us-btn"
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="w-full py-4 px-6 bg-transparent hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-black/5 text-white dark:text-white light:text-black border border-[#00AEEF]/60 hover:border-[#00AEEF] font-bold text-sm sm:text-base tracking-widest uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
                >
                  <Mail className="w-5 h-5 text-[#00AEEF]" />
                  <span>EMAIL US</span>
                </a>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-white/10 dark:border-white/10 light:border-black/10">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-400 light:text-neutral-600 mb-3">
                  Follow Official Social Channels
                </h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Facebook */}
                  <a
                    id="contact-facebook-link"
                    href={BUSINESS_INFO.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-[#181818] dark:bg-[#181818] light:bg-[#F1F3F5] text-white dark:text-white light:text-black rounded-sm border border-white/10 hover:border-[#00AEEF] transition-colors flex items-center justify-between text-xs font-semibold uppercase tracking-wider group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
                  >
                    <span>Facebook</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#00AEEF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Instagram */}
                  <a
                    id="contact-instagram-link"
                    href={BUSINESS_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-[#181818] dark:bg-[#181818] light:bg-[#F1F3F5] text-white dark:text-white light:text-black rounded-sm border border-white/10 hover:border-[#00AEEF] transition-colors flex items-center justify-between text-xs font-semibold uppercase tracking-wider group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00AEEF]"
                  >
                    <span>Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#00AEEF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Top Decorative Blue Edge */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-[#00AEEF] opacity-70" />
        </div>

      </div>
    </section>
  );
};

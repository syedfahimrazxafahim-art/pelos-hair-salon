import React, { useState, useEffect } from 'react';
import { BarberProfile, BookingFormData } from '../types';
import { SERVICES_LIST, BUSINESS_INFO } from '../data/businessData';
import { Calendar, Clock, User, Phone, Mail, Scissors, MessageSquare, CheckCircle, AlertCircle, X } from 'lucide-react';

interface BookingSectionProps {
  preselectedService?: string;
  preselectedBarber?: string;
  barbers: BarberProfile[];
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  preselectedService = '',
  preselectedBarber = '',
  barbers,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    service: preselectedService || SERVICES_LIST[0].title,
    preferredDate: '',
    preferredTime: '11:00 AM',
    barber: preselectedBarber || (barbers[0]?.name || 'Any Available Master Barber'),
    additionalNotes: '',
  });

  const [submittedRequest, setSubmittedRequest] = useState<BookingFormData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync props if changed
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedBarber) {
      setFormData((prev) => ({ ...prev, barber: preselectedBarber }));
    }
  }, [preselectedBarber]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean client-side submission feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedRequest({ ...formData });
    }, 600);
  };

  const handleCloseConfirmation = () => {
    setSubmittedRequest(null);
  };

  // Get tomorrow's date formatted as YYYY-MM-DD for min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <section
      id="booking"
      className="py-24 sm:py-32 bg-[#050505] dark:bg-[#050505] light:bg-[#F8F9FA] relative transition-colors duration-300"
      aria-labelledby="booking-heading"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00AEEF]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            id="booking-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-white dark:text-white light:text-[#0A0A0A]"
          >
            BOOK YOUR <span className="text-[#00AEEF]">NEXT CUT</span>
          </h2>
          <div className="w-20 h-[3px] bg-[#00AEEF] mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(0,174,239,0.7)]" />
          <p className="mt-4 text-base sm:text-lg text-neutral-300 dark:text-neutral-300 light:text-neutral-700 font-medium">
            Choose your service, select your preferred barber, and request your next appointment.
          </p>
          <div className="mt-2 text-xs text-neutral-400 dark:text-neutral-400 light:text-neutral-600">
            Los Angeles, California • Direct Appointment Request Service
          </div>
        </div>

        {/* Booking Form Card */}
        <div className="bg-[#111111] dark:bg-[#111111] light:bg-white p-6 sm:p-10 rounded-sm border border-[#00AEEF]/40 shadow-2xl relative">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 dark:text-neutral-300 light:text-neutral-700 mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Full Name *</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Marcus Vance"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#181818] dark:bg-[#181818] light:bg-[#F8F9FA] text-white dark:text-white light:text-black rounded-sm border border-white/10 dark:border-white/10 light:border-black/15 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] focus:outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 dark:text-neutral-300 light:text-neutral-700 mb-2 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Phone Number *</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="(747) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#181818] dark:bg-[#181818] light:bg-[#F8F9FA] text-white dark:text-white light:text-black rounded-sm border border-white/10 dark:border-white/10 light:border-black/15 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] focus:outline-none transition-colors text-sm"
                />
              </div>
            </div>

            {/* Row 2: Email & Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 dark:text-neutral-300 light:text-neutral-700 mb-2 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Email Address *</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#181818] dark:bg-[#181818] light:bg-[#F8F9FA] text-white dark:text-white light:text-black rounded-sm border border-white/10 dark:border-white/10 light:border-black/15 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] focus:outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 dark:text-neutral-300 light:text-neutral-700 mb-2 flex items-center gap-1.5">
                  <Scissors className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Select Service *</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#181818] dark:bg-[#181818] light:bg-[#F8F9FA] text-white dark:text-white light:text-black rounded-sm border border-white/10 dark:border-white/10 light:border-black/15 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] focus:outline-none transition-colors text-sm cursor-pointer"
                >
                  {SERVICES_LIST.map((srv) => (
                    <option key={srv.id} value={srv.title} className="bg-[#111111] text-white">
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 3: Date, Time & Barber */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label htmlFor="preferredDate" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 dark:text-neutral-300 light:text-neutral-700 mb-2 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Preferred Date *</span>
                </label>
                <input
                  id="preferredDate"
                  type="date"
                  name="preferredDate"
                  required
                  min={minDate}
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#181818] dark:bg-[#181818] light:bg-[#F8F9FA] text-white dark:text-white light:text-black rounded-sm border border-white/10 dark:border-white/10 light:border-black/15 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] focus:outline-none transition-colors text-sm"
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 dark:text-neutral-300 light:text-neutral-700 mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Preferred Time *</span>
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  required
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#181818] dark:bg-[#181818] light:bg-[#F8F9FA] text-white dark:text-white light:text-black rounded-sm border border-white/10 dark:border-white/10 light:border-black/15 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] focus:outline-none transition-colors text-sm cursor-pointer"
                >
                  {[
                    '09:00 AM',
                    '10:00 AM',
                    '11:00 AM',
                    '12:00 PM',
                    '01:00 PM',
                    '02:00 PM',
                    '03:00 PM',
                    '04:00 PM',
                    '05:00 PM',
                    '06:00 PM',
                    '07:00 PM',
                  ].map((time) => (
                    <option key={time} value={time} className="bg-[#111111] text-white">
                      {time}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="barber" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 dark:text-neutral-300 light:text-neutral-700 mb-2 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[#00AEEF]" />
                  <span>Choose Barber *</span>
                </label>
                <select
                  id="barber"
                  name="barber"
                  required
                  value={formData.barber}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#181818] dark:bg-[#181818] light:bg-[#F8F9FA] text-white dark:text-white light:text-black rounded-sm border border-white/10 dark:border-white/10 light:border-black/15 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] focus:outline-none transition-colors text-sm cursor-pointer"
                >
                  <option value="Any Available Master Barber" className="bg-[#111111] text-white">
                    Any Available Master Barber
                  </option>
                  {barbers.map((b) => (
                    <option key={b.id} value={b.name} className="bg-[#111111] text-white">
                      {b.name} ({b.specialty})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Additional Notes */}
            <div>
              <label htmlFor="additionalNotes" className="block text-xs font-bold uppercase tracking-wider text-neutral-300 dark:text-neutral-300 light:text-neutral-700 mb-2 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-[#00AEEF]" />
                <span>Additional Notes (Optional)</span>
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                rows={3}
                placeholder="Specific cut preferences, beard length requirements, or event timing..."
                value={formData.additionalNotes}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#181818] dark:bg-[#181818] light:bg-[#F8F9FA] text-white dark:text-white light:text-black rounded-sm border border-white/10 dark:border-white/10 light:border-black/15 focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF] focus:outline-none transition-colors text-sm"
              />
            </div>

            {/* Primary Action Button */}
            <div className="pt-2">
              <button
                id="booking-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#00AEEF] hover:bg-[#18C8FF] text-[#050505] font-extrabold text-sm sm:text-base tracking-widest uppercase rounded-sm electric-glow transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Calendar className="w-5 h-5" />
                <span>{isSubmitting ? 'PROCESSING REQUEST...' : 'BOOK NOW'}</span>
              </button>
            </div>

            {/* Honest Disclosure Notice */}
            <p className="text-center text-[11px] text-neutral-500 dark:text-neutral-500 light:text-neutral-500 font-medium">
              * Appointment requests are reviewed and confirmed directly by our Los Angeles studio staff via phone or email.
            </p>

          </form>
        </div>

        {/* Appointment Request Receipt Modal */}
        {submittedRequest && (
          <div
            id="booking-confirmation-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirmation-modal-title"
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="bg-[#111111] border border-[#00AEEF] rounded-sm max-w-lg w-full p-8 text-white shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              <button
                type="button"
                onClick={handleCloseConfirmation}
                aria-label="Close confirmation dialog"
                className="absolute top-4 right-4 text-neutral-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-[#00AEEF]/20 border border-[#00AEEF] rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-8 h-8 text-[#00AEEF]" />
                </div>
                <h3 id="confirmation-modal-title" className="text-2xl font-heading font-extrabold uppercase text-white">
                  Appointment Request Received
                </h3>
                <p className="text-xs text-[#00AEEF] uppercase tracking-widest font-semibold mt-1">
                  Pelos Barbershop • Los Angeles, California
                </p>
              </div>

              <div className="bg-[#181818] p-5 rounded border border-white/10 space-y-3 text-xs sm:text-sm mb-6">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-400">Client:</span>
                  <span className="font-semibold text-white">{submittedRequest.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-400">Service:</span>
                  <span className="font-semibold text-[#00AEEF]">{submittedRequest.service}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-400">Barber:</span>
                  <span className="font-semibold text-white">{submittedRequest.barber}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-neutral-400">Requested Schedule:</span>
                  <span className="font-semibold text-white">
                    {submittedRequest.preferredDate || 'Upcoming'} at {submittedRequest.preferredTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Contact:</span>
                  <span className="font-semibold text-white">{submittedRequest.phone}</span>
                </div>
              </div>

              {/* Honest Clarification */}
              <div className="flex items-start gap-2.5 p-3.5 rounded bg-blue-950/40 border border-[#00AEEF]/40 text-xs text-neutral-300 mb-6">
                <AlertCircle className="w-4 h-4 text-[#00AEEF] flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Honest Confirmation Flow:</strong> Our team will review our Los Angeles studio schedule and contact you shortly via phone or email at <strong className="text-white">{submittedRequest.email}</strong> to confirm your slot.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex-1 py-3 px-4 bg-[#181818] hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-wider rounded text-center border border-white/10 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#00AEEF]" />
                  <span>Call Us Directly</span>
                </a>

                <button
                  type="button"
                  onClick={handleCloseConfirmation}
                  className="flex-1 py-3 px-4 bg-[#00AEEF] hover:bg-[#18C8FF] text-[#050505] font-bold text-xs uppercase tracking-wider rounded text-center electric-glow-sm"
                >
                  Done
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

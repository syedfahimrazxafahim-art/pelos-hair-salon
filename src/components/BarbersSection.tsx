import React, { useState } from 'react';
import { BarberProfile } from '../types';
import { INITIAL_BARBERS } from '../data/businessData';
import { Calendar, Settings, Check, RefreshCw } from 'lucide-react';

interface BarbersSectionProps {
  onSelectBarber: (barberName: string) => void;
  barbers: BarberProfile[];
  onUpdateBarber?: (updated: BarberProfile) => void;
}

export const BarbersSection: React.FC<BarbersSectionProps> = ({
  onSelectBarber,
  barbers,
  onUpdateBarber,
}) => {
  const [editingBarber, setEditingBarber] = useState<BarberProfile | null>(null);
  const [showConfigNotice, setShowConfigNotice] = useState(false);

  return (
    <section
      id="barbers"
      className="py-24 sm:py-32 bg-[#050505] dark:bg-[#050505] light:bg-[#F7F7F5] relative transition-colors duration-400"
      aria-labelledby="barbers-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2
            id="barbers-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold uppercase tracking-tight text-white dark:text-white light:text-[#151515] transition-colors duration-300"
          >
            MEET OUR <span className="text-[#00AEEF]">BARBERS</span>
          </h2>
          <div className="w-20 h-[3px] bg-[#00AEEF] mx-auto mt-4 rounded-full shadow-[0_0_12px_rgba(0,174,239,0.7)]" />
          <p className="mt-4 text-base sm:text-lg text-neutral-400 dark:text-neutral-400 light:text-[#4A4A4A] transition-colors duration-300">
            Master craftsmen dedicated to sharp cuts, sculpted beards, and uncompromising attention to detail.
          </p>

          {/* Configurable Roster Indicator & Toggle */}
          <div className="mt-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] dark:bg-[#111111] light:bg-white border border-[#00AEEF]/40 text-xs text-neutral-300 dark:text-neutral-300 light:text-[#151515] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
            <span>Official Pelos Barbershop Roster</span>
            <button
              type="button"
              onClick={() => setShowConfigNotice(!showConfigNotice)}
              className="ml-2 underline text-[#00AEEF] hover:text-[#18C8FF] text-xs font-semibold focus:outline-none"
            >
              {showConfigNotice ? 'Hide Details' : 'Roster Info'}
            </button>
          </div>

          {showConfigNotice && (
            <div className="mt-4 p-4 rounded bg-[#111111] border border-white/10 text-left text-xs text-neutral-300 max-w-xl mx-auto animate-in fade-in">
              <p className="font-semibold text-white mb-1">Roster Configuration Notice:</p>
              <p>
                In strict adherence to brand guidelines, no individual barber names or personal biographies have been fabricated. 
                Use the <strong className="text-[#00AEEF]">"Customize Profile"</strong> icon on any card to update names, specialties, or image paths with specific Pelos team members.
              </p>
            </div>
          )}
        </div>

        {/* Responsive Team Grid: Desktop 4 cards, Tablet 2 cards, Mobile 1 card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              id={`barber-card-${barber.id}`}
              className="group relative bg-[#111111] dark:bg-[#111111] light:bg-white rounded-sm border border-[#00AEEF]/30 hover:border-[#00AEEF] transition-all duration-400 overflow-hidden flex flex-col justify-between hover:electric-glow hover:-translate-y-1.5 shadow-xl"
            >
              {/* Large Portrait Image Container with subtle slow zoom */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0A0A0A]">
                <img
                  src={barber.image}
                  alt={`Portrait of ${barber.name}`}
                  className="w-full h-full object-cover object-center filter contrast-110 brightness-95 group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] dark:from-[#111111] light:from-white/80 via-transparent to-transparent opacity-90 dark:opacity-90 light:opacity-60" />

                {/* Quick Edit Config Button for Shop Owner */}
                {onUpdateBarber && (
                  <button
                    type="button"
                    onClick={() => setEditingBarber(barber)}
                    title="Customize this barber profile"
                    aria-label={`Customize ${barber.name} profile`}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/75 hover:bg-[#00AEEF] text-white hover:text-black flex items-center justify-center backdrop-blur-sm border border-white/20 transition-colors duration-200 focus:outline-none"
                  >
                    <Settings className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Profile Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Barber Name */}
                  <h3 className="text-xl font-heading font-extrabold uppercase tracking-tight text-white dark:text-white light:text-[#151515] group-hover:text-[#00AEEF] transition-colors duration-200">
                    {barber.name}
                  </h3>

                  {/* Specialty in Electric Blue */}
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#00AEEF]">
                    {barber.specialty}
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-neutral-400 dark:text-neutral-400 light:text-[#4A4A4A] leading-relaxed font-normal">
                    {barber.bio}
                  </p>
                </div>

                {/* Blue CTA Button */}
                <div className="mt-6 pt-4 border-t border-white/10 dark:border-white/10 light:border-black/10">
                  <button
                    type="button"
                    onClick={() => onSelectBarber(barber.name)}
                    aria-label={`Book appointment with ${barber.name}`}
                    className="w-full py-2.5 px-3 bg-[#00AEEF] hover:bg-[#18C8FF] text-[#050505] font-extrabold text-xs tracking-wider uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 electric-glow-sm hover:electric-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>BOOK WITH THIS BARBER</span>
                  </button>
                </div>
              </div>

              {/* Top Accent Line */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-[#00AEEF] opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Barber Customization Modal (Shop Admin/Owner Configuration) */}
        {editingBarber && onUpdateBarber && (
          <div
            id="barber-edit-modal"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <div className="bg-[#111111] border border-[#00AEEF]/50 rounded-lg max-w-md w-full p-6 text-white shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <h4 className="font-heading font-bold text-lg text-[#00AEEF] uppercase">
                  Configure Barber Profile
                </h4>
                <button
                  type="button"
                  onClick={() => setEditingBarber(null)}
                  className="text-neutral-400 hover:text-white text-sm"
                >
                  Close
                </button>
              </div>

              <div className="mt-4 space-y-4 text-xs">
                <div>
                  <label className="block text-neutral-300 font-semibold mb-1 uppercase tracking-wider">
                    Barber Name
                  </label>
                  <input
                    type="text"
                    value={editingBarber.name}
                    onChange={(e) => setEditingBarber({ ...editingBarber, name: e.target.value })}
                    className="w-full px-3 py-2 bg-[#181818] border border-white/15 rounded text-white focus:border-[#00AEEF] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-semibold mb-1 uppercase tracking-wider">
                    Specialty / Title
                  </label>
                  <input
                    type="text"
                    value={editingBarber.specialty}
                    onChange={(e) => setEditingBarber({ ...editingBarber, specialty: e.target.value })}
                    className="w-full px-3 py-2 bg-[#181818] border border-white/15 rounded text-white focus:border-[#00AEEF] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-semibold mb-1 uppercase tracking-wider">
                    Short Bio / Description
                  </label>
                  <textarea
                    rows={3}
                    value={editingBarber.bio}
                    onChange={(e) => setEditingBarber({ ...editingBarber, bio: e.target.value })}
                    className="w-full px-3 py-2 bg-[#181818] border border-white/15 rounded text-white focus:border-[#00AEEF] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-semibold mb-1 uppercase tracking-wider">
                    Image URL or Asset Path
                  </label>
                  <input
                    type="text"
                    value={editingBarber.image}
                    onChange={(e) => setEditingBarber({ ...editingBarber, image: e.target.value })}
                    className="w-full px-3 py-2 bg-[#181818] border border-white/15 rounded text-white focus:border-[#00AEEF] focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setEditingBarber(null)}
                  className="px-4 py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-xs font-semibold uppercase"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onUpdateBarber(editingBarber);
                    setEditingBarber(null);
                  }}
                  className="px-4 py-2 rounded bg-[#00AEEF] hover:bg-[#18C8FF] text-black font-bold text-xs uppercase flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

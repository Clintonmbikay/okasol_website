import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from '../../components/Eyebrow';

export function FinalCTA() {
  return (
    <section className="bg-[#15110E] relative overflow-hidden border-b border-[#2B2622]">
      <div className="px-6 md:px-16 lg:px-20 py-14 md:py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 md:gap-12">
        <div className="flex flex-col max-w-[680px]">
          <Eyebrow label="L'INVITATION" />
          <h2 className="font-serif font-normal text-[36px] md:text-[44px] lg:text-[48px] leading-[1.08] tracking-[-0.01em] mt-6">
            Prenez rendez-vous pour{' '}
            <span className="italic text-[#E8DDC8]">votre tenue sur&nbsp;mesure.</span>
          </h2>
          <p className="mt-5 text-sm leading-[1.7] text-[#A89B89] max-w-[520px]">
            Premier rendez-vous gratuit en atelier ou à domicile, du mardi au samedi.
          </p>
        </div>
        <div className="flex flex-col items-start lg:items-end gap-5">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3.5 px-8 py-4.5 bg-[#C9A96E] text-[#1A1614] text-xs tracking-[0.22em] font-semibold hover:bg-[#E8DDC8] transition-colors group"
            style={{ paddingTop: '18px', paddingBottom: '18px' }}
          >
            PRENDRE RENDEZ-VOUS
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </Link>
          <a
            href="#"
            className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.22em] text-[#F4EFE7] hover:text-[#E8DDC8] transition-colors group"
          >
            OU NOUS ÉCRIRE SUR WHATSAPP
            <ArrowRight
              className="w-3.5 h-3.5 text-[#C9A96E] transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
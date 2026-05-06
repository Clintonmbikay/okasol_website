import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from '../../components/Eyebrow';

export function AboutTeaser() {
  return (
    <section className="flex flex-col lg:flex-row border-b border-[#2B2622]">
      <div className="lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-20 py-12 md:py-20 lg:border-r border-[#2B2622]">
        <Eyebrow label="NOTRE MAISON" />
        <h2 className="font-serif font-normal text-[34px] md:text-[42px] leading-[1.1] tracking-[-0.01em] mt-8 max-w-[440px]">
          Une exigence transmise,{' '}
          <span className="italic text-[#E8DDC8]">une précision absolue.</span>
        </h2>
        <p className="mt-6 text-sm leading-[1.75] text-[#A89B89] max-w-[440px]">
          Depuis 2009, Maison OKASOL réunit dans son atelier de Kinshasa les meilleurs
          tailleurs et brodeurs de la République Démocratique du Congo. Chaque pièce est
          façonnée à la main, à votre mesure, avec la rigueur d'une institution et la
          sensibilité d'une maison d'art.
        </p>
        <Link
          to="/a-propos"
          className="mt-9 inline-flex items-center gap-2.5 text-xs tracking-[0.22em] text-[#F4EFE7] border-b border-[#C9A96E] pb-1.5 w-fit hover:text-[#E8DDC8] transition-colors group"
        >
          LIRE NOTRE HISTOIRE
          <ArrowRight
            className="w-3.5 h-3.5 text-[#C9A96E] transition-transform group-hover:translate-x-0.5"
            strokeWidth={1.5}
          />
        </Link>
      </div>

      <div
        className="lg:w-1/2 relative min-h-[360px] md:min-h-[460px] lg:min-h-0 overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse at 60% 50%, #2A231D 0%, #15110E 75%, #0C0908 100%)',
        }}
      >
        {/* Atelier interior */}
        <img
          src="/atelier.jpg"
          alt="Atelier Maison OKASOL · Kinshasa"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
          style={{ filter: 'brightness(0.65) contrast(1.05) saturate(0.8)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(26,22,20,0.15) 0%, rgba(26,22,20,0.10) 40%, rgba(26,22,20,0.55) 100%)',
          }}
        />

        <div className="hidden sm:block absolute top-8 right-9 text-[11px] tracking-[0.28em] text-[#7A6E5C]">
          — ATELIER · KINSHASA
        </div>

        <div className="absolute bottom-8 left-5 md:left-9 flex flex-col gap-1.5 max-w-[200px] md:max-w-[280px]">
          <div className="font-serif text-sm italic text-[#C9BFAE]">
            « La main avant la machine, toujours. »
          </div>
          <div className="text-[10px] tracking-[0.22em] text-[#7A6E5C]">
            M. OKASOL · FONDATEUR
          </div>
        </div>

        <div className="absolute bottom-8 right-5 md:right-9 flex gap-5 md:gap-8">
          <div className="flex flex-col items-end gap-1">
            <div className="font-serif text-2xl text-[#C9A96E]">2009</div>
            <div className="text-[10px] tracking-[0.22em] text-[#7A6E5C]">FONDATION</div>
          </div>
          <div className="flex flex-col items-end gap-1">
            <div className="font-serif text-2xl text-[#C9A96E]">12</div>
            <div className="text-[10px] tracking-[0.22em] text-[#7A6E5C]">ARTISANS</div>
          </div>
        </div>
      </div>
    </section>
  );
}
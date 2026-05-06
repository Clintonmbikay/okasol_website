import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Eyebrow } from '../../components/Eyebrow';
import { AtelierFigure } from '../../components/AtelierFigure';

const vignettes = [
  {
    variant: 'toge' as const,
    indicator: '01',
    label: 'TOGES JUDICIAIRES',
    caption: '« Maître Kabongo, Cour d\'Appel de Kinshasa »',
    credit: 'PHOTOGRAPHIE · BUREAU KINSHASA · 2025',
  },
  {
    variant: 'uniform' as const,
    indicator: '02',
    label: 'UNIFORMES OFFICIELS',
    caption: '« Police Nationale, tenue de parade »',
    credit: 'SÉRIE DE 240 · LIVRÉE EN 2024',
  },
  {
    variant: 'suit' as const,
    indicator: '03',
    label: 'SUR MESURE HOMME',
    caption: '« Costume trois-pièces, drap anthracite »',
    credit: 'PIÈCE UNIQUE · GOMBE · 2025',
  },
  {
    variant: 'dress' as const,
    indicator: '04',
    label: 'TENUES DE CÉRÉMONIE',
    caption: '« Robe de mariage, brocart noir »',
    credit: 'SEPT ESSAYAGES · LIVRÉE EN 2024',
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const v = vignettes[index];
  const total = vignettes.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="flex flex-col lg:flex-row min-h-[calc(100vh-72px)] border-b border-[#2B2622]">
      {/* Image side */}
      <div
        className="relative lg:w-[55%] min-h-[420px] md:min-h-[520px] lg:min-h-0 overflow-hidden border-b lg:border-b-0 lg:border-r border-[#2B2622]"
        style={{
          background:
            'radial-gradient(ellipse at 30% 40%, #2A2421 0%, #15110E 70%, #0C0908 100%)',
        }}
      >
        {/* Center figure — keyed to retrigger zoom on change */}
        <div
          key={index}
          className="absolute inset-0 flex items-center justify-center"
        >
          <AtelierFigure variant={v.variant} size="lg" />
        </div>

        {/* Top-left: indicator */}
        <div
          className="absolute top-5 left-5 md:top-10 md:left-10 flex flex-col gap-1.5 animate-fade-up"
          style={{ animationDelay: '300ms' }}
        >
          <div className="text-[10px] tracking-[0.32em] text-[#8A7E6C]">
            — {v.indicator} / 0{total}
          </div>
          <div
            key={`label-${index}`}
            className="text-[11px] tracking-[0.2em] text-[#A89B89] animate-fade-in"
          >
            {v.label}
          </div>
        </div>

        {/* Bottom-left: caption */}
        <div className="absolute bottom-16 left-5 md:bottom-10 md:left-10 flex flex-col gap-1 max-w-[70%]">
          <div
            key={`caption-${index}`}
            className="font-serif text-sm italic text-[#C9BFAE] animate-fade-in"
          >
            {v.caption}
          </div>
          <div
            key={`credit-${index}`}
            className="text-[10px] tracking-[0.22em] text-[#7A6E5C] animate-fade-in"
          >
            {v.credit}
          </div>
        </div>

        {/* Vertical "DÉFILEZ" — desktop only */}
        <div className="hidden md:flex absolute bottom-10 right-8 items-center gap-2.5 text-[#A89B89] text-[10px] tracking-[0.22em]">
          <div
            className="w-px h-9"
            style={{
              background: 'linear-gradient(180deg, transparent, #C9A96E, transparent)',
            }}
          />
          <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            DÉFILEZ
          </div>
        </div>

        {/* Rotator controls */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 md:bottom-10 lg:left-auto lg:right-24 lg:translate-x-0 flex gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 border border-[#3A332D] flex items-center justify-center text-[#A89B89] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
            aria-label="Vignette précédente"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 border border-[#C9A96E] flex items-center justify-center text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#1A1614] transition-colors"
            aria-label="Vignette suivante"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Type side */}
      <div className="lg:w-[45%] flex flex-col justify-between px-6 md:px-16 lg:px-20 py-10 md:py-16 lg:py-20">
        <div>
          <div className="animate-fade-up" style={{ animationDelay: '0ms' }}>
            <Eyebrow label="ATELIER · KINSHASA · DEPUIS 2009" />
          </div>
          <h1
            className="font-serif font-normal text-[40px] md:text-[56px] lg:text-[64px] leading-[1.04] tracking-[-0.015em] mt-12 animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            L'excellence dans la{' '}
            <span className="italic text-[#E8DDC8]">confection sur&nbsp;mesure</span>{' '}
            en RDC.
          </h1>
          <p
            className="mt-8 text-[15px] leading-[1.7] text-[#A89B89] max-w-[440px] animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            Toges judiciaires, uniformes officiels et tenues sur mesure — façonnés à la
            main par nos artisans à Kinshasa. Une maison, une exigence : la précision.
          </p>
        </div>

        <div className="flex flex-col gap-7 mt-10 md:mt-14">
          <div
            className="flex flex-wrap items-center gap-6 md:gap-8 animate-fade-up"
            style={{ animationDelay: '600ms' }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3.5 px-7 py-4 bg-[#C9A96E] text-[#1A1614] text-xs tracking-[0.22em] font-semibold hover:bg-[#E8DDC8] transition-colors group"
            >
              PRENDRE RENDEZ-VOUS
              <ArrowRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                strokeWidth={1.5}
              />
            </Link>
            <Link
              to="/a-propos"
              className="inline-flex items-center text-xs tracking-[0.22em] text-[#F4EFE7] border-b border-[#C9A96E] pb-1.5 hover:text-[#E8DDC8] transition-colors"
            >
              DÉCOUVRIR LA MAISON
            </Link>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:justify-between sm:items-end pt-6 border-t border-[#2B2622] animate-fade-up"
            style={{ animationDelay: '800ms' }}
          >
            <div className="flex flex-col gap-1">
              <div className="text-[10px] tracking-[0.28em] text-[#7A6E5C]">SAVOIR-FAIRE</div>
              <div className="font-serif text-lg">+ de 1 200 toges réalisées</div>
            </div>
            <div className="flex flex-col gap-1 sm:text-right">
              <div className="text-[10px] tracking-[0.28em] text-[#7A6E5C]">CLIENTÈLE</div>
              <div className="font-serif text-lg">Avocats · Officiels · Particuliers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
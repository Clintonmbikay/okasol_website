import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from '../../components/Eyebrow';
import { AtelierFigure } from '../../components/AtelierFigure';

const filters = ['TOUT', 'TOGES', 'UNIFORMES', 'SUR MESURE'];

type Variant = 'toge' | 'uniform' | 'suit' | 'dress';

function FeaturedTile() {
  return (
    <div
      className="relative border border-[#2B2622] overflow-hidden cursor-pointer hover:border-[#C9A96E] transition-colors duration-500 group h-full"
      style={{
        background: 'radial-gradient(ellipse at 40% 50%, #332B25 0%, #15110E 80%)',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <AtelierFigure variant="toge" size="lg" scale={0.85} />
      </div>
      <div className="absolute top-6 left-7 font-serif text-sm italic text-[#C9A96E]">
        — Pièce maîtresse
      </div>
      <div className="absolute top-6 right-7 text-[10px] tracking-[0.28em] text-[#7A6E5C]">
        N° 084 · 2025
      </div>
      <div className="absolute bottom-7 left-7 flex flex-col gap-1.5 max-w-[80%]">
        <div className="font-serif text-xl text-[#F4EFE7] group-hover:text-[#E8DDC8] transition-colors">
          Toge de cérémonie · Cour Suprême
        </div>
        <div className="text-[10px] tracking-[0.22em] text-[#A89B89]">
          SOIE BRODÉE FIL D'OR · DOUBLURE SATIN BRUN
        </div>
      </div>
    </div>
  );
}

function SmallTile({
  variant,
  number,
  category,
  title,
}: {
  variant: Variant;
  number: string;
  category: string;
  title: string;
}) {
  return (
    <div
      className="relative border border-[#2B2622] overflow-hidden cursor-pointer hover:border-[#C9A96E] transition-colors duration-500 group flex-1"
      style={{
        background: 'radial-gradient(ellipse at 50% 60%, #2A231D 0%, #15110E 80%)',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <AtelierFigure variant={variant} size="sm" scale={1.1} />
      </div>
      <div className="absolute top-3.5 left-4 text-[10px] tracking-[0.22em] text-[#7A6E5C]">
        {number}
      </div>
      <div className="absolute top-3.5 right-4 text-[10px] tracking-[0.22em] text-[#7A6E5C]">
        {category}
      </div>
      <div className="absolute bottom-4 left-4 font-serif text-sm text-[#F4EFE7] group-hover:text-[#E8DDC8] transition-colors max-w-[85%]">
        {title}
      </div>
    </div>
  );
}

export function RealisationsPreview() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 md:px-16 lg:px-20 py-14 md:py-24 border-b border-[#2B2622]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-10 gap-6">
        <div>
          <Eyebrow label="RÉALISATIONS · SÉLECTION" />
          <h2 className="font-serif font-normal text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.01em] mt-6 max-w-[560px]">
            Pièces récentes <span className="italic text-[#E8DDC8]">de l'atelier.</span>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
          <div className="flex gap-5 flex-wrap">
            {filters.map((f, i) => (
              <button
                key={f}
                onClick={() => setActive(i)}
                className={`text-[11px] tracking-[0.22em] pb-1 transition-colors ${
                  active === i
                    ? 'text-[#F4EFE7] border-b border-[#C9A96E]'
                    : 'text-[#7A6E5C] hover:text-[#A89B89]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <Link
            to="/realisations"
            className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.22em] text-[#F4EFE7] hover:text-[#E8DDC8] transition-colors group whitespace-nowrap"
          >
            VOIR LES 84 PIÈCES
            <ArrowRight
              className="w-3.5 h-3.5 text-[#C9A96E] transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[440px] min-h-0">
        <div className="flex-[1.2] h-[300px] md:h-[360px] lg:h-full">
          <FeaturedTile />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex gap-4 flex-1 h-[150px] md:h-[170px] lg:h-auto">
            <SmallTile
              variant="toge"
              number="N° 083"
              category="TOGE"
              title="Toge · Barreau Kinshasa"
            />
            <SmallTile
              variant="uniform"
              number="N° 082"
              category="UNIFORME"
              title="Police Nationale · Parade"
            />
          </div>
          <div className="flex gap-4 flex-1 h-[150px] md:h-[170px] lg:h-auto">
            <SmallTile
              variant="suit"
              number="N° 081"
              category="SUR MESURE"
              title="Costume · Trois pièces"
            />
            <SmallTile
              variant="dress"
              number="N° 080"
              category="SUR MESURE"
              title="Robe de cérémonie"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Eyebrow } from '../components/Eyebrow';
import { AtelierFigure } from '../components/AtelierFigure';

type Variant = 'toge' | 'uniform' | 'suit' | 'dress';

type Piece = {
  number: string;
  category: string;
  variant: Variant;
  title: string;
  subtitle?: string;
  year: string;
  date?: string;
  featured?: boolean;
  seed: number;
};

const pieces: Piece[] = [
  {
    seed: 0,
    number: 'N° 084',
    date: 'MARS 2025',
    category: 'TOGE',
    variant: 'toge',
    title: 'Toge de cérémonie · Cour Suprême',
    subtitle: "SOIE BRODÉE FIL D'OR · DOUBLURE SATIN BRUN",
    year: '2025',
    featured: true,
  },
  {
    seed: 0,
    number: 'N° 083',
    category: 'UNIFORME',
    variant: 'uniform',
    title: 'Police Nationale · Parade',
    year: '2025',
  },
  {
    seed: 0,
    number: 'N° 082',
    category: 'SUR MESURE',
    variant: 'dress',
    title: 'Robe de cérémonie · Soie sauvage',
    year: '2025',
  },
  {
    seed: 0,
    number: 'N° 081',
    category: 'SUR MESURE',
    variant: 'suit',
    title: 'Costume trois-pièces · Anthracite',
    subtitle: 'LAINE FRAÎCHE · BOUTONS NACRE',
    year: '2025',
  },
  {
    seed: 1,
    number: 'N° 080',
    category: 'TOGE',
    variant: 'toge',
    title: 'Toge · Barreau de Kinshasa',
    subtitle: "DRAP D'ELBEUF · COL VELOURS",
    year: '2025',
  },
  {
    seed: 1,
    number: 'N° 079',
    category: 'UNIFORME',
    variant: 'uniform',
    title: "Magistrature · Tenue d'audience",
    subtitle: 'SÉRIE DE 18 PIÈCES',
    year: '2025',
  },
  {
    seed: 1,
    number: 'N° 078',
    category: 'SUR MESURE',
    variant: 'dress',
    title: "Robe d'apparat",
    year: '2024',
  },
  {
    seed: 2,
    number: 'N° 077',
    category: 'TOGE',
    variant: 'toge',
    title: "Toge · Conseil d'État",
    year: '2024',
  },
  {
    seed: 1,
    number: 'N° 076',
    date: 'DÉCEMBRE 2024',
    category: 'SUR MESURE',
    variant: 'suit',
    title: 'Tenue de mariage · Brocart noir',
    subtitle: 'PIÈCE UNIQUE · 7 ESSAYAGES',
    year: '2024',
    featured: true,
  },
];

const filters = [
  { key: 'TOUT', count: 84 },
  { key: 'TOGES', count: 42 },
  { key: 'UNIFORMES', count: 28 },
  { key: 'SUR MESURE', count: 14 },
];

const years = ['2025', '2024', '2023', 'ARCHIVES'];

function PieceTile({
  piece,
  size,
}: {
  piece: Piece;
  size: 'large' | 'medium';
}) {
  return (
    <div
      className="relative border border-[#2B2622] overflow-hidden cursor-pointer hover:border-[#C9A96E] transition-colors duration-500 group h-full"
      style={{
        background: 'radial-gradient(ellipse at 50% 60%, #2A231D 0%, #15110E 80%)',
      }}
    >
      <div className="absolute inset-0">
        <AtelierFigure
          variant={piece.variant}
          seed={piece.seed}
          alt={piece.title}
        />
      </div>

      {piece.featured && (
        <div className={`absolute top-6 ${size === 'large' ? 'left-7' : 'left-5'} font-serif text-sm italic text-[#C9A96E]`}>
          — Pièce {piece.number === 'N° 084' ? 'du moment' : 'archivée'}
        </div>
      )}

      <div
        className={`absolute ${piece.featured ? 'top-12' : 'top-3.5'} ${
          size === 'large' ? 'left-7' : 'left-5'
        } text-[10px] tracking-[0.28em] text-[#7A6E5C]`}
      >
        {piece.number}
        {piece.date && ` · ${piece.date}`}
      </div>

      <div
        className={`absolute ${piece.featured ? 'top-6' : 'top-3.5'} ${
          size === 'large' ? 'right-7' : 'right-5'
        } text-[10px] tracking-[0.22em] text-[#7A6E5C]`}
      >
        {piece.category}
      </div>

      <div
        className={`absolute bottom-6 ${
          size === 'large' ? 'left-7' : 'left-5'
        } flex flex-col gap-1.5 max-w-[85%]`}
      >
        <div
          className={`font-serif ${
            size === 'large' ? 'text-xl' : 'text-[17px]'
          } text-[#F4EFE7] group-hover:text-[#E8DDC8] transition-colors`}
        >
          {piece.title}
        </div>
        {piece.subtitle && (
          <div className="text-[10px] tracking-[0.22em] text-[#A89B89]">
            {piece.subtitle}
          </div>
        )}
      </div>
    </div>
  );
}

export function Realisations() {
  const [activeFilter, setActiveFilter] = useState('TOUT');
  const [activeYear, setActiveYear] = useState('2025');

  return (
    <>
      <section className="px-6 md:px-16 lg:px-20 pt-14 md:pt-20 pb-8 border-b border-[#2B2622]">
        <div className="text-[11px] tracking-[0.32em] text-[#7A6E5C] mb-6">
          ACCUEIL · RÉALISATIONS
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-12 mb-12">
          <div className="flex-1">
            <Eyebrow label="LE LIVRE DE LA MAISON" />
            <h1 className="font-serif font-normal text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.015em] mt-6">
              Quatre-vingt-quatre pièces
              <br />
              <span className="italic text-[#E8DDC8]">livrées depuis 2009.</span>
            </h1>
          </div>
          <p className="text-sm leading-[1.75] text-[#A89B89] max-w-[340px]">
            Chaque toge, uniforme ou tenue qui sort de l'atelier est numérotée,
            photographiée et archivée. Voici la sélection rendue publique.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 pt-6 border-t border-[#2B2622]">
          <div className="flex gap-6 lg:gap-8 flex-wrap items-baseline">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`flex items-baseline gap-2 text-xs tracking-[0.22em] pb-1.5 transition-colors ${
                  activeFilter === f.key
                    ? 'text-[#F4EFE7] border-b border-[#C9A96E]'
                    : 'text-[#A89B89] hover:text-[#F4EFE7]'
                }`}
              >
                {f.key}
                <span
                  className={`text-[10px] ${
                    activeFilter === f.key ? 'text-[#C9A96E]' : 'text-[#7A6E5C]'
                  }`}
                >
                  {f.count}
                </span>
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-5 lg:gap-6">
            <div className="flex gap-4 lg:gap-[18px]">
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setActiveYear(y)}
                  className={`text-[11px] tracking-[0.22em] pb-1 transition-colors ${
                    activeYear === y
                      ? 'text-[#F4EFE7] border-b border-[#C9A96E]'
                      : 'text-[#A89B89] hover:text-[#F4EFE7]'
                  }`}
                >
                  {y}
                </button>
              ))}
            </div>
            <div className="hidden lg:block w-px h-3.5 bg-[#3A332D]" />
            <div className="text-[11px] tracking-[0.22em] text-[#A89B89]">
              TRIER · RÉCENTS ↓
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-20 py-8 md:py-12 lg:py-16 flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[480px] min-h-0">
          <div className="flex-[1.4] h-[340px] md:h-[420px] lg:h-full">
            <PieceTile piece={pieces[0]} size="large" />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex-1 h-[160px] md:h-[200px] lg:h-auto">
              <PieceTile piece={pieces[1]} size="medium" />
            </div>
            <div className="flex-1 h-[160px] md:h-[200px] lg:h-auto">
              <PieceTile piece={pieces[2]} size="medium" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto lg:h-[380px]">
          <div className="h-[340px] md:h-full">
            <PieceTile piece={pieces[3]} size="medium" />
          </div>
          <div className="h-[340px] md:h-full">
            <PieceTile piece={pieces[4]} size="medium" />
          </div>
          <div className="h-[340px] md:h-full">
            <PieceTile piece={pieces[5]} size="medium" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[380px] min-h-0">
          <div className="flex-1 flex flex-col gap-4 order-2 lg:order-1">
            <div className="flex-1 h-[160px] md:h-[180px] lg:h-auto">
              <PieceTile piece={pieces[6]} size="medium" />
            </div>
            <div className="flex-1 h-[160px] md:h-[180px] lg:h-auto">
              <PieceTile piece={pieces[7]} size="medium" />
            </div>
          </div>
          <div className="flex-[1.4] h-[340px] md:h-[420px] lg:h-full order-1 lg:order-2">
            <PieceTile piece={pieces[8]} size="large" />
          </div>
        </div>
      </section>

      <section className="bg-[#15110E] px-6 md:px-16 lg:px-20 py-8 border-t border-[#2B2622] flex flex-col lg:flex-row gap-6 lg:items-center lg:justify-between">
        <div className="text-[11px] tracking-[0.22em] text-[#7A6E5C]">
          AFFICHAGE 1 — 9 SUR 84
        </div>
        <button className="inline-flex items-center gap-3.5 px-7 py-3.5 border border-[#C9A96E] text-[#F4EFE7] text-xs tracking-[0.22em] hover:bg-[#C9A96E] hover:text-[#1A1614] transition-colors group w-fit">
          CHARGER LES PIÈCES SUIVANTES
          <ArrowDown
            className="w-3.5 h-3.5 text-[#C9A96E] group-hover:text-[#1A1614] transition-colors"
            strokeWidth={1.5}
          />
        </button>
        <div className="flex items-center gap-4 text-[11px] tracking-[0.22em] text-[#A89B89]">
          <div className="w-8 h-8 flex items-center justify-center border border-[#C9A96E] text-[#F4EFE7]">
            1
          </div>
          <button className="hover:text-[#F4EFE7] transition-colors">2</button>
          <button className="hover:text-[#F4EFE7] transition-colors">3</button>
          <span>···</span>
          <button className="hover:text-[#F4EFE7] transition-colors">10</button>
        </div>
      </section>
    </>
  );
}
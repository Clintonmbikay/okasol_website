import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Eyebrow } from '../../components/Eyebrow';

const testimonials = [
  {
    quote:
      "La toge que j'ai portée à la prestation de serment a été remarquée par toute la Cour. Coupe irréprochable, broderies d'une finesse rare.",
    name: 'Maître Joseph Kabongo',
    role: 'AVOCAT · BARREAU DE KINSHASA',
  },
  {
    quote:
      'Nous équipons nos officiers chez Maison OKASOL depuis trois ans. Le respect du protocole et la régularité des livraisons font la différence.',
    name: 'Direction des Uniformes',
    role: 'INSTITUTION OFFICIELLE · KINSHASA',
  },
  {
    quote:
      "Mon costume de mariage a été repris cinq fois sans un mot de reproche. Ils ne livrent que lorsque la pièce est juste.",
    name: 'Christian Mbuyi',
    role: 'CLIENT PARTICULIER · GOMBE',
  },
];

export function Testimonials() {
  const [shift, setShift] = useState(0);
  const advance = (dir: 1 | -1) => setShift((s) => s + dir);

  // Use shift to subtly indicate the rotation; in this preview the 3 quotes stay
  // visible — arrows act as a tactile gesture even though all 3 are shown.
  return (
    <section className="px-6 md:px-16 lg:px-20 py-14 md:py-24 border-b border-[#2B2622]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
        <div>
          <Eyebrow label="PAROLES DE CLIENTS" />
          <h2 className="font-serif font-normal text-[30px] md:text-[34px] leading-[1.1] tracking-[-0.01em] mt-6 max-w-[560px]">
            Ceux qui portent <span className="italic text-[#E8DDC8]">la maison.</span>
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => advance(-1)}
            className="w-10 h-10 border border-[#3A332D] flex items-center justify-center text-[#A89B89] hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={() => advance(1)}
            className="w-10 h-10 border border-[#C9A96E] flex items-center justify-center text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#1A1614] transition-colors"
            aria-label="Suivant"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-transform duration-700"
        style={{ transform: `translateX(${shift * -2}px)` }}
      >
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-[#221E1B] border border-[#2B2622] p-6 md:p-9 flex flex-col hover:border-[#C9A96E] transition-colors duration-500"
          >
            <div className="font-serif text-5xl leading-[0.5] text-[#C9A96E] mb-4">"</div>
            <p className="font-serif text-[18px] leading-[1.5] italic text-[#E8DDC8] flex-1">
              {t.quote}
            </p>
            <div className="mt-7 pt-5 border-t border-[#2B2622]">
              <div className="font-serif text-[18px] mb-1.5">{t.name}</div>
              <div className="text-[11px] tracking-[0.22em] text-[#A89B89]">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from '../components/Eyebrow';

const milestones = [
  { year: '2009', label: "FONDATION\nDE L'ATELIER", primary: true },
  { year: '2014', label: 'PREMIÈRE\nCOMMANDE BARREAU' },
  { year: '2020', label: 'ATELIER GOMBE\nACTUEL' },
  { year: '2025', label: '12 ARTISANS\n84 PIÈCES', current: true },
];

const disciplines = [
  {
    numeral: 'I',
    title: 'Coupe à la main',
    body:
      "Les patrons sont tracés à la craie, jamais sur écran. Chaque coupe est unique, à la mesure d'un corps.",
  },
  {
    numeral: 'II',
    title: 'Broderie',
    body:
      "Fil d'or, fil de soie. Les blasons des Cours et des institutions sont brodés à la main, point par point.",
  },
  {
    numeral: 'III',
    title: 'Assemblage',
    body:
      "Coutures invisibles, doublures cousues main, ourlets piqués au point glissé. Le travail qu'on ne voit pas.",
  },
  {
    numeral: 'IV',
    title: 'Finitions',
    body:
      'Boutons gravés au nom de la maison, étiquettes numérotées, écrin de présentation. Une pièce ne sort pas autrement.',
  },
];

const artisans = [
  {
    name: 'Marie-Claire B.',
    role: "PREMIÈRE D'ATELIER",
    detail: 'Coupe principale · 14 ans à la maison',
    photo:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&q=80&auto=format&fit=crop',
  },
  {
    name: 'Joseph M.',
    role: 'MAÎTRE BRODEUR',
    detail: "Fil d'or · 9 ans à la maison",
    photo:
      'public/founder.png',
  },
  {
    name: 'Esther N.',
    role: 'TAILLEUSE',
    detail: 'Costumes · 6 ans à la maison',
    photo:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80&auto=format&fit=crop',
  },
  {
    name: 'Patrick K.',
    role: 'FINITIONS',
    detail: 'Boutonnage · 4 ans à la maison',
    photo:
      'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=700&q=80&auto=format&fit=crop',
  },
];

const FOUNDER_PHOTO = 'public/founder.png';

const ATELIER_INTERIOR ='public/atelier.jpg';

export function About() {
  return (
    <>
      <section className="px-6 md:px-16 lg:px-20 py-14 md:py-24 border-b border-[#2B2622]">
        <div className="text-[11px] tracking-[0.32em] text-[#7A6E5C] mb-6">
          ACCUEIL · À PROPOS
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-12">
          <div className="flex-1">
            <Eyebrow label="LA MAISON · NOTRE HISTOIRE" />
            <h1 className="font-serif font-normal text-[44px] md:text-[56px] leading-[1.05] tracking-[-0.015em] mt-6">
              Une maison fondée
              <br />
              <span className="italic text-[#E8DDC8]">sur la précision.</span>
            </h1>
          </div>
          <p className="text-sm leading-[1.75] text-[#A89B89] max-w-[340px]">
            Seize années à Kinshasa, douze artisans, un seul atelier. Voici ce qui se
            transmet entre nos mains.
          </p>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row border-b border-[#2B2622]">
        <div className="lg:w-[140px] flex flex-row lg:flex-col justify-between bg-[#15110E] border-b lg:border-b-0 lg:border-r border-[#2B2622] py-10 lg:py-14 px-6 lg:px-0 gap-8 lg:gap-0 overflow-x-auto">
          {milestones.map((m) => (
            <div key={m.year} className="flex flex-col items-center gap-1.5 flex-shrink-0 lg:flex-1">
              <div
                className={`font-serif ${
                  m.primary
                    ? 'text-2xl text-[#C9A96E]'
                    : m.current
                    ? 'text-lg text-[#F4EFE7]'
                    : 'text-lg text-[#A89B89]'
                }`}
              >
                {m.year}
              </div>
              <div className="text-[10px] tracking-[0.22em] text-[#7A6E5C] text-center leading-[1.4] whitespace-pre-line">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="lg:flex-1 flex flex-col justify-center px-6 md:px-16 py-12 md:py-16 lg:border-r border-[#2B2622]">
          <div className="text-[11px] tracking-[0.32em] text-[#C9A96E] mb-5">
            CHAPITRE I
          </div>
          <h2 className="font-serif font-normal text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.01em] mb-6">
            Les <span className="italic text-[#E8DDC8]">commencements.</span>
          </h2>
          <p className="text-sm leading-[1.85] text-[#A89B89] mb-5 max-w-[560px]">
            Maison OKASOL est née dans une pièce de seize mètres carrés, en 2009, à la
            Gombe. Une machine, deux paires de ciseaux, une exigence qui n'a pas changé :
            ne livrer qu'une pièce juste.
          </p>
          <p className="text-sm leading-[1.85] text-[#A89B89] max-w-[560px]">
            Cinq ans plus tard, la première toge sortait de l'atelier pour un avocat du
            Barreau de Kinshasa. Depuis, c'est ce vêtement-là — celui qui se porte devant
            la République — qui a façonné notre maison.
          </p>
        </div>

        <div className="lg:w-[340px] relative min-h-[360px] overflow-hidden bg-[#15110E]">
          <img
            src={FOUNDER_PHOTO}
            alt="M. OKASOL — Fondateur"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
            style={{ filter: 'brightness(0.7) contrast(1.05) saturate(0.8)' }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(26,22,20,0.15) 0%, rgba(26,22,20,0.05) 40%, rgba(26,22,20,0.7) 100%)',
            }}
          />
          <div className="absolute bottom-6 left-6 flex flex-col gap-1">
            <div className="font-serif text-sm italic text-[#C9BFAE]">
              M. OKASOL · Fondateur
            </div>
            <div className="text-[10px] tracking-[0.22em] text-[#7A6E5C]">
              ATELIER GOMBE · 2025
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#15110E] flex flex-col lg:flex-row border-b border-[#2B2622]">
        <div className="lg:flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-20 py-14 lg:py-20">
          <div className="text-[11px] tracking-[0.32em] text-[#C9A96E] mb-5">
            CHAPITRE II
          </div>
          <h2 className="font-serif font-normal text-[32px] md:text-[36px] leading-[1.15] tracking-[-0.01em] mb-6">
            L'atelier · <span className="italic text-[#E8DDC8]">Kinshasa.</span>
          </h2>
          <p className="text-sm leading-[1.75] text-[#A89B89] mb-8 max-w-[480px]">
            Trois cents mètres carrés au cœur de la Gombe. Lumière du nord, sols de bois
            ancien, douze postes de coupe. C'est ici qu'arrivent les tissus de Côme et de
            Lyon ; c'est d'ici que partent les pièces, dans leur écrin.
          </p>
          <div className="flex flex-col border-t border-[#2B2622]">
            {[
              { label: 'ADRESSE', value: 'Avenue de la Justice · Gombe' },
              { label: 'SURFACE', value: '300 m² · douze postes' },
              { label: 'VISITE', value: 'Sur rendez-vous · Mar — Sam', accent: true },
            ].map((s, i, arr) => (
              <div
                key={s.label}
                className={`flex justify-between py-3.5 ${i < arr.length - 1 ? 'border-b border-[#2B2622]' : ''}`}
              >
                <div className="text-[11px] tracking-[0.22em] text-[#7A6E5C]">
                  {s.label}
                </div>
                <div
                  className={`font-serif text-sm text-right ${s.accent ? 'text-[#C9A96E]' : 'text-[#F4EFE7]'}`}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:flex-[1.1] relative min-h-[400px] lg:min-h-[480px] overflow-hidden border-t lg:border-t-0 lg:border-l border-[#2B2622] bg-[#15110E]">
          <img
            src={ATELIER_INTERIOR}
            alt="Atelier Maison OKASOL · intérieur"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
            style={{ filter: 'brightness(0.65) contrast(1.05) saturate(0.78)' }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(26,22,20,0.15) 0%, rgba(26,22,20,0.10) 40%, rgba(26,22,20,0.65) 100%)',
            }}
          />
          <div className="absolute top-7 right-8 text-[11px] tracking-[0.28em] text-[#7A6E5C]">
            — ATELIER · INTÉRIEUR
          </div>
          <div className="absolute bottom-7 right-8 font-serif text-sm italic text-[#C9BFAE] max-w-[260px] text-right">
            « Lumière du nord, sols anciens. »
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-20 py-14 md:py-24 border-b border-[#2B2622]">
        <div className="flex flex-col items-center text-center mb-14">
          <Eyebrow label="SAVOIR-FAIRE · QUATRE GESTES" symmetric />
          <h2 className="font-serif font-normal text-[28px] md:text-[32px] leading-[1.1] tracking-[-0.01em] mt-5 max-w-[520px]">
            Ce qui se transmet entre <span className="italic text-[#E8DDC8]">nos mains.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {disciplines.map((d) => (
            <div key={d.numeral} className="flex flex-col pt-6 border-t border-[#C9A96E]">
              <div className="font-serif text-lg text-[#C9A96E] mb-3.5">{d.numeral}</div>
              <h3 className="font-serif text-xl mb-2.5">{d.title}</h3>
              <p className="text-[13px] leading-[1.7] text-[#A89B89]">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#15110E] px-6 md:px-16 lg:px-20 py-14 md:py-24 border-b border-[#2B2622]">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-6">
          <div>
            <Eyebrow label="LES ARTISANS · DOUZE MAINS" />
            <h2 className="font-serif font-normal text-[28px] md:text-[30px] leading-[1.1] tracking-[-0.01em] mt-5">
              Ceux qui font <span className="italic text-[#E8DDC8]">la maison.</span>
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.22em] text-[#F4EFE7] border-b border-[#C9A96E] pb-1.5 w-fit hover:text-[#E8DDC8] transition-colors group"
          >
            RENCONTRER L'ÉQUIPE
            <ArrowRight
              className="w-3.5 h-3.5 text-[#C9A96E] transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {artisans.map((a) => (
            <div
              key={a.name}
              className="bg-[#221E1B] border border-[#2B2622] flex flex-col hover:border-[#C9A96E] transition-colors duration-500 group"
            >
              <div className="h-[220px] relative border-b border-[#2B2622] overflow-hidden bg-[#15110E]">
                <img
                  src={a.photo}
                  alt={a.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  style={{ filter: 'brightness(0.82) contrast(1.05) saturate(0.82)' }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(26,22,20,0.0) 50%, rgba(26,22,20,0.55) 100%)',
                  }}
                />
              </div>
              <div className="p-5">
                <div className="font-serif text-base mb-1">{a.name}</div>
                <div className="text-[10px] tracking-[0.22em] text-[#C9A96E] mb-2.5">
                  {a.role}
                </div>
                <div className="text-[11px] text-[#A89B89] leading-[1.6]">
                  {a.detail}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-20 py-16 md:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 border-b border-[#2B2622]">
        <div className="max-w-[560px]">
          <Eyebrow label="VISITE D'ATELIER" />
          <h2 className="font-serif font-normal text-[28px] md:text-[30px] leading-[1.1] tracking-[-0.01em] mt-5">
            Voir l'atelier <span className="italic text-[#E8DDC8]">de vos yeux.</span>
          </h2>
          <p className="mt-3.5 text-[13px] leading-[1.7] text-[#A89B89]">
            Sur rendez-vous, du mardi au samedi. Une heure environ, en compagnie d'un de
            nos artisans.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3.5 px-8 py-[18px] bg-[#C9A96E] text-[#1A1614] text-xs tracking-[0.22em] font-semibold hover:bg-[#E8DDC8] transition-colors group w-fit"
        >
          RÉSERVER UNE VISITE
          <ArrowRight
            className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
            strokeWidth={1.5}
          />
        </Link>
      </section>
    </>
  );
}
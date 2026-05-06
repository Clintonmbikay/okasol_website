import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from '../components/Eyebrow';
import { AtelierFigure } from '../components/AtelierFigure';

type Variant = 'toge' | 'uniform' | 'suit' | 'dress';

type SpecRow = { label: string; value: string; accent?: boolean };

type CategoryProps = {
  numeral: string;
  variant: Variant;
  title: string;
  italicWord: string;
  body: string;
  specs: SpecRow[];
  imageSide: 'left' | 'right';
  altBg?: boolean;
  caption: string;
  captionMeta: string;
};

function CategorySection({
  numeral,
  variant,
  title,
  italicWord,
  body,
  specs,
  imageSide,
  altBg,
  caption,
  captionMeta,
}: CategoryProps) {
  const ImageBlock = (
    <div
      className="relative w-full lg:w-1/2 min-h-[320px] md:min-h-[380px] lg:min-h-0 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 40% 50%, #332B25 0%, #15110E 80%)',
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <AtelierFigure variant={variant} size="lg" scale={0.95} />
      </div>
      <div
        className={`absolute top-8 ${imageSide === 'right' ? 'right-9' : 'left-9'} font-serif text-[42px] italic text-[#C9A96E]`}
      >
        {numeral}
      </div>
      <div
        className={`absolute bottom-8 ${imageSide === 'right' ? 'right-9 text-right items-end' : 'left-9'} flex flex-col gap-1.5`}
      >
        <div className="font-serif text-sm italic text-[#C9BFAE] max-w-[280px]">
          {caption}
        </div>
        <div className="text-[10px] tracking-[0.22em] text-[#7A6E5C]">{captionMeta}</div>
      </div>
    </div>
  );

  const TypeBlock = (
    <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-20 py-12 lg:py-20">
      <div className="text-[11px] tracking-[0.32em] text-[#C9A96E] mb-5">
        DISCIPLINE {numeral}
      </div>
      <h2 className="font-serif font-normal text-[36px] md:text-[42px] leading-[1.1] tracking-[-0.01em] mb-6">
        {title} <span className="italic text-[#E8DDC8]">{italicWord}</span>
      </h2>
      <p className="text-sm leading-[1.75] text-[#A89B89] mb-8 max-w-[480px]">{body}</p>

      <div className="flex flex-col border-t border-[#2B2622]">
        {specs.map((s, i) => (
          <div
            key={s.label}
            className={`flex justify-between py-3.5 ${i < specs.length - 1 ? 'border-b border-[#2B2622]' : ''}`}
          >
            <div className="text-[11px] tracking-[0.22em] text-[#7A6E5C] flex-shrink-0 pr-4">
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

      <Link
        to="/contact"
        className="mt-9 inline-flex items-center gap-2.5 text-xs tracking-[0.22em] text-[#F4EFE7] border-b border-[#C9A96E] pb-1.5 w-fit hover:text-[#E8DDC8] transition-colors group"
      >
        DEMANDER UN DEVIS
        <ArrowRight
          className="w-3.5 h-3.5 text-[#C9A96E] transition-transform group-hover:translate-x-0.5"
          strokeWidth={1.5}
        />
      </Link>
    </div>
  );

  return (
    <section
      className={`flex flex-col border-b border-[#2B2622] ${altBg ? 'bg-[#15110E]' : ''} lg:flex-row`}
    >
      {imageSide === 'left' ? (
        <>
          {ImageBlock}
          {TypeBlock}
        </>
      ) : (
        <>
          {TypeBlock}
          {ImageBlock}
        </>
      )}
    </section>
  );
}

export function Services() {
  return (
    <>
      <section className="px-6 md:px-16 lg:px-20 py-14 md:py-24 border-b border-[#2B2622]">
        <div className="text-[11px] tracking-[0.32em] text-[#7A6E5C] mb-6">
          ACCUEIL · SERVICES
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-12">
          <div className="flex-1">
            <Eyebrow label="LES MÉTIERS DE LA MAISON" />
            <h1 className="font-serif font-normal text-[44px] md:text-[60px] leading-[1.05] tracking-[-0.015em] mt-6">
              Servir le droit, l'État,
              <br />
              <span className="italic text-[#E8DDC8]">et l'élégance personnelle.</span>
            </h1>
          </div>
          <p className="text-sm leading-[1.75] text-[#A89B89] max-w-[380px]">
            Trois disciplines, une seule maison. Chaque pièce qui sort de l'atelier répond
            à un usage — judiciaire, officiel, ou personnel — et à une exigence commune :
            la justesse du geste.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-12 mt-12 pt-6 border-t border-[#2B2622]">
          <a
            href="#discipline-1"
            className="flex items-baseline gap-3 text-xs tracking-[0.22em] text-[#C9A96E] hover:text-[#E8DDC8] transition-colors"
          >
            I<span className="text-[#F4EFE7]">— TOGES JUDICIAIRES</span>
          </a>
          <a
            href="#discipline-2"
            className="flex items-baseline gap-3 text-xs tracking-[0.22em] text-[#C9A96E] hover:text-[#E8DDC8] transition-colors"
          >
            II<span className="text-[#A89B89]">— UNIFORMES OFFICIELS</span>
          </a>
          <a
            href="#discipline-3"
            className="flex items-baseline gap-3 text-xs tracking-[0.22em] text-[#C9A96E] hover:text-[#E8DDC8] transition-colors"
          >
            III<span className="text-[#A89B89]">— COUTURE SUR MESURE</span>
          </a>
        </div>
      </section>

      <div id="discipline-1" />
      <CategorySection
        numeral="I"
        variant="toge"
        title="Toges pour"
        italicWord="avocats."
        body="Robes judiciaires conformes aux usages des barreaux et des Cours d'Appel de la République. Coupes ajustées, broderies main, doublures soyeuses. Chaque toge est numérotée et archivée à votre nom."
        specs={[
          { label: 'TISSUS', value: 'Drap noir · Satin · Soie sauvage' },
          { label: 'FINITIONS', value: "Broderies main · Fil d'or · Boutons gravés" },
          { label: 'DÉLAI', value: '2 à 3 semaines' },
          { label: 'À PARTIR DE', value: 'Sur devis', accent: true },
        ]}
        imageSide="left"
        caption="Cour Suprême · Toge de cérémonie"
        captionMeta="N° 084 · BRODERIE FIL D'OR"
      />

      <div id="discipline-2" />
      <CategorySection
        numeral="II"
        variant="uniform"
        title="Uniformes"
        italicWord="officiels."
        body="Tenues d'administration, de sécurité et d'institutions — exécutées dans le respect des protocoles en vigueur. Production en série maîtrisée, contrôle qualité pièce par pièce, livraisons régulières."
        specs={[
          { label: 'CLIENTS', value: 'Police · Magistrature · Administration' },
          { label: 'VOLUME', value: 'Séries de 10 à 500 pièces' },
          { label: 'DÉLAI', value: '4 à 8 semaines selon volume' },
          { label: 'CONTRACTUALISATION', value: 'Cahier des charges', accent: true },
        ]}
        imageSide="right"
        altBg
        caption="Police Nationale · Tenue de parade"
        captionMeta="SÉRIE DE 240 · 2024"
      />

      <div id="discipline-3" />
      <CategorySection
        numeral="III"
        variant="suit"
        title="Couture"
        italicWord="sur mesure."
        body="Costumes, robes, tenues de cérémonie pour homme et femme. Coupés à la main, ajustés au millimètre, livrés dans un écrin de la maison. Le sur mesure véritable — non la mesure industrielle."
        specs={[
          { label: 'PIÈCES', value: 'Costumes · Robes · Cérémonie' },
          { label: 'MESURES', value: '32 points · archivées à votre nom' },
          { label: 'ESSAYAGES', value: 'Trois minimum, sans limite' },
          { label: 'DÉLAI', value: '3 à 6 semaines', accent: true },
        ]}
        imageSide="left"
        caption="Costume trois-pièces · Soie laine"
        captionMeta="PIÈCE UNIQUE · 2025"
      />

      <section className="bg-[#15110E] px-6 md:px-16 lg:px-20 py-14 md:py-20 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 border-b border-[#2B2622]">
        <div className="max-w-[560px]">
          <Eyebrow label="FORMULAIRE DE MESURES" />
          <h2 className="font-serif font-normal text-[28px] md:text-[32px] leading-[1.1] tracking-[-0.01em] mt-5 mb-4">
            Vous connaissez vos mesures ?{' '}
            <span className="italic text-[#E8DDC8]">Confiez-les nous.</span>
          </h2>
          <p className="text-sm leading-[1.7] text-[#A89B89]">
            Remplissez notre fiche de mesures en ligne. Elle sera vérifiée par un de nos
            tailleurs avant tout engagement.
          </p>
        </div>
        <div className="flex flex-col items-start lg:items-end gap-3.5">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3.5 px-8 py-[18px] bg-[#C9A96E] text-[#1A1614] text-xs tracking-[0.22em] font-semibold hover:bg-[#E8DDC8] transition-colors group"
          >
            REMPLIR LA FICHE
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </Link>
          <div className="text-[11px] tracking-[0.22em] text-[#7A6E5C]">
            ~ 5 MINUTES · 32 POINTS
          </div>
        </div>
      </section>
    </>
  );
}
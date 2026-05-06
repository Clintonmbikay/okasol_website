import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Eyebrow } from '../../components/Eyebrow';
import { AtelierFigure } from '../../components/AtelierFigure';

const services = [
  {
    numeral: 'I',
    variant: 'toge' as const,
    title: 'Toges pour avocats',
    descriptor:
      "Robes judiciaires brodées main, conformes aux usages des barreaux de Kinshasa et des Cours d'Appel.",
  },
  {
    numeral: 'II',
    variant: 'uniform' as const,
    title: 'Uniformes officiels',
    descriptor:
      "Tenues d'administration, de sécurité et d'institutions — exécutées dans le respect des règlements et des protocoles.",
  },
  {
    numeral: 'III',
    variant: 'suit' as const,
    title: 'Couture sur mesure',
    descriptor:
      'Costumes, robes et tenues de cérémonie pour homme et femme — coupés à la main, ajustés au millimètre.',
  },
];

export function ServicesTrio() {
  return (
    <section className="px-6 md:px-16 lg:px-20 py-14 md:py-24 border-b border-[#2B2622]">
      <div className="flex flex-col items-center text-center mb-14">
        <Eyebrow label="LES MÉTIERS DE LA MAISON" symmetric />
        <h2 className="font-serif font-normal text-[32px] md:text-[40px] leading-[1.1] tracking-[-0.01em] mt-6 max-w-[680px]">
          Trois savoir-faire,{' '}
          <span className="italic text-[#E8DDC8]">une seule exigence.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link
            key={s.numeral}
            to="/services"
            className="group bg-[#221E1B] border border-[#2B2622] flex flex-col hover:border-[#C9A96E] transition-colors duration-500"
          >
            <div
              className="h-[220px] relative border-b border-[#2B2622] overflow-hidden"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 60%, #3A302A 0%, #1A1411 80%)',
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center pt-4">
                <AtelierFigure variant={s.variant} size="sm" scale={1.5} />
              </div>
              <div className="absolute top-5 left-6 font-serif text-lg text-[#C9A96E]">
                {s.numeral}
              </div>
            </div>
            <div className="p-7 flex flex-col flex-1">
              <h3 className="font-serif text-2xl leading-[1.2] mb-3">{s.title}</h3>
              <p className="text-[13px] leading-[1.7] text-[#A89B89] flex-1">
                {s.descriptor}
              </p>
              <div className="mt-5 pt-4 border-t border-[#2B2622] flex justify-between items-center">
                <div className="text-[11px] tracking-[0.22em] text-[#F4EFE7] group-hover:text-[#E8DDC8] transition-colors">
                  DÉCOUVRIR
                </div>
                <ArrowRight
                  className="w-3.5 h-3.5 text-[#C9A96E] transition-transform group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
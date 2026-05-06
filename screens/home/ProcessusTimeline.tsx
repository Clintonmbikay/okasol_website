import { Eyebrow } from '../../components/Eyebrow';

const steps = [
  {
    numeral: 'I',
    eyebrow: 'PREMIÈRE ÉTAPE',
    title: 'Consultation',
    body:
      "Échange en atelier ou à domicile pour comprendre l'usage, le protocole et les attentes du client.",
  },
  {
    numeral: 'II',
    eyebrow: 'DEUXIÈME ÉTAPE',
    title: 'Mesures',
    body:
      'Trente-deux points de mesure relevés à la main, archivés au nom du client pour ses commandes futures.',
  },
  {
    numeral: 'III',
    eyebrow: 'TROISIÈME ÉTAPE',
    title: 'Confection',
    body:
      'Coupe, assemblage et finitions main par les artisans de la maison. Une à trois semaines selon la pièce.',
  },
  {
    numeral: 'IV',
    eyebrow: 'QUATRIÈME ÉTAPE',
    title: 'Livraison',
    body:
      "Essayage final, ajustements éventuels et remise en main propre dans son écrin de la Maison.",
    final: true,
  },
];

export function ProcessusTimeline() {
  return (
    <section className="bg-[#15110E] px-6 md:px-16 lg:px-20 py-14 md:py-24 border-b border-[#2B2622]">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-12 gap-6">
        <div>
          <Eyebrow label="PROCESSUS · QUATRE TEMPS" />
          <h2 className="font-serif font-normal text-[30px] md:text-[34px] leading-[1.1] tracking-[-0.01em] mt-6 max-w-[520px]">
            De la première rencontre{' '}
            <span className="italic text-[#E8DDC8]">à la livraison.</span>
          </h2>
        </div>
        <p className="text-[13px] leading-[1.7] text-[#A89B89] max-w-[340px] lg:text-right">
          Un protocole en quatre étapes, observé pour chaque pièce — sans raccourci.
        </p>
      </div>

      <div className="relative">
        {/* Connecting hairline */}
        <div
          className="hidden lg:block absolute left-0 right-0 top-[34px] h-px"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, #3A332D 8%, #3A332D 92%, transparent 100%)',
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 lg:gap-x-8 relative">
          {steps.map((s) => (
            <div key={s.numeral} className="flex flex-col items-start">
              <div
                className={`relative flex items-center justify-center w-[68px] h-[68px] rounded-full mb-6 ${
                  s.final
                    ? 'bg-[#C9A96E]'
                    : 'bg-[#1A1614] border border-[#C9A96E]'
                }`}
              >
                <div
                  className={`font-serif text-[22px] ${
                    s.final ? 'text-[#1A1614]' : 'text-[#C9A96E]'
                  }`}
                >
                  {s.numeral}
                </div>
              </div>
              <div className="text-[10px] tracking-[0.28em] text-[#7A6E5C] mb-2">
                {s.eyebrow}
              </div>
              <h3 className="font-serif text-[22px] mb-2.5">{s.title}</h3>
              <p className="text-[13px] leading-[1.7] text-[#A89B89]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0E0A08] border-t border-[#2B2622]">
      <div className="px-6 md:px-14 lg:px-20 pt-12 md:pt-16 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-8">
          <div className="max-w-[280px]">
            <img
              src="https://d3os49tc9jbj3a.cloudfront.net/figr2/uploads/1f48c4af-d5e8-4266-97e3-bcbe2c6f8223/original.png"
              alt="Maison OKASOL"
              className="h-16 md:h-20 w-auto mb-7 -ml-1"
            />
            <p className="text-xs leading-relaxed text-[#A89B89]">
              Maison de couture haute exigence — toges judiciaires, uniformes officiels,
              sur mesure homme et femme. Kinshasa, depuis 2009.
            </p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.32em] text-[#7A6E5C] mb-4">ATELIER</div>
            <div className="font-serif text-[15px] leading-relaxed">
              Avenue de la Justice<br />
              Commune de la Gombe<br />
              Kinshasa · RDC
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.32em] text-[#7A6E5C] mb-4">CONTACT</div>
            <div className="flex flex-col gap-2">
              <div className="font-serif text-[15px]">+243 81 234 56 78</div>
              <div className="font-serif text-[15px]">contact@maisonokasol.cd</div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] text-[#C9A96E] mt-1 hover:text-[#E8DDC8] transition-colors w-fit"
              >
                WHATSAPP <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
              </a>
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.32em] text-[#7A6E5C] mb-4">HORAIRES</div>
            <div className="flex flex-col gap-2 min-w-[220px]">
              <div className="flex justify-between font-serif text-[15px]">
                <span>Mardi — Vendredi</span>
                <span>09h — 18h</span>
              </div>
              <div className="flex justify-between font-serif text-[15px]">
                <span>Samedi</span>
                <span>10h — 16h</span>
              </div>
              <div className="flex justify-between font-serif text-[15px] text-[#7A6E5C]">
                <span>Dim. — Lundi</span>
                <span>Sur RDV</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center pt-6 mt-8 border-t border-[#2B2622] text-[11px] tracking-[0.22em] text-[#7A6E5C]">
          <div>© 2025 MAISON OKASOL · TOUS DROITS RÉSERVÉS</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#A89B89] transition-colors">INSTAGRAM</a>
            <a href="#" className="hover:text-[#A89B89] transition-colors">FACEBOOK</a>
            <a href="#" className="hover:text-[#A89B89] transition-colors">MENTIONS LÉGALES</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
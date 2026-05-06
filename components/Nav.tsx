import { NavLink, Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const links = [
  { to: '/', label: 'Accueil', exact: true },
  { to: '/services', label: 'Services' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? 'bg-[#1A1614]/85 backdrop-blur-md border-[#2B2622]'
            : 'bg-[#1A1614] border-[#2B2622]'
        }`}
      >
        <div className="flex items-center justify-between px-6 md:px-14 py-3.5">
          <Link
            to="/"
            className="flex items-center hover:opacity-85 transition-opacity"
            onClick={() => setOpen(false)}
            aria-label="Maison OKASOL — Accueil"
          >
            <img
              src="https://d3os49tc9jbj3a.cloudfront.net/figr2/uploads/1f48c4af-d5e8-4266-97e3-bcbe2c6f8223/original.png"
              alt="Maison OKASOL"
              className="h-12 md:h-14 w-auto"
            />
          </Link>
          <div className="hidden lg:flex gap-9 text-[13px] tracking-[0.04em]">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.exact}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#F4EFE7] border-b border-[#C9A96E] pb-1'
                    : 'text-[#C9BFAE] hover:text-[#F4EFE7] transition-colors'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-2 text-xs tracking-[0.18em] text-[#C9A96E] hover:text-[#E8DDC8] transition-colors group"
          >
            PRENDRE RENDEZ-VOUS
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </Link>
          <button
            className="lg:hidden text-[#F4EFE7] p-2 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[#1A1614] flex flex-col pt-[72px] animate-fade-in overflow-y-auto">
          <div className="flex flex-col px-6 pt-8 pb-12 flex-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.exact}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-serif text-[32px] py-4 border-b border-[#2B2622] ${isActive ? 'text-[#F4EFE7]' : 'text-[#A89B89]'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-10 inline-flex items-center gap-3.5 px-7 py-4 bg-[#C9A96E] text-[#1A1614] text-xs tracking-[0.22em] font-semibold hover:bg-[#E8DDC8] transition-colors group w-fit"
            >
              PRENDRE RENDEZ-VOUS
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
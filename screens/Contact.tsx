import { useState } from 'react';
import { ArrowRight, ArrowLeft, MapPin, Check, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Eyebrow } from '../components/Eyebrow';

const services = [
  'TOGE JUDICIAIRE',
  'UNIFORME OFFICIEL',
  'SUR MESURE H/F',
  "VISITE D'ATELIER",
  'AUTRE DEMANDE',
];

const slots = [
  { time: '09 h 30', available: true },
  { time: '11 h 00', available: true },
  { time: '14 h 00', available: true },
  { time: '16 h 30', available: true },
  { time: '17 h 30', available: false },
];

const referralOptions = [
  'BOUCHE-À-OREILLE',
  'BARREAU / CONFRÈRE',
  'INSTAGRAM',
  'GOOGLE',
  'AUTRE',
];

const faqs = [
  {
    n: '01',
    q: 'Le premier rendez-vous est-il payant ?',
    a: 'Non. La consultation initiale, en atelier ou à domicile dans Kinshasa, est offerte. Vous repartez avec une estimation et un délai.',
  },
  {
    n: '02',
    q: 'Travaillez-vous en dehors de Kinshasa ?',
    a: "Oui. Nous nous déplaçons sur l'ensemble du territoire pour les commandes institutionnelles, et acceptons les commandes individuelles à distance avec mesures vérifiées.",
  },
  {
    n: '03',
    q: 'Quels modes de paiement acceptez-vous ?',
    a: 'Espèces, virement bancaire, mobile money. Acompte de 30% à la commande, solde à la livraison après essayage final.',
  },
  {
    n: '04',
    q: 'Combien de temps pour une toge ?',
    a: "Comptez deux à trois semaines depuis la prise de mesures, broderies comprises. En cas d'urgence (prestation de serment), nous prévoyons une voie accélérée à dix jours.",
  },
];

// ─── Date utilities ────────────────────────────────────────────────

function startOfDay(d: Date): Date {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

function addDays(d: Date, n: number): Date {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

function sameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

const TODAY = startOfDay(new Date());

function defaultBookingDate(): Date {
  let d = addDays(TODAY, 2);
  while (d.getDay() === 0) d = addDays(d, 1);
  return d;
}

const INITIAL_DATE = defaultBookingDate();

type Cell = {
  date: Date;
  otherMonth: boolean;
  sunday: boolean;
  weekend: boolean;
  past: boolean;
};

function getCalendarCells(view: Date): Cell[] {
  const year = view.getFullYear();
  const month = view.getMonth();
  const firstOfMonth = new Date(year, month, 1);
  const startOffset = (firstOfMonth.getDay() + 6) % 7; // Monday-first
  const start = new Date(year, month, 1 - startOffset);
  const cells: Cell[] = [];
  for (let i = 0; i < 42; i++) {
    const date = addDays(start, i);
    const dow = date.getDay();
    cells.push({
      date,
      otherMonth: date.getMonth() !== month,
      sunday: dow === 0,
      weekend: dow === 0 || dow === 6,
      past: date < TODAY,
    });
  }
  return cells;
}

const fmt = (date: Date, opts: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat('fr-FR', opts).format(date);

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

type Step = 1 | 2 | 3;

export function Contact() {
  const [step, setStep] = useState<Step>(1);
  const [service, setService] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date>(INITIAL_DATE);
  const [viewMonth, setViewMonth] = useState<Date>(
    new Date(INITIAL_DATE.getFullYear(), INITIAL_DATE.getMonth(), 1),
  );
  const [slot, setSlot] = useState(1);
  const [location, setLocation] = useState<'atelier' | 'domicile'>('domicile');

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [referral, setReferral] = useState<number | null>(null);
  const [notes, setNotes] = useState('');
  const [consent, setConsent] = useState(false);

  const cells = getCalendarCells(viewMonth);

  const monthLabel = cap(fmt(viewMonth, { month: 'long', year: 'numeric' }));
  const weekdayShortRaw = fmt(selectedDate, { weekday: 'short' });
  const weekdayShort = weekdayShortRaw.replace('.', '').toUpperCase();
  const weekdayLong = fmt(selectedDate, { weekday: 'long' });
  const monthShortUpper = fmt(selectedDate, { month: 'long' }).toUpperCase();
  const monthLong = fmt(selectedDate, { month: 'long' });
  const dayNumber = selectedDate.getDate();
  const dateLabelFull = cap(
    fmt(selectedDate, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
  );

  const recap = `${services[service]} · ${weekdayShort}. ${dayNumber} ${monthShortUpper} · ${slots[slot]?.available ? slots[slot].time : '—'} · ${location === 'atelier' ? 'EN ATELIER' : 'À DOMICILE'}`;

  // Reservation number — deterministic from selections so it feels "archived"
  const reservationNumber = `N° ${(85 + service + (dayNumber % 7)).toString().padStart(3, '0')}`;

  const canConfirm =
    fullName.trim().length > 1 && phone.trim().length > 5 && consent;

  const goPrevMonth = () =>
    setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1));
  const goNextMonth = () =>
    setViewMonth(new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1));

  const canGoPrev = (() => {
    const lastOfPrev = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), 0);
    return startOfDay(lastOfPrev) >= TODAY;
  })();

  function StepperItem({
    n,
    label,
    active,
    done,
  }: {
    n: string;
    label: string;
    active: boolean;
    done: boolean;
  }) {
    return (
      <div className="flex items-baseline gap-2.5">
        <span
          className={`text-[11px] tracking-[0.22em] ${
            active ? 'text-[#C9A96E]' : done ? 'text-[#A89B89]' : 'text-[#A89B89]'
          }`}
        >
          {n}
        </span>
        <span
          className={`text-[11px] tracking-[0.22em] ${
            active
              ? 'text-[#F4EFE7]'
              : done
              ? 'text-[#A89B89] line-through decoration-[#3A332D]'
              : 'text-[#A89B89]'
          }`}
        >
          — {label}
        </span>
        {done && (
          <Check
            className="w-3 h-3 text-[#C9A96E] -ml-0.5"
            strokeWidth={2}
          />
        )}
      </div>
    );
  }

  return (
    <>
      <section className="px-6 md:px-16 lg:px-20 py-12 md:py-20 border-b border-[#2B2622]">
        <div className="text-[11px] tracking-[0.32em] text-[#7A6E5C] mb-6">
          ACCUEIL · CONTACT
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-12">
          <div className="flex-1">
            <Eyebrow label="PRENDRE RENDEZ-VOUS" />
            <h1 className="font-serif font-normal text-[40px] md:text-[54px] leading-[1.05] tracking-[-0.015em] mt-6">
              {step === 3 ? (
                <>
                  Nous nous voyons
                  <br />
                  <span className="italic text-[#E8DDC8]">
                    {weekdayLong} {dayNumber} {monthLong}.
                  </span>
                </>
              ) : (
                <>
                  Le premier rendez-vous
                  <br />
                  <span className="italic text-[#E8DDC8]">est à nos frais.</span>
                </>
              )}
            </h1>
          </div>
          <p className="text-sm leading-[1.75] text-[#A89B89] max-w-[340px]">
            {step === 3
              ? "Votre rendez-vous est inscrit dans notre carnet. Vous recevrez un mot par email dans les minutes qui viennent — et nous vous attendons."
              : "Une heure environ, en atelier ou à votre domicile. Sans engagement — c'est la rencontre qui décide de la suite."}
          </p>
        </div>
      </section>

      {step === 3 ? (
        // ─── STEP III · CONFIRMATION ──────────────────────────────────
        <section className="border-b border-[#2B2622]">
          <div className="px-6 md:px-16 lg:px-20 py-12 md:py-20 flex flex-col lg:flex-row lg:items-start gap-10 md:gap-14">
            <div className="lg:flex-[1.15] flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-full border border-[#C9A96E] flex items-center justify-center">
                  <Check
                    className="w-4 h-4 text-[#C9A96E]"
                    strokeWidth={2}
                  />
                </div>
                <div className="text-[11px] tracking-[0.32em] text-[#C9A96E]">
                  RENDEZ-VOUS CONFIRMÉ · {reservationNumber}
                </div>
              </div>

              <div className="font-serif text-[22px] mb-6">
                Inscrit dans le carnet de la maison.
              </div>

              <div className="flex flex-col border-t border-[#2B2622] mb-10">
                {[
                  { label: 'AU NOM DE', value: fullName || '—' },
                  { label: 'SERVICE', value: services[service] },
                  {
                    label: 'DATE',
                    value: dateLabelFull,
                    accent: true,
                  },
                  { label: 'HEURE', value: slots[slot].time },
                  {
                    label: 'LIEU',
                    value:
                      location === 'atelier'
                        ? 'En atelier · Avenue de la Justice, Gombe'
                        : 'À votre domicile · Kinshasa',
                  },
                  {
                    label: 'CONTACT',
                    value: `${phone}${email ? ` · ${email}` : ''}`,
                  },
                ].map((row, i, arr) => (
                  <div
                    key={row.label}
                    className={`flex justify-between gap-6 py-3.5 ${
                      i < arr.length - 1 ? 'border-b border-[#2B2622]' : ''
                    }`}
                  >
                    <div className="text-[11px] tracking-[0.22em] text-[#7A6E5C] flex-shrink-0">
                      {row.label}
                    </div>
                    <div
                      className={`font-serif text-sm text-right break-words ${
                        row.accent ? 'text-[#C9A96E]' : 'text-[#F4EFE7]'
                      }`}
                    >
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3.5">
                <a
                  href="#"
                  className="inline-flex items-center gap-3.5 px-7 py-[18px] bg-[#C9A96E] text-[#1A1614] text-xs tracking-[0.22em] font-semibold hover:bg-[#E8DDC8] transition-colors group w-fit"
                >
                  ENVOYER UN MESSAGE WHATSAPP
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-7 py-[18px] border border-[#3A332D] text-[#F4EFE7] text-xs tracking-[0.22em] hover:border-[#C9A96E] transition-colors w-fit"
                >
                  <Calendar
                    className="w-3.5 h-3.5 text-[#C9A96E]"
                    strokeWidth={1.5}
                  />
                  AJOUTER À MON CALENDRIER
                </a>
              </div>

              <button
                onClick={() => {
                  setStep(1);
                  setFullName('');
                  setPhone('');
                  setEmail('');
                  setReferral(null);
                  setNotes('');
                  setConsent(false);
                }}
                className="mt-10 text-[11px] tracking-[0.22em] text-[#A89B89] hover:text-[#F4EFE7] transition-colors w-fit"
              >
                MODIFIER LE RENDEZ-VOUS
              </button>
            </div>

            <div className="lg:w-[360px] flex flex-col gap-8 lg:pl-12 lg:border-l border-[#2B2622]">
              <div>
                <div className="text-[10px] tracking-[0.28em] text-[#C9A96E] mb-3">
                  — D'ICI {weekdayLong.toUpperCase()}
                </div>
                <p className="font-serif text-[17px] italic text-[#E8DDC8] leading-[1.5] mb-3">
                  « Si vous le pouvez, apportez une pièce que vous portez bien. »
                </p>
                <p className="text-[12px] leading-[1.7] text-[#A89B89]">
                  Une chemise, un costume, une robe — peu importe. Cela nous donne un
                  point de départ pour vos mesures et votre tombé préféré.
                </p>
              </div>

              <div className="border-t border-[#2B2622] pt-6">
                <div className="text-[10px] tracking-[0.28em] text-[#7A6E5C] mb-3">
                  — UN IMPRÉVU ?
                </div>
                <p className="text-[12px] leading-[1.7] text-[#A89B89] mb-3">
                  Prévenez-nous au plus tôt — nous re-organiserons sans difficulté.
                </p>
                <a
                  href="tel:+243812345678"
                  className="font-serif text-sm text-[#F4EFE7] hover:text-[#C9A96E] transition-colors"
                >
                  +243 81 234 56 78
                </a>
              </div>

              <Link
                to="/"
                className="text-[11px] tracking-[0.22em] text-[#A89B89] hover:text-[#F4EFE7] transition-colors w-fit border-t border-[#2B2622] pt-6"
              >
                ← RETOUR À L'ACCUEIL
              </Link>
            </div>
          </div>
        </section>
      ) : (
        // ─── STEPS I & II ─────────────────────────────────────────────
        <section className="flex flex-col lg:flex-row border-b border-[#2B2622]">
          <div className="lg:flex-[1.4] flex flex-col px-6 md:px-12 lg:px-16 py-10 lg:py-14 lg:border-r border-[#2B2622]">
            <div className="flex flex-wrap gap-6 lg:gap-8 mb-10">
              <StepperItem
                n="I"
                label="SERVICE"
                active={step === 1}
                done={step > 1}
              />
              <StepperItem
                n="II"
                label="DATE & HEURE"
                active={step === 1}
                done={step > 1}
              />
              <StepperItem
                n="III"
                label="COORDONNÉES"
                active={step === 2}
                done={false}
              />
            </div>

            {step === 1 ? (
              <>
                <div className="font-serif text-[22px] mb-5">
                  Pour quel service venez-vous ?
                </div>
                <div className="flex flex-wrap gap-2.5 mb-9">
                  {services.map((s, i) => (
                    <button
                      key={s}
                      onClick={() => setService(i)}
                      className={`px-5 py-2.5 border text-[12px] tracking-[0.18em] transition-colors ${
                        service === i
                          ? 'border-[#C9A96E] bg-[#1F1814] text-[#F4EFE7]'
                          : 'border-[#3A332D] text-[#A89B89] hover:border-[#A89B89]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <div className="font-serif text-[22px] mb-5">
                  Quand souhaitez-vous venir ?
                </div>
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  <div className="flex-[1.1] bg-[#15110E] border border-[#2B2622] p-5">
                    <div className="flex justify-between items-center mb-4">
                      <button
                        onClick={goPrevMonth}
                        disabled={!canGoPrev}
                        aria-label="Mois précédent"
                        className={`text-[14px] w-6 h-6 flex items-center justify-center transition-colors ${
                          canGoPrev
                            ? 'text-[#A89B89] hover:text-[#F4EFE7] cursor-pointer'
                            : 'text-[#3A332D] cursor-not-allowed'
                        }`}
                      >
                        ←
                      </button>
                      <div className="font-serif text-base">{monthLabel}</div>
                      <button
                        onClick={goNextMonth}
                        aria-label="Mois suivant"
                        className="text-[14px] text-[#C9A96E] hover:text-[#E8DDC8] w-6 h-6 flex items-center justify-center transition-colors"
                      >
                        →
                      </button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-[10px] tracking-[0.08em] text-[#7A6E5C] text-center mb-2">
                      <div>L</div>
                      <div>M</div>
                      <div>M</div>
                      <div>J</div>
                      <div>V</div>
                      <div>S</div>
                      <div>D</div>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-[10px] md:text-[11px] text-center">
                      {cells.map((cell, i) => {
                        const isSelected = sameDay(cell.date, selectedDate);
                        const isToday = sameDay(cell.date, TODAY);
                        const disabled = cell.past || cell.sunday;
                        const colorClass = cell.otherMonth
                          ? 'text-[#3A332D]'
                          : disabled
                          ? 'text-[#5A5044]'
                          : cell.weekend
                          ? 'text-[#7A6E5C]'
                          : 'text-[#F4EFE7]';
                        return (
                          <button
                            key={i}
                            disabled={disabled}
                            onClick={() => {
                              if (disabled) return;
                              setSelectedDate(cell.date);
                              if (cell.otherMonth) {
                                setViewMonth(
                                  new Date(
                                    cell.date.getFullYear(),
                                    cell.date.getMonth(),
                                    1,
                                  ),
                                );
                              }
                            }}
                            className={`py-1.5 transition-colors ${colorClass} ${
                              isSelected
                                ? 'bg-[#C9A96E] text-[#1A1614] font-semibold'
                                : isToday && !cell.otherMonth
                                ? 'border border-[#C9A96E]/40'
                                : !disabled && !cell.otherMonth
                                ? 'hover:bg-[#221E1B]'
                                : ''
                            } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                          >
                            {cell.date.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="text-[10px] tracking-[0.28em] text-[#7A6E5C] mb-3.5">
                      CRÉNEAUX · {weekdayLong.toUpperCase()} {dayNumber}
                    </div>
                    <div className="flex flex-col gap-2">
                      {slots.map((s, i) =>
                        s.available ? (
                          <button
                            key={s.time}
                            onClick={() => setSlot(i)}
                            className={`px-4 py-2.5 border font-serif text-sm transition-colors flex justify-between items-center ${
                              slot === i
                                ? 'border-[#C9A96E] bg-[#1F1814] text-[#F4EFE7]'
                                : 'border-[#3A332D] text-[#A89B89] hover:border-[#A89B89]'
                            }`}
                          >
                            {s.time}
                            {slot === i && (
                              <span className="text-[11px] tracking-[0.22em] text-[#C9A96E]">
                                CHOISI
                              </span>
                            )}
                          </button>
                        ) : (
                          <div
                            key={s.time}
                            className="px-4 py-2.5 font-serif text-sm text-[#7A6E5C] italic"
                          >
                            {s.time} · complet
                          </div>
                        ),
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-4 text-[11px] text-[#A89B89]">
                      <button
                        onClick={() => setLocation('atelier')}
                        className="flex items-center gap-2 hover:text-[#F4EFE7] transition-colors"
                      >
                        <div
                          className={`w-2.5 h-2.5 ${location === 'atelier' ? 'bg-[#C9A96E]' : 'border border-[#C9A96E]'}`}
                        />
                        En atelier
                      </button>
                      <button
                        onClick={() => setLocation('domicile')}
                        className="flex items-center gap-2 hover:text-[#F4EFE7] transition-colors"
                      >
                        <div
                          className={`w-2.5 h-2.5 ${location === 'domicile' ? 'bg-[#C9A96E]' : 'border border-[#C9A96E]'}`}
                        />
                        À domicile (+ Kinshasa)
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 pt-6 border-t border-[#2B2622]">
                  <div className="flex flex-col gap-1 min-w-0 flex-1">
                    <div className="text-[11px] tracking-[0.22em] text-[#7A6E5C]">
                      RÉCAPITULATIF
                    </div>
                    <div className="font-serif text-[12px] md:text-[14px] text-[#F4EFE7] tracking-wide break-words">
                      {recap}
                    </div>
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-3.5 px-7 py-3.5 bg-[#C9A96E] text-[#1A1614] text-xs tracking-[0.22em] font-semibold hover:bg-[#E8DDC8] transition-colors group w-fit flex-shrink-0"
                  >
                    CONTINUER
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                      strokeWidth={1.5}
                    />
                  </button>
                </div>
              </>
            ) : (
              // ─── STEP II · COORDONNÉES ───────────────────────────────
              <>
                <div className="font-serif text-[22px] mb-2">Vos coordonnées.</div>
                <p className="text-[13px] text-[#A89B89] leading-[1.7] mb-9 max-w-[480px]">
                  Pour vous confirmer le rendez-vous et — si nous venons à vous — pour
                  trouver votre adresse.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7 mb-8">
                  <Field
                    label="NOM COMPLET"
                    required
                    value={fullName}
                    onChange={setFullName}
                    placeholder="Maître / Madame / Monsieur…"
                  />
                  <Field
                    label="TÉLÉPHONE"
                    required
                    value={phone}
                    onChange={setPhone}
                    placeholder="+243 …"
                  />
                  <Field
                    label="EMAIL"
                    value={email}
                    onChange={setEmail}
                    placeholder="vous@exemple.cd"
                    type="email"
                  />
                  <div className="flex flex-col">
                    <div className="text-[10px] tracking-[0.28em] text-[#7A6E5C] mb-3">
                      COMMENT NOUS AVEZ-VOUS CONNU ?
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {referralOptions.map((r, i) => (
                        <button
                          key={r}
                          onClick={() => setReferral(i)}
                          className={`px-3.5 py-2 border text-[10px] tracking-[0.22em] transition-colors ${
                            referral === i
                              ? 'border-[#C9A96E] bg-[#1F1814] text-[#F4EFE7]'
                              : 'border-[#3A332D] text-[#A89B89] hover:border-[#A89B89]'
                          }`}
                        >
                          {r}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mb-8">
                  <label className="text-[10px] tracking-[0.28em] text-[#7A6E5C] mb-3">
                    PRÉCISIONS · OPTIONNEL
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={3}
                    placeholder="Une urgence, une pièce de référence, une préférence d'horaire…"
                    className="bg-transparent border border-[#3A332D] focus:border-[#C9A96E] font-serif text-[15px] text-[#F4EFE7] placeholder:text-[#5A5044] placeholder:italic px-4 py-3 outline-none transition-colors resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 mb-9 cursor-pointer group">
                  <button
                    type="button"
                    onClick={() => setConsent(!consent)}
                    className={`mt-0.5 w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-colors ${
                      consent
                        ? 'border-[#C9A96E] bg-[#C9A96E]'
                        : 'border-[#3A332D] group-hover:border-[#A89B89]'
                    }`}
                  >
                    {consent && (
                      <Check
                        className="w-3 h-3 text-[#1A1614]"
                        strokeWidth={2.5}
                      />
                    )}
                  </button>
                  <span className="text-[12px] leading-[1.6] text-[#A89B89]">
                    J'autorise la maison OKASOL à conserver ces informations pour la
                    gestion du rendez-vous et la suite éventuelle de la commande.
                  </span>
                </label>

                <div className="flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center gap-5 pt-6 border-t border-[#2B2622]">
                  <button
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2.5 text-[11px] tracking-[0.22em] text-[#A89B89] hover:text-[#F4EFE7] transition-colors group w-fit"
                  >
                    <ArrowLeft
                      className="w-3.5 h-3.5 text-[#C9A96E] transition-transform group-hover:-translate-x-0.5"
                      strokeWidth={1.5}
                    />
                    REVENIR · DATE & HEURE
                  </button>
                  <div className="flex flex-col items-start sm:items-end gap-2">
                    <button
                      onClick={() => canConfirm && setStep(3)}
                      disabled={!canConfirm}
                      className={`inline-flex items-center gap-3.5 px-7 py-3.5 text-xs tracking-[0.22em] font-semibold transition-colors group w-fit ${
                        canConfirm
                          ? 'bg-[#C9A96E] text-[#1A1614] hover:bg-[#E8DDC8] cursor-pointer'
                          : 'bg-[#2B2622] text-[#5A5044] cursor-not-allowed'
                      }`}
                    >
                      CONFIRMER LE RENDEZ-VOUS
                      <ArrowRight
                        className={`w-3.5 h-3.5 transition-transform ${canConfirm ? 'group-hover:translate-x-0.5' : ''}`}
                        strokeWidth={1.5}
                      />
                    </button>
                    <div className="text-[10px] tracking-[0.22em] text-[#7A6E5C]">
                      {recap}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="lg:flex-1 bg-[#15110E] flex flex-col">
            <div className="relative h-[260px] border-b border-[#2B2622] overflow-hidden bg-[#15110E]">
              <iframe
                title="Atelier Maison OKASOL — Gombe, Kinshasa"
                src="https://maps.google.com/maps?q=Avenue%20de%20la%20Justice%20Gombe%20Kinshasa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
                style={{
                  filter: 'grayscale(1) contrast(1.05) brightness(0.55) sepia(0.25)',
                }}
              />
              <div className="absolute inset-0 pointer-events-none border border-[#2B2622]" />
              <div className="absolute top-5 left-5 pointer-events-none flex items-center gap-2 px-3 py-1.5 bg-[#1A1614]/85 backdrop-blur-sm border border-[#2B2622]">
                <MapPin className="w-3 h-3 text-[#C9A96E]" strokeWidth={1.5} />
                <span className="text-[10px] tracking-[0.28em] text-[#F4EFE7]">
                  GOMBE · KINSHASA
                </span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Avenue+de+la+Justice+Gombe+Kinshasa"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 right-5 px-3 py-1.5 bg-[#1A1614]/85 backdrop-blur-sm border border-[#2B2622] text-[10px] tracking-[0.22em] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#1A1614] transition-colors"
              >
                OUVRIR DANS GOOGLE MAPS →
              </a>
            </div>

            <div className="px-8 lg:px-10 py-8 flex flex-col flex-1">
              <div className="font-serif text-[22px] mb-1.5">L'atelier</div>
              <div className="text-[11px] tracking-[0.22em] text-[#C9A96E] mb-6">
                VISITE SUR RDV
              </div>
              <div className="flex flex-col border-t border-[#2B2622] mb-6">
                {[
                  { label: 'ADRESSE', value: 'Avenue de la Justice\nGombe · Kinshasa' },
                  { label: 'TÉLÉPHONE', value: '+243 81 234 56 78' },
                  { label: 'EMAIL', value: 'contact@maisonokasol.cd' },
                  { label: 'HORAIRES', value: 'Mar — Ven · 09 — 18 h\nSam · 10 — 16 h' },
                ].map((row, i, arr) => (
                  <div
                    key={row.label}
                    className={`flex justify-between gap-4 py-3 ${
                      i < arr.length - 1 ? 'border-b border-[#2B2622]' : ''
                    }`}
                  >
                    <div className="text-[10px] tracking-[0.22em] text-[#7A6E5C] flex-shrink-0">
                      {row.label}
                    </div>
                    <div className="font-serif text-[13px] text-right whitespace-pre-line">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="#"
                className="flex items-center justify-center gap-2.5 py-3.5 border border-[#C9A96E] bg-[#1A1614] text-[12px] tracking-[0.22em] text-[#C9A96E] hover:bg-[#C9A96E] hover:text-[#1A1614] transition-colors group"
              >
                ÉCRIRE SUR WHATSAPP
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </a>
            </div>
          </div>
        </section>
      )}

      <section className="px-6 md:px-16 lg:px-20 py-12 md:py-20 border-b border-[#2B2622]">
        <div className="mb-10">
          <Eyebrow label="QUESTIONS FRÉQUENTES" />
          <h2 className="font-serif font-normal text-[28px] md:text-[30px] leading-[1.1] tracking-[-0.01em] mt-5">
            Avant de prendre <span className="italic text-[#E8DDC8]">rendez-vous.</span>
          </h2>
        </div>
        <div className="flex flex-col">
          {faqs.map((f, i) => (
            <div
              key={f.n}
              className={`flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-12 py-5 border-t border-[#2B2622] ${i === faqs.length - 1 ? 'border-b' : ''}`}
            >
              <div className="flex gap-6 flex-1">
                <div className="font-serif text-sm text-[#C9A96E] flex-shrink-0">
                  {f.n}
                </div>
                <div className="font-serif text-lg flex-1">{f.q}</div>
              </div>
              <p className="text-[13px] leading-[1.7] text-[#A89B89] max-w-[520px]">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#15110E] px-6 md:px-16 lg:px-20 py-10 md:py-14 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border-b border-[#2B2622]">
        <div className="flex flex-col gap-2">
          <div className="text-[11px] tracking-[0.32em] text-[#C9A96E]">
            PLUS RAPIDE ENCORE
          </div>
          <div className="font-serif text-[22px] md:text-[24px]">
            Écrivez-nous sur <span className="italic text-[#E8DDC8]">WhatsApp.</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-3.5 px-7 py-4 bg-[#C9A96E] text-[#1A1614] text-xs tracking-[0.22em] font-semibold hover:bg-[#E8DDC8] transition-colors group w-fit"
          >
            +243 81 234 56 78
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
              strokeWidth={1.5}
            />
          </a>
          <div className="text-[11px] tracking-[0.22em] text-[#7A6E5C]">
            RÉPONSE SOUS 2 H · 7 J / 7
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  required,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  label: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-baseline gap-2 mb-3">
        <label className="text-[10px] tracking-[0.28em] text-[#7A6E5C]">
          {label}
        </label>
        {required && (
          <span className="text-[10px] text-[#C9A96E] tracking-[0.22em]">
            REQUIS
          </span>
        )}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent border-b border-[#3A332D] focus:border-[#C9A96E] font-serif text-[16px] text-[#F4EFE7] placeholder:text-[#5A5044] placeholder:italic placeholder:font-normal py-2.5 outline-none transition-colors"
      />
    </div>
  );
}
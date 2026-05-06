type Variant = 'toge' | 'uniform' | 'suit' | 'dress';

type Props = {
  variant?: Variant;
  seed?: number;
  /** Legacy props kept for backward compatibility — ignored. */
  size?: 'sm' | 'md' | 'lg';
  scale?: number;
  alt?: string;
};

/**
 * Image pool — African subjects in formal / couture contexts, plus
 * wax-print textile textures. Sourced from Unsplash CDN.
 */
const IMAGES: Record<Variant, string[]> = {
  // Distinguished African men in formal / dark robe contexts
  toge: [
    'public/tog.png',
    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=900&q=80&auto=format&fit=crop',
    'public/481662466_3546478162313048_1082421674709600060_n.jpg',
  ],
  // African men in uniform / official attire
  uniform: [
    'public/officer.png',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=900&q=80&auto=format&fit=crop',
  ],
  // African gentlemen in tailored suits
  suit: [
    'public/ChatGPT Image 6 mai 2026, 09_41_06.png',
    'public/kuba.jpg',
    'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&q=80&auto=format&fit=crop',
  ],
  // African women — wax prints, headwraps, couture
  dress: [
    'public/profa.png',
    'https://images.unsplash.com/photo-1485290334039-a3c69043e517?w=900&q=80&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=80&auto=format&fit=crop',
  ],
};

export function AtelierFigure({ variant = 'toge', seed = 0, alt }: Props) {
  const list = IMAGES[variant];
  const idx = ((seed % list.length) + list.length) % list.length;
  const src = list[idx];

  return (
    <>
      <img
        src={src}
        alt={alt ?? ''}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        style={{ filter: 'brightness(0.78) contrast(1.05) saturate(0.85)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(26,22,20,0.20) 0%, rgba(26,22,20,0.05) 35%, rgba(26,22,20,0.60) 100%)',
        }}
      />
    </>
  );
}
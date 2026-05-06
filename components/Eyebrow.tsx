type Props = {
  label: string;
  symmetric?: boolean;
  className?: string;
};

export function Eyebrow({ label, symmetric = false, className = '' }: Props) {
  return (
    <div
      className={`flex items-center gap-3.5 ${
        symmetric ? 'justify-center' : ''
      } ${className}`}
    >
      <div className={`h-px bg-[#C9A96E] ${symmetric ? 'w-6' : 'w-9'}`} />
      <div className="text-[11px] tracking-[0.32em] text-[#C9A96E] font-medium">
        {label}
      </div>
      {symmetric && <div className="h-px w-6 bg-[#C9A96E]" />}
    </div>
  );
}
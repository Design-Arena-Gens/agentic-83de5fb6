type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wide text-ocean">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold text-midnight sm:text-3xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm text-slate-500 sm:text-base">{description}</p> : null}
    </div>
  );
}

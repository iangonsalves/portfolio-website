type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  id?: string;
};

export default function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      <h2 id={id} tabIndex={-1} className="section-heading-title">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{subtitle}</p> : null}
    </div>
  );
}

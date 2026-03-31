type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      <h2 className="text-3xl font-bold tracking-tight text-blue-700 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">{subtitle}</p> : null}
    </div>
  );
}

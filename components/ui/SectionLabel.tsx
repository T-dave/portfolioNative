interface SectionLabelProps {
  index: string;
  label: string;
}

export function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className="font-mono text-xs text-accent">{index}</span>
      <span className="h-px w-8 bg-hairline-strong" />
      <span className="font-mono text-xs uppercase tracking-wider text-muted">
        {label}
      </span>
    </div>
  );
}

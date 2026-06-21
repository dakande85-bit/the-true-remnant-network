type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
};

export function SectionHeader({ eyebrow, title, description, actionLabel, actionHref }: SectionHeaderProps) {
  return (
    <div className="section-head">
      <div>
        {eyebrow ? <p className="kicker">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {description ? <p>{description}</p> : null}
      </div>
      {actionLabel && actionHref ? <a className="btn" href={actionHref}>{actionLabel}</a> : null}
    </div>
  );
}

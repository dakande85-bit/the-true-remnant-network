export function ScriptureBlock({ quote, reference }: { quote: string; reference: string }) {
  return (
    <blockquote className="rounded-[2rem] border border-gold/30 bg-ink p-8 text-cream shadow-editorial">
      <p className="font-display text-4xl leading-tight md:text-5xl">"{quote}"</p>
      <cite className="mt-5 block text-sm font-black not-italic uppercase tracking-[0.22em] text-gold">{reference}</cite>
    </blockquote>
  );
}

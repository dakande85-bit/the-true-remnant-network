import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";

type FieldShellProps = {
  label: string;
  children: ReactNode;
};

function FieldShell({ label, children }: FieldShellProps) {
  return (
    <label className="grid gap-2 text-sm font-black text-stone-700">
      {label}
      {children}
    </label>
  );
}

const fieldClass =
  "w-full rounded-xl border border-linen bg-white px-4 py-3 text-base text-ink outline-none transition placeholder:text-stone-400 focus:border-gold";

export function TextField({ label, ...props }: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <FieldShell label={label}>
      <input className={fieldClass} {...props} />
    </FieldShell>
  );
}

export function SelectField({ label, children, ...props }: SelectHTMLAttributes<HTMLSelectElement> & { label: string }) {
  return (
    <FieldShell label={label}>
      <select className={fieldClass} {...props}>
        {children}
      </select>
    </FieldShell>
  );
}

export function TextAreaField({ label, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <FieldShell label={label}>
      <textarea className={`${fieldClass} min-h-36 resize-y`} {...props} />
    </FieldShell>
  );
}

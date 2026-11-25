import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const control =
  "w-full rounded-xl border bg-white px-4 text-[15px] text-ink placeholder:text-ink-muted/70 outline-none transition focus:border-brand-600 focus:ring-4 focus:ring-brand-600/15";

type Common = { label: string; name: string; error?: string; required?: boolean };

export function InputField({ label, name, error, required, className, ...props }: Common & Omit<ComponentProps<"input">, "name">) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-xs font-bold text-ink">
        {label}
        {required && <span aria-hidden> *</span>}
      </label>
      <input
        id={name}
        name={name}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(control, "h-12", error ? "border-danger" : "border-line")}
        {...props}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export function TextareaField({ label, name, error, required, className, ...props }: Common & Omit<ComponentProps<"textarea">, "name">) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-xs font-bold text-ink">
        {label}
        {required && <span aria-hidden> *</span>}
      </label>
      <textarea
        id={name}
        name={name}
        required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(control, "min-h-36 resize-y py-3", error ? "border-danger" : "border-line")}
        {...props}
      />
      {error && (
        <p id={`${name}-error`} className="mt-1.5 text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

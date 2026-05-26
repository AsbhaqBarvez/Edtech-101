import * as React from "react";
import { cn } from "@/lib/utils";

type Option = { value: string; label: string };

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: Option[];
};

export const Select = React.forwardRef<HTMLSelectElement, Props>(function Select(
  { className, label, options, id, ...props },
  ref
) {
  const generatedId = React.useId();
  const fieldId = id ?? generatedId;
  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label
          htmlFor={fieldId}
          className="text-sm font-medium text-indigo-deep"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={fieldId}
          ref={ref}
          className={cn(
            "h-11 w-full appearance-none rounded-input border border-muted/40 bg-cream-light pr-9 pl-3.5 text-[15px] text-ink",
            "transition-colors duration-150 ease-out-soft",
            "focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/30",
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <svg
          aria-hidden
          viewBox="0 0 20 20"
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-indigo"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
});

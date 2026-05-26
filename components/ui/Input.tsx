import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label?: string };

export const Input = React.forwardRef<HTMLInputElement, Props>(function Input(
  { className, label, id, ...props },
  ref
) {
  const generatedId = React.useId();
  const inputId = id ?? generatedId;
  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-indigo-deep"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        ref={ref}
        className={cn(
          "h-11 w-full rounded-input border border-muted/40 bg-cream-light px-3.5 text-[15px] text-ink placeholder:text-muted",
          "transition-colors duration-150 ease-out-soft",
          "focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/30",
          className
        )}
        {...props}
      />
    </div>
  );
});

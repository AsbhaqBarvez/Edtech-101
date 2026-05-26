import * as React from "react";
import { cn } from "@/lib/utils";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  function Textarea({ className, label, id, ...props }, ref) {
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
        <textarea
          id={fieldId}
          ref={ref}
          className={cn(
            "min-h-[120px] w-full rounded-input border border-muted/40 bg-cream-light px-3.5 py-3 text-[15px] text-ink placeholder:text-muted",
            "transition-colors duration-150 ease-out-soft",
            "focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/30",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary-yellow" | "secondary-indigo" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

type Props = ButtonAsButton | ButtonAsLink;

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-medium leading-none transition-all duration-150 ease-out-soft active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  "primary-yellow":
    "bg-yellow text-indigo-deep hover:bg-[#FFD86A] shadow-card hover:shadow-cardHover",
  "secondary-indigo":
    "bg-indigo text-cream hover:bg-indigo-deep shadow-card hover:shadow-cardHover",
  outline:
    "border border-indigo/30 bg-transparent text-indigo hover:border-indigo hover:bg-indigo/5",
  ghost: "bg-transparent text-indigo hover:bg-indigo/5"
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-6 text-base"
};

export function Button(props: Props) {
  const {
    variant = "primary-yellow",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href) {
    const { href, ...anchorRest } = rest;
    const external = /^https?:\/\//.test(href);
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          rel="noopener noreferrer"
          {...anchorRest}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...anchorRest}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

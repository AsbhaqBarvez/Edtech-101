"use client";

import * as React from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/Logo";

type Props = {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
};

export function MobileNav({ open, onClose, links }: Props) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-indigo-deep/40"
            aria-hidden
          />
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-[88%] max-w-sm flex-col bg-cream-light shadow-cardHover"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="flex items-center justify-between border-b border-muted/15 px-5 py-4">
              <Logo />
              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-md text-indigo hover:bg-indigo/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-1 p-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className="rounded-md px-4 py-3 text-lg font-medium text-indigo hover:bg-yellow-soft/40"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-3 border-t border-muted/15 p-5">
              <Button href="/contact" variant="outline" size="md">
                Sign in
              </Button>
              <Button href="/pricing" variant="primary-yellow" size="md">
                Get started
              </Button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

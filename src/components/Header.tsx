"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Menu, X, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/srmData";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Commercial", href: "#commercial" },
  { label: "Residential", href: "#residential" },
  { label: "Maintenance", href: "#maintenance" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#1B365D] text-white text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-amber-200 transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-amber-400" aria-hidden="true" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-slate-100">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-amber-400" aria-hidden="true" />
            <span className="truncate font-medium">
              {COMPANY_INFO.serviceAreaHeadline}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Logo / Business Title */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded border-2 border-[#1B365D] bg-[#1B365D] text-white">
              <ShieldCheck className="h-6 w-6 text-amber-400" aria-hidden="true" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold tracking-tight text-[#1E293B] leading-tight">
                Simmons Roofing Maintenance
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#B45309]">
                SRM &bull; 24-Hour Emergency Service
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-[#1E293B] hover:text-[#B45309] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#estimate-form"
              className="hidden sm:inline-flex items-center justify-center rounded bg-[#B45309] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#92400E] transition-colors"
            >
              Request Quote
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex lg:hidden items-center justify-center rounded border border-slate-300 p-2.5 text-[#1E293B] hover:bg-slate-100"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded px-3 py-3 text-base font-semibold text-[#1E293B] hover:bg-slate-100 hover:text-[#B45309]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#estimate-form"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded bg-[#B45309] px-4 py-3 text-base font-bold text-white hover:bg-[#92400E]"
              >
                Request Free Estimate
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Menu, X, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/srmData";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Maintenance", href: "#maintenance" },
  { label: "About", href: "#why-srm" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#16302B] text-white text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-amber-300 transition-colors"
            >
              <Phone
                className="h-3.5 w-3.5 text-[#C27803]"
                aria-hidden="true"
              />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 text-stone-200 hover:text-white transition-colors"
            >
              <Mail
                className="h-3.5 w-3.5 text-[#C27803]"
                aria-hidden="true"
              />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-2 text-stone-100">
            <MapPin
              className="h-3.5 w-3.5 shrink-0 text-[#C27803]"
              aria-hidden="true"
            />
            <span className="truncate font-medium">
              {COMPANY_INFO.serviceAreaHeadline}
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <div className="border-b border-[#E7E5E4] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          {/* Logo / Business Title */}
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded border border-[#16302B] bg-[#16302B] text-white">
              <ShieldCheck
                className="h-6 w-6 text-[#C27803]"
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="font-display text-base sm:text-lg font-bold tracking-tight text-[#1C1917] leading-tight">
                Simmons Roofing Maintenance
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#C27803]">
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
                className="text-sm font-semibold text-[#44403C] hover:text-[#16302B] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#estimate-form"
              className="hidden sm:inline-flex items-center justify-center rounded bg-[#C27803] px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#A66502] transition-colors"
            >
              Request Quote
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex lg:hidden items-center justify-center rounded border border-[#E7E5E4] p-2.5 text-[#1C1917] hover:bg-[#F4F1EA]"
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
          <div className="border-t border-[#E7E5E4] bg-white px-4 py-3 lg:hidden">
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded px-3 py-3 text-base font-semibold text-[#1C1917] hover:bg-[#F4F1EA] hover:text-[#16302B]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#estimate-form"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded bg-[#C27803] px-4 py-3 text-base font-bold text-white hover:bg-[#A66502]"
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

"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Wrench,
  Building2,
  Home as HomeIcon,
  ClipboardCheck,
  Star,
  ArrowRight,
  Quote,
  Check,
} from "lucide-react";
import Header from "@/components/Header";
import EstimateForm from "@/components/EstimateForm";
import {
  COMPANY_INFO,
  COMMERCIAL_SERVICES,
  RESIDENTIAL_SERVICES,
  INSPECTION_CHECKLIST,
  TRUST_PILLARS,
  TEAM_MEMBERS,
  TESTIMONIALS,
  INDIANA_SERVICE_AREAS,
  PropertyType,
  ServiceOption,
  ServiceItem,
} from "@/data/srmData";

const MAINTENANCE_STEPS = [
  {
    step: "01",
    title: "Thorough Roof & Flashing Audit",
    description:
      "We inspect seams, pipe flashings, sealants, roof drains, gutters, and building envelope walls—plus infrared moisture scanning when hidden dampness is suspected.",
  },
  {
    step: "02",
    title: "Clear Photo & Written Report",
    description:
      "You receive a plain-English summary of roof conditions, photos of any vulnerable areas, and an honest repair plan or budget—no pressure or guesswork.",
  },
  {
    step: "03",
    title: "Targeted Repair or Maintenance Plan",
    description:
      "We fix small issues with manufacturer-approved materials to keep warranties valid, or set up a bi-annual (spring & fall) preventative maintenance schedule.",
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"commercial" | "residential">(
    "commercial"
  );
  const [propertyType, setPropertyType] = useState<PropertyType>(
    "Commercial Property"
  );
  const [serviceNeeded, setServiceNeeded] =
    useState<ServiceOption>("Roof Leak / Repair");
  const [preselectedLabel, setPreselectedLabel] = useState<string | null>(null);

  const visibleServices =
    activeTab === "commercial" ? COMMERCIAL_SERVICES : RESIDENTIAL_SERVICES;

  const scrollToEstimateForm = () => {
    const formEl = document.getElementById("estimate-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSelectService = (item: ServiceItem) => {
    setPropertyType(item.propertyType);
    setServiceNeeded(item.serviceOption);
    setPreselectedLabel(`${item.title} (${item.propertyType})`);
    scrollToEstimateForm();
  };

  const [featuredTestimonial, ...secondaryTestimonials] = TESTIMONIALS;

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1C1917]">
      <Header />

      <main className="flex-1">
        {/* 1. FULL-WIDTH CENTERED HERO */}
        <section
          id="home"
          className="relative overflow-hidden border-b border-[#E7E5E4] bg-[#F4F1EA] py-14 sm:py-20 lg:py-24"
        >
          {/* Subtle Architectural Grid & Roofline Pattern */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.45]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #E7E5E4 1px, transparent 1px), linear-gradient(to bottom, #E7E5E4 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 180"
            preserveAspectRatio="none"
            className="pointer-events-none absolute bottom-0 left-0 h-20 w-full text-[#E7E5E4]/60 sm:h-28"
          >
            <path
              d="M0 180 L0 125 L260 55 L520 125 L780 40 L1040 125 L1200 85 L1200 180 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="inline-flex items-center rounded-full border border-[#16302B]/20 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#16302B] shadow-xs">
              COMMERCIAL &amp; RESIDENTIAL ROOFING &bull; INDIANA
            </p>

            <h1 className="font-display mx-auto mt-6 max-w-4xl text-3xl font-extrabold tracking-tight text-[#1C1917] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
              Dependable Roof Repair, Maintenance &amp; Installation Built to
              Protect Your Property
            </h1>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-[#44403C] sm:text-lg">
              <strong>Simmons Roof Maintenance (SRM)</strong> is built on Trust,
              Service, Dependability, and Quality. From 24-hour emergency leak
              response and commercial building envelope waterproofing to honest
              residential repairs and roof replacements, we deliver straight-shooting
              workmanship across Indiana.
            </p>

            {/* Side-by-Side CTAs */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex min-h-[50px] w-full sm:w-auto items-center justify-center gap-2 rounded bg-[#16302B] px-7 py-3.5 text-base font-bold text-white shadow-sm hover:bg-[#102420] transition-colors"
              >
                <Phone
                  className="h-5 w-5 text-[#C27803]"
                  aria-hidden="true"
                />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
              <a
                href="#estimate-form"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToEstimateForm();
                }}
                className="inline-flex min-h-[50px] w-full sm:w-auto items-center justify-center gap-2 rounded bg-[#C27803] px-7 py-3.5 text-base font-bold text-white shadow-sm hover:bg-[#A66502] transition-colors"
              >
                <span>Get a Free Roof Estimate</span>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>

            {/* Horizontal 3-Item Proof Strip */}
            <div className="mx-auto mt-12 max-w-4xl rounded-lg border border-[#E7E5E4] bg-white px-4 py-4 shadow-xs sm:px-6">
              <div className="grid grid-cols-1 divide-y divide-[#E7E5E4] sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                <div className="py-2 sm:py-1 sm:px-4 text-sm font-bold text-[#16302B]">
                  Commercial Flat &amp; Metal Roofs
                </div>
                <div className="py-2 sm:py-1 sm:px-4 text-sm font-bold text-[#16302B]">
                  Residential Shingle &amp; Leak Repair
                </div>
                <div className="py-2 sm:py-1 sm:px-4 text-sm font-bold text-[#16302B]">
                  Preventative Maintenance Plans
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. INTERACTIVE "COMMERCIAL VS. RESIDENTIAL" SERVICE SWITCHER */}
        <section id="services" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 border-b border-[#E7E5E4] pb-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-wider text-[#C27803]">
                  Our Roofing Services
                </p>
                <h2 className="font-display mt-1.5 text-2xl font-extrabold text-[#1C1917] sm:text-3xl">
                  Commercial &amp; Residential Solutions Across Indiana
                </h2>
                <p className="mt-2 text-sm text-[#44403C] sm:text-base">
                  Select your property type below to review our core services
                  and request a targeted quote.
                </p>
              </div>

              {/* Two-Tab Toggle */}
              <div
                role="tablist"
                aria-label="Service category switcher"
                className="inline-flex w-full sm:w-auto rounded-lg border border-[#E7E5E4] bg-[#F4F1EA] p-1.5"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "commercial"}
                  onClick={() => setActiveTab("commercial")}
                  className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold transition-colors cursor-pointer ${
                    activeTab === "commercial"
                      ? "bg-[#16302B] text-white shadow-xs"
                      : "text-[#44403C] hover:text-[#1C1917]"
                  }`}
                >
                  <Building2 className="h-4 w-4" aria-hidden="true" />
                  <span>Commercial Roofing &amp; Maintenance</span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === "residential"}
                  onClick={() => setActiveTab("residential")}
                  className={`flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-bold transition-colors cursor-pointer ${
                    activeTab === "residential"
                      ? "bg-[#16302B] text-white shadow-xs"
                      : "text-[#44403C] hover:text-[#1C1917]"
                  }`}
                >
                  <HomeIcon className="h-4 w-4" aria-hidden="true" />
                  <span>Residential Roofing</span>
                </button>
              </div>
            </div>

            {/* Numbered Horizontal Service Rows */}
            <div className="divide-y divide-[#E7E5E4] border-b border-[#E7E5E4]">
              {visibleServices.map((item, idx) => {
                const rowNumber = String(idx + 1).padStart(2, "0");
                return (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 items-start gap-5 py-7 lg:grid-cols-12 lg:items-center lg:gap-8"
                  >
                    {/* Left: Number + Bold Title */}
                    <div className="lg:col-span-4">
                      <div className="flex items-start gap-3.5">
                        <span className="font-display inline-flex h-9 w-9 shrink-0 items-center justify-center rounded border border-[#E7E5E4] bg-[#F4F1EA] text-sm font-extrabold text-[#16302B]">
                          {rowNumber}
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-bold text-[#1C1917]">
                            {item.title}
                          </h3>
                          <ul className="mt-2 space-y-1">
                            {item.highlights.map((point) => (
                              <li
                                key={point}
                                className="flex items-center gap-1.5 text-xs font-medium text-[#44403C]"
                              >
                                <Check
                                  className="h-3.5 w-3.5 shrink-0 text-[#C27803]"
                                  aria-hidden="true"
                                />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Middle: Description */}
                    <div className="lg:col-span-5">
                      <p className="text-sm leading-relaxed text-[#44403C]">
                        {item.description}
                      </p>
                    </div>

                    {/* Right: Direct Request Quote Action */}
                    <div className="lg:col-span-3 lg:text-right">
                      <button
                        type="button"
                        onClick={() => handleSelectService(item)}
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded border border-[#16302B] bg-white px-4 py-2.5 text-sm font-bold text-[#16302B] hover:bg-[#16302B] hover:text-white transition-colors cursor-pointer"
                      >
                        <span>Request Quote</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. DEDICATED "PREVENTATIVE MAINTENANCE & LEAK RESPONSE" SPLIT FEATURE */}
        <section
          id="maintenance"
          className="bg-[#16302B] py-16 text-white sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left: Maintenance Copy from srm-llc.com */}
              <div className="lg:col-span-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#FBBF24]">
                  Preventative Maintenance &amp; Leak Response
                </p>
                <h2 className="font-display mt-2 text-2xl font-extrabold text-white sm:text-3xl">
                  Why Regular Maintenance Saves You From Costly Full Roof
                  Replacements
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-stone-200 sm:text-base">
                  A roof is your building&apos;s first line of defense against
                  wind, rain, hail, ice, snow, and extreme heat. Even when a
                  roof is not actively leaking, that does not mean there is no
                  problem. Scheduling inspections every 6 months (fall and
                  spring) helps defer full replacement costs for years—or even
                  decades—while keeping 10-to-50-year manufacturer warranties
                  valid.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-stone-200 sm:text-base">
                  Repairing a roof with unapproved products can void your
                  warranty. Our experienced technicians use manufacturer-approved
                  materials and catch subtle deterioration before it damages
                  insulation, electrical systems, or interior property.
                </p>

                {/* 5-Item Field Checklist from srm-llc.com */}
                <div className="mt-6 rounded-lg border border-white/15 bg-white/5 p-5">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#FBBF24]">
                    Key Trouble Spots We Check Every Visit
                  </h3>
                  <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {INSPECTION_CHECKLIST.map((check) => (
                      <li
                        key={check}
                        className="flex items-center gap-2 text-sm text-stone-100"
                      >
                        <Check
                          className="h-4 w-4 shrink-0 text-[#C27803]"
                          aria-hidden="true"
                        />
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7">
                  <button
                    type="button"
                    onClick={() =>
                      handleSelectService(COMMERCIAL_SERVICES[1])
                    }
                    className="inline-flex items-center gap-2 rounded bg-[#C27803] px-6 py-3.5 text-sm font-bold text-white hover:bg-[#A66502] transition-colors cursor-pointer"
                  >
                    <span>Set Up a Maintenance Plan</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Right: 3-Step Inspection Checklist */}
              <div className="lg:col-span-6">
                <div className="space-y-4">
                  {MAINTENANCE_STEPS.map((item) => (
                    <div
                      key={item.step}
                      className="rounded-lg border border-white/15 bg-[#102420] p-6"
                    >
                      <div className="flex items-start gap-4">
                        <span className="font-display inline-flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#C27803] text-sm font-extrabold text-white">
                          {item.step}
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-bold text-white">
                            {item.step}. {item.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-stone-200">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE SRM & LEADERSHIP */}
        <section
          id="why-srm"
          className="border-b border-[#E7E5E4] bg-white py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-[#C27803]">
                Built on Trust, Service, Dependability &amp; Quality
              </p>
              <h2 className="font-display mt-1.5 text-2xl font-extrabold text-[#1C1917] sm:text-3xl">
                Why Choose Simmons Roofing Maintenance
              </h2>
              <p className="mt-2.5 text-base text-[#44403C]">
                SRM is the name to trust for all of your roofing needs. We
                safeguard your roofing investment with practical workmanship and
                long-standing client partnerships.
              </p>
            </div>

            {/* 3 Practical Contractor Pillars */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {TRUST_PILLARS.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className="rounded-lg border border-[#E7E5E4] bg-[#F4F1EA] p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#16302B] text-white">
                    {idx === 0 && (
                      <ShieldCheck
                        className="h-5 w-5 text-[#C27803]"
                        aria-hidden="true"
                      />
                    )}
                    {idx === 1 && (
                      <ClipboardCheck
                        className="h-5 w-5 text-[#C27803]"
                        aria-hidden="true"
                      />
                    )}
                    {idx === 2 && (
                      <Wrench
                        className="h-5 w-5 text-[#C27803]"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="font-display mt-4 text-lg font-bold text-[#1C1917]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#44403C]">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Leadership Strip */}
            <div className="mt-10 rounded-lg border border-[#E7E5E4] bg-white p-6 sm:p-8">
              <div className="border-b border-[#E7E5E4] pb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#C27803]">
                  Who We Are
                </p>
                <h3 className="font-display mt-1 text-xl font-extrabold text-[#1C1917] sm:text-2xl">
                  Experienced Indiana Roofing Leadership
                </h3>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                {TEAM_MEMBERS.map((member) => (
                  <div key={member.name} className="space-y-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-display text-lg font-bold text-[#16302B]">
                        {member.name}
                      </h4>
                      <span className="rounded border border-[#E7E5E4] bg-[#F4F1EA] px-2.5 py-0.5 text-xs font-bold text-[#1C1917]">
                        {member.experience}
                      </span>
                    </div>
                    <p className="text-sm font-semibold italic text-[#C27803]">
                      {member.role}
                    </p>
                    <p className="text-sm leading-relaxed text-[#44403C]">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. ASYMMETRIC TESTIMONIALS LAYOUT */}
        <section
          id="reviews"
          className="border-b border-[#E7E5E4] bg-[#F4F1EA] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-[#C27803]">
                Indiana Client Feedback
              </p>
              <h2 className="font-display mt-1.5 text-2xl font-extrabold text-[#1C1917] sm:text-3xl">
                Trusted by Property Managers &amp; Homeowners
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12">
              {/* Left: Featured Spotlight Quote (Commercial Property Manager) */}
              <blockquote className="flex flex-col justify-between rounded-lg border border-[#E7E5E4] bg-white p-7 shadow-xs lg:col-span-7 sm:p-9">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <Quote
                      className="h-9 w-9 text-[#C27803]/40"
                      aria-hidden="true"
                    />
                    <span className="rounded-full border border-[#16302B]/20 bg-[#F4F1EA] px-3 py-1 text-xs font-bold text-[#16302B]">
                      Verified &bull; {featuredTestimonial.location}
                    </span>
                  </div>
                  <div
                    className="mt-5 flex items-center gap-1 text-[#C27803]"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="font-display mt-5 text-lg leading-relaxed text-[#1C1917] sm:text-xl">
                    &ldquo;{featuredTestimonial.quote}&rdquo;
                  </p>
                </div>
                <footer className="mt-8 border-t border-[#E7E5E4] pt-4">
                  <div className="text-base font-bold text-[#1C1917]">
                    {featuredTestimonial.author}
                  </div>
                  <div className="text-sm text-[#44403C]">
                    {featuredTestimonial.role} &bull;{" "}
                    {featuredTestimonial.location}
                  </div>
                </footer>
              </blockquote>

              {/* Right: Two Stacked Homeowner Reviews */}
              <div className="flex flex-col gap-6 lg:col-span-5">
                {secondaryTestimonials.map((review) => (
                  <blockquote
                    key={review.author}
                    className="flex flex-1 flex-col justify-between rounded-lg border border-[#E7E5E4] bg-white p-6 shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div
                          className="flex items-center gap-1 text-[#C27803]"
                          aria-label="5 out of 5 stars"
                        >
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-current"
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <span className="rounded-full border border-[#E7E5E4] bg-[#F4F1EA] px-2.5 py-0.5 text-xs font-semibold text-[#16302B]">
                          {review.location}
                        </span>
                      </div>
                      <p className="mt-3.5 text-sm leading-relaxed text-[#44403C]">
                        &ldquo;{review.quote}&rdquo;
                      </p>
                    </div>
                    <footer className="mt-4 border-t border-[#E7E5E4] pt-3">
                      <div className="text-sm font-bold text-[#1C1917]">
                        {review.author}
                      </div>
                      <div className="text-xs text-[#44403C]">
                        {review.role} &bull; {review.location}
                      </div>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. TWO-COLUMN BOTTOM CONTACT & QUOTE SECTION */}
        <section id="contact" className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Clean Indiana Contact Card */}
              <div className="lg:col-span-5">
                <div className="rounded-lg border border-[#E7E5E4] bg-[#F4F1EA] p-6 sm:p-8">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#C27803]">
                    Contact Simmons Roofing Maintenance
                  </p>
                  <h2 className="font-display mt-1.5 text-2xl font-extrabold text-[#1C1917]">
                    Serving Commercial &amp; Residential Properties Across
                    Indiana
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#44403C]">
                    Headquartered in Gaston, IN, our crew serves commercial
                    buildings, schools, hospitals, manufacturing facilities, and
                    homeowners statewide.
                  </p>

                  <div className="mt-6 space-y-4 border-t border-[#E7E5E4] pt-6 text-sm">
                    <div className="flex items-start gap-3">
                      <Phone
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#C27803]"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="font-bold text-[#1C1917]">Phone</div>
                        <a
                          href={COMPANY_INFO.phoneHref}
                          className="text-base font-extrabold text-[#16302B] hover:underline"
                        >
                          {COMPANY_INFO.phoneDisplay}
                        </a>
                        <div className="text-xs font-medium text-[#44403C]">
                          {COMPANY_INFO.emergencyNote}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#C27803]"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="font-bold text-[#1C1917]">Email</div>
                        <a
                          href={`mailto:${COMPANY_INFO.email}`}
                          className="font-medium text-[#16302B] hover:underline"
                        >
                          {COMPANY_INFO.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#C27803]"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="font-bold text-[#1C1917]">
                          Office Address
                        </div>
                        <div className="text-[#44403C]">
                          {COMPANY_INFO.addressLine1}
                        </div>
                        <div className="text-[#44403C]">
                          {COMPANY_INFO.addressLine2}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#C27803]"
                        aria-hidden="true"
                      />
                      <div>
                        <div className="font-bold text-[#1C1917]">
                          Business Hours
                        </div>
                        <div className="text-[#44403C]">
                          {COMPANY_INFO.hours}
                        </div>
                        <div className="text-xs font-semibold text-[#16302B]">
                          24/7 Emergency Roof Leak Response Available
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Indiana Service Area Summary */}
                  <div className="mt-6 border-t border-[#E7E5E4] pt-5">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#16302B]">
                      Indiana Service Areas
                    </h3>
                    <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2 text-xs font-medium text-[#44403C]">
                      {INDIANA_SERVICE_AREAS.map((area) => (
                        <li key={area} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#C27803]" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column: Full Estimate Form */}
              <div className="lg:col-span-7">
                <EstimateForm
                  propertyType={propertyType}
                  onPropertyTypeChange={setPropertyType}
                  serviceNeeded={serviceNeeded}
                  onServiceNeededChange={setServiceNeeded}
                  preselectedLabel={preselectedLabel}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Compact Deep Pine Footer */}
      <footer className="bg-[#16302B] text-stone-200 pt-8 pb-24 md:pb-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-xs sm:flex-row sm:px-6 lg:px-8">
          <div>
            &copy; 2026 {COMPANY_INFO.name} ({COMPANY_INFO.legalName}). All
            Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center gap-5 font-medium">
            <a href="#home" className="hover:text-white">
              Home
            </a>
            <a href="#services" className="hover:text-white">
              Services
            </a>
            <a href="#maintenance" className="hover:text-white">
              Maintenance
            </a>
            <a href="#why-srm" className="hover:text-white">
              About
            </a>
            <a href="#reviews" className="hover:text-white">
              Reviews
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#E7E5E4] bg-white p-2.5 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden">
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={COMPANY_INFO.phoneHref}
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded bg-[#16302B] px-3 py-2.5 text-sm font-bold text-white"
          >
            <Phone className="h-4 w-4 text-[#C27803]" aria-hidden="true" />
            <span>Tap to Call</span>
          </a>
          <a
            href="#estimate-form"
            onClick={(e) => {
              e.preventDefault();
              scrollToEstimateForm();
            }}
            className="inline-flex min-h-[46px] items-center justify-center rounded bg-[#C27803] px-3 py-2.5 text-sm font-bold text-white"
          >
            Free Estimate
          </a>
        </div>
      </div>
    </div>
  );
}

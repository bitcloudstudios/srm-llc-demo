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
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";
import Header from "@/components/Header";
import EstimateForm from "@/components/EstimateForm";
import ServiceCard from "@/components/ServiceCard";
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

export default function HomePage() {
  const [propertyType, setPropertyType] = useState<PropertyType>(
    "Commercial Property"
  );
  const [serviceNeeded, setServiceNeeded] =
    useState<ServiceOption>("Roof Leak / Repair");
  const [preselectedLabel, setPreselectedLabel] = useState<string | null>(null);

  const handleSelectService = (item: ServiceItem) => {
    setPropertyType(item.propertyType);
    setServiceNeeded(item.serviceOption);
    setPreselectedLabel(`${item.title} (${item.propertyType})`);
    const formEl = document.getElementById("estimate-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToEstimateForm = () => {
    const formEl = document.getElementById("estimate-form");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#111827]">
      <Header />

      <main className="flex-1">
        {/* SECTION 2: Two-Column Business Hero Section */}
        <section
          id="home"
          className="border-b border-slate-200 bg-[#F3F4F6] py-10 sm:py-14 lg:py-16"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
            {/* Left Column */}
            <div className="lg:col-span-7 lg:pt-2">
              <p className="inline-block rounded bg-[#1B365D] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                INDIANA COMMERCIAL &amp; RESIDENTIAL ROOFING
              </p>

              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1E293B] sm:text-4xl lg:text-5xl lg:leading-[1.12]">
                Dependable Roof Repair, Preventative Maintenance &amp;
                Installation Across Indiana
              </h1>

              <p className="mt-5 text-base leading-relaxed text-slate-700 sm:text-lg">
                <strong>Simmons Roof Maintenance (SRM)</strong> is built on
                Trust, Service, Dependability, and Quality that you, as the
                customer, should and can expect. When an SRM technician walks
                through your door, they take care of your roofing needs in a
                courteous, straight-shooting manner—from 24-hour emergency leak
                service and commercial building envelope waterproofing to honest
                residential roof repairs and replacements.
              </p>

              {/* Key Practical Proof Points */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded border border-slate-300 bg-white p-3.5">
                  <div className="text-sm font-bold text-[#1B365D]">
                    24-Hr Emergency
                  </div>
                  <div className="mt-0.5 text-xs text-slate-600">
                    Rapid leak response across Indiana
                  </div>
                </div>
                <div className="rounded border border-slate-300 bg-white p-3.5">
                  <div className="text-sm font-bold text-[#1B365D]">
                    30+ Years Experience
                  </div>
                  <div className="mt-0.5 text-xs text-slate-600">
                    Commercial, industrial &amp; residential
                  </div>
                </div>
                <div className="rounded border border-slate-300 bg-white p-3.5">
                  <div className="text-sm font-bold text-[#1B365D]">
                    Full Envelope Care
                  </div>
                  <div className="mt-0.5 text-xs text-slate-600">
                    Infrared scans, roofs &amp; masonry walls
                  </div>
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded bg-[#B45309] px-6 py-3.5 text-base font-bold text-white shadow-sm hover:bg-[#92400E] transition-colors"
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  <span>Call Us Now: {COMPANY_INFO.phoneDisplay}</span>
                </a>
                <a
                  href="#estimate-form"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToEstimateForm();
                  }}
                  className="inline-flex min-h-[48px] items-center justify-center rounded border-2 border-[#1B365D] bg-white px-6 py-3.5 text-base font-bold text-[#1B365D] hover:bg-[#1B365D] hover:text-white transition-colors"
                >
                  Request a Roof Estimate
                </a>
              </div>

              <p className="mt-4 text-xs font-medium text-slate-600">
                Trusted by Indiana property managers, school systems,
                hospitals, universities, manufacturing facilities, and local
                homeowners.
              </p>
            </div>

            {/* Right Column: Embedded Quote Form Card */}
            <div className="lg:col-span-5">
              <EstimateForm
                propertyType={propertyType}
                onPropertyTypeChange={setPropertyType}
                serviceNeeded={serviceNeeded}
                onServiceNeededChange={setServiceNeeded}
                preselectedLabel={preselectedLabel}
              />
            </div>
          </div>
        </section>

        {/* SECTION 3A: Commercial Roofing & Maintenance */}
        <section id="commercial" className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
                  <Building2 className="h-4 w-4" aria-hidden="true" />
                  <span>For Property Managers &amp; Facility Directors</span>
                </div>
                <h2 className="mt-1.5 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  Commercial Roofing, Maintenance &amp; Asset Management
                </h2>
              </div>
              <p className="max-w-md text-sm text-slate-600">
                Protecting commercial and industrial buildings across Central
                and Statewide Indiana with scheduled maintenance and fast
                repairs.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {COMMERCIAL_SERVICES.map((item) => (
                <ServiceCard
                  key={item.id}
                  item={item}
                  onSelectService={handleSelectService}
                />
              ))}
            </div>

            {/* Maintenance Program Details & Inspection Checklist (from srm-llc.com) */}
            <div
              id="maintenance"
              className="mt-10 rounded-lg border border-slate-200 bg-[#F3F4F6] p-6 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1B365D]">
                    <ClipboardCheck className="h-4 w-4 text-[#B45309]" aria-hidden="true" />
                    <span>Commercial Preventative Maintenance</span>
                  </div>
                  <h3 className="mt-2 text-xl font-extrabold text-[#1E293B] sm:text-2xl">
                    Why Scheduled Inspections &amp; Manufacturer-Approved
                    Repairs Matter
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    A commercial roof is your building&apos;s first line of
                    defense against wind, rain, hail, ice, snow, and extreme
                    heat. Even when a roof is not actively leaking, that does
                    not mean there isn&apos;t a developing problem. Many
                    manufacturers require documented maintenance twice a year to
                    keep 10-to-50-year warranties valid.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    Repairing a commercial roof with the wrong product can
                    invalidate your warranty. Our specialists know which
                    products are approved by each roofing manufacturer and spot
                    subtle deterioration before it damages insulation,
                    electrical systems, or equipment below.
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-md border border-slate-300 bg-white p-5">
                    <h4 className="text-base font-bold text-[#1E293B]">
                      What Our Bi-Annual Roof Inspection Checks:
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {INSPECTION_CHECKLIST.map((check) => (
                        <li
                          key={check}
                          className="flex items-center gap-2.5 text-sm font-medium text-slate-800"
                        >
                          <AlertTriangle
                            className="h-4 w-4 shrink-0 text-[#B45309]"
                            aria-hidden="true"
                          />
                          <span>{check}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      onClick={() =>
                        handleSelectService(COMMERCIAL_SERVICES[1])
                      }
                      className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded bg-[#1B365D] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#132847] transition-colors cursor-pointer"
                    >
                      <span>Schedule a Maintenance Plan Quote</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3B: Residential Roofing Services */}
        <section
          id="residential"
          className="border-t border-slate-200 bg-[#F3F4F6] py-14 sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-3 border-b border-slate-300 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
                  <HomeIcon className="h-4 w-4" aria-hidden="true" />
                  <span>For Indiana Homeowners</span>
                </div>
                <h2 className="mt-1.5 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  Residential Roofing Repairs, Storm Fixes &amp; Replacements
                </h2>
              </div>
              <p className="max-w-md text-sm text-slate-600">
                Straightforward, honest work to keep your home dry and
                protected through every Indiana season.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {RESIDENTIAL_SERVICES.map((item) => (
                <ServiceCard
                  key={item.id}
                  item={item}
                  onSelectService={handleSelectService}
                />
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Why Choose Simmons Roofing Maintenance (Trust & Leadership) */}
        <section
          id="why-srm"
          className="border-t border-slate-200 bg-white py-14 sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                Built on Trust, Service, Dependability &amp; Quality
              </p>
              <h2 className="mt-1.5 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Why Choose Simmons Roofing Maintenance
              </h2>
              <p className="mt-3 text-base text-slate-700">
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
                  className="rounded-lg border border-slate-200 bg-[#F3F4F6] p-6"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#1B365D] text-white">
                    {idx === 0 && (
                      <ShieldCheck className="h-5 w-5 text-amber-400" aria-hidden="true" />
                    )}
                    {idx === 1 && (
                      <ClipboardCheck className="h-5 w-5 text-amber-400" aria-hidden="true" />
                    )}
                    {idx === 2 && (
                      <Wrench className="h-5 w-5 text-amber-400" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#1E293B]">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Meet Our Leadership (from srm-llc.com/pages/who_we_are.html) */}
            <div className="mt-12 rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="border-b border-slate-200 pb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                  Who We Are
                </p>
                <h3 className="mt-1 text-xl font-extrabold text-[#1E293B] sm:text-2xl">
                  Experienced Indiana Roofing Leadership
                </h3>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
                {TEAM_MEMBERS.map((member) => (
                  <div key={member.name} className="space-y-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-lg font-extrabold text-[#1B365D]">
                        {member.name}
                      </h4>
                      <span className="rounded bg-amber-100 px-2.5 py-0.5 text-xs font-bold text-[#92400E]">
                        {member.experience}
                      </span>
                    </div>
                    <p className="text-sm font-semibold italic text-slate-600">
                      {member.role}
                    </p>
                    <p className="text-sm leading-relaxed text-slate-700">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: Client & Homeowner Testimonials */}
        <section
          id="reviews"
          className="border-t border-slate-200 bg-[#F3F4F6] py-14 sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                Indiana Client Feedback
              </p>
              <h2 className="mt-1.5 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Trusted by Property Managers &amp; Homeowners
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((review) => (
                <blockquote
                  key={review.author}
                  className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div>
                    <div
                      className="flex items-center gap-1 text-[#B45309]"
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
                    <p className="mt-4 text-sm leading-relaxed text-slate-700">
                      &ldquo;{review.quote}&rdquo;
                    </p>
                  </div>
                  <footer className="mt-5 border-t border-slate-100 pt-4">
                    <div className="text-sm font-bold text-[#1E293B]">
                      {review.author}
                    </div>
                    <div className="text-xs text-slate-600">
                      {review.role} &bull; {review.location}
                    </div>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: Contact & Indiana Service Area Footer */}
        <footer
          id="contact"
          className="bg-[#1E293B] text-slate-200 pt-14 pb-24 md:pb-12"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              {/* Contact Details */}
              <div className="lg:col-span-5">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Contact Us Today
                </p>
                <h2 className="mt-1.5 text-2xl font-extrabold text-white sm:text-3xl">
                  {COMPANY_INFO.name}
                </h2>
                <p className="mt-2 text-sm text-slate-300">
                  {COMPANY_INFO.legalName} &mdash; Commercial &amp; Residential
                  Roofing Experts Serving Indiana.
                </p>

                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <a
                        href={COMPANY_INFO.phoneHref}
                        className="text-base font-bold text-amber-300 hover:underline"
                      >
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                      <div className="text-xs text-slate-300">
                        {COMPANY_INFO.emergencyNote}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="text-slate-200 hover:text-white hover:underline"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="font-semibold text-white">Office</div>
                      <div>{COMPANY_INFO.addressLine1}</div>
                      <div>{COMPANY_INFO.addressLine2}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock
                      className="mt-0.5 h-5 w-5 shrink-0 text-amber-400"
                      aria-hidden="true"
                    />
                    <div>
                      <div className="font-semibold text-white">
                        Business Hours
                      </div>
                      <div>{COMPANY_INFO.hours}</div>
                      <div className="text-xs text-amber-300">
                        24/7 Emergency Roof Leak Response Available
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Indiana Service Coverage */}
              <div className="lg:col-span-4">
                <h3 className="text-lg font-bold text-white">
                  Indiana Service Areas
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Headquartered in Gaston, IN, we serve commercial facilities
                  and homeowners throughout Central Indiana and statewide:
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm">
                  {INDIANA_SERVICE_AREAS.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-2 text-slate-200"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Estimate CTA Box */}
              <div className="lg:col-span-3">
                <div className="rounded-lg border border-slate-700 bg-[#1B365D] p-5">
                  <h3 className="text-lg font-bold text-white">
                    Need a Roof Estimate?
                  </h3>
                  <p className="mt-2 text-sm text-slate-200">
                    Whether it&apos;s an urgent commercial leak, a preventative
                    maintenance plan, or a residential shingle repair, we&apos;re
                    ready to help.
                  </p>
                  <div className="mt-5 space-y-3">
                    <a
                      href="#estimate-form"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToEstimateForm();
                      }}
                      className="inline-flex w-full items-center justify-center rounded bg-[#B45309] px-4 py-3 text-sm font-bold text-white hover:bg-[#92400E] transition-colors"
                    >
                      Go to Estimate Form
                    </a>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="inline-flex w-full items-center justify-center gap-2 rounded border border-slate-400 px-4 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                      <span>{COMPANY_INFO.phoneDisplay}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-slate-700 pt-6 flex flex-col items-center justify-between gap-3 text-xs text-slate-400 sm:flex-row">
              <div>
                &copy; 2026 {COMPANY_INFO.name}. All Rights Reserved.
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a href="#home" className="hover:text-white">
                  Home
                </a>
                <a href="#commercial" className="hover:text-white">
                  Commercial
                </a>
                <a href="#residential" className="hover:text-white">
                  Residential
                </a>
                <a href="#maintenance" className="hover:text-white">
                  Maintenance
                </a>
                <a href="#reviews" className="hover:text-white">
                  Reviews
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-300 bg-white p-2.5 shadow-[0_-4px_12px_rgba(0,0,0,0.08)] md:hidden">
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={COMPANY_INFO.phoneHref}
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded bg-[#1B365D] px-3 py-2.5 text-sm font-bold text-white"
          >
            <Phone className="h-4 w-4 text-amber-400" aria-hidden="true" />
            <span>Call Now</span>
          </a>
          <a
            href="#estimate-form"
            onClick={(e) => {
              e.preventDefault();
              scrollToEstimateForm();
            }}
            className="inline-flex min-h-[46px] items-center justify-center rounded bg-[#B45309] px-3 py-2.5 text-sm font-bold text-white"
          >
            Get Free Quote
          </a>
        </div>
      </div>
    </div>
  );
}

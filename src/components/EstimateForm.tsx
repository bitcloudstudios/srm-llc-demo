"use client";

import { useState, FormEvent } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { COMPANY_INFO, PropertyType, ServiceOption } from "@/data/srmData";

interface EstimateFormProps {
  propertyType: PropertyType;
  onPropertyTypeChange: (value: PropertyType) => void;
  serviceNeeded: ServiceOption;
  onServiceNeededChange: (value: ServiceOption) => void;
  preselectedLabel: string | null;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  "Roof Leak / Repair",
  "Preventative Maintenance Plan",
  "Full Roof Replacement",
  "Roof Inspection",
];

export default function EstimateForm({
  propertyType,
  onPropertyTypeChange,
  serviceNeeded,
  onServiceNeededChange,
  preselectedLabel,
}: EstimateFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setPhone("");
    setEmail("");
    setNotes("");
    setSubmitted(false);
  };

  return (
    <div
      id="estimate-form"
      className="rounded-lg border border-[#E7E5E4] bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="border-b border-[#E7E5E4] pb-4">
        <p className="text-xs font-bold uppercase tracking-wider text-[#C27803]">
          No-Obligation Assessment
        </p>
        <h2 className="font-display mt-1 text-2xl font-bold text-[#1C1917]">
          Request a Free Estimate
        </h2>
        <p className="mt-1 text-sm text-[#44403C]">
          Tell us about your roof or building. We respond promptly across
          Indiana.
        </p>
      </div>

      {submitted ? (
        <div
          role="status"
          className="mt-6 rounded-md border border-[#16302B]/20 bg-[#F4F1EA] p-5 text-[#1C1917]"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 h-6 w-6 shrink-0 text-[#16302B]"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-display text-lg font-bold text-[#16302B]">
                Estimate Request Received
              </h3>
              <p className="mt-1 text-sm text-[#44403C]">
                Thank you, <span className="font-semibold text-[#1C1917]">{name}</span>. Our
                team has received your request for{" "}
                <span className="font-semibold text-[#1C1917]">{serviceNeeded}</span> (
                {propertyType}) and will reach out to{" "}
                <span className="font-semibold text-[#1C1917]">{phone}</span> shortly.
              </p>
              <p className="mt-3 text-sm text-[#44403C]">
                Have an active leak or emergency right now? Call us directly at{" "}
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="font-bold text-[#C27803] underline"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 inline-flex items-center rounded border border-[#E7E5E4] bg-white px-4 py-2 text-sm font-semibold text-[#1C1917] hover:bg-stone-50"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          {preselectedLabel && (
            <div className="rounded border border-[#C27803]/40 bg-[#F4F1EA] px-3.5 py-2.5 text-xs font-medium text-[#1C1917]">
              Selected service:{" "}
              <span className="font-bold text-[#16302B]">
                {preselectedLabel}
              </span>
            </div>
          )}

          <div>
            <label
              htmlFor="est-name"
              className="block text-sm font-semibold text-[#1C1917]"
            >
              Full Name <span className="text-[#C27803]">*</span>
            </label>
            <input
              id="est-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Smith"
              className="mt-1 block w-full rounded border border-[#E7E5E4] bg-white px-3.5 py-2.5 text-base text-[#1C1917] placeholder:text-stone-400 focus:border-[#16302B] focus:outline-none focus:ring-2 focus:ring-[#16302B]/20"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="est-phone"
                className="block text-sm font-semibold text-[#1C1917]"
              >
                Phone Number <span className="text-[#C27803]">*</span>
              </label>
              <input
                id="est-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(765) 555-0142"
                className="mt-1 block w-full rounded border border-[#E7E5E4] bg-white px-3.5 py-2.5 text-base text-[#1C1917] placeholder:text-stone-400 focus:border-[#16302B] focus:outline-none focus:ring-2 focus:ring-[#16302B]/20"
              />
            </div>

            <div>
              <label
                htmlFor="est-email"
                className="block text-sm font-semibold text-[#1C1917]"
              >
                Email Address <span className="text-[#C27803]">*</span>
              </label>
              <input
                id="est-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="mt-1 block w-full rounded border border-[#E7E5E4] bg-white px-3.5 py-2.5 text-base text-[#1C1917] placeholder:text-stone-400 focus:border-[#16302B] focus:outline-none focus:ring-2 focus:ring-[#16302B]/20"
              />
            </div>
          </div>

          {/* Property Type Radio Group */}
          <fieldset>
            <legend className="block text-sm font-semibold text-[#1C1917]">
              Property Type <span className="text-[#C27803]">*</span>
            </legend>
            <div className="mt-1.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {(
                ["Commercial Property", "Residential Home"] as PropertyType[]
              ).map((type) => {
                const checked = propertyType === type;
                return (
                  <label
                    key={type}
                    className={`flex cursor-pointer items-center gap-2.5 rounded border px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                      checked
                        ? "border-[#16302B] bg-[#16302B]/5 text-[#16302B]"
                        : "border-[#E7E5E4] bg-white text-[#44403C] hover:bg-[#F4F1EA]/60"
                    }`}
                  >
                    <input
                      type="radio"
                      name="propertyType"
                      value={type}
                      checked={checked}
                      onChange={() => onPropertyTypeChange(type)}
                      className="h-4 w-4 accent-[#16302B]"
                    />
                    <span>{type}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {/* Service Needed */}
          <div>
            <label
              htmlFor="est-service"
              className="block text-sm font-semibold text-[#1C1917]"
            >
              Service Needed <span className="text-[#C27803]">*</span>
            </label>
            <select
              id="est-service"
              value={serviceNeeded}
              onChange={(e) =>
                onServiceNeededChange(e.target.value as ServiceOption)
              }
              className="mt-1 block w-full rounded border border-[#E7E5E4] bg-white px-3.5 py-2.5 text-base text-[#1C1917] focus:border-[#16302B] focus:outline-none focus:ring-2 focus:ring-[#16302B]/20"
            >
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          {/* Brief Notes */}
          <div>
            <label
              htmlFor="est-notes"
              className="block text-sm font-semibold text-[#1C1917]"
            >
              Brief Notes (City, Roof Type, or Issue)
            </label>
            <textarea
              id="est-notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tell us your Indiana location and what you're seeing (active leak, storm damage, annual maintenance, etc.)"
              className="mt-1 block w-full rounded border border-[#E7E5E4] bg-white px-3.5 py-2 text-base text-[#1C1917] placeholder:text-stone-400 focus:border-[#16302B] focus:outline-none focus:ring-2 focus:ring-[#16302B]/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-[#C27803] px-6 py-3.5 text-base font-bold text-white shadow-sm hover:bg-[#A66502] focus:outline-none focus:ring-2 focus:ring-[#C27803] focus:ring-offset-2 transition-colors cursor-pointer"
          >
            Request Free Estimate
          </button>

          <p className="flex items-center justify-center gap-1.5 pt-1 text-center text-xs text-[#44403C]">
            <Phone className="h-3.5 w-3.5 text-[#C27803]" aria-hidden="true" />
            <span>
              Prefer to talk? Call{" "}
              <a
                href={COMPANY_INFO.phoneHref}
                className="font-bold text-[#16302B] hover:underline"
              >
                {COMPANY_INFO.phoneDisplay}
              </a>{" "}
              (24-Hr Emergency Service)
            </span>
          </p>
        </form>
      )}
    </div>
  );
}

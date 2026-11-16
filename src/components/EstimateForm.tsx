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
      className="rounded-lg border-2 border-slate-200 bg-white p-6 shadow-md sm:p-8"
    >
      <div className="border-b border-slate-200 pb-4">
        <p className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
          No-Obligation Assessment
        </p>
        <h2 className="mt-1 text-2xl font-extrabold text-[#1E293B]">
          Request a Free Estimate
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Tell us about your roof or building. We respond promptly across
          Indiana.
        </p>
      </div>

      {submitted ? (
        <div
          role="status"
          className="mt-6 rounded-md border border-emerald-200 bg-emerald-50 p-5 text-slate-800"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2
              className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700"
              aria-hidden="true"
            />
            <div>
              <h3 className="text-lg font-bold text-emerald-900">
                Estimate Request Received
              </h3>
              <p className="mt-1 text-sm text-emerald-800">
                Thank you, <span className="font-semibold">{name}</span>. Our
                team has received your request for{" "}
                <span className="font-semibold">{serviceNeeded}</span> (
                {propertyType}) and will reach out to{" "}
                <span className="font-semibold">{phone}</span> shortly.
              </p>
              <p className="mt-3 text-sm text-slate-700">
                Have an active leak or emergency right now? Call us directly at{" "}
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="font-bold text-[#B45309] underline"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 inline-flex items-center rounded border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#1E293B] hover:bg-slate-50"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          {preselectedLabel && (
            <div className="rounded border border-amber-300 bg-amber-50 px-3.5 py-2.5 text-xs font-medium text-amber-950">
              Selected service:{" "}
              <span className="font-bold">{preselectedLabel}</span>
            </div>
          )}

          <div>
            <label
              htmlFor="est-name"
              className="block text-sm font-semibold text-[#1E293B]"
            >
              Full Name <span className="text-[#C2410C]">*</span>
            </label>
            <input
              id="est-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Smith"
              className="mt-1 block w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-base text-[#111827] placeholder:text-slate-400 focus:border-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#1B365D]/20"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="est-phone"
                className="block text-sm font-semibold text-[#1E293B]"
              >
                Phone Number <span className="text-[#C2410C]">*</span>
              </label>
              <input
                id="est-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(765) 555-0142"
                className="mt-1 block w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-base text-[#111827] placeholder:text-slate-400 focus:border-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#1B365D]/20"
              />
            </div>

            <div>
              <label
                htmlFor="est-email"
                className="block text-sm font-semibold text-[#1E293B]"
              >
                Email Address <span className="text-[#C2410C]">*</span>
              </label>
              <input
                id="est-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="mt-1 block w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-base text-[#111827] placeholder:text-slate-400 focus:border-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#1B365D]/20"
              />
            </div>
          </div>

          {/* Property Type Radio Group */}
          <fieldset>
            <legend className="block text-sm font-semibold text-[#1E293B]">
              Property Type <span className="text-[#C2410C]">*</span>
            </legend>
            <div className="mt-1.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {(["Commercial Property", "Residential Home"] as PropertyType[]).map(
                (type) => {
                  const checked = propertyType === type;
                  return (
                    <label
                      key={type}
                      className={`flex cursor-pointer items-center gap-2.5 rounded border px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                        checked
                          ? "border-[#1B365D] bg-[#1B365D]/5 text-[#1B365D]"
                          : "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="propertyType"
                        value={type}
                        checked={checked}
                        onChange={() => onPropertyTypeChange(type)}
                        className="h-4 w-4 accent-[#1B365D]"
                      />
                      <span>{type}</span>
                    </label>
                  );
                }
              )}
            </div>
          </fieldset>

          {/* Service Needed */}
          <div>
            <label
              htmlFor="est-service"
              className="block text-sm font-semibold text-[#1E293B]"
            >
              Service Needed <span className="text-[#C2410C]">*</span>
            </label>
            <select
              id="est-service"
              value={serviceNeeded}
              onChange={(e) =>
                onServiceNeededChange(e.target.value as ServiceOption)
              }
              className="mt-1 block w-full rounded border border-slate-300 bg-white px-3.5 py-2.5 text-base text-[#111827] focus:border-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#1B365D]/20"
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
              className="block text-sm font-semibold text-[#1E293B]"
            >
              Brief Notes (City, Roof Type, or Issue)
            </label>
            <textarea
              id="est-notes"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Tell us your Indiana location and what you're seeing (active leak, storm damage, annual maintenance, etc.)"
              className="mt-1 block w-full rounded border border-slate-300 bg-white px-3.5 py-2 text-base text-[#111827] placeholder:text-slate-400 focus:border-[#1B365D] focus:outline-none focus:ring-2 focus:ring-[#1B365D]/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-[#B45309] px-6 py-3.5 text-base font-bold text-white shadow-sm hover:bg-[#92400E] focus:outline-none focus:ring-2 focus:ring-[#B45309] focus:ring-offset-2 transition-colors cursor-pointer"
          >
            Request Free Estimate
          </button>

          <p className="flex items-center justify-center gap-1.5 pt-1 text-center text-xs text-slate-600">
            <Phone className="h-3.5 w-3.5 text-[#B45309]" aria-hidden="true" />
            <span>
              Prefer to talk? Call{" "}
              <a
                href={COMPANY_INFO.phoneHref}
                className="font-bold text-[#1B365D] hover:underline"
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

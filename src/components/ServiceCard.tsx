"use client";

import { ArrowRight, Check } from "lucide-react";
import { ServiceItem } from "@/data/srmData";

interface ServiceCardProps {
  item: ServiceItem;
  onSelectService: (item: ServiceItem) => void;
}

export default function ServiceCard({
  item,
  onSelectService,
}: ServiceCardProps) {
  return (
    <article className="flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-xl font-bold text-[#1E293B]">{item.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-slate-700">
          {item.description}
        </p>
        <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
          {item.highlights.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2 text-sm text-slate-700"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]"
                aria-hidden="true"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-2">
        <button
          type="button"
          onClick={() => onSelectService(item)}
          className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 rounded border border-slate-300 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-[#1B365D] hover:border-[#B45309] hover:bg-amber-50 hover:text-[#B45309] transition-colors cursor-pointer"
        >
          <span>Get a Quote for This Service</span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

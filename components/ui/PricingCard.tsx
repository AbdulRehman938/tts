import React from "react";
import { Check } from "lucide-react";
import { Button } from "./Button";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  ctaText?: string;
}

export const PricingCard = ({
  name,
  price,
  description,
  features,
  recommended = false,
  ctaText = "Choose Plan",
}: PricingCardProps) => {
  return (
    <div className={`relative flex flex-col rounded-[2.5rem] border p-12 transition-all duration-500 hover:-translate-y-3 ${recommended ? "border-premium-white bg-premium-charcoal/50 shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-10 scale-110" : "border-premium-medium-gray/20 bg-premium-charcoal/20"}`}>
      {recommended && (
        <span className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-full bg-premium-white px-6 py-1.5 text-[10px] font-black uppercase tracking-[0.3em] text-premium-black shadow-xl">
          Protocol_Lead
        </span>
      )}
      
      <div className="mb-12">
        <h3 className="mb-4 text-3xl font-black italic tracking-tighter text-premium-white uppercase leading-none">{name}_</h3>
        <div className="mb-6 flex items-baseline gap-2">
          <span className="text-5xl font-black text-premium-white italic tracking-tighter">{price}</span>
          {price !== "Custom" && <span className="text-xs font-bold uppercase tracking-widest text-premium-medium-gray italic">/unit/mo</span>}
        </div>
        <p className="text-base font-medium italic text-premium-light-gray leading-relaxed h-12 overflow-hidden">{description}</p>
      </div>

      <div className="mb-12 space-y-6">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-premium-white/10 shrink-0">
              <Check size={14} className="text-premium-white font-black" />
            </div>
            <span className="text-sm font-bold text-premium-light-gray italic tracking-tight">{feature}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto">
        <Button variant={recommended ? "primary" : "outline"} fullWidth className="h-14 font-black uppercase tracking-widest text-xs">
          {ctaText}
        </Button>
      </div>
    </div>
  );
};

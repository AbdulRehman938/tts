import React from "react";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-[2.5rem] border border-premium-medium-gray/20 bg-premium-charcoal/30 p-10 transition-all duration-500 hover:bg-premium-charcoal/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-2">
      <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-premium-white text-premium-black transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl">
        <Icon size={28} />
      </div>
      <h3 className="mb-4 text-2xl font-black italic tracking-tighter text-premium-white uppercase leading-none">{title}</h3>
      <p className="text-base leading-relaxed text-premium-light-gray font-medium italic">
        {description}
      </p>
      
      {/* Decorative gradient corner */}
      <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-premium-white/5 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
    </div>
  );
};

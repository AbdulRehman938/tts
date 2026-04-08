"use client";
import React, { useState } from "react";
import { Check, Info, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PricingCard } from "@/components/ui/PricingCard";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const pricingData = [
    {
      name: "Lite",
      price: billingCycle === "monthly" ? "$0" : "$0",
      description: "Ideal for individual testing and academic research.",
      features: ["5,000 characters per month", "5 Standard neural voices", "Basic modulation control", "MP3 128kbps exports", "Community support"],
    },
    {
      name: "Pro",
      price: billingCycle === "monthly" ? "$29" : "$249",
      description: "For creators who demand studio-grade synthesis.",
      features: ["500,000 characters per month", "All 200+ Premium voices", "Emotional tone control", "WAV 96kHz exports", "Commercial license", "Email support"],
      recommended: true,
      ctaText: "Start Professional",
    },
    {
      name: "Business",
      price: billingCycle === "monthly" ? "$99" : "$899",
      description: "Scale your voice production across the whole team.",
      features: ["2,000,000 characters per month", "Unlimited team seats", "Batch processing queue", "Full SSML markup", "SSO & SAML integration", "24/7 Priority support"],
      ctaText: "Go Enterprise",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-premium-black pt-32">
      <section className="py-32 lg:py-52 bg-premium-charcoal/10 relative overflow-hidden flex items-center justify-center border-b border-premium-medium-gray/10 text-center">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-premium-white/5 blur-[120px]" />
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl space-y-12 relative z-10 flex flex-col items-center">
          <h4 className="text-sm font-black uppercase tracking-[0.8em] text-premium-medium-gray italic leading-none">Access Control_</h4>
          <h1 className="text-6xl font-black italic tracking-tighter text-premium-white sm:text-8xl lg:text-9xl uppercase leading-[0.8]">
            SCALABLE <br /><span className="text-premium-medium-gray not-italic underline decoration-premium-white/10 underline-offset-20">ECONOMY_</span>
          </h1>
          <p className="text-xl lg:text-2xl text-premium-light-gray leading-relaxed max-w-3xl mx-auto italic font-medium">
            Unified access to the most powerful speech synthesis infrastructure ever engineered.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center rounded-2xl border border-premium-medium-gray/20 bg-premium-charcoal/30 p-1 backdrop-blur-md mt-12">
            <button 
               onClick={() => setBillingCycle("monthly")}
               className={`rounded-xl px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${billingCycle === "monthly" ? "bg-premium-white text-premium-black" : "text-premium-medium-gray hover:text-premium-white"}`}
            >
               Monthly
            </button>
            <button 
               onClick={() => setBillingCycle("yearly")}
               className={`rounded-xl px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${billingCycle === "yearly" ? "bg-premium-white text-premium-black" : "text-premium-medium-gray hover:text-premium-white"}`}
            >
               Yearly <span className="ml-1 text-[10px] opacity-70">(-20%)</span>
            </button>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-40 bg-premium-black">
        <div className="container mx-auto px-6 max-w-7xl space-y-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pricingData.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>

          <div className="space-y-16">
            <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-premium-medium-gray/20 pb-12">
               <h2 className="text-4xl font-black text-premium-white uppercase tracking-[0.2em] italic">Full Specs_</h2>
               <p className="text-sm text-premium-medium-gray font-bold uppercase tracking-widest italic">Unified Neural Framework v2.04</p>
            </div>
            
            <div className="overflow-x-auto rounded-[2.5rem] border border-premium-medium-gray/20 bg-premium-charcoal/20 shadow-2xl backdrop-blur-xl">
               <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-premium-medium-gray/20 bg-premium-white/5">
                       <th className="p-10 text-[10px] font-black uppercase tracking-[0.4em] text-premium-medium-gray">Capability Set</th>
                       <th className="p-10 text-[10px] font-black uppercase tracking-[0.4em] text-premium-white">Lite_</th>
                       <th className="p-10 text-[10px] font-black uppercase tracking-[0.4em] text-premium-white">Pro_</th>
                       <th className="p-10 text-[10px] font-black uppercase tracking-[0.4em] text-premium-white">Business_</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-bold text-premium-light-gray divide-y divide-premium-medium-gray/10 italic">
                    {[
                      { l: "Max Characters /mo", v1: "5k", v2: "500k", v3: "2M" },
                      { l: "Neural Voices", v1: "5", v2: "200+", v3: "200+" },
                      { l: "Audio Resolution", v1: "128kbps", v2: "96kHz", v3: "96kHz" },
                      { l: "SSML Support", v1: "None", v2: "Partial", v3: "Full" },
                      { l: "Commercial Rights", v1: "No", v2: "Yes", v3: "Yes" },
                      { l: "SLA Guarantee", v1: "No", v2: "99.9%", v3: "99.99%" },
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-premium-white/5 transition-colors">
                        <td className="p-10 text-premium-medium-gray">{row.l}</td>
                        <td className="p-10">{row.v1}</td>
                        <td className="p-10 text-premium-white">{row.v2}</td>
                        <td className="p-10 text-premium-white">{row.v3}</td>
                      </tr>
                    ))}
                  </tbody>
               </table>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
             <div className="text-center space-y-4">
                <h2 className="text-3xl font-black text-premium-white uppercase tracking-tighter italic">Common Queries_</h2>
                <div className="h-1 w-20 bg-premium-white mx-auto opacity-20" />
             </div>
             <div className="grid gap-12 text-left">
                {[1,2,3].map(i => (
                  <div key={i} className="group p-10 rounded-[2.5rem] border border-premium-medium-gray/10 bg-premium-charcoal/30 hover:border-premium-white/20 transition-all">
                     <h4 className="flex items-center gap-4 font-black text-premium-white mb-6 uppercase tracking-tight italic text-xl group-hover:translate-x-2 transition-transform">
                        <HelpCircle size={24} className="text-premium-medium-gray" />
                        How Scaleable is the engine?
                     </h4>
                     <p className="text-base text-premium-light-gray leading-relaxed italic font-medium">The echoScript engine is designed as an architectural microservice. We scale horizontally using global edge nodes, ensuring your synthesis remains sub-200ms regardless of volume or location.</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

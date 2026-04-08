"use client";
import React from "react";
import { Mic, Zap, Globe, Target, User, Cpu, BarChart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
  const values = [
    { icon: Target, title: "Precision", content: "We obsess over the frequency response and temporal alignment of every synthesized word." },
    { icon: Shield, title: "Ethics", content: "We champion responsible AI, including digital watermarking and clear attribution." },
    { icon: Globe, title: "Diversity", content: "Supporting over 60 languages to ensure every culture has a voice in the digital age." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-premium-black pt-32">
      <section className="py-32 lg:py-52 bg-premium-charcoal/10 relative overflow-hidden flex items-center justify-center border-b border-premium-medium-gray/10">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-premium-white/5 blur-[120px]" />
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl space-y-12 relative z-10 text-center">
          <h4 className="text-sm font-black uppercase tracking-[0.8em] text-premium-medium-gray italic leading-none">The Genesis_</h4>
          <h1 className="text-6xl font-black italic tracking-tighter text-premium-white sm:text-8xl lg:text-9xl uppercase leading-[0.8]">
            REDEFINING <br /><span className="text-premium-medium-gray not-italic underline decoration-premium-white/10 underline-offset-20">SPEECH_</span>
          </h1>
          <p className="text-xl lg:text-2xl text-premium-light-gray font-medium italic leading-relaxed max-w-3xl mx-auto">
            Founded by a collective of audio engineers and neural researchers to eliminate the linguistic barriers of the digital age.
          </p>
        </div>
      </section>

      <section className="py-24 border-y border-premium-medium-gray/10">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <div className="space-y-8">
              <h2 className="text-3xl font-bold uppercase tracking-tighter text-premium-white italic leading-tight">The Team behind<br />the Engine_</h2>
              <p className="text-premium-light-gray leading-relaxed italic">
                 Headquartered in the silicon heart of Europe, our team consists of world-class experts in Digital Signal Processing (DSP), Computational Linguistics, and Neural Network Optimization.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                 <Button variant="outline" className="gap-2">View Open Roles <ExternalLink size={14} /></Button>
              </div>
           </div>
           <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square rounded-2xl bg-premium-charcoal/50 border border-premium-medium-gray/20 flex flex-col items-center justify-center p-6 text-center group translate-y-2 even:translate-y-0 transition-transform">
                   <div className="h-16 w-16 rounded-full bg-premium-white/10 mb-4 flex items-center justify-center">
                      <User size={32} className="text-premium-white" />
                   </div>
                   <h4 className="font-bold text-premium-white text-xs uppercase tracking-widest leading-none">Research Lead</h4>
                   <p className="text-[10px] text-premium-medium-gray font-mono uppercase mt-2">Dr. Johannes V.</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 text-center max-w-5xl">
           <h2 className="mb-16 text-3xl font-bold uppercase tracking-tighter text-premium-white italic">Our core philosophy_</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {values.map((v, i) => (
                <div key={i} className="space-y-6 flex flex-col items-center text-center">
                  <div className="h-14 w-14 rounded-full border border-premium-white/20 flex items-center justify-center bg-premium-charcoal/30">
                     <v.icon size={24} className="text-premium-white" />
                  </div>
                  <h3 className="text-xl font-bold italic tracking-tighter text-premium-white uppercase">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-premium-light-gray font-medium">{v.content}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Mission box */}
      <section className="py-24 bg-premium-white">
        <div className="container mx-auto px-6 text-center space-y-12">
           <div className="flex flex-col items-center max-w-3xl mx-auto space-y-8">
              <div className="h-2 w-32 bg-premium-black" />
              <h2 className="text-4xl font-black italic tracking-tighter text-premium-black sm:text-6xl uppercase leading-none">
                 One Engine.<br />Five Billion Voices.
              </h2>
              <p className="text-lg font-bold text-premium-charcoal leading-relaxed italic">
                 "Our vision is to provide every individual and organization with a unique, emotionally-capable digital voice that speaks with their signature identity."
              </p>
           </div>
        </div>
      </section>
    </div>
  );
}

// Fixed missing Shield icon import error
import { Shield } from "lucide-react";

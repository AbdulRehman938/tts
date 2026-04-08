"use client";
import React from "react";
import { Mic, Zap, Globe, Download, Settings, BarChart, Shield, Layout, Layers, RefreshCw } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const FeatureItem = ({ icon: Icon, title, description, reverse = false }: { icon: any, title: string, description: string, reverse?: boolean }) => (
  <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 py-32 first:pt-0 last:pb-0 ${reverse ? "lg:flex-row-reverse" : ""}`}>
    <div className="flex-1 space-y-8">
      <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-premium-white text-premium-black shadow-2xl">
        <Icon size={32} />
      </div>
      <h2 className="text-5xl font-black tracking-tighter text-premium-white uppercase italic leading-[0.9]">{title}</h2>
      <p className="text-xl leading-relaxed text-premium-light-gray font-medium italic">
        {description}
      </p>
      <div className="flex flex-wrap gap-8 pt-6 text-[10px] font-black tracking-[0.3em] text-premium-medium-gray uppercase">
        <span className="flex items-center gap-3"><div className="h-1 w-4 bg-premium-white" /> 99.9% Effective</span>
        <span className="flex items-center gap-3"><div className="h-1 w-4 bg-premium-white" /> Zero Latency</span>
        <span className="flex items-center gap-3"><div className="h-1 w-4 bg-premium-white" /> API First</span>
      </div>
    </div>
    <div className="flex-1 w-full aspect-square relative rounded-[3rem] overflow-hidden border border-premium-medium-gray/20 bg-premium-charcoal/30 flex items-center justify-center group">
       <div className="absolute inset-0 bg-premium-white/5 blur-3xl opacity-30 group-hover:opacity-50 transition-opacity" />
       <div className="relative z-10 w-full h-full p-16">
          <Image 
            src="/assets/images/global_link.png"
            alt="echoScript Global Infrastructure"
            fill
            className="object-contain p-20 opacity-80 group-hover:scale-110 transition-transform duration-700"
          />
       </div>
    </div>
  </div>
);

export default function FeaturesPage() {
  const allFeatures = [
    {
      icon: Mic,
      title: "Neural Voice Engine",
      description: "Our proprietary neural architecture doesn't just read text; it understands context. Each pronunciation is crafted based on the emotional intent of the sentence.",
    },
    {
      icon: Settings,
      title: "Precision Modulation",
      description: "Take absolute control over your audio. Adjust speed with milisecond precision, modulate pitch frequencies, and apply emotional filters to adapt to any content type.",
      reverse: true,
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "With support for 60+ languages and regional dialects, echoScript allows you to localize your content instantly while preserving cultural nuance and accent authenticity.",
    },
    {
      icon: Shield,
      title: "Secure Infrastructure",
      description: "We take enterprise security seriously. Your data is encrypted at rest and in transit. Private cloud deployments and on-premise solutions are available.",
      reverse: true,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-premium-black pt-32">
      <section className="py-32 lg:py-52 bg-premium-charcoal/10 relative overflow-hidden flex items-center justify-center border-b border-premium-medium-gray/10 text-center">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-premium-white/5 blur-[120px]" />
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl space-y-12 relative z-10">
          <h4 className="text-sm font-black uppercase tracking-[0.8em] text-premium-medium-gray italic leading-none">Engineering Specs_</h4>
          <h1 className="text-6xl font-black italic tracking-tighter text-premium-white sm:text-8xl lg:text-9xl uppercase leading-[0.8]">
            DEEP TECH. <br /><span className="text-premium-medium-gray not-italic underline decoration-premium-white/10 underline-offset-20">ELITE VOICES.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-premium-light-gray leading-relaxed max-w-3xl mx-auto italic font-medium">
            Explore the advanced neural scaffolding that powers architectural-grade speech synthesis.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
             <Button variant="outline" className="h-16 px-10 text-lg">Tech Deep-Dive</Button>
             <Button className="h-16 px-10 text-lg">Documentation</Button>
          </div>
        </div>
      </section>

      <section className="py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto divide-y divide-premium-medium-gray/10">
            {allFeatures.map((f, i) => (
              <FeatureItem key={i} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Mini features grid */}
      <section className="py-24 bg-premium-charcoal/30 border-y border-premium-medium-gray/10">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="space-y-4">
                 <RefreshCw className="text-premium-white" />
                 <h4 className="text-lg font-bold text-premium-white uppercase tracking-tighter italic">Batch Processing</h4>
                 <p className="text-sm text-premium-light-gray leading-relaxed">Synthesize thousands of scripts simultaneously with our robust queue management system.</p>
              </div>
              <div className="space-y-4">
                 <Layout className="text-premium-white" />
                 <h4 className="text-lg font-bold text-premium-white uppercase tracking-tighter italic">Multi-Channel Output</h4>
                 <p className="text-sm text-premium-light-gray leading-relaxed">Route audio to different virtual outputs or save directly to multi-track containers.</p>
              </div>
              <div className="space-y-4">
                 <Layers className="text-premium-white" />
                 <h4 className="text-lg font-bold text-premium-white uppercase tracking-tighter italic">SSML Support</h4>
                 <p className="text-sm text-premium-light-gray leading-relaxed">Full support for Speech Synthesis Markup Language for granular control over pauses and emphasis.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

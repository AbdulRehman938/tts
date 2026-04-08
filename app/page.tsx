"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mic, Zap, Globe, Download, Play, ArrowRight, Star, Music, Shield, Cpu } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { PricingCard } from "@/components/ui/PricingCard";

export default function Home() {
  const features = [
    {
      icon: Mic,
      title: "Neural Synthesis v4",
      description: "Proprietary spectral temporal modeling generating speech indistinguishable from the human original.",
    },
    {
      icon: Zap,
      title: "Latency-Zero SDK",
      description: "Sub-200ms processing cycles optimized for real-time edge-node deployment and feedback.",
    },
    {
      icon: Globe,
      title: "60+ Global Matrices",
      description: "Support for dynamic linguistic archetypes across 200+ unique regional neural dialects.",
    },
    {
      icon: Music,
      title: "High-Fidelity Master",
      description: "Studio-grade 96kHz lossless exports with full SSML-2.0 spectral modulation control.",
    },
  ];

  const pricing = [
    {
      name: "Lite",
      price: "$0",
      description: "Foundational access for individual researchers and neural testing.",
      features: ["5,000 chars /mo", "Standard Neural Suite", "Basic API Protocol", "MP3 Exports"],
    },
    {
      name: "Pro",
      price: "$29",
      description: "Elite synthesis infrastructure for professional production environments.",
      features: ["500,000 chars /mo", "Full Neural Archetype Library", "SSML Modulation Control", "Commercial Master Rights", "Priority Queue"],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Infinite architectural scale for global infrastructure and voice cloning.",
      features: ["Unlimited Spectral Flux", "Private Voice Synthesis", "Dedicated Support Node", "On-Prem Governance", "Advanced Encryption"],
    },
  ];

  const stats_items = [
    { val: "0.2s", label: "Latency" },
    { val: "200+", label: "Neural Voices" },
    { val: "99.9%", label: "API Uptime" },
    { val: "60+", label: "Accents" }
  ];

  const testimonials = [
    {
      name: "Sian Miller",
      role: "Podcaster",
      content: "echoScript has completely transformed my workflow. The voices are so natural my listeners can't tell the difference.",
      rating: 5,
    },
    {
      name: "Marcus Chen",
      role: "E-learning Dev",
      content: "The API is lightning fast. We've integrated it into our learning platform and user engagement is up by 40%.",
      rating: 5,
    },
    {
      name: "Elena Rossi",
      role: "Content Creator",
      content: "Finally, a TTS app that doesn't sound like a robot. The emotional range is unprecedented.",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen pt-32 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-52 pt-0 lg:pt-0 flex items-center justify-center overflow-hidden">
        {/* Background Mesh/Gradients */}
        <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 rounded-full bg-premium-white/5 blur-[120px] h-[800px] w-[800px]" />
        
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-12">
            <div className="inline-flex items-center gap-4 rounded-full border border-premium-medium-gray/20 bg-premium-charcoal/40 px-6 py-2.5 backdrop-blur-3xl shadow-2xl">
               <span className="flex h-2.5 w-2.5 rounded-full bg-premium-white animate-pulse" />
               <p className="text-[10px] font-black uppercase tracking-[0.3em] text-premium-white italic">Protocol Initialization_</p>
            </div>
            
            <h1 className="text-7xl font-black tracking-tighter text-premium-white sm:text-8xl lg:text-[8rem] leading-[0.8] uppercase italic drop-shadow-2xl">
               Speech <br />
               <span className="text-premium-medium-gray not-italic border-b-4 border-premium-white/10 pb-2">Refined_</span>
            </h1>
            
            <p className="max-w-xl text-xl lg:text-2xl leading-relaxed text-premium-light-gray font-medium italic opacity-80">
              The world's most advanced neural engine. Engineered for clinical accuracy and professional scale.
            </p>

            {/* Interactive Demo Previewer */}
            <div className="w-full max-w-2xl mt-12 group relative">
               <div className="absolute -inset-0.5 bg-premium-white/10 blur-2xl opacity-30 group-focus-within:opacity-100 transition-opacity" />
               <div className="relative flex flex-col sm:flex-row items-center gap-4 rounded-[2.5rem] border-2 border-premium-medium-gray/20 bg-premium-charcoal/40 p-4 backdrop-blur-3xl shadow-2xl">
                  <input 
                    type="text" 
                    placeholder="Enter transcript for synthesis..." 
                    className="flex-1 w-full bg-transparent px-6 py-4 text-premium-white outline-none placeholder-premium-medium-gray italic font-medium"
                  />
                  <Button size="lg" className="h-16 px-10 group bg-premium-white text-premium-black font-black uppercase tracking-widest text-xs italic shrink-0">
                    Process_
                    <Mic size={18} className="ml-3 group-hover:scale-125 transition-transform" />
                  </Button>
               </div>
               <div className="flex gap-8 px-8 pt-4">
                  {['Neural_2', 'Flux_v4', 'Ultra_HD'].map(voice => (
                    <span key={voice} className="text-[10px] font-black text-premium-medium-gray uppercase tracking-[0.3em] cursor-pointer hover:text-premium-white transition-colors">{voice}</span>
                  ))}
               </div>
            </div>
            
         
            
            <div className="flex items-center gap-8 pt-10 border-t border-premium-medium-gray/10 w-full lg:w-auto justify-center lg:justify-start">
               <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => <div key={i} className="h-12 w-12 rounded-full border-4 border-premium-black bg-premium-dark-gray shadow-2xl" />)}
               </div>
               <p className="text-xs font-black uppercase tracking-[0.4em] text-premium-medium-gray italic opacity-60">Architects of silence</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-tr from-premium-white/20 to-transparent blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative z-10 w-full overflow-hidden rounded-[3rem] border border-premium-medium-gray/20 bg-premium-charcoal/30 p-4 shadow-[0_0_100px_rgba(0,0,0,0.8)] backdrop-blur-3xl">
               <div className="aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden bg-premium-black border border-premium-white/5 relative">
                  <Image 
                    src="/assets/images/neural_hub.png" 
                    alt="echoScript Neural Engine Illustration" 
                    fill
                    className="object-contain p-20 opacity-90 group-hover:scale-105 transition-transform duration-[4s] ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-premium-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-12 left-12 flex items-center gap-6">
                     <div className="h-16 w-16 rounded-full border-2 border-premium-white/20 flex items-center justify-center bg-premium-black/60 backdrop-blur-xl hover:scale-110 transition-transform">
                        <Play size={24} className="text-premium-white fill-premium-white ml-1" />
                     </div>
                     <p className="font-mono text-xs text-premium-white tracking-[0.5em] uppercase italic opacity-70">stream_protocol_v.2.04</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof (Production Grade) */}
      <section className="py-24 border-y border-premium-medium-gray/20 bg-premium-charcoal/30 backdrop-blur-xl relative overflow-hidden">
         <div className="absolute inset-0 bg-premium-white/1 opacity-50" />
         <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10 flex flex-col items-center gap-16">
            <p className="text-[10px] font-black uppercase tracking-[0.8em] text-premium-medium-gray italic">Trust Protocol Activated_</p>
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-20 w-full grayscale opacity-40">
               {['AERO', 'SPECTRA', 'QUANTUM', 'NOVA', 'LITHOS', 'VERTEX'].map(logo => (
                  <span key={logo} className="text-3xl font-black text-premium-white tracking-widest italic group hover:opacity-100 transition-opacity cursor-default">{logo}_</span>
               ))}
            </div>
         </div>
      </section>

      {/* Voice Library Preview (New Section) */}
      <section className="py-52 bg-premium-black relative">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl space-y-40">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            <div className="space-y-12">
               <h4 className="text-sm font-black uppercase tracking-[0.8em] text-premium-medium-gray italic leading-none">Voice Synthesis Lib_</h4>
               <h2 className="text-6xl font-black tracking-tighter text-premium-white sm:text-8xl lg:text-9xl uppercase italic leading-[0.8]">Spectral <br /><span className="text-premium-medium-gray not-italic underline decoration-premium-white/20 underline-offset-20">Matrices_</span></h2>
            </div>
            <p className="max-w-md text-xl text-premium-light-gray italic font-medium opacity-60 pb-4">Explore our library of 200+ specialized neural archetypes, optimized for every industrial sector.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Atlas_01", type: "Clinical", mood: "Precise", icon: Music },
              { name: "Nova_04", type: "Marketing", mood: "Dynamic", icon: Zap },
              { name: "Echo_V6", type: "Narrative", mood: "Deep", icon: Mic },
            ].map((voice, i) => (
              <div key={i} className="group relative rounded-[2.5rem] border border-premium-medium-gray/10 bg-premium-charcoal/20 p-10 hover:border-premium-white/20 transition-all flex items-center justify-between shadow-2xl">
                 <div className="flex items-center gap-8">
                    <div className="h-16 w-16 rounded-full border border-premium-white/10 flex items-center justify-center bg-premium-black group-hover:bg-premium-white group-hover:text-premium-black transition-colors">
                       <voice.icon size={24} />
                    </div>
                    <div>
                       <h4 className="text-xl font-black text-premium-white uppercase italic tracking-tighter">{voice.name}_</h4>
                       <p className="text-[10px] font-black text-premium-medium-gray uppercase tracking-widest mt-1">{voice.type} . {voice.mood}</p>
                    </div>
                 </div>
                 <div className="h-2 w-16 bg-premium-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-premium-white w-1/3 group-hover:w-full transition-all duration-1000" />
                 </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center pt-8">
             <Link href="/features">
               <Button variant="outline" className="h-16 px-12 text-sm font-black uppercase tracking-[0.5em] italic">Full Access_</Button>
             </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-52 bg-premium-black relative">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl space-y-40">
          <div className="text-center max-w-5xl mx-auto space-y-12">
             <h4 className="text-sm font-black uppercase tracking-[0.8em] text-premium-medium-gray italic leading-none">Engineering Core_</h4>
             <h2 className="text-6xl font-black tracking-tighter text-premium-white sm:text-8xl lg:text-9xl uppercase italic leading-[0.8]">Precision <br /><span className="text-premium-medium-gray not-italic underline decoration-premium-white/20 underline-offset-20">Archetypes_</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Showcase Section */}
      <section className="py-52 bg-premium-charcoal/50 border-y border-premium-medium-gray/20 relative overflow-hidden">
         <div className="absolute inset-0 bg-premium-white/1 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
         <div className="container mx-auto px-6 lg:px-12 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-48 items-center relative z-10">
            <div className="space-y-24">
               <div className="space-y-12">
                  <h2 className="text-6xl font-black text-premium-white uppercase tracking-tighter leading-[0.8] italic">Neural Flow. <br />Universal Scale.</h2>
                  <p className="text-premium-light-gray leading-relaxed text-2xl italic max-w-lg font-medium opacity-80">
                     We've optimized the spectral temporal lattice for industrial stability. 
                  </p>
               </div>
               <div className="grid grid-cols-2 gap-16">
                  {stats_items.map(stat => (
                    <div key={stat.label} className="space-y-6 group border-l-4 border-premium-medium-gray/20 pl-10 hover:border-premium-white transition-all cursor-default">
                       <p className="text-6xl font-black text-premium-white italic tracking-tighter group-hover:scale-110 transition-transform origin-left">{stat.val}</p>
                       <p className="text-[12px] font-black uppercase tracking-[0.4em] text-premium-medium-gray italic">{stat.label}_</p>
                    </div>
                  ))}
               </div>
            </div>
            <div className="relative group p-20">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[140%] w-[140%] border border-premium-white/5 rounded-full animate-[spin_60s_linear_infinite] opacity-30" />
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full border-dashed border-4 border-premium-white/10 rounded-full animate-[spin_100s_linear_infinite_reverse] opacity-30" />
               <div className="relative aspect-square w-full rounded-full bg-premium-black border-2 border-premium-medium-gray/20 flex items-center justify-center overflow-hidden shadow-[0_0_150px_rgba(0,0,0,0.9)]">
                  <Image 
                    src="/assets/images/audio_wave.png" 
                    alt="Neural Engine Logic" 
                    fill
                    className="object-contain p-12 opacity-80 scale-125 group-hover:scale-110 transition-transform duration-[5s]"
                  />
                  <div className="z-10 h-40 w-40 rounded-full bg-premium-white flex items-center justify-center shadow-[0_0_80px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform">
                     <Mic size={64} className="text-premium-black" />
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-52 bg-premium-black border-b border-premium-medium-gray/20">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl space-y-40">
          <div className="text-center max-w-4xl mx-auto space-y-12">
            <h4 className="text-sm font-black uppercase tracking-[0.8em] text-premium-medium-gray italic leading-none">Access Protocol_</h4>
            <h2 className="text-6xl font-black tracking-tighter text-premium-white sm:text-8xl lg:text-9xl uppercase italic leading-[0.8]">Core <br /><span className="text-premium-medium-gray not-italic underline decoration-premium-white/20 underline-offset-20">Investment_</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-20">
            {pricing.map((plan) => (
              <PricingCard key={plan.name} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-52 bg-premium-charcoal/20 relative">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl space-y-40">
          <div className="text-center max-w-5xl mx-auto space-y-12">
             <h4 className="text-sm font-black uppercase tracking-[0.8em] text-premium-medium-gray italic leading-none">Global Feedback_</h4>
             <h2 className="text-6xl font-black tracking-tighter text-premium-white sm:text-8xl lg:text-9xl uppercase italic leading-[0.8]">Peer <br /><span className="text-premium-medium-gray not-italic underline decoration-premium-white/20 underline-offset-20">Validation_</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
            {testimonials.map((t, i) => (
              <div key={i} className="group flex flex-col items-start rounded-[3rem] border border-premium-medium-gray/10 bg-premium-black/40 p-16 text-left hover:border-premium-white/20 transition-all shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Mic size={120} className="text-premium-white" />
                </div>
                <div className="mb-10 flex gap-2">
                   {[...Array(t.rating)].map((_, j) => <Star key={j} size={20} className="fill-premium-white text-premium-white" />)}
                </div>
                <p className="mb-12 text-2xl italic leading-relaxed text-premium-light-gray font-medium">"{t.content}"</p>
                <div className="mt-auto border-l-4 border-premium-medium-gray/20 pl-8 group-hover:border-premium-white transition-colors">
                   <h4 className="text-xl font-black text-premium-white uppercase tracking-tighter italic">{t.name}_</h4>
                   <p className="text-xs font-black text-premium-medium-gray uppercase tracking-[0.3em] italic">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-52 bg-premium-black">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
           <div className="relative overflow-hidden rounded-[4rem] border-2 border-premium-medium-gray/20 bg-linear-to-tr from-premium-charcoal/50 to-premium-black p-24 lg:p-40 text-center shadow-[0_0_150px_rgba(0,0,0,1)]">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 rounded-full bg-premium-white/5 blur-[120px] h-[800px] w-[800px]" />
              <div className="relative z-10 flex flex-col items-center space-y-12">
                 <h2 className="text-6xl font-black tracking-tighter text-premium-white sm:text-8xl lg:text-[8rem] leading-[0.8] uppercase italic">
                    SCALE YOUR <br />
                    <span className="text-premium-medium-gray not-italic">VISION_</span>
                 </h2>
                 <p className="max-w-2xl text-xl lg:text-2xl font-medium text-premium-light-gray italic opacity-80 leading-relaxed">
                   Join 10,000+ engineers and designers. Secure your access to the neural frontier.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-8 pt-8">
                   <Link href="/signup">
                     <Button size="lg" className="h-20 px-16 text-xl font-black tracking-widest uppercase italic shadow-[0_0_50px_rgba(255,255,255,0.2)]">Initialize_</Button>
                   </Link>
                   <Link href="/contact">
                     <Button size="lg" variant="outline" className="h-20 px-16 text-xl font-black tracking-widest uppercase italic border-2 border-premium-medium-gray/30">Protocol_</Button>
                   </Link>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

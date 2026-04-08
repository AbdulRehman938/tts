"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function ContactPage() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => setFormState("success"), 2000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-premium-black pt-32">
      <section className="py-32 lg:py-52 bg-premium-charcoal/10 border-b border-premium-medium-gray/10 overflow-hidden relative flex items-center justify-center text-center">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-premium-white/5 blur-[120px]" />
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl space-y-12 relative z-10">
          <h4 className="text-sm font-black uppercase tracking-[0.8em] text-premium-medium-gray italic leading-none">Global Link_</h4>
          <h1 className="text-6xl font-black italic tracking-tighter text-premium-white sm:text-8xl lg:text-9xl uppercase leading-[0.8]">
            DIRECT <br /><span className="text-premium-medium-gray not-italic underline decoration-premium-white/10 underline-offset-20">INTERFACE_</span>
          </h1>
          <p className="text-xl lg:text-2xl text-premium-light-gray font-medium italic leading-relaxed max-w-3xl mx-auto">Instant connectivity to the core engineering neural research department.</p>
        </div>
      </section>

      <section className="py-40">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <div className="space-y-24">
              <div className="space-y-10">
                 <h2 className="text-4xl font-black uppercase tracking-tighter text-premium-white italic leading-[0.9]">Direct <br />Protocol_</h2>
                 <p className="text-premium-light-gray leading-relaxed text-xl italic font-medium max-w-md">
                    Global support for technical integration, partnership logistics, and enterprise scale-out.
                 </p>
              </div>

              <div className="space-y-12">
                 {[
                   { icon: Mail, label: "Inquiries", val: "support@echoscript.ai" },
                   { icon: MapPin, label: "Registry", val: "Berlin, EU" },
                   { icon: MessageCircle, label: "Channel", val: "Discord/echoScript" }
                 ].map(item => (
                   <div key={item.label} className="flex items-center gap-8 group">
                      <div className="h-16 w-16 rounded-2xl bg-premium-white/5 border border-premium-medium-gray/20 flex items-center justify-center group-hover:bg-premium-white group-hover:text-premium-black transition-all shadow-xl">
                         <item.icon size={28} />
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-premium-medium-gray italic">{item.label}_</p>
                         <p className="text-2xl font-black text-premium-white italic tracking-tighter">{item.val}</p>
                      </div>
                   </div>
                 ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-tr from-premium-white/10 to-transparent blur-3xl opacity-50" />
              <div className="relative p-16 rounded-[3rem] border border-premium-medium-gray/20 bg-premium-charcoal/30 backdrop-blur-3xl shadow-2xl space-y-10">
                 <h3 className="text-3xl font-black italic tracking-tighter text-premium-white uppercase">Upload Message_</h3>
                 
                 {formState === "success" ? (
                   <div className="py-20 text-center space-y-10">
                      <div className="h-24 w-24 rounded-full bg-premium-white mx-auto flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.4)]">
                         <Send size={40} className="text-premium-black" />
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-2xl font-black text-premium-white uppercase tracking-tighter italic">Data Transmitted_</h4>
                        <p className="text-premium-light-gray italic font-medium">Registry confirmed. Expect response within 4 neural cycles.</p>
                      </div>
                      <Button variant="outline" className="h-14 px-10" onClick={() => setFormState("idle")}>New Packet_</Button>
                   </div>
                 ) : (
                   <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <Input label="Full Name" placeholder="Alex R." required />
                         <Input label="Subject" placeholder="Enterprise" required />
                      </div>
                      <Input label="Protocol Email" type="email" placeholder="name@company.ai" required />
                      <div className="space-y-3">
                         <label className="text-[10px] font-black uppercase tracking-widest text-premium-medium-gray italic ml-1">Payload_</label>
                         <textarea 
                            className="w-full h-48 rounded-4xl border-2 border-premium-medium-gray/20 bg-premium-black/40 px-6 py-5 text-premium-white placeholder-premium-medium-gray focus:border-premium-white/40 focus:ring-4 focus:ring-premium-white/5 outline-none transition-all resize-none shadow-inner italic font-medium" 
                            placeholder="State your requirements..."
                            required
                         />
                      </div>
                      <Button type="submit" fullWidth size="lg" className="h-16 font-black uppercase tracking-[0.2em] text-xs" disabled={formState === "submitting"}>
                        {formState === "submitting" ? "Transmitting..." : "Initialize Transfer_"}
                      </Button>
                   </form>
                 )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-24 container mx-auto px-6">
         <div className="h-96 w-full rounded-[3rem] overflow-hidden border border-premium-medium-gray/10 grayscale opacity-40 bg-premium-charcoal/50 flex flex-col items-center justify-center text-center">
            <MapPin size={48} className="text-premium-white mb-4 opacity-50" />
            <p className="font-mono text-xs text-premium-medium-gray tracking-widest uppercase">Location Map Disabled_ (Static Preview Mode)</p>
         </div>
      </section>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, User, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function SignupPage() {
  const [agree, setAgree] = useState(false);

  return (
    <div className="flex min-h-screen bg-premium-black pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl flex flex-col items-center justify-center">
        <Link href="/" className="mb-8 flex items-center gap-2 group self-start hover:text-premium-white transition-colors text-premium-light-gray">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest leading-none">Back</span>
        </Link>
        
        <div className="w-full max-w-xl space-y-10 rounded-3xl border border-premium-medium-gray/20 bg-premium-charcoal/30 p-10 backdrop-blur-xl shadow-2xl">
          <div className="text-center">
            <h1 className="text-3xl font-black italic tracking-tighter text-premium-white uppercase leading-none">Join echoScript_</h1>
            <p className="mt-4 text-sm font-medium text-premium-light-gray">Start your journey with elite speech synthesis.</p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <Input label="First Name" placeholder="e.g. Alex" required />
             <Input label="Last Name" placeholder="e.g. Rivera" required />
             <div className="md:col-span-2">
                <Input label="Email Address" type="email" placeholder="name@company.com" required />
             </div>
             <div className="md:col-span-2">
                <Input label="Password" type="password" placeholder="Min 8 characters" required />
             </div>

             <div className="md:col-span-2 flex items-start gap-3 mt-2">
                <button 
                   type="button"
                   onClick={() => setAgree(!agree)}
                   className={`h-5 w-5 rounded border-2 transition-all flex items-center justify-center shrink-0 ${agree ? "bg-premium-white border-premium-white" : "border-premium-medium-gray/30 bg-transparent hover:border-premium-white/50"}`}
                >
                   {agree && <Check size={12} className="text-premium-black font-black" />}
                </button>
                <p className="text-xs font-medium text-premium-light-gray leading-relaxed">
                   I agree to the <Link href="#" className="text-premium-white underline underline-offset-4 tracking-tighter uppercase font-bold text-[10px]">Terms of Service_</Link> and <Link href="#" className="text-premium-white underline underline-offset-4 tracking-tighter uppercase font-bold text-[10px]">Privacy Policy_</Link>.
                </p>
             </div>

             <div className="md:col-span-2 pt-4">
                <Button fullWidth size="lg">Create Account</Button>
             </div>
          </form>

          <div className="relative py-2 items-center flex">
             <div className="grow border-t border-premium-medium-gray/20"></div>
             <span className="shrink mx-4 text-xs font-bold text-premium-medium-gray uppercase tracking-widest">or register with_</span>
             <div className="grow border-t border-premium-medium-gray/20"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <Button variant="outline" fullWidth className="gap-2 shadow-none border-dashed border-premium-medium-gray/30 hover:border-premium-white">
                <GoogleIcon />
                <span className="text-sm font-bold tracking-tight">Google</span>
             </Button>
             <Button variant="outline" fullWidth className="gap-2 shadow-none border-dashed border-premium-medium-gray/30 hover:border-premium-white hover:text-premium-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span className="text-sm font-bold tracking-tight">GitHub</span>
             </Button>
          </div>

          <div className="text-center pt-2">
             <p className="text-sm font-medium text-premium-medium-gray italic">
                Already have an account? <Link href="/login" className="text-premium-white hover:underline underline-offset-4 not-italic font-bold tracking-widest uppercase text-xs">Sign In_</Link>
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const GoogleIcon = () => (
   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18a11.99 11.99 0 000 9.88l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
   </svg>
)

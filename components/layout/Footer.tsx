import Link from "next/link";

export const Footer = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-premium-black border-t border-premium-medium-gray/20 pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-24 mb-24">
        <div className="flex flex-col gap-6 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 group max-w-fit">
            <div className="h-8 w-8 rounded-lg bg-premium-white flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-premium-black font-black text-sm">eS</span>
            </div>
            <p className="text-lg font-bold tracking-tighter text-premium-white uppercase italic">
              echoScript
            </p>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-premium-light-gray">
            The next generation of AI text-to-speech. Clarity, precision, and emotional depth in every word.
          </p>
          <div className="flex gap-4">
             {[
               { icon: <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /> },
               { icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /> }, // LinkedIn simplified
               { icon: <path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1 .6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.8 0-.2-.4-1.2.1-2.6 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.1 2.4.1 2.6.6.7 1 1.7 1 2.8 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5C19.1 20.2 22 16.4 22 12A10 10 0 0 0 12 2z" /> } // GitHub
             ].map((item, i) => (
                <button key={i} className="p-2.5 rounded-full border border-premium-medium-gray/30 text-premium-light-gray transition-all hover:border-premium-white hover:text-premium-white">
                   <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {item.icon}
                   </svg>
                </button>
             ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-premium-white">Navigation</h4>
          <nav className="flex flex-col gap-4 text-sm font-medium">
             {links.map((link) => (
                <Link key={link.name} href={link.href} className="text-premium-light-gray hover:text-premium-white transition-colors">
                   {link.name}
                </Link>
             ))}
          </nav>
        </div>

        <div className="flex flex-col gap-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-premium-white">Legal</h4>
          <nav className="flex flex-col gap-4 text-sm font-medium">
             <Link href="#" className="text-premium-light-gray hover:text-premium-white transition-colors">Privacy Policy</Link>
             <Link href="#" className="text-premium-light-gray hover:text-premium-white transition-colors">Terms of Service</Link>
             <Link href="#" className="text-premium-light-gray hover:text-premium-white transition-colors">Cookie Policy</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-8">
           <h4 className="text-xs font-black uppercase tracking-[0.4em] text-premium-white italic">Protocol Updates_</h4>
           <p className="text-xs leading-relaxed text-premium-light-gray italic font-medium">Subscribe to the latest neural engine synchronization logs.</p>
           <div className="flex flex-col gap-4 pt-2">
              <input 
                 type="email" 
                 placeholder="name@company.protocol" 
                 className="w-full h-14 rounded-2xl border border-premium-medium-gray/20 bg-premium-charcoal/40 px-6 text-sm italic font-medium text-premium-white focus:border-premium-white/50 outline-none transition-all placeholder-premium-medium-gray"
              />
              <button className="h-14 w-full rounded-2xl bg-premium-white text-xs font-black uppercase tracking-[0.4em] text-premium-black hover:bg-premium-silver transition-all italic shadow-2xl">
                 Initialize_
              </button>
           </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-7xl border-t border-premium-medium-gray/10 pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-premium-medium-gray italic">
          &copy; {new Date().getFullYear()} echoScript AI. Neural Research Div.
        </p>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-premium-medium-gray italic opacity-40">
          Engineered by Antigravity_
        </p>
      </div>
    </footer>
  );
};

import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const links = {
  'Quick Access': [
    { label: 'Nexcheck', href: 'https://nims.rcmp.edu.my' },
    { label: 'VenuQuip', href: 'https://vequip.rcmp.edu.my' },
    { label: 'Helpdesk Portal', href: '#' },
  ],
  'University': [
    { label: 'UniKL RCMP Official Site', href: 'https://rcmp.unikl.edu.my' },
    { label: 'RCMP Campus Info', href: 'https://rcmp.unikl.edu.my/campus-info' },
    { label: 'Academic Calendar', href: 'https://rcmp.unikl.edu.my/academic-calendar' },
    { label: 'Campus Map', href: 'https://share.google.com/vhtrgVRToPpvQfXLM' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: '#0a1f42' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/rcmp-white.png"
                alt="University Kuala Lumpur Royal College of Medicine Perak"
                className="h-10 sm:h-11 w-auto object-contain shrink-0"
              />
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-blue-300">UniKL RCMP</p>
                <p className="text-sm font-bold text-white">IT Department</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering the UniKL RCMP community with reliable, secure, and innovative IT solutions.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:it.rcmp@unikl.edu.my" className="flex items-center gap-2.5 text-slate-400 hover:text-blue-300 transition-colors text-sm">
                <Mail size={14} />
                it.rcmp@unikl.edu.my
              </a>
              <a href="tel:+60321750000" className="flex items-center gap-2.5 text-slate-400 hover:text-blue-300 transition-colors text-sm">
                <Phone size={14} />
                +603 2175 0000 ext. 4500
              </a>
              <span className="flex items-start gap-2.5 text-slate-400 text-sm">
                <MapPin size={14} className="shrink-0 mt-0.5" />
                No 3, Jalan Greentown, 30450 Ipoh, Perak
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs font-bold tracking-widest uppercase text-blue-300 mb-5">{title}</h4>
              <ul className="space-y-3">
                {items.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors group"
                    >
                      {label}
                      <ExternalLink size={11} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} UniKL RCMP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

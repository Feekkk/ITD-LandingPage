import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Headphones, Menu, X } from 'lucide-react';

interface HeaderProps {
  onSupportClick: () => void;
}

export default function Header({ onSupportClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [systemsOpen, setSystemsOpen] = useState(false);
  const systemsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    if (!systemsOpen) return;
    const onDocClick = (e: MouseEvent) => {
      const el = systemsRef.current;
      if (!el) return;
      if (e.target instanceof Node && el.contains(e.target)) return;
      setSystemsOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, [systemsOpen]);

  const navLinks = [
    { label: 'About Us', href: '/about' },
    { label: 'FAQ', href: '/faq' },
  ];

  const systemLinks = [
    { label: 'VenuQuip', href: 'https://vequip.rcmp.edu.my' },
    { label: 'Nexcheck', href: 'https://nims.rcmp.edu.my' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://itd.rcmp.edu.my/wp-content/uploads/2025/08/LOGO-UniKL-RCMP-13-2048x349.png"
              alt="University Kuala Lumpur Royal College of Medicine Perak"
              className="h-10 sm:h-11 w-auto object-contain shrink-0"
            />
            <div className="leading-tight">
              <p
                className={`text-xs font-semibold tracking-widest uppercase ${
                  scrolled ? 'text-[#1a56a0]' : 'text-white/90'
                }`}
              >
               UniKL RCMP
              </p>
              <p className={`text-sm font-bold ${scrolled ? 'text-[#0f2d5e]' : 'text-white'}`}>
               IT Dept
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  scrolled ? 'text-slate-600 hover:text-blue-700' : 'text-white/90 hover:text-white'
                }`}
              >
                {label}
              </a>
            ))}

            <div className="relative" ref={systemsRef}>
              <button
                type="button"
                onClick={() => setSystemsOpen((v) => !v)}
                className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                  scrolled ? 'text-slate-600 hover:text-blue-700' : 'text-white/90 hover:text-white'
                }`}
                aria-haspopup="menu"
                aria-expanded={systemsOpen}
              >
                Systems
                <ChevronDown size={16} className={`transition-transform ${systemsOpen ? 'rotate-180' : ''}`} />
              </button>

              {systemsOpen && (
                <div
                  className="absolute right-0 mt-3 w-56 rounded-2xl border border-slate-200/80 bg-white shadow-lg overflow-hidden"
                  role="menu"
                >
                  {systemLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      role="menuitem"
                      className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                      onClick={() => setSystemsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Support button */}
          <div className="flex items-center gap-3">
            <button
              onClick={onSupportClick}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              style={{ background: '#0f2d5e' }}
            >
              <Headphones size={15} />
              Support
            </button>
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className={`md:hidden py-4 border-t space-y-1 ${
              scrolled ? 'border-slate-200/60' : 'border-white/20'
            }`}
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white/90 hover:bg-white/10'
                }`}
              >
                {label}
              </a>
            ))}

            <div className="pt-2">
              <p className={`px-3 pb-1 text-[11px] font-bold tracking-widest uppercase ${
                scrolled ? 'text-slate-400' : 'text-white/50'
              }`}>
                Systems
              </p>
              {systemLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                    scrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white/90 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              onClick={() => { setMenuOpen(false); onSupportClick(); }}
              className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white"
              style={{ background: '#0f2d5e' }}
            >
              <Headphones size={15} />
              Support
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

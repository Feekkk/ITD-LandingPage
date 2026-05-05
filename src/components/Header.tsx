import { useState, useEffect } from 'react';
import { Monitor, Headphones, Menu, X } from 'lucide-react';

interface HeaderProps {
  onSupportClick: () => void;
}

export default function Header({ onSupportClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { label: 'Announcements', href: '#announcements' },
    { label: 'Systems', href: '#systems' },
    { label: 'FAQ', href: '#faq' },
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
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
              style={{ background: '#0f2d5e' }}
            >
              <Monitor size={18} className="text-white" />
            </div>
            <div className="leading-tight">
              <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#1a56a0' }}>
                UniKL RCMP
              </p>
              <p className="text-sm font-bold" style={{ color: '#0f2d5e' }}>
                IT Department
              </p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
              >
                {label}
              </a>
            ))}
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
              className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/60 space-y-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              >
                {label}
              </a>
            ))}
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

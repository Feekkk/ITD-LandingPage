import { ArrowDown, Cpu, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-16"
      style={{
        background:
          'radial-gradient(900px 520px at 50% 35%, rgba(126,184,247,0.18), transparent 62%), linear-gradient(180deg, #040a14 0%, #07162f 45%, #050d1c 100%)',
      }}
    >
      {/* Decorative layers */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(circle at 50% 35%, black 0%, transparent 62%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 35%, black 0%, transparent 62%)',
        }}
      />
      <div
        className="absolute -top-56 left-1/2 -translate-x-1/2 w-[48rem] h-[48rem] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.42) 0%, transparent 62%)' }}
      />
      <div
        className="absolute -bottom-56 left-1/2 -translate-x-1/2 w-[46rem] h-[46rem] rounded-full opacity-25 blur-3xl"    
        style={{ background: 'radial-gradient(circle, rgba(126,184,247,0.55) 0%, transparent 62%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-extrabold tracking-tight leading-[0.95]">
            <span className="block text-[42px] sm:text-[64px] lg:text-[84px] text-white/30">
              One Stop Center
            </span>
            <span className="block text-[42px] sm:text-[64px] lg:text-[84px]">
              {/* <span className="text-white/30">for</span>{' '} */}
              <span className="inline-block text-white italic animate-hero-it-emphasis">
                Information Technology
              </span>{' '}
              <span className="text-white/30">Department</span>{' '}
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-base text-white/35 max-w-2xl mx-auto leading-relaxed">
            We provide seamless access to internal systems and IT support helping students and staff stay connected across University Kuala Lumpur Royal College of Medicine Perak.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <a
              href="#systems"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/10 transition-all hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, rgba(26,86,160,0.22) 0%, rgba(15,45,94,0.12) 70%)',
                boxShadow:
                  '0 16px 44px rgba(0,0,0,0.55), 0 0 0 1px rgba(126,184,247,0.18) inset, 0 0 38px rgba(126,184,247,0.22)',
              }}
            >
              Explore Systems
              <ArrowDown size={16} />
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-14 max-w-4xl mx-auto">
          {[
            { icon: Cpu, label: 'Internal Systems', value: '4+' },
            { icon: Shield, label: 'Uptime SLA', value: '99.9%' },
            { icon: Zap, label: 'Avg. Response', value: '< 8 hours' },
          ].map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 flex items-center gap-3"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border border-white/10 bg-white/10"
                style={{ boxShadow: '0 0 26px rgba(126,184,247,0.14)' }}
              >
                <Icon size={18} className="text-white/80" />
              </div>
              <div className="min-w-0">
                <p className="text-lg font-extrabold text-white leading-none">{value}</p>
                <p className="text-xs text-white/60 mt-1 leading-tight">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <svg
        className="relative block w-full"
        style={{ marginBottom: '-2px' }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          fill="#f8fafc"
          d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
        />
      </svg>
    </section>
  );
}

import { ArrowDown, Cpu, Shield, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-16"
      style={{ background: 'linear-gradient(135deg, #0f2d5e 0%, #1a56a0 60%, #2a7cc7 100%)' }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 -left-16 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #7eb8f7 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-xs font-semibold tracking-wide uppercase">
              One-Stop IT Center — RCMP Campus
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Your Gateway to
            <span className="block" style={{ color: '#7eb8f7' }}>
              Campus IT Services
            </span>
          </h1>

          <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-xl">
            The UniKL RCMP IT Department provides seamless access to all internal systems, technical support, and digital resources — empowering students and staff every day.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#systems"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              style={{ color: '#0f2d5e' }}
            >
              Explore Systems
              <ArrowDown size={16} />
            </a>
            <a
              href="#announcements"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/25 rounded-xl font-semibold text-sm text-white hover:bg-white/20 transition-all"
            >
              View Announcements
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-4 mt-16 max-w-lg">
          {[
            { icon: Cpu, label: 'Internal Systems', value: '12+' },
            { icon: Shield, label: 'Uptime SLA', value: '99.9%' },
            { icon: Zap, label: 'Avg. Response', value: '< 4 hrs' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center">
              <Icon size={20} className="mx-auto mb-2 text-blue-300" />
              <p className="text-xl font-extrabold text-white">{value}</p>
              <p className="text-xs text-white/60 mt-0.5 leading-tight">{label}</p>
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

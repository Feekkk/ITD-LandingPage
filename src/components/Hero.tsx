import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  ArrowRight,
  ExternalLink,
  Ticket,
  LayoutGrid,
  GraduationCap,
  Wrench,
  ChevronDown,
} from 'lucide-react';

function RowButton({
  label,
  href,
  external,
}: {
  label: string;
  href: string;
  external?: boolean;
}) {
  const cls =
    'group inline-flex min-h-[44px] w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white/90 backdrop-blur-sm transition-colors hover:bg-white/10';

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      <span className="truncate">{label}</span>
      <ExternalLink size={16} className="shrink-0 text-white/55 group-hover:text-white/80" aria-hidden />
    </a>
  ) : href.startsWith('http') ? (
    <a href={href} className={cls}>
      <span className="truncate">{label}</span>
      <ArrowRight size={16} className="shrink-0 text-white/55 group-hover:text-white/80" aria-hidden />
    </a>
  ) : (
    <Link to={href} className={cls}>
      <span className="truncate">{label}</span>
      <ArrowRight size={16} className="shrink-0 text-white/55 group-hover:text-white/80" aria-hidden />
    </Link>
  );
}

function HubCard({
  title,
  subtitle,
  icon: Icon,
  children,
}: {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 backdrop-blur-sm">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 shrink-0 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
          <Icon size={18} className="text-white/85" aria-hidden />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-extrabold tracking-wide text-white">{title}</p>
          <p className="mt-1 text-xs text-white/50 leading-relaxed">{subtitle}</p>
        </div>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-16 min-h-[calc(100vh-4rem)] flex flex-col"
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

      <div className="relative flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 flex flex-col items-center justify-center gap-10 lg:gap-12">
        <div className="max-w-xl mx-auto text-center">
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
            We provide seamless access to internal systems and IT support helping students and staff stay connected.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <a
              href="https://helpdesk.rcmp.unikl.edu.my/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/10 min-h-[44px] animate-hero-ticket-cta motion-reduce:animate-none hover:brightness-110 active:brightness-95 transition-[filter]"
              style={{
                background: 'linear-gradient(135deg, rgba(26,86,160,0.22) 0%, rgba(15,45,94,0.12) 70%)',
              }}
            >
              Submit a Ticket
              <Ticket size={16} />
            </a>
          </div>
        </div>

        <div className="w-full max-w-xl sm:max-w-3xl lg:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <HubCard
            title="Internal systems"
            subtitle="Browse and open IT internal systems."
            icon={LayoutGrid}
          >
            <RowButton label="Click for more information" href="/systems" />
          </HubCard>

          <HubCard
            title="Student"
            subtitle="VLE, Portal, Microsoft Office."
            icon={GraduationCap}
          >
            <details className="group">
              <summary className="list-none cursor-pointer select-none">
                <div className="inline-flex min-h-[44px] w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white/90 backdrop-blur-sm transition-colors group-open:bg-white/10">
                  <span className="truncate">Choose a service</span>
                  <ChevronDown size={18} className="shrink-0 text-white/55 transition-transform group-open:rotate-180" aria-hidden />
                </div>
              </summary>
              <div className="mt-2 grid grid-cols-1 gap-2">
                <RowButton label="VLE" href="https://vle.unikl.edu.my/" />
                <RowButton label="Student portal" href="https://cas.unikl.edu.my/" />
                <RowButton label="Microsoft Office" href="https://office.com/" />
              </div>
            </details>
          </HubCard>

          <HubCard
            title="Supporting services"
            subtitle="Projection and screen sharing downloads."
            icon={Wrench}
          >
            <details className="group">
              <summary className="list-none cursor-pointer select-none">
                <div className="inline-flex min-h-[44px] w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-semibold text-white/90 backdrop-blur-sm transition-colors group-open:bg-white/10">
                  <span className="truncate">Downloads</span>
                  <ChevronDown size={18} className="shrink-0 text-white/55 transition-transform group-open:rotate-180" aria-hidden />
                </div>
              </summary>
              <div className="mt-2 grid grid-cols-1 gap-2">
                <RowButton label="MAXHUB Screen Share" href="https://www.maxhub.com/en/screen_share" external />
                <RowButton label="MAXHUB Connect" href="https://connect.maxhub.com/downloads" external />
                <RowButton label="Epson iProjection" href="https://epson.com/iprojection" external />
              </div>
            </details>
          </HubCard>
        </div>
      </div>

      {/* Bottom wave */}
      <svg
        className="absolute left-0 right-0 bottom-0 block w-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          fill="#050d1c"
          d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
        />
      </svg>
    </section>
  );
}

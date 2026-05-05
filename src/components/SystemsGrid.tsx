import { Link } from 'react-router-dom';
import { LayoutDashboard, ExternalLink, BookMarked } from 'lucide-react';
import { systems } from '../data/systems';

function SystemMarqueeCard({ system }: { system: (typeof systems)[number] }) {
  const Icon = system.icon;
  const isLaunch = system.action.type === 'launch';
  const href = isLaunch && 'href' in system.action ? system.action.href : undefined;

  return (
    <div
      className="group shrink-0 w-[min(86vw,360px)] sm:w-[380px]"
    >
      <div className="rounded-2xl overflow-hidden border border-slate-200/80 bg-white shadow-sm hover:shadow-lg transition-shadow">
        <Link to={`/systems/${system.slug}`} className="block">
          <div className="relative h-56 sm:h-60">
          {'image' in system && system.image ? (
            <>
              <img
                src={system.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                aria-hidden
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.92) 100%), radial-gradient(700px 300px at 20% 20%, ${system.color}26, transparent 55%)`,
                }}
                aria-hidden
              />
            </>
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(700px 300px at 20% 20%, ${system.color}26, transparent 55%), linear-gradient(135deg, ${system.accent} 0%, #ffffff 55%, ${system.accent} 100%)`,
              }}
              aria-hidden
            />
          )}
          <div
            className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-2xl opacity-70"
            style={{ background: `${system.color}22` }}
            aria-hidden
          />
          <div
            className="absolute left-5 top-5 w-12 h-12 rounded-2xl flex items-center justify-center border border-white/40 shadow-sm backdrop-blur-sm"
            style={{ background: 'rgba(255,255,255,0.65)' }}
          >
            <Icon size={22} style={{ color: system.color }} />
          </div>
          <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                Internal System
              </p>
              <p className="mt-1 text-lg font-bold text-slate-900 leading-snug line-clamp-2">
                {system.title}
              </p>
            </div>
            <span className="text-xs font-bold tracking-widest text-slate-400 shrink-0">
              {(systems.findIndex((s) => s.title === system.title) + 1).toString().padStart(2, '0')}
            </span>
          </div>
          </div>
        </Link>

        <div className="px-5 py-4">
          <p className="text-sm text-slate-600 leading-relaxed">{system.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs text-slate-400">UniKL RCMP • IT Department</span>
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold hover:opacity-80 transition-opacity"
                style={{ color: system.color }}
              >
                <ExternalLink size={13} />
                {system.action.label}
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold opacity-70" style={{ color: system.color }}>
                {isLaunch ? <ExternalLink size={13} /> : <BookMarked size={13} />}
                {system.action.label}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SystemsGrid() {
  const loop = [...systems, ...systems];

  return (
    <div id="systems">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
              style={{ background: '#0f2d5e' }}
            >
              <LayoutDashboard size={18} className="text-white" />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400">
              Internal Systems
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            SYSTEM SHOWCASE FOR
            <span className="block" style={{ color: '#0f2d5e' }}>
              IT DEPARTMENT
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl">
            A curated set of platforms the IT Department manages built to keep students and staff
            connected, productive, and supported.
          </p>

          <Link
            to="/systems"
            className="mt-7 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-sm hover:shadow-md transition-shadow"
            style={{ background: '#0f2d5e' }}
          >
            Browse systems
            <ExternalLink size={16} />
          </Link>
       
        </div>

        <div className="space-y-4">
          {[
            {
              title: 'Navigate to your desired system',
              desc: 'Navigate to your desired system without hunting for links.',
            },
            {
              title: 'Created by the IT Department',
              desc: 'These systems are created by the IT Department to help the users of the University Kuala Lumpur Royal College of Medicine Perak.',
            },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="flex items-start justify-between gap-6 border-b border-slate-200/70 pb-4"
            >
              <div className="max-w-xl">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
              <span className="text-xs font-bold tracking-widest text-slate-400 shrink-0">
                {(idx + 1).toString().padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div id="systems-list" className="mt-14">
        <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-5">
          Common systems our users use
        </p>
        <div className="motion-reduce:hidden relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 z-10 bg-gradient-to-r from-slate-50 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 z-10 bg-gradient-to-l from-slate-50 to-transparent"
            aria-hidden
          />

          <div className="flex w-max gap-6 animate-marquee-rtl hover:[animation-play-state:paused]">
            {loop.map((system, i) => (
              <SystemMarqueeCard key={`${system.title}-${i}`} system={system} />
            ))}
          </div>
        </div>

        <div className="hidden motion-reduce:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {systems.map((system) => (
            <SystemMarqueeCard key={system.title} system={system} />
          ))}
        </div>
      </div>
    </div>
  );
}

import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getSystemBySlug, systems } from '../data/systems';

export default function SystemShowcase() {
  const { slug } = useParams();
  const system = slug ? getSystemBySlug(slug) : undefined;

  if (slug && !system) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
          style={{ color: '#0f2d5e' }}
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>
        <h1 className="mt-8 text-2xl font-extrabold text-slate-900">System not found</h1>
        <p className="mt-2 text-slate-500 text-sm">The system you are looking for doesn’t exist.</p>
      </div>
    );
  }

  const renderSystem = (s: typeof systems[number]) => {
    const launchHref = s.action.type === 'launch' ? s.action.href : undefined;

    return (
      <section key={s.slug} className="py-12 border-b border-slate-200/70 last:border-b-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400">
              Internal System
            </p>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {s.title}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl">
              {s.longDescription}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to={`/systems/${s.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
                style={{ color: '#0f2d5e' }}
              >
                View details
              </Link>
              {launchHref ? (
                <a
                  href={launchHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm hover:shadow-md transition-shadow"
                  style={{ background: s.color }}
                >
                  Launch
                  <ExternalLink size={16} />
                </a>
              ) : (
                <span
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 bg-white text-slate-400"
                  title="Link not available yet"
                >
                  Launch unavailable
                </span>
              )}
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {s.highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm"
                >
                  <p className="text-[11px] font-bold tracking-widest uppercase text-slate-400">
                    {h.label}
                  </p>
                  <p className="mt-2 text-sm font-extrabold text-slate-900">{h.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">What you can do</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full" style={{ background: s.color }} />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200/80 bg-white shadow-sm overflow-hidden">
            <div className="relative h-72 sm:h-80">
              {s.image ? (
                <img
                  src={s.image}
                  alt={`${s.title} preview`}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              ) : (
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(900px 380px at 20% 15%, ${s.color}26, transparent 60%), linear-gradient(135deg, ${s.accent} 0%, #ffffff 55%, ${s.accent} 100%)`,
                  }}
                />
              )}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.94) 100%)',
                }}
                aria-hidden
              />
              <div className="absolute left-6 bottom-6 right-6 flex items-end justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-widest uppercase text-slate-500">
                    Managed by IT Department
                  </p>
                  <p className="mt-1 text-lg font-extrabold text-slate-900 line-clamp-2">
                    {s.description}
                  </p>
                </div>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border border-white/40 shadow-sm backdrop-blur-sm shrink-0"
                  style={{ background: 'rgba(255,255,255,0.7)' }}
                >
                  <s.icon size={22} style={{ color: s.color }} />
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-500">
                For access or troubleshooting, use the Support button in the header.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <section
        className="relative overflow-hidden"
        style={{
          background:
            'radial-gradient(900px 520px at 50% 25%, rgba(126,184,247,0.14), transparent 62%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold border border-slate-200 bg-white hover:bg-slate-50 transition-colors"
              style={{ color: '#0f2d5e' }}
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>

            <div className="text-xs text-slate-400 hidden sm:block">
              {slug ? 'System details' : `${systems.length} systems`}
            </div>
          </div>

          <div className="mt-10">
            {slug ? renderSystem(system!) : systems.map(renderSystem)}
          </div>
        </div>
      </section>
    </div>
  );
}

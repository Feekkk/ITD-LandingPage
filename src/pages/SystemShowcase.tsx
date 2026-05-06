import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Play } from 'lucide-react';
import { getSystemBySlug, systems, type InternalSystem } from '../data/systems';

const BELOW_FIXED_HEADER = 'pt-20';

function SystemPreview({ system }: { system: InternalSystem }) {
  const src = system.previewVideo;
  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
      {src ? (
        <div className="absolute inset-0">
          <video
            className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center"
            src={src}
            muted
            playsInline
            loop
            autoPlay
            preload="metadata"
            aria-label={`${system.title} preview`}
          />
        </div>
      ) : (
        <>
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            style={{
              background: `linear-gradient(145deg, ${system.accent} 0%, #e2e8f0 55%, #cbd5e1 100%)`,
            }}
          >
            <div className="rounded-full border border-slate-200/90 bg-white/90 p-3 shadow-sm">
              <Play size={22} className="text-slate-500" strokeWidth={2} aria-hidden />
            </div>
            <span className="text-xs font-medium text-slate-500">Preview video</span>
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/5"
            aria-hidden
          />
        </>
      )}
    </div>
  );
}

function externalHref(s: InternalSystem): string | undefined {
  const { action } = s;
  if ((action.type === 'launch' || action.type === 'docs') && action.href) {
    return action.href;
  }
  return undefined;
}

function openLabel(s: InternalSystem): string {
  return s.action.type === 'docs' ? 'Open docs' : 'Open system';
}

export default function SystemShowcase() {
  const { slug } = useParams();
  const system = slug ? getSystemBySlug(slug) : undefined;

  if (slug && !system) {
    return (
      <div className={`max-w-lg mx-auto px-4 pb-12 ${BELOW_FIXED_HEADER}`}>
        <Link
          to="/systems"
          className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80"
          style={{ color: '#0f2d5e' }}
        >
          <ArrowLeft size={16} aria-hidden />
          Systems
        </Link>
        <h1 className="mt-8 text-xl font-bold text-slate-900">System not found</h1>
        <p className="mt-2 text-sm text-slate-500">This link may be wrong or the system was removed.</p>
      </div>
    );
  }

  if (slug && system) {
    const href = externalHref(system);
    const DetailIcon = system.icon;
    return (
      <div className="min-h-[calc(100vh-5rem)] bg-slate-50">
        <div className={`max-w-lg mx-auto px-4 pb-12 ${BELOW_FIXED_HEADER}`}>
          <Link
            to="/systems"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80"
            style={{ color: '#0f2d5e' }}
          >
            <ArrowLeft size={16} aria-hidden />
            All systems
          </Link>

          <div className="mt-8 flex items-start gap-3">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white"
              aria-hidden
            >
              <DetailIcon size={22} style={{ color: system.color }} />
            </div>
            <div className="min-w-0 pt-0.5">
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">{system.title}</h1>
              <p className="mt-1 text-sm text-slate-500 leading-snug">{system.description}</p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-black shadow-inner">
            <SystemPreview system={system} />
          </div>

          <div className="mt-8 space-y-4">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-[15px] font-semibold text-white shadow-sm active:opacity-95 min-h-[48px]"
                style={{ background: system.color }}
              >
                {openLabel(system)}
                <ExternalLink size={17} strokeWidth={2} aria-hidden />
                <span className="sr-only"> (opens in new tab)</span>
              </a>
            ) : (
              <p className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-center text-sm text-slate-400">
                Link not available yet
              </p>
            )}

            <p className="text-sm text-slate-600 leading-relaxed">{system.longDescription}</p>

            {system.features.length > 0 && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Includes</p>
                <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
                  {system.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300" aria-hidden />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-slate-50">
      <div className={`max-w-lg mx-auto px-4 pb-10 ${BELOW_FIXED_HEADER}`}>
        <Link
          to="/"
          className="inline-flex min-h-[44px] min-w-[44px] -ml-2 pl-2 items-center gap-2 text-sm font-medium hover:opacity-80"
          style={{ color: '#0f2d5e' }}
        >
          <ArrowLeft size={16} aria-hidden />
          Home
        </Link>

        <header className="mt-5">
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Internal Systems</h1>
          <p className="mt-1 text-sm text-slate-500">Tap a button to open the system.</p>
        </header>

        <ul className="mt-8 space-y-3 list-none p-0 m-0">
          {systems.map((s) => {
            const href = externalHref(s);
            const RowIcon = s.icon;
            return (
              <li key={s.slug}>
                <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <SystemPreview system={s} />
                  <div className="p-4">
                    <div className="flex gap-3">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-100 bg-slate-50"
                        aria-hidden
                      >
                        <RowIcon size={20} style={{ color: s.color }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="font-semibold text-slate-900 leading-snug">{s.title}</h2>
                        <p className="mt-0.5 text-sm text-slate-500 line-clamp-2">{s.description}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-2">
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white min-h-[44px] active:opacity-95"
                          style={{ background: s.color }}
                        >
                          {openLabel(s)}
                          <ExternalLink size={16} strokeWidth={2} aria-hidden />
                          <span className="sr-only"> — {s.title}, opens in new tab</span>
                        </a>
                      ) : (
                        <span className="flex w-full items-center justify-center rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-400 min-h-[44px]">
                          Unavailable
                        </span>
                      )}

                      <Link
                        to={`/systems/${s.slug}`}
                        className="flex items-center justify-center text-sm font-medium py-2.5 min-h-[44px] hover:opacity-80"
                        style={{ color: '#0f2d5e' }}
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

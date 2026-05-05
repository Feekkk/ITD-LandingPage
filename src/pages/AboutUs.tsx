import { Link } from 'react-router-dom';
import { Network, LayoutDashboard, Sparkles, ArrowLeft } from 'lucide-react';

const cards = [
  {
    icon: Network,
    title: 'Operations & Network',
    subtitle: 'Connectivity and support',
    front: 'We keep services stable—Wi‑Fi, access, devices, and day‑to‑day IT operations.',
    back: 'We monitor connectivity, respond to incidents, and support users across campus. From onboarding and access to troubleshooting, we keep things running reliably.',
    color: '#0f2d5e',
    image: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tint: '#e8f0fb',
  },
  {
    icon: LayoutDashboard,
    title: 'Systems & Website Development',
    subtitle: 'Platforms and automation',
    front: 'We build and improve internal systems and web experiences for UniKL RCMP.',
    back: 'From requirements to delivery, we develop and maintain web pages and internal platforms—improving workflows, usability, and reliability over time.',
    color: '#1a56a0',
    image: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tint: '#eef5ff',
  },
] as const;

function FlipCard({ item }: { item: (typeof cards)[number] }) {
  const Icon = item.icon;

  return (
    <div className="group [perspective:1200px]">
      <div
        className="relative h-[380px] sm:h-[420px] rounded-3xl transition-transform duration-500 ease-out [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)] motion-reduce:transition-none motion-reduce:group-hover:[transform:none] motion-reduce:group-focus-within:[transform:none]"
      >
        <div
          className="absolute inset-0 rounded-3xl border border-slate-200/80 bg-white shadow-sm overflow-hidden [backface-visibility:hidden]"
        >
          <div className="relative h-40 overflow-hidden">
            <img
              src={item.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              aria-hidden
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.92) 100%), radial-gradient(520px 240px at 18% 10%, ${item.color}2a, transparent 60%)`,
              }}
              aria-hidden
            />
            <div
              className="absolute -top-10 -right-10 w-44 h-44 rounded-full blur-2xl opacity-60"
              style={{ background: `${item.color}26` }}
              aria-hidden
            />
          </div>
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center border border-slate-200/70 shadow-sm shrink-0"
                style={{ background: item.tint }}
              >
                <Icon size={22} style={{ color: item.color }} />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">Hover</span>
            </div>

            <p className="mt-5 text-xl font-extrabold tracking-tight text-slate-900 leading-snug">
              {item.title}
            </p>
            <p className="mt-1 text-xs font-semibold tracking-widest uppercase text-slate-400">
              {item.subtitle}
            </p>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">{item.front}</p>
          </div>
        </div>

        <div
          className="absolute inset-0 rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={{
            background:
              'radial-gradient(700px 320px at 20% 0%, rgba(126,184,247,0.18), transparent 60%), linear-gradient(135deg, rgba(15,45,94,0.06) 0%, rgba(255,255,255,0.92) 60%, rgba(26,86,160,0.06) 100%)',
          }}
        >
          <div className="p-7 h-full flex flex-col">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold tracking-widest uppercase text-slate-500">About</p>
              <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">Back</span>
            </div>

            <p className="mt-5 text-xl font-extrabold tracking-tight text-slate-900 leading-snug">
              {item.title}
            </p>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">{item.back}</p>

            <div className="mt-auto pt-5 flex items-center justify-between">
              <span className="text-xs text-slate-400">UniKL RCMP • IT Department</span>
              <span className="text-xs font-semibold" style={{ color: item.color }}>
                Learn more
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="absolute inset-0 rounded-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7eb8f7]/60"
          aria-label={`Flip card: ${item.title}`}
        />
      </div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <div className="min-h-[calc(100vh-8rem)]">
      <section
        className="relative overflow-hidden"
        style={{
          background:
            'radial-gradient(900px 520px at 50% 25%, rgba(126,184,247,0.14), transparent 62%), linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-[0.05]" aria-hidden>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(15,45,94,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(15,45,94,0.35) 1px, transparent 1px)',
              backgroundSize: '52px 52px',
              maskImage: 'radial-gradient(circle at 50% 25%, black 0%, transparent 60%)',
              WebkitMaskImage: 'radial-gradient(circle at 50% 25%, black 0%, transparent 60%)',
            }}
          />
        </div>

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
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
              style={{ background: '#0f2d5e' }}
            >
              <Sparkles size={18} className="text-white" />
            </div>
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400">
              About Us
            </p>
          </div>

          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            The team behind UniKL RCMP
            <span className="block" style={{ color: '#0f2d5e' }}>
              Information Technology Department
            </span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-slate-500 leading-relaxed max-w-3xl">
            We maintain internal systems, campus connectivity, and user support.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full items-stretch">
          {cards.map((item) => (
            <FlipCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-semibold text-slate-900">Need help right now?</p>
            <p className="mt-1 text-sm text-slate-500">
              Use the Support button on the top-right to contact the IT Helpdesk.
            </p>
          </div>
          <Link
            to="/#systems"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm hover:shadow-md transition-shadow"
            style={{ background: '#0f2d5e' }}
          >
            Browse systems
          </Link>
        </div>
      </section>
    </div>
  );
}

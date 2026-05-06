import type { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Laptop,
  Wifi,
  Info,
  ArrowUpRight,
} from 'lucide-react';

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tint: string;
  video: string;
  href: string;
};

const services: ServiceItem[] = [
  {
    icon: Laptop,
    title: 'Internal Systems',
    desc: 'Access to department internal systems and services. All the systems are accessible via the portal and developed by the System Development Team in the IT Department.',
    tint: '#e8f0fb',
    video: '/coding.mp4',
    href: '/systems',
  },
  {
    icon: Info,
    title: 'Supporting Services',
    desc: 'Maxhub Screen Share, Epson Interactive Projection, and more. All the installations and guidance are provided by the Supporting Services Team in the IT Department.',
    tint: '#eef5ff',
    video: '/supporting.mp4',
    href: '/supporting',
  },
  {
    icon: Wifi,
    title: 'Network & Wi-Fi',
    desc: 'Wi-Fi access, VPN, connectivity checks, and network guidance. All the network and Wi-Fi related issues are handled by the Network and Wi-Fi Team in the IT Department.',
    tint: '#eef5ff',
    video: '/network.mp4',
    href: '/network',
  },
];

function ServiceTile({ item }: { item: ServiceItem }) {
  const Icon = item.icon;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-md flex flex-col gap-5 sm:flex-row sm:gap-6 sm:items-stretch">
      <div className="relative mx-auto sm:mx-0 w-full max-w-md sm:max-w-none sm:w-[min(100%,340px)] md:w-[380px] shrink-0 aspect-video rounded-xl overflow-hidden bg-slate-900 ring-1 ring-slate-200/80 shadow-inner">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={item.video}
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"
          aria-hidden
        />
        <div
          className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 shadow-md backdrop-blur-[2px]"
          style={{ backgroundColor: `${item.tint}f2` }}
        >
          <Icon className="h-5 w-5 text-slate-900" strokeWidth={1.65} aria-hidden />
        </div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center text-left">
        <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">{item.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500 sm:text-[15px]">{item.desc}</p>
        <Link
          to={item.href}
          className="mt-5 inline-flex min-h-[40px] items-center justify-center self-start rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f2d5e]"
        >
          Learn more
        </Link>
      </div>
    </div>
  );
}

export default function OurServices() {
  return (
    <div id="services" className="w-full">
      <div className="flex flex-col gap-10 md:gap-12 lg:gap-14">
        <header className="max-w-3xl mx-auto text-center md:mx-0 md:text-left md:max-w-none">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400">
            Our Services
          </p>
          <h2 className="mt-3 text-[1.65rem] sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            IT services that keep RCMP running
          </h2>
          <p className="mt-5 text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Information Technology Department provides day-to-day support and core digital services.
            From network access and email to systems guidance and security. We help students and
            staff stay productive.
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Want to learn more about our department?
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-center md:justify-start">
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm hover:shadow-md transition-shadow min-h-[44px]"
              style={{ background: '#0f2d5e' }}
            >
              Learn more about our department
              <ArrowUpRight size={16} className="shrink-0" />
            </Link>
          </div>
        </header>

        <ul className="list-none p-0 m-0 flex flex-col gap-4 sm:gap-5 max-w-4xl mx-auto md:mx-0 md:max-w-none w-full">
          {services.map((item) => (
            <li key={item.title} className="w-full">
              <ServiceTile item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

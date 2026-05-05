import {
  Headphones,
  Wifi,
  Mail,
  Shield,
  Laptop,
  Database,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: Headphones,
    title: 'IT Helpdesk & Support',
    desc: 'Ticketing, troubleshooting, on-site assistance, and follow-ups.',
    image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#0f2d5e',
    tint: '#e8f0fb',
  },
  {
    icon: Wifi,
    title: 'Network & Wi‑Fi',
    desc: 'Wi‑Fi access, VPN, connectivity checks, and network guidance.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#1a56a0',
    tint: '#eef5ff',
  },
  {
    icon: Mail,
    title: 'Maxhub Screen Share ',
    desc: 'Maxhub Screen Share is a platform that allows you to share your screen to the internet.',
    href: 'https://screen.maxhub.com/downloads',
    image: 'https://scontent.fpen1-2.fna.fbcdn.net/v/t1.6435-9/81329891_141636623946385_5332813900758908928_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=fXsiU-t7NvgQ7kNvwG1XLwJ&_nc_oc=Adri6eOqKZFTWe6R-qRXiohPh-sm853Nr93dk8H6-EjiBZVsl7rnws3FQdAhwUFowsk&_nc_zt=23&_nc_ht=scontent.fpen1-2.fna&_nc_gid=5kPZVZFLcPKECh4G3m8CQA&_nc_ss=7b289&oh=00_Af7H57eUWLIJMRjl9fsekn7ZmzdYgq6kXBZd0rI54WQ-_Q&oe=6A212CF4',
    color: '#0f2d5e',
    tint: '#e8f0fb',
  },
  {
    icon: Laptop,
    title: 'Hardware & Software',
    desc: 'Device setup, software installs, updates, and basic maintenance.',
    image: 'https://plus.unsplash.com/premium_photo-1661662850226-83c981ed4eba?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#1a56a0',
    tint: '#eef5ff',
  },
  {
    icon: Shield,
    title: 'Maxhub Connect',
    desc: 'Maxhub Connect is a platform that allows you to connect your Maxhub devices to the internet.',
    href: 'https://connect.maxhub.com/downloads',
    image: 'https://www.audax.my/wp-content/uploads/2025/07/z-2048x1100.png',
    color: '#0f2d5e',
    tint: '#e8f0fb',
  },
  {
    icon: Database,
    title: 'Epson Interactive Projection',
    desc: 'Epson Interactive Projection is a platform that allows you to connect your Epson interactive projection devices to the internet.',
    href: 'https://www.epson.com/interactive-projection',
    image: 'https://lh3.googleusercontent.com/1eNRqZWw3PipILpj32NwILFeBWLJ89EOYS8X6wU7Z_e9t2PiYD8d-dp8ghsFwBqIGKR1bf_tF79Ebsl05_kJD00b=s1280-w1280-h800',
    color: '#1a56a0',
    tint: '#eef5ff',
  },
] as const;

function ServiceTile({ item }: { item: (typeof services)[number] }) {
  const Icon = item.icon;
  const href = 'href' in item ? item.href : undefined;
  const image = 'image' in item ? item.image : undefined;

  const Card = (
    <div className="rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden transition-all hover:shadow-md hover:-translate-y-0.5">
      <div className="relative h-28 overflow-hidden">
        {image ? (
          <>
            <img
              src={image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              aria-hidden
            />
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.92) 100%), radial-gradient(520px 220px at 20% 20%, ${item.color}1f, transparent 60%)`,
              }}
              aria-hidden
            />
          </>
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(520px 220px at 20% 20%, ${item.color}1f, transparent 60%), linear-gradient(135deg, ${item.tint} 0%, #ffffff 60%, ${item.tint} 100%)`,
            }}
            aria-hidden
          />
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center border border-slate-200/70 shadow-sm shrink-0"
            style={{ background: item.tint }}
          >
            <Icon size={18} style={{ color: item.color }} />
          </div>
          <ArrowUpRight size={16} className="text-slate-300" />
        </div>
        <p className="mt-3 font-semibold text-slate-900 leading-snug">{item.title}</p>
        <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{item.desc}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {Card}
    </a>
  ) : (
    Card
  );
}

export default function OurServices() {
  return (
    <div id="services">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.35fr,1fr] gap-8 lg:gap-12 items-center">
        <div className="hidden lg:flex flex-col gap-4">
          <ServiceTile item={services[0]} />
          <ServiceTile item={services[1]} />
          <ServiceTile item={services[2]} />
        </div>

        <div className="text-center lg:text-left">
          <p className="text-xs font-semibold tracking-widest uppercase text-slate-400">
            Our Services
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            IT services that keep RCMP running
          </h2>
          <p className="mt-5 text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Information Technology Department provides day-to-day support and core
            digital services. From network access and email to systems guidance and security. We help
            students and staff stay productive.
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
           Want to learn more about our department?
          </p>

          <div className="mt-7 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm hover:shadow-md transition-shadow"
              style={{ background: '#0f2d5e' }}
            >
              Learn more about our department
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-4">
          <ServiceTile item={services[3]} />
          <ServiceTile item={services[4]} />
          <ServiceTile item={services[5]} />
        </div>
      </div>

      <div className="lg:hidden mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((item) => (
          <ServiceTile key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

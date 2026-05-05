import { Megaphone, Pin, Clock, AlertTriangle, Info, CheckCircle } from 'lucide-react';

const announcements = [
  {
    id: 1,
    type: 'critical',
    pinned: true,
    title: 'Scheduled System Maintenance – 10 May 2026',
    body: 'All internal systems will undergo routine maintenance from 12:00 AM to 4:00 AM on Saturday, 10 May 2026. Services may be temporarily unavailable during this window.',
    timestamp: '2 days ago',
    date: '3 May 2026',
  },
  {
    id: 2,
    type: 'info',
    pinned: true,
    title: 'New Student Portal v2.0 Now Live',
    body: 'We are pleased to announce the launch of the upgraded Student Portal featuring improved performance, a refreshed UI, and new self-service features for academic records.',
    timestamp: '5 days ago',
    date: '30 Apr 2026',
  },
  {
    id: 3,
    type: 'success',
    pinned: false,
    title: 'Wi-Fi Coverage Expanded — Block D & Library',
    body: 'High-speed Wi-Fi access points have been installed in Block D and the Main Library. Coverage maps are available on the IT portal.',
    timestamp: '1 week ago',
    date: '28 Apr 2026',
  },
  {
    id: 4,
    type: 'info',
    pinned: false,
    title: 'Microsoft 365 License Renewal Complete',
    body: 'Microsoft 365 licenses for all staff and students have been successfully renewed for the 2026–2027 academic year. No action is required on your end.',
    timestamp: '2 weeks ago',
    date: '21 Apr 2026',
  },
];

const typeConfig = {
  critical: {
    icon: AlertTriangle,
    bg: 'bg-red-50',
    border: 'border-red-200',
    iconColor: 'text-red-500',
    badge: 'bg-red-100 text-red-700',
    label: 'Urgent',
  },
  info: {
    icon: Info,
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    iconColor: 'text-blue-500',
    badge: 'bg-blue-100 text-blue-700',
    label: 'Notice',
  },
  success: {
    icon: CheckCircle,
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    iconColor: 'text-emerald-500',
    badge: 'bg-emerald-100 text-emerald-700',
    label: 'Update',
  },
};

export default function Announcements() {
  return (
    <div id="announcements">
      {/* Section header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
            style={{ background: '#0f2d5e' }}
          >
            <Megaphone size={18} className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold" style={{ color: '#0f2d5e' }}>
              Announcements
            </h2>
            <p className="text-xs text-slate-500">Latest updates from the IT Department</p>
          </div>
        </div>
        <span className="text-xs font-semibold text-slate-400 hidden sm:block">
          {announcements.length} notices
        </span>
      </div>

      {/* Bento card container */}
      <div
        className="rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
        }}
      >
        {/* Featured pinned item */}
        {announcements.filter((a) => a.pinned).map((item, idx) => {
          const cfg = typeConfig[item.type as keyof typeof typeConfig];
          const Icon = cfg.icon;
          return (
            <div
              key={item.id}
              className={`flex gap-4 p-5 sm:p-6 ${idx < announcements.filter((a) => a.pinned).length - 1 ? 'border-b border-slate-100' : 'border-b border-slate-100'} ${cfg.bg} relative`}
            >
              {item.pinned && (
                <span className="absolute top-3 right-4 flex items-center gap-1 text-xs font-semibold text-slate-400">
                  <Pin size={11} />
                  Pinned
                </span>
              )}
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${cfg.border} border bg-white/80`}>
                <Icon size={17} className={cfg.iconColor} />
              </div>
              <div className="flex-1 min-w-0 pr-12">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cfg.badge}`}>
                    {cfg.label}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock size={11} />
                    {item.date}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 text-sm sm:text-base leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mt-1.5 leading-relaxed">{item.body}</p>
              </div>
            </div>
          );
        })}

        {/* Regular items */}
        {announcements.filter((a) => !a.pinned).map((item, idx, arr) => {
          const cfg = typeConfig[item.type as keyof typeof typeConfig];
          const Icon = cfg.icon;
          return (
            <div
              key={item.id}
              className={`flex gap-4 p-5 sm:p-6 hover:bg-slate-50/70 transition-colors ${idx < arr.length - 1 ? 'border-b border-slate-100' : ''}`}
            >
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${cfg.border} border bg-white/80`}>
                <Icon size={17} className={cfg.iconColor} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cfg.badge}`}>
                    {cfg.label}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock size={11} />
                    {item.date}
                  </span>
                </div>
                <h3 className="font-semibold text-slate-900 text-sm sm:text-base leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">{item.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

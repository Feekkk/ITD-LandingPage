import {
  GraduationCap,
  BookOpen,
  LayoutDashboard,
  Users,
  FileText,
  BarChart3,
  Wifi,
  Mail,
  Calendar,
  Shield,
  Database,
  Printer,
  ExternalLink,
  BookMarked,
} from 'lucide-react';

const systems = [
  {
    icon: GraduationCap,
    title: 'Student Portal',
    description: 'Access academic records, course enrollment, exam schedules, and personal information in one place.',
    color: '#0f2d5e',
    accent: '#e8f0fb',
    size: 'large',
    action: { label: 'Launch', type: 'launch' },
  },
  {
    icon: BookOpen,
    title: 'e-Learning Platform',
    description: 'Course materials, assignments, quizzes, and virtual classrooms.',
    color: '#1a56a0',
    accent: '#eef5ff',
    size: 'normal',
    action: { label: 'Launch', type: 'launch' },
  },
  {
    icon: LayoutDashboard,
    title: 'Staff Dashboard',
    description: 'Internal management tools for academic and administrative staff.',
    color: '#1e6b5e',
    accent: '#e8f6f3',
    size: 'normal',
    action: { label: 'Launch', type: 'launch' },
  },
  {
    icon: Users,
    title: 'HR Self-Service',
    description: 'Leave applications, payslips, claims, and personal HR records.',
    color: '#5c4a1e',
    accent: '#fef9ee',
    size: 'normal',
    action: { label: 'Launch', type: 'launch' },
  },
  {
    icon: FileText,
    title: 'Document Management',
    description: 'Centralized repository for official documents, forms, and letters.',
    color: '#3b2d6b',
    accent: '#f3f0ff',
    size: 'normal',
    action: { label: 'Docs', type: 'docs' },
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reports',
    description: 'Institutional data dashboards and automated reporting suite.',
    color: '#1a56a0',
    accent: '#eef5ff',
    size: 'wide',
    action: { label: 'Launch', type: 'launch' },
  },
  {
    icon: Wifi,
    title: 'Network Portal',
    description: 'Wi-Fi registration, VPN access, and network diagnostics.',
    color: '#0f2d5e',
    accent: '#e8f0fb',
    size: 'normal',
    action: { label: 'Launch', type: 'launch' },
  },
  {
    icon: Mail,
    title: 'Webmail (M365)',
    description: 'Institutional email powered by Microsoft 365.',
    color: '#1e6b5e',
    accent: '#e8f6f3',
    size: 'normal',
    action: { label: 'Launch', type: 'launch' },
  },
  {
    icon: Calendar,
    title: 'Room Booking',
    description: 'Reserve lecture halls, labs, and meeting rooms online.',
    color: '#5c4a1e',
    accent: '#fef9ee',
    size: 'normal',
    action: { label: 'Launch', type: 'launch' },
  },
  {
    icon: Shield,
    title: 'IT Helpdesk',
    description: 'Submit, track, and manage IT support tickets seamlessly.',
    color: '#c0392b',
    accent: '#fef2f2',
    size: 'normal',
    action: { label: 'Launch', type: 'launch' },
  },
  {
    icon: Database,
    title: 'Asset Registry',
    description: 'Inventory of all IT hardware and software assets across campus.',
    color: '#2d6a6a',
    accent: '#e6f7f7',
    size: 'normal',
    action: { label: 'Docs', type: 'docs' },
  },
  {
    icon: Printer,
    title: 'Print Management',
    description: 'Manage print quotas, submit jobs, and monitor print activity.',
    color: '#3b4d6b',
    accent: '#f0f3fa',
    size: 'normal',
    action: { label: 'Launch', type: 'launch' },
  },
];

interface SystemCardProps {
  system: (typeof systems)[0];
}

function SystemCard({ system }: SystemCardProps) {
  const Icon = system.icon;
  const isLaunch = system.action.type === 'launch';

  return (
    <div
      className={`group relative rounded-2xl border border-slate-200/80 p-5 sm:p-6 flex flex-col gap-4 cursor-pointer
        shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300
        ${system.size === 'large' ? 'sm:col-span-2 sm:row-span-2' : ''}
        ${system.size === 'wide' ? 'sm:col-span-2' : ''}
      `}
      style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)' }}
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${system.accent} 0%, transparent 60%)` }}
      />

      <div className="relative z-10 flex flex-col gap-3 flex-1">
        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm shrink-0"
          style={{ background: system.accent, border: `1.5px solid ${system.color}22` }}
        >
          <Icon size={21} style={{ color: system.color }} />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3
            className="font-bold text-base leading-snug mb-1.5"
            style={{ color: '#0f2d5e' }}
          >
            {system.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed">{system.description}</p>
        </div>

        {/* Action */}
        <button
          className="mt-auto self-start flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200
            hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
          style={{
            background: isLaunch ? system.color : 'transparent',
            color: isLaunch ? '#ffffff' : system.color,
            border: isLaunch ? 'none' : `1.5px solid ${system.color}`,
          }}
        >
          {isLaunch ? <ExternalLink size={13} /> : <BookMarked size={13} />}
          {system.action.label}
        </button>
      </div>
    </div>
  );
}

export default function SystemsGrid() {
  return (
    <div id="systems">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm"
            style={{ background: '#0f2d5e' }}
          >
            <LayoutDashboard size={18} className="text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold" style={{ color: '#0f2d5e' }}>
              Internal Systems
            </h2>
            <p className="text-xs text-slate-500">Tools and platforms managed by the IT Department</p>
          </div>
        </div>
        <span className="text-xs font-semibold text-slate-400 hidden sm:block">
          {systems.length} systems
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-fr">
        {systems.map((system) => (
          <SystemCard key={system.title} system={system} />
        ))}
      </div>
    </div>
  );
}

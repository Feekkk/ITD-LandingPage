import { BookOpen, GraduationCap, Shield, type LucideIcon } from 'lucide-react';

export type SystemAction =
  | { label: 'Launch'; type: 'launch'; href?: string }
  | { label: 'Docs'; type: 'docs'; href?: string };

export type InternalSystem = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  color: string;
  accent: string;
  image?: string;
  previewVideo?: string;
  action: SystemAction;
  highlights: { label: string; value: string }[];
  features: string[];
};

export const systems: readonly InternalSystem[] = [
  {
    slug: 'venuquip',
    icon: GraduationCap,
    title: 'VenuQuip',
    description: 'Booking system for events and equipment.',
    longDescription:
      'VenuQuip helps staff and students request venues and shared equipment with clear schedules, approvals, and booking visibility—so events and resources are managed smoothly.',
    color: '#0f2d5e',
    accent: '#e8f0fb',
    image: '/venuquip.png',
    previewVideo: '/vequip.mp4',
    action: { label: 'Launch', type: 'launch', href: 'https://vequip.rcmp.edu.my' },
    highlights: [
      { label: 'Core use', value: 'Bookings' },
      { label: 'Audience', value: 'Campus-wide' },
      { label: 'Status', value: 'Active' },
    ],
    features: [
      'Venue availability and scheduling',
      'Equipment booking and tracking',
      'Clear request flow and confirmations',
    ],
  },
  {
    slug: 'nexcheck',
    icon: BookOpen,
    title: 'Nexcheck Inventory',
    description: 'Manage IT inventory and equipment requests in one place.',
    longDescription:
      'Nexcheck supports IT inventory operations—recording assets, monitoring stock movement, and capturing equipment requests to keep IT resources organized and accountable.',
    color: '#1a56a0',
    accent: '#eef5ff',
    image: '/nexcheck.png',
    previewVideo: '/nexcheck.mp4',
    action: { label: 'Launch', type: 'launch', href: 'https://nims.rcmp.edu.my' },
    highlights: [
      { label: 'Core use', value: 'Inventory' },
      { label: 'Audience', value: 'IT Dept' },
      { label: 'Status', value: 'Active' },
    ],
    features: [
      'Asset registry and inventory overview',
      'Request tracking and approvals',
      'Reporting for IT operations',
    ],
  },
  {
    slug: 'helpdesk',
    icon: Shield,
    title: 'Helpdesk Portal (Coming Soon)',
    description: 'Submit and track IT support tickets seamlessly.',
    longDescription:
      'The IT Helpdesk is the primary channel to report issues, request assistance, and follow up on service status with clear tracking and updates.',
    color: '#0f2d5e',
    accent: '#e8f0fb',
    action: { label: 'Launch', type: 'launch' },
    highlights: [
      { label: 'Core use', value: 'Support' },
      { label: 'Audience', value: 'All users' },
      { label: 'Status', value: 'Coming soon' },
    ],
    features: ['Submit tickets', 'Track progress', 'Get updates and guidance'],
  },
] as const;

export function getSystemBySlug(slug: string) {
  return systems.find((s) => s.slug === slug);
}

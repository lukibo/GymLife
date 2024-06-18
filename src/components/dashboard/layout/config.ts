import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'members', title: 'Sporters', href: paths.dashboard.members, icon: 'users' },
  // { key: 'settings', title: 'Instellingen', href: paths.dashboard.settings, icon: 'gear-six' },
  // { key: 'profile', title: 'Profiel', href: paths.dashboard.profile, icon: 'user' },
  // { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];

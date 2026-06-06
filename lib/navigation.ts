import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export function resolveNavHref(href: string): string {
  if (href === '#') return '/';
  if (href.startsWith('#')) return `/${href}`;
  return href;
}

export function handleNavClick(href: string, router: AppRouterInstance): void {
  if (href === '#') {
    if (window.location.pathname !== '/') {
      router.push('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  }

  if (href.startsWith('#')) {
    if (window.location.pathname !== '/') {
      router.push(resolveNavHref(href));
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  router.push(href);
}

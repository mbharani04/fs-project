/**
 * Utility: merge class names (mirrors shadcn's cn helper).
 * Uses clsx-style logic without adding the clsx dep — just a lightweight implementation.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

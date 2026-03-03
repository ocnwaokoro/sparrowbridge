/**
 * Formats an ISO date string (YYYY-MM-DD) for display.
 * @param iso - Date string in ISO format (e.g. "2026-01-20")
 * @returns Locale-formatted date (e.g. "Jan 20, 2026")
 */
export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

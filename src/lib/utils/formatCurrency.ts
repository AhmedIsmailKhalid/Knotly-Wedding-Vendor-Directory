export function formatPriceRange(range: string): string {
  const map: Record<string, string> = {
    BUDGET: 'Under $1,000',
    MID: '$1,000 – $5,000',
    PREMIUM: '$5,000 – $15,000',
    LUXURY: '$15,000+',
  }
  return map[range] ?? range
}
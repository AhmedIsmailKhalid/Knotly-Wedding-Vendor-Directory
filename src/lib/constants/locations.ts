export const LOCATIONS = [
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL',
  'Houston, TX',
  'Phoenix, AZ',
  'Philadelphia, PA',
  'San Antonio, TX',
  'San Diego, CA',
  'Dallas, TX',
  'San Francisco, CA',
  'Seattle, WA',
  'Denver, CO',
  'Boston, MA',
  'Nashville, TN',
  'Miami, FL',
  'Atlanta, GA',
  'Austin, TX',
  'Las Vegas, NV',
  'Portland, OR',
  'Charlotte, NC',
] as const

export type Location = (typeof LOCATIONS)[number]
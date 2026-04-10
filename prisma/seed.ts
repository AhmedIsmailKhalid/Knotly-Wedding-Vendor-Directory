// @ts-nocheck
import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaNeon } from '@prisma/adapter-neon'
import bcrypt from 'bcryptjs'

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
})
const prisma = new PrismaClient({ adapter })

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const vendors = [
  // VENUES
  {
    name: 'The Grand Estate',
    email: 'grand.estate@knotly.dev',
    category: 'VENUE' as const,
    location: 'New York, NY',
    bio: 'A breathtaking estate nestled in the heart of New York, offering sweeping gardens, a grand ballroom, and impeccable service. With capacity for up to 500 guests, The Grand Estate has hosted countless unforgettable celebrations. Our dedicated events team works tirelessly to ensure every detail is perfect, from the floral arrangements to the final dance.',
    priceRange: 'LUXURY' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800', publicId: 'knotly/seed/venue-1-1', isPrimary: true },
      { url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800', publicId: 'knotly/seed/venue-1-2', isPrimary: false },
    ],
  },
  {
    name: 'Riverside Pavilion',
    email: 'riverside.pavilion@knotly.dev',
    category: 'VENUE' as const,
    location: 'Austin, TX',
    bio: 'Perched on the banks of the Colorado River, Riverside Pavilion offers a stunning backdrop for your wedding day. Our open-air pavilion accommodates up to 250 guests and features panoramic water views, bistro lighting, and a dedicated bridal suite. We specialise in both intimate gatherings and large-scale celebrations.',
    priceRange: 'PREMIUM' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800', publicId: 'knotly/seed/venue-2-1', isPrimary: true },
      { url: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800', publicId: 'knotly/seed/venue-2-2', isPrimary: false },
    ],
  },
  {
    name: 'Bloom Garden Venue',
    email: 'bloom.garden@knotly.dev',
    category: 'VENUE' as const,
    location: 'Portland, OR',
    bio: 'An enchanting garden venue surrounded by lush botanicals and seasonal blooms. Bloom Garden is perfect for couples who dream of a natural, romantic setting. With seating for up to 150 guests and a charming farmhouse reception hall, we offer a truly unique experience that connects you and your guests with nature.',
    priceRange: 'MID' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800', publicId: 'knotly/seed/venue-3-1', isPrimary: true },
    ],
  },
  // PHOTOGRAPHERS
  {
    name: 'Lens & Light Studio',
    email: 'lens.light@knotly.dev',
    category: 'PHOTOGRAPHER' as const,
    location: 'Los Angeles, CA',
    bio: 'Award-winning wedding photography studio based in Los Angeles. We believe every couple has a unique story, and our mission is to capture yours with authenticity and artistry. Specialising in cinematic, editorial-style photography, we document the raw emotions, candid moments, and quiet details that make your day truly yours.',
    priceRange: 'PREMIUM' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800', publicId: 'knotly/seed/photo-1-1', isPrimary: true },
      { url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800', publicId: 'knotly/seed/photo-1-2', isPrimary: false },
    ],
  },
  {
    name: 'Golden Hour Photography',
    email: 'golden.hour@knotly.dev',
    category: 'PHOTOGRAPHER' as const,
    location: 'Nashville, TN',
    bio: 'Specialising in golden hour and natural light photography, we create timeless, romantic images that you will treasure forever. Based in Nashville, we travel throughout Tennessee and beyond. Our packages include full-day coverage, engagement shoots, and beautifully crafted albums delivered within 8 weeks.',
    priceRange: 'MID' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', publicId: 'knotly/seed/photo-2-1', isPrimary: true },
    ],
  },
  {
    name: 'Candid Collective',
    email: 'candid.collective@knotly.dev',
    category: 'PHOTOGRAPHER' as const,
    location: 'Seattle, WA',
    bio: 'A boutique photography collective with three photographers, each with a distinct eye and style. We offer single-photographer and multi-photographer packages for weddings of all sizes. Our documentary approach means we stay out of the way and let your day unfold naturally, capturing genuine moments as they happen.',
    priceRange: 'BUDGET' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800', publicId: 'knotly/seed/photo-3-1', isPrimary: true },
    ],
  },
  // CATERERS
  {
    name: 'Feast & Co',
    email: 'feast.co@knotly.dev',
    category: 'CATERER' as const,
    location: 'Chicago, IL',
    bio: 'Chicago\'s premier wedding catering company, delivering exceptional food and flawless service since 2010. Our culinary team crafts bespoke menus tailored to your tastes and dietary requirements. From elegant plated dinners to relaxed family-style feasts and show-stopping canapé receptions, we bring your vision to life with every dish.',
    priceRange: 'PREMIUM' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800', publicId: 'knotly/seed/cater-1-1', isPrimary: true },
    ],
  },
  {
    name: 'The Wandering Table',
    email: 'wandering.table@knotly.dev',
    category: 'CATERER' as const,
    location: 'Denver, CO',
    bio: 'Farm-to-table wedding catering rooted in Colorado\'s finest seasonal produce. We work directly with local farms to create menus that are fresh, sustainable, and utterly delicious. Our signature grazing tables and interactive food stations are a hit with guests and create a relaxed, convivial atmosphere at any reception.',
    priceRange: 'MID' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800', publicId: 'knotly/seed/cater-2-1', isPrimary: true },
    ],
  },
  {
    name: 'Simply Delicious Events',
    email: 'simply.delicious@knotly.dev',
    category: 'CATERER' as const,
    location: 'Miami, FL',
    bio: 'Bringing vibrant Latin and Caribbean flavours to Miami weddings. Our team of passionate chefs crafts menus that celebrate culture, family, and the joy of good food. We offer full-service catering including staffing, equipment, and bar service, ensuring a seamless experience from appetisers to dessert.',
    priceRange: 'BUDGET' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800', publicId: 'knotly/seed/cater-3-1', isPrimary: true },
    ],
  },
  // FLORISTS
  {
    name: 'Petal & Bloom',
    email: 'petal.bloom@knotly.dev',
    category: 'FLORIST' as const,
    location: 'San Francisco, CA',
    bio: 'A full-service floral design studio creating lush, garden-inspired arrangements for weddings across the Bay Area. Our team of talented designers works closely with each couple to translate their vision into stunning florals — from dramatic ceremony installations and cascading bridal bouquets to intimate table centrepieces.',
    priceRange: 'PREMIUM' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?w=800', publicId: 'knotly/seed/florist-2-1', isPrimary: true },
    ],
  },
  {
    name: 'Wildflower Weddings',
    email: 'wildflower@knotly.dev',
    category: 'FLORIST' as const,
    location: 'Boston, MA',
    bio: 'Specialising in romantic, wildflower-inspired arrangements that bring a natural, effortless beauty to any wedding. We source locally and seasonally wherever possible, creating designs that feel organic and deeply personal. Perfect for garden parties, barn weddings, and couples who love an undone, textural aesthetic.',
    priceRange: 'MID' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800', publicId: 'knotly/seed/florist-2-1', isPrimary: true },
    ],
  },
  {
    name: 'Bloom Atelier',
    email: 'bloom.atelier@knotly.dev',
    category: 'FLORIST' as const,
    location: 'Atlanta, GA',
    bio: 'A boutique floral studio with a passion for bold, statement-making design. From oversized floral arches and ceiling installations to sculptural centrepieces, we create florals that double as art. We work with a curated selection of premium blooms sourced from growers in Holland, Ecuador, and across the Southern US.',
    priceRange: 'LUXURY' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b4?w=800', publicId: 'knotly/seed/florist-3-1', isPrimary: true },
    ],
  },
  // DJ & ENTERTAINMENT
  {
    name: 'DJ Harmony Events',
    email: 'dj.harmony@knotly.dev',
    category: 'DJ_ENTERTAINMENT' as const,
    location: 'Las Vegas, NV',
    bio: 'Las Vegas\'s most sought-after wedding DJ and entertainment company. With over 15 years of experience and a library of over 50,000 tracks, DJ Harmony reads every room and keeps every dancefloor packed. We offer full sound and lighting packages, MC services, and live music add-ons to create an unforgettable celebration.',
    priceRange: 'PREMIUM' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800', publicId: 'knotly/seed/dj-1-1', isPrimary: true },
    ],
  },
  {
    name: 'The Sound Collective',
    email: 'sound.collective@knotly.dev',
    category: 'DJ_ENTERTAINMENT' as const,
    location: 'Philadelphia, PA',
    bio: 'A collective of professional DJs, live musicians, and event MCs bringing an unmatched energy to Philadelphia weddings. We specialise in blending live performance with DJ sets — think live saxophone over deep house, or a string quartet transitioning into an upbeat reception playlist. Every event is completely bespoke.',
    priceRange: 'MID' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800', publicId: 'knotly/seed/dj-2-1', isPrimary: true },
    ],
  },
  {
    name: 'Beats & Bows',
    email: 'beats.bows@knotly.dev',
    category: 'DJ_ENTERTAINMENT' as const,
    location: 'Charlotte, NC',
    bio: 'Affordable, professional DJ services for couples who want a great party without the premium price tag. We bring high-quality sound equipment, a vast music library, and genuine enthusiasm to every wedding. Our online planning tools let you customise your playlist, request must-plays, and flag do-not-plays in advance.',
    priceRange: 'BUDGET' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800', publicId: 'knotly/seed/dj-3-1', isPrimary: true },
    ],
  },
  // MAKEUP & HAIR
  {
    name: 'Bridal Glow Studio',
    email: 'bridal.glow@knotly.dev',
    category: 'MAKEUP_HAIR' as const,
    location: 'New York, NY',
    bio: 'New York\'s leading bridal beauty studio, with a team of ten specialised hair and makeup artists. We offer in-studio and on-location services, trials, and full bridal party packages. Our editorial-trained artists bring a luxury fashion sensibility to bridal beauty — flawless, modern, and made to last all day and night.',
    priceRange: 'LUXURY' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800', publicId: 'knotly/seed/beauty-1-1', isPrimary: true },
    ],
  },
  {
    name: 'Lumière Beauty Co',
    email: 'lumiere.beauty@knotly.dev',
    category: 'MAKEUP_HAIR' as const,
    location: 'Dallas, TX',
    bio: 'A mobile bridal beauty team serving Dallas and surrounding areas. We come to you — whether that\'s your home, hotel, or venue — so you can relax and enjoy getting ready on your wedding morning. Specialising in soft, romantic looks that photograph beautifully in any light. Bridal trials and full party packages available.',
    priceRange: 'MID' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800', publicId: 'knotly/seed/beauty-2-1', isPrimary: true },
    ],
  },
  {
    name: 'The Glam Squad',
    email: 'glam.squad@knotly.dev',
    category: 'MAKEUP_HAIR' as const,
    location: 'San Diego, CA',
    bio: 'San Diego\'s favourite bridal beauty team — fun, professional, and incredibly talented. We specialise in making every bride feel like the best version of themselves, whether that means a full glam look or a fresh, barely-there finish. We offer flexible packages for brides and bridal parties of any size.',
    priceRange: 'BUDGET' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800', publicId: 'knotly/seed/beauty-3-1', isPrimary: true },
    ],
  },
  // WEDDING PLANNERS
  {
    name: 'Forever After Planning',
    email: 'forever.after@knotly.dev',
    category: 'WEDDING_PLANNER' as const,
    location: 'New York, NY',
    bio: 'A full-service wedding planning firm with over 20 years of experience creating extraordinary celebrations across New York and beyond. Our team of dedicated planners manages every detail — from venue sourcing and vendor coordination to day-of logistics — so you can be fully present on your wedding day. We specialise in luxury, bespoke events.',
    priceRange: 'LUXURY' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1452457807411-4979b707c5be?w=800', publicId: 'knotly/seed/planner-1-1', isPrimary: true },
    ],
  },
  {
    name: 'Bliss & Co Weddings',
    email: 'bliss.co@knotly.dev',
    category: 'WEDDING_PLANNER' as const,
    location: 'Houston, TX',
    bio: 'Houston\'s most trusted wedding planning boutique. We offer full planning, partial planning, and month-of coordination packages to suit every couple\'s needs and budget. Our strong vendor relationships mean access to the best venues, florists, and photographers in the region. Your dream wedding, stress-free.',
    priceRange: 'PREMIUM' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800', publicId: 'knotly/seed/planner-2-1', isPrimary: true },
    ],
  },
  {
    name: 'Simply Yours Events',
    email: 'simply.yours@knotly.dev',
    category: 'WEDDING_PLANNER' as const,
    location: 'Phoenix, AZ',
    bio: 'Affordable wedding coordination services for couples who want professional support without the full-planning price tag. We specialise in day-of and month-of coordination, ensuring your carefully laid plans are executed flawlessly. Based in Phoenix, we serve couples across Arizona and are available for destination weddings.',
    priceRange: 'MID' as const,
    photos: [
      { url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800', publicId: 'knotly/seed/planner-3-1', isPrimary: true },
    ],
  },
]

async function main() {
  console.log('🌱 Seeding database...')

  // Clear existing seed data
  await prisma.savedVendor.deleteMany()
  await prisma.inquiryResponse.deleteMany()
  await prisma.inquiry.deleteMany()
  await prisma.review.deleteMany()
  await prisma.galleryPhoto.deleteMany()
  await prisma.vendorProfile.deleteMany()
  await prisma.user.deleteMany()

  console.log('🗑️  Cleared existing data')

  const hashedPassword = await bcrypt.hash('Demo1234!', 12)

  // Create admin
  await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@knotly.dev',
      password: hashedPassword,
      role: 'ADMIN',
    },
  })

  // Create demo couple
  const coupleUser = await prisma.user.create({
    data: {
      name: 'Sarah & James',
      email: 'couple@knotly.dev',
      password: hashedPassword,
      role: 'COUPLE',
    },
  })

  // Create second demo couple
  await prisma.user.create({
    data: {
      name: 'Emily & Tom',
      email: 'couple2@knotly.dev',
      password: hashedPassword,
      role: 'COUPLE',
    },
  })

  console.log('👤 Created demo users')

  // Create vendors
  for (const vendor of vendors) {
    const slug = slugify(vendor.name)

    const vendorUser = await prisma.user.create({
      data: {
        name: vendor.name,
        email: vendor.email,
        password: hashedPassword,
        role: 'VENDOR',
        vendorProfile: {
          create: {
            slug,
            businessName: vendor.name,
            category: vendor.category,
            location: vendor.location,
            bio: vendor.bio,
            priceRange: vendor.priceRange,
            isApproved: true,
            photos: {
              create: vendor.photos,
            },
          },
        },
      },
      include: {
        vendorProfile: true,
      },
    })

    // Add a sample review from the demo couple
    if (vendorUser.vendorProfile) {
      await prisma.review.create({
        data: {
          coupleId: coupleUser.id,
          vendorId: vendorUser.vendorProfile.id,
          rating: Math.floor(Math.random() * 2) + 4, // 4 or 5
          body: 'Absolutely wonderful experience from start to finish. They were professional, responsive, and delivered beyond our expectations. We could not recommend them more highly to any couple planning their wedding.',
        },
      })
    }

    console.log(`✅ Created vendor: ${vendor.name}`)
  }

  console.log('🎉 Seeding complete!')
  console.log('')
  console.log('Demo accounts (password: Demo1234!):')
  console.log('  Admin:  admin@knotly.dev')
  console.log('  Couple: couple@knotly.dev')
  console.log('  Couple 2: couple2@knotly.dev')
  console.log('  Vendor 1: grand.estate@knotly.dev (and others)')
  console.log('  Vendor 2: bliss.co@knotly.dev (and others)')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
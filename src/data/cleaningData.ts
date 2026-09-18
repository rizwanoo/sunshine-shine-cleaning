import { AddonItem, FAQItem, PricingPackage, ServiceAreaCity, ServiceItem, TestimonialItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Sunshine Shine Cleaning Co.',
  tagline: 'Professional Cleaning Services Across Central Florida',
  subheading:
    'Reliable residential and commercial cleaning designed to give your home or business a fresher, healthier, more comfortable space.',
  address: '1234 Lakeview Drive, Orlando, FL 32801',
  phone: '(407) 555-0198',
  phoneRaw: '+14075550198',
  email: 'hello@sunshineshinecleaning.com',
  hours: {
    weekdays: 'Monday – Friday: 8:00 AM – 7:00 PM',
    saturday: 'Saturday: 9:00 AM – 5:00 PM',
    sunday: 'Sunday: Closed',
    emergencyNotice: 'Emergency & same-day cleaning available depending on schedule and crew availability.'
  },
  serviceAreasList: [
    'Orlando',
    'Winter Park',
    'Kissimmee',
    'Lake Mary',
    'Sanford',
    'Altamonte Springs',
    'Winter Garden',
    'Clermont'
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'standard-residential',
    title: 'Standard Residential Cleaning',
    category: 'residential',
    popularBadge: 'Most Popular',
    shortDescription: 'Routine surface and room care to maintain a tidy, healthy, and fresh home atmosphere.',
    fullDescription:
      'Ideal for regular maintenance, our standard home cleaning keeps high-traffic living areas, kitchens, bathrooms, and bedrooms spotless with detailed dusting, vacuuming, and sanitized wipe-downs.',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=900&q=80',
    startingPrice: '$120',
    includes: [
      'High and low dusting of furniture, ledges, and fixtures',
      'Vacuuming all carpets, area rugs, and runners',
      'Sweeping and damp mopping of hardwood, tile, and laminate floors',
      'Complete kitchen surface wipe-down and countertop disinfection',
      'Exterior cleaning of appliances (stove top, microwave, fridge front)',
      'Thorough bathroom sanitizing (toilets, sinks, tubs, and showers)',
      'Bed making and light straightening of sleeping areas',
      'Emptying all household trash bins and replacing liners'
    ],
    recommendedAddons: ['Inside Refrigerator', 'Inside Oven', 'Interior Windows']
  },
  {
    id: 'deep-cleaning',
    title: 'Deep Cleaning',
    category: 'residential',
    popularBadge: 'Recommended First Clean',
    shortDescription: 'Intensive restorative cleaning targeting built-up grime, baseboards, door frames, and neglected corners.',
    fullDescription:
      'A top-to-bottom scrub designed for homes that have not been professionally cleaned in over 30 days or are preparing for seasonal hosting, holidays, or allergy relief.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=900&q=80',
    startingPrice: '$200',
    includes: [
      'Everything in the Standard Clean package',
      'Hand-wiping all baseboards, door moldings, and chair rails',
      'Detailed scrubbing of bathroom grout lines and soap scum buildup',
      'Degreasing stovetops, range hoods, and backsplash tile',
      'Wiping down cabinet and drawer exteriors throughout kitchen and baths',
      'Extra dust extraction behind and under easily movable furniture',
      'Spot-wiping light switches, outlet covers, and door handles',
      'Ceiling fan and air vent grille dusting'
    ],
    recommendedAddons: ['Inside Oven', 'Cabinet Interior', 'Balcony / Patio Cleaning']
  },
  {
    id: 'recurring-cleaning',
    title: 'Recurring Cleaning Service',
    category: 'residential',
    popularBadge: 'Best Value',
    shortDescription: 'Consistent weekly, biweekly, or monthly visits with priority scheduling and discounted rates.',
    fullDescription:
      'Keep your Florida home perpetually pristine with scheduled visits. Your dedicated team learns your exact space priorities so you never have to worry about cleaning chores again.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    startingPrice: '$110 / visit',
    includes: [
      'Customized rotation checklist tailored to your household habits',
      'Consistent scheduled arrival times (weekly, biweekly, or monthly)',
      'Complete kitchen, bath, bedroom, and living room maintenance',
      'Floor wash with eco-friendly pH-neutral floor conditioners',
      'Sanitization of high-touch touchpoints and handles',
      'Linen changing (upon request with clean sheets left out)',
      'Flexible skip or reschedule policy with 24-hour advance notice'
    ],
    recommendedAddons: ['Interior Windows', 'Laundry', 'Pet Hair Removal']
  },
  {
    id: 'move-in-cleaning',
    title: 'Move-In Cleaning',
    category: 'specialized',
    shortDescription: 'Complete sanitary preparation before you unpack furniture and settle into your new home.',
    fullDescription:
      'Step into a completely sanitized blank slate. We vacuum inside empty closets, wipe out every cabinet, sanitize bathrooms, and clean all surfaces before your belongings arrive.',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80',
    startingPrice: '$250',
    includes: [
      'Interior and exterior cleaning of kitchen and bathroom cabinets',
      'Detailed sanitization of kitchen countertops, sinks, and backsplashes',
      'Complete scrub of tubs, glass shower enclosures, and bathroom tile',
      'Vacuuming all baseboards, closets, shelving, and storage nooks',
      'Mopping and steam-prepping tile and wood floors',
      'Window sill, track, and blind dust extraction',
      'Disinfection of doorknobs, handrails, and thermostat panels'
    ],
    recommendedAddons: ['Inside Refrigerator', 'Inside Oven', 'Interior Windows']
  },
  {
    id: 'move-out-cleaning',
    title: 'Move-Out Cleaning',
    category: 'specialized',
    popularBadge: 'Deposit Protection',
    shortDescription: 'Rigorous end-of-lease or pre-sale deep cleaning designed to meet landlord inspection checklists.',
    fullDescription:
      'Moving is stressful enough without having to scrub floors. We ensure the vacated property is showroom-ready for your lease walk-through, security deposit return, or new buyers.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=80',
    startingPrice: '$250',
    includes: [
      'Full kitchen deep clean including cabinet wipe-down and range hood',
      'Deep scrub of all sinks, toilets, bathtubs, and vanity mirrors',
      'Baseboard, door frame, and trim hand-washing throughout the residence',
      'Closet shelves, baseboard dusting, and cobweb removal',
      'Complete floor sweeping, vacuuming, and damp mopping in every room',
      'Removal of light trash left behind during move-out day',
      'Inspection checklist validation for property managers'
    ],
    recommendedAddons: ['Inside Refrigerator', 'Inside Oven', 'Interior Windows', 'Balcony / Patio Cleaning']
  },
  {
    id: 'airbnb-vacation-rental',
    title: 'Airbnb & Vacation Rental Cleaning',
    category: 'specialized',
    popularBadge: 'Superhost Ready',
    shortDescription: 'Fast, dependable turnaround cleanings for Central Florida short-term rentals and vacation villas.',
    fullDescription:
      'Tailored specifically for Orlando vacation hosts near theme parks and lakes. We coordinate between guest check-out (10 AM) and check-in (4 PM) with photo checklists and linen turn.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
    startingPrice: '$140',
    includes: [
      'Full wash, dry, and restock of bed linens and bath towels',
      'Kitchen reset: empty dishwasher, wipe counters, sanitize coffeemaker',
      'Restocking guest toiletries, paper goods, and welcome amenities',
      'Trash removal from all rooms and trash can sanitization',
      'Pool deck / patio table wipe-down and furniture tidying',
      'Damage reporting and property photo inspection sent upon finish',
      'Key lockbox verification and thermostat check'
    ],
    recommendedAddons: ['Balcony / Patio Cleaning', 'Inside Refrigerator', 'Laundry']
  },
  {
    id: 'office-cleaning',
    title: 'Office Cleaning',
    category: 'commercial',
    shortDescription: 'Discreet, after-hours or daytime janitorial cleaning for corporate offices, suites, and clinics.',
    fullDescription:
      'Foster a productive, hygienic work environment for your team and clients. We provide recurring commercial janitorial care tailored to your operational schedule.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    startingPrice: 'Custom Quote',
    includes: [
      'Sanitizing individual desks, conference tables, and reception areas',
      'Disinfection of keyboards, telephones, and common shared surfaces',
      'Restroom sanitation, hand soap and paper towel restock',
      'Kitchenette / breakroom cleaning: sink, microwave, counter, and tables',
      'Floor care: carpet vacuuming and hard-floor buff/mopping',
      'Daily trash and recycling removal from all cubicles and bins',
      'Entrance glass and door handle sanitization'
    ],
    recommendedAddons: ['Interior Windows', 'Deep Carpet Care', 'Restroom Heavy Sanitize']
  },
  {
    id: 'commercial-cleaning',
    title: 'Commercial Cleaning',
    category: 'commercial',
    shortDescription: 'Flexible janitorial solutions for retail storefronts, fitness studios, showrooms, and facilities.',
    fullDescription:
      'High-traffic commercial spaces require consistent disinfection standards. We adapt protocols to your facility square footage, high-touch requirements, and traffic flow.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    startingPrice: 'Custom Quote',
    includes: [
      'Showroom, retail floor, and customer seating area sanitation',
      'Commercial grade hard-floor care and scrubber mopping',
      'High-touch surface disinfection (pos counters, door handles, railings)',
      'Multi-stall restroom sanitation and replenishment',
      'Breakroom and employee area cleaning',
      'Safe chemical handling and OSHA-compliant SDS protocols',
      'Flexible evening or early-morning crew scheduling'
    ],
    recommendedAddons: ['Interior Windows', 'Deep Tile Scrub', 'Trash Dumpster Relocation']
  },
  {
    id: 'post-construction-cleaning',
    title: 'Post-Construction Cleaning',
    category: 'specialized',
    shortDescription: 'Multi-phase fine dust and debris removal following renovations, additions, or new builds.',
    fullDescription:
      'Drywall powder and sawdust penetrate every crevice. Our post-construction teams use HEPA-filtered equipment to eliminate stubborn residue and leave the property truly move-in ready.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
    startingPrice: 'Custom Quote',
    includes: [
      'HEPA filtration vacuuming of walls, ceilings, and light fixtures',
      'Detailed wipe-down of all paint splatter, tape residue, and labels',
      'Intensive cleaning inside and outside all newly installed cabinetry',
      'Window frame, sill, and glass detailing (paint and sticker removal)',
      'Grout haze removal and multi-pass floor cleaning',
      'HVAC register and return vent wipe-down',
      'Safe disposal of construction dust and fine particulates'
    ],
    recommendedAddons: ['Interior Windows', 'Cabinet Interior', 'Extra Bathroom']
  }
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'standard-package',
    name: 'Standard Clean',
    tagline: 'Ideal for routine maintenance & busy Florida households',
    startingPrice: 120,
    priceNote: 'Starting estimate for properties up to 1,000 sq ft',
    features: [
      'Dusting of all exposed surfaces, ledges & furniture',
      'Vacuuming carpets, rugs, and runners',
      'Mopping hard surfaces (tile, wood, laminate)',
      'Kitchen counters, sink, exterior appliance wipe-down',
      'Sanitizing bathroom toilets, tubs, and vanities',
      'Bed making and bedroom tidying',
      'Trash removal and liner replacement'
    ],
    notIncluded: ['Inside appliances', 'Baseboard hand scrubbing', 'Interior windows'],
    bestFor: '1-3 bedroom homes requiring regular upkeep',
    ctaText: 'Get Standard Quote'
  },
  {
    id: 'deep-package',
    name: 'Deep Clean',
    tagline: 'For homes needing extra attention, detailed scrubbing & buildup removal',
    startingPrice: 200,
    priceNote: 'Starting estimate for comprehensive first-time clean',
    isPopular: true,
    features: [
      'Everything included in Standard Clean',
      'Hand-washing all baseboards, doors & moldings',
      'Detailed bathroom tile & grout scrubbing',
      'Detailed kitchen range hood, stovetop & backsplash degrease',
      'Cabinet & drawer exterior wipe-down',
      'Extra dust extraction behind movable furniture',
      'Light switches, door handles & high-touch sanitizing',
      'Ceiling fan blades and AC vent detailing'
    ],
    notIncluded: ['Inside oven or fridge (available as add-ons)'],
    bestFor: 'Homes uncleaned for 30+ days, seasonal refresh',
    ctaText: 'Get Deep Clean Quote'
  },
  {
    id: 'move-package',
    name: 'Move-In / Move-Out',
    tagline: 'Designed for empty homes, rental turnovers, and closing day perfection',
    startingPrice: 250,
    priceNote: 'Starting estimate for vacated residential properties',
    features: [
      'Full top-to-bottom sanitize of empty living spaces',
      'Kitchen deep cleaning and cabinet interior/exterior wipe-down',
      'Complete bathroom sanitization and limescale removal',
      'Closet shelving, rods, and baseboard vacuuming',
      'Hard surface floor damp scrubbing and vacuum passes',
      'Window sills, tracks, and switch plate detailing',
      'Move-out checklist compliance for landlord deposit reviews'
    ],
    bestFor: 'Tenants, realtors, homeowners buying or selling',
    ctaText: 'Get Move Clean Quote'
  },
  {
    id: 'recurring-package',
    name: 'Recurring Cleaning',
    tagline: 'Lock in your schedule with weekly, biweekly, or monthly discounts',
    startingPrice: 110,
    priceNote: 'Starting rate per visit for recurring residential plans',
    features: [
      'Priority scheduling on your preferred weekday & arrival window',
      'Dedicated cleaning team familiar with your home preferences',
      'Full standard cleaning plus alternating deep-cleaning tasks',
      'Eco-friendly, family- and pet-safe products standard',
      'Easy 24-hour reschedule or pause options',
      'Discounted pricing compared to one-time bookings',
      'Consistent cleanliness all year round'
    ],
    bestFor: 'Weekly, biweekly, or monthly recurring care',
    ctaText: 'Start Recurring Plan'
  },
  {
    id: 'office-package',
    name: 'Office Cleaning',
    tagline: 'Customized commercial and professional workspace solutions',
    startingPrice: 0,
    priceNote: 'Custom quote based on square footage & visit cadence',
    features: [
      'Workstation, desk, and conference room disinfection',
      'Restroom sanitation and supply restocking',
      'Kitchenette, coffee station, and breakroom cleaning',
      'Floor care (carpet vacuuming, hard floor mopping)',
      'Evening, early morning, or weekend scheduling options',
      'Uniformed, reliable, background-checked personnel',
      'Itemized billing and flexible monthly commercial terms'
    ],
    bestFor: 'Offices, clinics, showrooms, and retail stores',
    ctaText: 'Request Commercial Quote'
  }
];

export const ADDON_SERVICES: AddonItem[] = [
  {
    id: 'fridge',
    name: 'Inside Refrigerator',
    price: 35,
    description: 'Emptying shelves, disinfecting food compartments, and wiping door gaskets.',
    iconName: 'Refrigerator'
  },
  {
    id: 'oven',
    name: 'Inside Oven',
    price: 35,
    description: 'Degreasing oven walls, racks, and glass doors without caustic fumes.',
    iconName: 'Flame'
  },
  {
    id: 'windows',
    name: 'Interior Windows',
    price: 45,
    description: 'Streak-free interior glass panes, tracks, and window sill wipe-down.',
    iconName: 'Sparkles'
  },
  {
    id: 'cabinets',
    name: 'Cabinet Interior',
    price: 40,
    description: 'Wiping inside shelves and drawers (ideal for empty cabinets or move cleans).',
    iconName: 'FolderArchive'
  },
  {
    id: 'laundry',
    name: 'Laundry Wash & Fold',
    price: 25,
    description: 'One full load washed, dried, and folded while we clean your living spaces.',
    iconName: 'Shirt'
  },
  {
    id: 'pet-hair',
    name: 'Pet Hair Removal',
    price: 30,
    description: 'Specialized rubber-blade extraction on upholstered sofas, chairs, and rugs.',
    iconName: 'Dog'
  },
  {
    id: 'extra-bath',
    name: 'Extra Bathroom',
    price: 30,
    description: 'Complete sanitization and scrubbing for an additional full or half bathroom.',
    iconName: 'Bath'
  },
  {
    id: 'patio',
    name: 'Balcony / Patio Cleaning',
    price: 35,
    description: 'Sweeping, wiping patio furniture, and mopping Florida lanai or screened porch.',
    iconName: 'Sun'
  }
];

export const SERVICE_CITIES: ServiceAreaCity[] = [
  {
    name: 'Orlando',
    county: 'Orange County',
    driveTime: 'Home Base',
    popularServices: 'Residential, Downtown Apartments, Airbnb Turnovers, Offices',
    zipCodes: ['32801', '32803', '32804', '32806', '32819', '32828', '32835']
  },
  {
    name: 'Winter Park',
    county: 'Orange County',
    driveTime: '15 mins',
    popularServices: 'Deep Cleaning, Historic Home Preservation, Recurring Biweekly',
    zipCodes: ['32789', '32790', '32792']
  },
  {
    name: 'Kissimmee',
    county: 'Osceola County',
    driveTime: '25 mins',
    popularServices: 'Vacation Rental / Resort Villa Turnarounds, Residential Upkeep',
    zipCodes: ['34741', '34744', '34746', '34747']
  },
  {
    name: 'Lake Mary',
    county: 'Seminole County',
    driveTime: '20 mins',
    popularServices: 'Suburban Family Homes, Executive Office Cleaning, Deep Clean',
    zipCodes: ['32746', '32795']
  },
  {
    name: 'Sanford',
    county: 'Seminole County',
    driveTime: '25 mins',
    popularServices: 'Historic District Homes, Riverwalk Condos, Move-In / Move-Out',
    zipCodes: ['32771', '32773']
  },
  {
    name: 'Altamonte Springs',
    county: 'Seminole County',
    driveTime: '15 mins',
    popularServices: 'Apartment Complexes, Biweekly Cleaning, Commercial Suites',
    zipCodes: ['32701', '32714']
  },
  {
    name: 'Winter Garden',
    county: 'Orange County',
    driveTime: '20 mins',
    popularServices: 'New Construction, Weekly Family Care, Deep Kitchen Sanitize',
    zipCodes: ['34787']
  },
  {
    name: 'Clermont',
    county: 'Lake County',
    driveTime: '30 mins',
    popularServices: 'Single-Family Residences, Move-In Cleaning, Window Add-Ons',
    zipCodes: ['34711', '34714', '34715']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    quote:
      'We set up biweekly cleanings with Sunshine Shine after our baby was born in Winter Park. Their crew is punctual, polite, and they never rush through the bathrooms or kitchen. Coming home on cleaning days is the best feeling of the week.',
    author: 'Elena & Marcus R.',
    neighborhood: 'Winter Park, FL',
    serviceType: 'Recurring Biweekly Residential',
    date: 'February 2026'
  },
  {
    id: '2',
    quote:
      'I manage three short-term rental properties near Lake Eola in Orlando. Finding a cleaning company that shows up reliably between 11 AM and 3 PM checkout windows was impossible until I hired Sunshine Shine. Their photo checklist keeps my ratings spotless.',
    author: 'David P.',
    neighborhood: 'Downtown Orlando / Lake Eola',
    serviceType: 'Airbnb & Vacation Rental Cleaning',
    date: 'January 2026'
  },
  {
    id: '3',
    quote:
      'Booked their Move-Out clean for our 2,200 sq ft townhouse in Lake Mary before closing. The property manager inspected the stove, baseboards, and closets with zero deductions. Transparent pricing with no surprises.',
    author: 'Christina T.',
    neighborhood: 'Lake Mary, FL',
    serviceType: 'Move-Out Cleaning & Oven Add-on',
    date: 'March 2026'
  },
  {
    id: '4',
    quote:
      'Our medical office in Altamonte Springs requires thorough sanitation each week. Sunshine Shine provides detailed documentation, brings clean commercial equipment, and respects our privacy protocols. Excellent local partner.',
    author: 'Dr. Aaron V.',
    neighborhood: 'Altamonte Springs, FL',
    serviceType: 'Commercial Suite Cleaning',
    date: 'February 2026'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    category: 'insurance',
    question: 'Are you licensed, bonded, and fully insured in Florida?',
    answer:
      'Yes, absolutely. Sunshine Shine carries comprehensive $2,000,000 general liability insurance, full employee bonding, and active Florida workers’ compensation coverage. In the rare event that anything is accidentally broken or damaged during a cleaning appointment, our insurance coverage handles it directly. We are happy to provide our certificate of insurance upon request.'
  },
  {
    category: 'process',
    question: 'What is your step-by-step cleaning process and quality checklist?',
    answer:
      'Our team follows a rigorous 45-point room-by-room checklist using our top-to-bottom, left-to-right method. We begin with high-dusting ceiling fans, crown moldings, and blinds; move to sanitizing contact surfaces, countertops, sinks, and backsplashes; clean mirrors and interior glass; scrub and disinfect bathroom fixtures; and finish with HEPA-filter vacuuming and damp microfiber mopping. Every clean is verified by an on-site team lead.'
  },
  {
    category: 'pricing',
    question: 'How much does a cleaning service cost?',
    answer:
      'Our residential cleaning starts at $120 for standard maintenance, $200 for deep cleaning, and $250 for move-in/move-out services. Final pricing depends on your property’s square footage, bedroom and bathroom count, current condition, frequency (recurring visits receive discounted rates), and any requested add-ons like inside-the-oven or refrigerator cleaning.'
  },
  {
    category: 'process',
    question: 'Do you bring your own cleaning supplies and equipment?',
    answer:
      'Yes, our professional teams arrive fully equipped with commercial-grade HEPA-filter vacuums, fresh color-coded microfiber cloths (preventing cross-contamination between bathrooms and kitchens), floor mops, extension dusters, and hospital-grade, eco-conscious cleaning solutions. If you prefer specific botanical products or specialty care for natural stone/marble, we are happy to use your provided products.'
  },
  {
    category: 'insurance',
    question: 'What is your 100% Clean Guarantee policy?',
    answer:
      'We stand behind every service with our 24-Hour Clean Guarantee. If you notice any missed spot or are not completely satisfied with any area we cleaned, notify us within 24 hours of completion. We will dispatch a crew back to your property within 48 hours to re-clean the flagged area free of charge with zero hassle.'
  },
  {
    category: 'service',
    question: 'Do you offer recurring cleaning plans?',
    answer:
      'Yes! We offer weekly, biweekly, and monthly recurring cleaning schedules. Recurring clients enjoy discounted rates starting at $110 per visit, a dedicated regular crew familiar with your space, and priority scheduling on their preferred day of the week.'
  },
  {
    category: 'process',
    question: 'How do you vet and screen your cleaning professionals?',
    answer:
      'Every cleaner is a direct W-2 employee (never unvetted third-party contractors) who undergoes a nationwide criminal background screening, reference verification, and in-person interviews. New staff complete 80 hours of supervised hands-on training alongside seasoned team leads before ever servicing a home independently.'
  },
  {
    category: 'booking',
    question: 'Do I need to be home while you clean?',
    answer:
      'No, many of our clients prefer to be at work or running errands during service. You can provide entry instructions via smart lock code, lockbox, or apartment concierge. All personnel are trained to maintain strict property security, keep doors locked while inside, and verify all windows and entry points are secured upon departure.'
  },
  {
    category: 'service',
    question: 'Do you clean offices and commercial spaces?',
    answer:
      'Yes. We provide scheduled janitorial services for corporate offices, law firms, healthcare clinics, retail shops, and co-working spaces throughout Central Florida. We can accommodate after-hours evening schedules or early morning shifts so daily business operations remain uninterrupted.'
  },
  {
    category: 'booking',
    question: 'Can I book a same-day or emergency cleaning?',
    answer:
      'We accommodate same-day and next-day emergency requests whenever our daily schedule and crew availability allow. Please call us directly at (407) 555-0198 for real-time dispatch and rush scheduling.'
  },
  {
    category: 'service',
    question: 'Do you offer move-out cleaning with a landlord checklist?',
    answer:
      'Yes. Our move-out service is designed specifically for vacated homes and apartments. We clean inside cabinets, hand-wash baseboards, scrub kitchen appliances, detail bathroom grout, and mop all floors so you can hand over keys with confidence.'
  },
  {
    category: 'booking',
    question: 'What areas in Central Florida do you serve?',
    answer:
      'We proudly serve Orlando, Winter Park, Kissimmee, Lake Mary, Sanford, Altamonte Springs, Winter Garden, Clermont, and surrounding Central Florida communities within our service perimeter.'
  }
];

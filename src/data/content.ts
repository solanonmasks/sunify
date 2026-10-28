// All page copy that comes from the prototype's data arrays.
// Edit text here; the page updates automatically.

export const TRUST = ['BC incorporated', 'Insured · $2M liability', 'WorkSafeBC registered', 'Residential & commercial', 'Written warranty'];

export const AUD = {
  home: { intro: 'Kitchen, bathroom and interior renovations first, with smaller repairs available too. Site conditions, selections and required approvals come before a final construction quote.', items: [
    ['Whole home renovations', 'Plan several rooms, finishes and the construction sequence together.'],
    ['Kitchen renovations', 'Cabinetry, counters, layout and interior finish planning.'],
    ['Bathrooms & ensuites', 'Showers, vanities, tile and complete bathroom updates.'],
    ['Condo renovations', 'Interior renovations planned around strata requirements and building access.'],
    ['Basement renovations', 'Lower-level living areas, bathrooms and interior finishing.'],
    ['Secondary suites', 'Conversion planning that starts with feasibility and required approvals.']
  ] },
  pro: { intro: 'Small work orders, rental turnovers, deficiencies, recurring maintenance and overflow repair work. Start with one work order or request our vendor documents.', items: [
    ['Strata & property managers', 'We answer the phone, take on individual work orders, and close them out with photos.'],
    ['Commercial properties', 'Insured, WorkSafeBC registered, and comfortable working in occupied buildings.'],
    ['GCs & subcontractors', 'Deficiency lists and finishing work, with written documentation.'],
    ['Handyman & small repairs', 'Smaller interior repairs, adjustments and property upkeep.'],
    ['Rental turnovers', 'Get units back on the market with one point of contact.'],
    ['Vendor-ready', 'Clear written scope, before-and-after photos, itemized invoicing. COI and WorkSafeBC clearance available.']
  ] }
};

export const TABS = [['home', 'Homeowners'], ['pro', 'Property managers & GCs']] as const;

export const REPAIRS = ['Attic repair', 'Drywall repair', 'Door repair', 'Tile, grout & caulking', 'Range hood installation'];

// Before/after pairs. `b` and `a` are file names in src/assets/sunify/.
export const PAIRS = [
  { t: 'Deck & privacy fence', k: 'North Vancouver', b: 'deck1-before.jpg', a: 'deck1-after.jpg', ratio: '3/4', d: 'A cedar slat privacy screen built into a new deck structure, adding privacy without closing off light or airflow.' },
  { t: 'Deck renovation', k: 'North Vancouver', b: 'deck2-before.jpg', a: 'deck2-after.jpg', ratio: '3/4', d: 'Worn deck and broken concrete steps rebuilt into new stairs and a refinished deck.' },
  { t: 'Fall yard cleanup', k: 'Greater Vancouver', b: 'yard-before.jpg', a: 'yard-after.jpg', ratio: '3/4', d: 'Leaf and debris removal from walkways and garden beds, with the path cleaned up after.' }
];

export const PATHS = [
  { t: 'Small repairs', d: 'Many small repairs can be reviewed from photos, so we can confirm scope and scheduling without an initial site visit.', dark: true, steps: [['Send photos', 'Text or upload photos of the repair.'], ['Confirm scope & availability', 'We confirm what’s needed and when we can be there.'], ['Done, with photos', 'Work completed and closed out with before-and-after photos.']] },
  { t: 'Larger projects', d: 'Kitchens, ensuites, several rooms or a separate living unit start with a consultation.', dark: false, steps: [['Consultation', 'Talk through the space, your priorities and the scope.'], ['Site conditions & approvals', 'Selections and any required approvals come before a final quote.'], ['Written quote', 'Itemized and transparent. You sign before we start.']] }
];

export const FALL = [
  ['Fall yard cleanup', 'Leaf removal and seasonal debris cleanup from walkways, yards and garden beds.'],
  ['Power washing', 'Driveways, patios and walkways, with the surface and cleaning method assessed first.'],
  ['Gutter cleaning', 'Clearing accumulated leaves and debris. We confirm access and scope before quoting.'],
  ['Roof care and repairs', 'Roof cleaning, moss removal and repairs, quoted separately after assessment.']
].map(([t, d]) => ({ t, d }));

export const WHY = [['$2M insured', 'Documentation available for strata councils and adjusters.'], ['Family business', 'Local, accountable, and personally invested in every project.'], ['Written quotes', 'Itemized, transparent, no surprises.'], ['On-time delivery', 'Clear scheduling, reliable communication and timely updates.'], ['Clean job sites', 'We protect your home, contain dust, and leave it cleaner than we found it.'], ['Warranty', 'Written workmanship warranty provided where applicable.']];

export const REVIEWS = [
  { q: 'Ramin did a great job. Managed to save the existing tile and complete the repair without having to source replacement tiles. Thank you.', w: 'Nancy · Coquitlam · Grout & tile repair · via HomeStars' },
  { q: 'Ramin is so easy to work with, sending daily updates and completed the work as planned.', w: 'Verified HomeStars client · North Vancouver · Rot & water damage repair' }
];

export const ROLES = ['Homeowner or landlord', 'Strata or property manager', 'Commercial property', 'General contractor'];

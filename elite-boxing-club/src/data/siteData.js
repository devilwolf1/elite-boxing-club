export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Coaches', to: '/coaches' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Schedule', to: '/schedule' },
  { label: 'Contact', to: '/contact' },
]

export const clubStats = [
  { value: '42', label: 'classes weekly' },
  { value: '8', label: 'elite coaches' },
  { value: '4,800', label: 'sq ft training floor' },
  { value: '14', label: 'years coaching fighters' },
]

export const programs = [
  {
    title: 'Boxing Fundamentals',
    summary:
      'A technical foundation for new members: stance, footwork, guard, jab mechanics, combinations, bag work, and ring etiquette.',
    details: ['Beginner friendly', 'Small groups', 'Form-first coaching'],
  },
  {
    title: 'Performance Conditioning',
    summary:
      'High-output rounds built around bags, pads, intervals, core strength, and mobility for members who want a fighter-level engine.',
    details: ['Metabolic training', 'Strength circuits', 'Coach-led pacing'],
  },
  {
    title: 'Private Coaching',
    summary:
      'One-on-one technical development with video review, mitt work, defensive drills, and a plan tailored to your goals.',
    details: ['Personal plan', 'Video feedback', 'Flexible scheduling'],
  },
  {
    title: 'Competitive Team',
    summary:
      'Invitation-based sparring, fight camp preparation, tactical sessions, and sanctioned amateur boxing development.',
    details: ['Advanced level', 'Fight camps', 'Sparring protocol'],
  },
]

export const coaches = [
  {
    name: 'Marcus Reed',
    role: 'Head Boxing Coach',
    specialty: 'Ring IQ, defense, fight strategy',
    bio:
      'A former national amateur finalist with 19 years on the canvas, Marcus builds disciplined fighters through precise fundamentals and calm tactical work.',
    record: '19 yrs coaching',
  },
  {
    name: 'Isabella Cruz',
    role: 'Technical Striking Coach',
    specialty: 'Footwork, combinations, pad work',
    bio:
      'Isabella is known for clean movement patterns and sharp pad sessions that help members punch with balance, rhythm, and confidence.',
    record: '2x Golden Gloves coach',
  },
  {
    name: 'Darius King',
    role: 'Strength and Conditioning Lead',
    specialty: 'Power, stamina, athletic performance',
    bio:
      'Darius programs fight-ready conditioning that builds durable shoulders, explosive hips, and the kind of engine that holds up late in the round.',
    record: 'CSCS certified',
  },
  {
    name: 'Elena Novak',
    role: 'Youth and Development Coach',
    specialty: 'Beginner progression, confidence, safety',
    bio:
      'Elena creates structured, supportive classes for new boxers and younger athletes while keeping expectations high and technique clean.',
    record: 'USA Boxing certified',
  },
]

export const pricingPlans = [
  {
    name: 'Open Gym',
    price: '$79',
    period: 'per month',
    description: 'For members who want premium facility access and independent bag work.',
    features: [
      'Unlimited open gym access',
      'Heavy bag and speed bag area',
      'Locker room and towel service',
      'Member app class booking',
    ],
  },
  {
    name: 'Unlimited Training',
    price: '$149',
    period: 'per month',
    description: 'The best fit for consistent training across technique and conditioning.',
    features: [
      'Unlimited group classes',
      'Open gym access included',
      'Monthly technique assessment',
      'Priority booking for peak hours',
    ],
    featured: true,
  },
  {
    name: 'Championship',
    price: '$289',
    period: 'per month',
    description: 'A complete coaching plan for members who want accelerated progress.',
    features: [
      'Everything in Unlimited Training',
      'Four private sessions monthly',
      'Video review and goal planning',
      'Sparring eligibility assessment',
    ],
  },
]

export const schedule = [
  {
    day: 'Monday',
    sessions: [
      { time: '6:00 AM', className: 'Boxing Conditioning', level: 'All levels' },
      { time: '12:15 PM', className: 'Fundamentals Lab', level: 'Beginner' },
      { time: '6:30 PM', className: 'Technical Boxing', level: 'Intermediate' },
    ],
  },
  {
    day: 'Tuesday',
    sessions: [
      { time: '7:00 AM', className: 'Bag and Core', level: 'All levels' },
      { time: '5:45 PM', className: 'Pad Work Clinic', level: 'Intermediate' },
      { time: '7:15 PM', className: 'Competition Team', level: 'Advanced' },
    ],
  },
  {
    day: 'Wednesday',
    sessions: [
      { time: '6:00 AM', className: 'Footwork and Defense', level: 'All levels' },
      { time: '12:15 PM', className: 'Express Conditioning', level: 'All levels' },
      { time: '6:30 PM', className: 'Power Combinations', level: 'Intermediate' },
    ],
  },
  {
    day: 'Thursday',
    sessions: [
      { time: '7:00 AM', className: 'Roadwork Strength', level: 'All levels' },
      { time: '5:45 PM', className: 'Fundamentals Lab', level: 'Beginner' },
      { time: '7:15 PM', className: 'Controlled Sparring', level: 'Approved only' },
    ],
  },
  {
    day: 'Friday',
    sessions: [
      { time: '6:00 AM', className: 'Championship Circuit', level: 'All levels' },
      { time: '12:15 PM', className: 'Mitt Work Express', level: 'Intermediate' },
      { time: '6:00 PM', className: 'Friday Fight Night', level: 'Advanced' },
    ],
  },
  {
    day: 'Saturday',
    sessions: [
      { time: '8:30 AM', className: 'Beginner Boxing', level: 'Beginner' },
      { time: '10:00 AM', className: 'Elite Conditioning', level: 'All levels' },
      { time: '11:30 AM', className: 'Youth Boxing', level: 'Ages 10-15' },
    ],
  },
]

export const testimonials = [
  {
    quote:
      'Elite Boxing Club feels like private coaching even in a group class. The standards are high, but the coaches explain every detail.',
    name: 'Jordan Ellis',
    title: 'Member since 2023',
  },
  {
    quote:
      'I came in for conditioning and stayed for the craft. My footwork, confidence, and endurance changed in the first three months.',
    name: 'Maya Bennett',
    title: 'Unlimited Training member',
  },
  {
    quote:
      'The Championship plan gave me structure, accountability, and sharper technique without the chaos you get at crowded gyms.',
    name: 'Andre Wallace',
    title: 'Amateur competitor',
  },
]

export const values = [
  {
    title: 'Technical Discipline',
    copy:
      'Every class is coached with intent. We teach the details that protect your body, sharpen your timing, and make progress measurable.',
  },
  {
    title: 'Premium Training Environment',
    copy:
      'Clean equipment, controlled class sizes, and a calm floor culture keep members focused on the work instead of fighting for space.',
  },
  {
    title: 'Respectful Intensity',
    copy:
      'We train hard without ego. Beginners, professionals, and competitors share the same standard: show up prepared and work with control.',
  },
]

export const amenities = [
  'Competition-size boxing ring',
  'Six heavy bag stations',
  'Speed bags and double-end bags',
  'Strength zone with sled track',
  'Recovery lounge',
  'Showers, lockers, and towel service',
]

export const contactDetails = [
  { label: 'Visit', value: '1846 West Grand Ave, Chicago, IL 60622' },
  { label: 'Call', value: '(312) 555-0198' },
  { label: 'Email', value: 'train@eliteboxingclub.com' },
  { label: 'Hours', value: 'Mon-Fri 5:30 AM-9:00 PM, Sat 8:00 AM-3:00 PM' },
]

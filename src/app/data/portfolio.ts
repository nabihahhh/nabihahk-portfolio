export interface Project {
  org: string;
  title: string;
  summary: string;
  tags: string[];
  status: 'Live' | 'Shipped' | 'Side project';
  link?: { label: string; url: string };
}

export interface Role {
  company: string;
  title: string;
  period: string;
  blurb: string;
  highlights: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const profile = {
  name: 'Nabihah Kassim',
  initials: 'NK',
  role: 'Full-stack software developer',
  location: 'Kuala Lumpur, Malaysia',
  email: 'nabihah.ksm@gmail.com',
  github: 'https://github.com/nabihahhh',
  linkedin: 'https://www.linkedin.com/in/nabihah-kassim',
  resume: 'resume.pdf',
  photo: 'nabihah.jpg',
};

export const stats = [
  { value: '4+', label: 'years of full-stack experience' },
  { value: 'EN · BM', label: 'bilingual customer flows' },
  { value: 'BinaQuote', label: 'side project, WIP' },];

export const projects: Project[] = [
  {
    org: 'PolicyStreet',
    title: 'Motor Insurance Quotation Microsite',
    summary:
      'Customer-facing quotation, add-on selection, payment and policy issuance flows, in English and Bahasa Malaysia across web and mobile.',
    tags: ['.NET Core', 'Angular', 'GCP'],
    status: 'Live',
  },
  {
    org: 'PolicyStreet',
    title: 'Insurer Premium Engine',
    summary:
      'Premium calculation logic for motor and motorcycle products — base premium, add-ons and windscreen rates — matched to each insurer’s rating rules.',
    tags: ['C#', 'Business logic', 'Integrations'],
    status: 'Live',
  },
  {
    org: 'PolicyStreet',
    title: 'White-label Partner Sites',
    summary:
      'Branded partner sites for automotive marketplaces, e-hailing and logistics partners, with partner-specific bundles and eligibility rules.',
    tags: ['Angular', 'Multi-tenant config'],
    status: 'Live',
  },
  {
    org: 'PolicyStreet',
    title: 'AI-powered OCR in the CRM',
    summary:
      'Extracts data from uploaded documents inside the in-house CRM, alongside SignalR real-time updates and bulk data operations.',
    tags: ['AI / OCR', 'SignalR', 'SQL Server'],
    status: 'Shipped',
  },
  {
    org: 'Side project',
    title: 'Policy Q&A',
    summary:
      'An AI assistant that answers questions about a motor insurance policy PDF and cites the exact clause and page for every answer.',
    tags: ['Angular', 'FastAPI', 'Claude API'],
    status: 'Side project',
    link: { label: 'View on GitHub', url: 'https://github.com/nabihahhh/policy-qa' },
  },
  {
    org: 'Side project',
    title: 'Virtual Street Walk',
    summary:
      'An immersive “Drive and Listen”-style experience for strolling through city streets virtually.',
    tags: ['JavaScript'],
    status: 'Side project',
    link: { label: 'Try it live', url: 'https://nabihahhh.github.io/virtual-street-walk' },
  },
];

export const services = [
  {
    title: 'Customer-facing web apps',
    body: 'Quote-to-checkout flows people rely on — responsive, bilingual and built to convert, from the Angular front end to the .NET API behind it.',
  },
  {
    title: 'Business logic & integrations',
    body: 'Turning rating rules, partner configs and third-party APIs into code that stays correct — insurers, payments and white-label partners.',
  },
  {
    title: 'Practical AI features',
    body: 'AI that earns its place: document OCR in production, and retrieval with cited answers using the Claude API.',
  },
];

export const roles: Role[] = [
  {
    company: 'PolicyStreet',
    title: 'Full Stack Software Developer',
    period: 'Oct 2024 – Present',
    blurb: 'Insurtech platform · Kuala Lumpur',
    highlights: [
      'Built and maintain the motor insurance quotation microsite (.NET Core + Angular) on GCP.',
      'Implemented insurer premium calculation logic for motor and motorcycle products.',
      'Delivered white-label partner sites for automotive, e-hailing and logistics partners.',
      'Shipped AI-powered OCR, SignalR real-time updates, an EV road-tax calculator and SQL Server optimisations in the CRM.',
      'Point of Contact for key projects; owns root-cause analysis for production support.',
    ],
  },
  {
    company: 'Tricor Roots Consulting',
    title: 'Full Stack Software Developer',
    period: 'Sep 2022 – Sep 2024',
    blurb: 'Client delivery',
    highlights: [
      'Delivered client features end-to-end from Functional Specification Documents in .NET Core and Angular.',
      'Owned bug resolution through SIT and UAT to meet quality and compliance requirements.',
      'PIC for multiple projects; handled SIT/UAT deployments and post-deployment verification.',
    ],
  },
  {
    company: 'InfinitiLab',
    title: 'Software Engineer Intern',
    period: 'Mar 2022 – Aug 2022',
    blurb: 'Internship',
    highlights: [
      'Full-stack development of a client-facing system with .NET, Angular and EF Core in an Agile team.',
    ],
  },
];

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'Python', 'Java'] },
  { label: 'Frontend', items: ['Angular', 'RxJS', 'HTML / CSS', 'Responsive & mobile web'] },
  {
    label: 'Backend',
    items: ['.NET Core', 'ASP.NET', 'Entity Framework Core', 'FastAPI', 'REST APIs', 'SignalR'],
  },
  {
    label: 'AI',
    items: ['Claude API', 'Document citations', 'Prompt caching', 'AI-powered OCR', 'Prompt engineering'],
  },
  { label: 'Data & Cloud', items: ['SQL Server', 'GCP Cloud Scheduler', 'GCP Cloud Storage'] },
  { label: 'Tools & Practices', items: ['Git', 'Bitbucket Pipelines', 'JIRA', 'Agile / Scrum', 'SIT / UAT'] },
];

export const education = [
  {
    school: 'International Islamic University Malaysia',
    title: 'Bachelor of Computer Science (Hons), Software Engineering',
    period: '2018 – 2022',
    note: 'CGPA 3.73',
  },
  {
    school: 'International Islamic University Malaysia',
    title: 'Foundation Programme',
    period: '2017 – 2018',
    note: '',
  },
];

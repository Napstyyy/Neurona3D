import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  figma,
  AWSAmplify,
  AngularLogo,
  Azure,
  Cpp,
  FlutterLogo,
  Laravel,
  Oracle,
  python,
  SwiftUI,
  SQL,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  PartnerHelper,
  Wijex,
  Freelancer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Cloud Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
    {
    name: "AWSAmplify",
    icon: AWSAmplify,
  },
  {
    name: "AngularLogo",
    icon: AngularLogo,
  },
    {
    name: "Azure",
    icon: Azure,
  },
    {
    name: "Cpp",
    icon: Cpp,
  },
    {
    name: "FlutterLogo",
    icon: FlutterLogo,
  },
      {
    name: "Laravel",
    icon: Laravel,
  },
      {
    name: "Oracle",
    icon: Oracle,
  },
      {
    name: "python",
    icon: python,
  },
  {
    name: "SQL",
    icon: SQL,
  },

  
];

const experiences = [
  {
    title: "Fullstack Developer - Mobile App Developer",
    company_name: "PartnerHelper",
    icon: PartnerHelper,
    iconBg: "#383E56",
    date: "November 2022 - November 2023",
    points: [
      "Data migration, customization, mining and management (Azure)",
      "Web plugins and UI/UX portals, web development (C#, .NET)",
      "Mobile application development (.NET MAUI, Swift)",
      "Web application development (React)",
    ],
  },
  {
    title: "Mobile App Developer - Chief Technology Officer",
    company_name: "Wijex",
    icon: Wijex,
    iconBg: "#E6DEDD",
    date: "November 2023",
    points: [
      "Architecting software solutions and implementing best practices for scalable code",
      "Leading a tech development team using Scrum methodology",
      "Specializing in mobile app development (Flutter)",
      "Developing robust backend systems with cloud infrastructure (AWS - GraphQL)",
      "Designing intuitive user interfaces (Figma)",
    ],
  },
  {
    title: "FullStack Dev - Mobile App Dev - Cloud Dev",
    company_name: "Freelancer",
    icon: Freelancer,
    iconBg: "#383E56",
    date: "Jan 2024",
    points: [
      "Developing and maintaining web applications (React.js - Wordpress - Angular - PHP Laravel - Node.js - Python)",
      "Cloud development tailored for specific tasks. (AWS - Azure - OCI)",
      "Developing mobile applications (React Native - Flutter)",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, experiences };

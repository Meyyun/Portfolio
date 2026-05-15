import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.webp';
import cdBlockerImage from '../images/portfolio/CDBlocker.png';
import realEstateImage from '../images/portfolio/RealEstate.png';
import squeezeImage from '../images/portfolio/Squezzed.png';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Sreileak Theap - Software Engineer',
  description: 'Full Stack Software Engineer specializing in React, Next.js, and Full Stack development. Based in Queens, NY.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi! I'm Srei Leak Theap.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently a
        <strong className="text-stone-100"> Machine Learning Research Intern at Alvarado Lab</strong> and recent graduate of
        <strong className="text-stone-100"> The Build Fellowship</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm Srei Leak Theap. I'm a Queens-based Full Stack Software Engineer, currently a Machine Learning Research Intern at Alvarado Lab and recent graduate of The Build Fellowship.`,
  aboutItems: [
    {label: 'Location', text: 'Queens, NY', Icon: MapIcon},
    {label: 'Education', text: 'BS Computer Science & Applied Mathematics', Icon: FlagIcon},
    {label: 'Interests', text: 'ML, Full-Stack Dev, Open Source', Icon: SparklesIcon},
    {label: 'Study', text: 'CUNY Queens College', Icon: AcademicCapIcon},
    {label: 'Current Role', text: 'ML Research Intern, Math Tutor', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Squeeze',
    description: 'AI-powered community campaign platform. 2nd Place Winner at Morgan Stanley Code to Give Hackathon. Built full-stack with FastAPI, PostgreSQL, Next.js, AWS Bedrock, and LangGraph.',
    url: 'https://github.com/TrackATeam4/TrackATeam4Project.git',
    image: squeezeImage,
    tags: ['Next.js', 'FastAPI', 'AWS Bedrock', 'PostgreSQL', 'LangGraph'],
  },
  {
    title: 'CD Blocker',
    description: 'Real-time AI detection app that detects and blurs credit cards and sensitive data with sub-300ms latency. Compatible with YouTube, Twitch, and OBS.',
    url: 'https://github.com/sahed-saad/cd-blocker.git',
    image: cdBlockerImage,
    tags: ['Python', 'React', 'OpenCV', 'BYTE Hacks 2025'],
  },
  {
    title: 'Real Estate Platform',
    description: 'Interactive property mapping platform with Mapbox visualization for zoning and property data. GraphQL with Apollo Client for optimized data fetching and caching.',
    url: 'https://github.com/Meyyun/Interactive_Map_OpenAvenue.git',
    image: realEstateImage,
    tags: ['React', 'TypeScript', 'Next.js', 'Mapbox', 'GraphQL'],
  },
  {
    title: 'HackKnight',
    description: '1st place in Most Popular Vote at HackKnight Fall 2025. A collaborative hackathon project showcasing creative problem solving and full-stack development.',
    url: 'https://github.com/xiajieou/HackKnight.git',
    image: 'https://opengraph.githubassets.com/1/xiajieou/HackKnight',
    tags: ['HackKnight 2025', '1st Place Popular Vote'],
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Expected May 2028',
    location: 'Queens, NY',
    title: 'Bachelor of Science in Computer Science and Applied Mathematics',
    content: (
      <p>
        CUNY Queens College | GPA: 3.8/4.0 | Dean's List (Fall 2024, Spring 2025)
        <br />
        Relevant Coursework: Data Structures & Algorithms, OOP (C++, Java), Calculus I-III, Linear Algebra, Computer Assembly
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'February 2026 - Present',
    location: 'New York City, NY',
    title: 'Machine Learning Research Intern',
    content: (
      <p>
        <strong>Alvarado Lab</strong>
        <br />
        Assisted in calibrating pose estimation software (AlphaPose, SLEAP, mmPose) and developed Python pipelines processing 1,000+ video frames, extracting 20+ biomechanical features with 25% preprocessing time reduction.
        Annotated martial arts behavioral sequences using ethogram methods and built visualization tools for trajectory analysis, improving efficiency by 30%.
        Supported ML workflows including feature extraction, dataset preparation, and exploratory data analysis.
      </p>
    ),
  },
  {
    date: 'Sep 2025 - Nov 2025',
    location: 'New York City, NY',
    title: 'Build Student Consultant, Software Engineering',
    content: (
      <p>
        <strong>The Build Fellowship</strong>
        <br />
        Engineered a real estate web platform using React, TypeScript, and Next.js with interactive Mapbox visualization for zoning and property data.
        Integrated GraphQL with Apollo Client for optimized data retrieval and caching between property databases and dynamic map components.
        Designed responsive, accessible UI with Material UI while collaborating in agile environment through PRs, code reviews, and technical documentation.
      </p>
    ),
  },
  {
    date: 'January 2026 - Present',
    location: 'New York City, NY',
    title: 'College Assistant - Math Tutor',
    content: (
      <p>
        <strong>Math Lab, Queens College</strong>
        <br />
        Tutored 25+ undergraduate students per semester in Pre-Calculus through Advanced Calculus and Linear Algebra.
        Achieved 80%+ student improvement rate of at least one letter grade through one-on-one and group tutoring.
        Broke down complex calculus and matrix problems into structured, step-by-step solutions.
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out! I am always interested in learning about new opportunities and connecting with fellow engineers.',
  items: [
    {
      type: ContactType.Email,
      text: 'theapsreileak@gmail.com',
      href: 'mailto:theapsreileak@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Queens, NY',
      href: 'https://www.google.com/maps/place/Queens,+NY',
    },
    {
      type: ContactType.Github,
      text: 'GitHub',
      href: 'https://github.com/Meyyun',
    },
    {
      type: ContactType.LinkedIn,
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/sreileak-theap-41167a312',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Meyyun'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/sreileak-theap-41167a312'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com'},
];

// src/data/blogData.ts

// import React from "react";

// import MasteringReactPerformance2024 from "./articles/mastering-react-performance-2024";
// import BuildingAccessibleWebApps from "./articles/building-accessible-web-applications";
// import ModernCssGridLayouts from "./articles/modern-css-grid-layouts";
// import JavaScriptES2025 from "./articles/javascript-es2025-whats-new";
// import CoreWebVitalsGuide from "./articles/core-web-vitals-guide";
// import ReduxVsZustand from "./articles/react-state-management-redux-toolkit-vs-zustand";
// import FlexboxVsCssGrid from "./articles/flexbox-vs-css-grid-choosing-the-right-tool";
// import FrontendTechStackGuide from "./articles/frontend-tech-stack-2025-the-complete-guide";
// import StateManagementDeepDive from "./articles/react-state-management-deep-dive-2025";
// import React19Next15Guide from "./articles/react-19-next-15-guide";
// import ApiDataFetchingGuide from "./articles/api-data-fetching-react-guide";

// const modules = import.meta.glob("./articles/*.tsx", { eager: true });

// export const articlesData = Object.entries(modules).map(([path, mod]) => {
//   const slug = path.split("/").pop()?.replace(".tsx", "") || "";
//   const metadata = (mod as { metadata: Omit<Article, "slug" | "id"> }).metadata;
//   return {
//     slug,
//     ...metadata,
//   };
// });

export interface Author {
  name: string;
  avatar: string;
  title: string;
  bio: string;
  social: {
    twitter: string;
    linkedin: string;
    github: string;
  };
}

export interface Article {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  sections?: {
    intro: string;
    measurePerformance: string;
    memoization: string;
    architecture: string;
    holisticPerformance: string;
    conclusion: string;
  };
  category: string;
  readTime: string;
  publishDate: string;
  image: string;
  featured: boolean;
  tags: string[];
  author: Author;
  // contentComponent: React.ComponentType;
}

const defaultAuthor: Author = {
  name: "Rebhe Ibrahim",
  avatar: "/images/about/rebhe-ibrahim-web-developer.png",
  title: "Digital Experience Architect",
  bio: "Passionate about building high-performance web applications that scale, convert, and deliver exceptional user experiences. Let's connect!",
  social: {
    twitter: "https://twitter.com/rebhe_1643",
    linkedin: "https://linkedin.com/in/rebhe-ibrahim-451504244",
    github: "https://github.com/rebhi-2002",
  },
};

export const articlesData: Article[] = [
  {
    id: 1,
    slug: "mastering-react-performance-2024",
    title: "Mastering React Performance: Complete Guide 2024",
    excerpt:
      "Learn advanced techniques to optimize your React applications for maximum performance and user experience.",
    category: "React",
    readTime: "11 min",
    publishDate: "2025-07-20",
    image: "/images/articles/mastering-react-performance-2024-header.png",
    featured: false,
    tags: ["React", "Performance", "Optimization"],
    author: defaultAuthor,
    // contentComponent: MasteringReactPerformance2024,
  },
  {
    id: 2,
    slug: "building-accessible-web-applications",
    title: "Building Accessible Web Applications",
    excerpt:
      "A comprehensive guide to creating inclusive web experiences that work for everyone.",
    category: "Best Practices",
    readTime: "9 min",
    publishDate: "2025-07-24",
    image: "/images/articles/building-accessible-web-applications-header.png",
    featured: false,
    tags: ["Accessibility", "UX", "Web Standards"],
    author: defaultAuthor,
    // contentComponent: BuildingAccessibleWebApps,
  },
  {
    id: 3,
    slug: "modern-css-grid-layouts",
    title: "Modern CSS Grid Layouts: Beyond the Basics",
    excerpt:
      "Explore advanced CSS Grid techniques to create complex, responsive layouts with ease.",
    category: "Design",
    readTime: "10 min",
    publishDate: "2025-07-24",
    image: "/images/articles/modern-css-grid-layouts-header.png",
    featured: false,
    tags: ["CSS", "Grid", "Responsive Design"],
    author: defaultAuthor,
    // contentComponent: ModernCssGridLayouts,
  },
  {
    id: 4,
    slug: "javascript-es2025-whats-new",
    title: "JavaScript ES2025: What's New and Why It Matters",
    excerpt:
      "A developer's guide to the most impactful features in ES2025, from new Set methods to the game-changing Pipe Operator.",
    category: "JavaScript",
    readTime: "9 min",
    publishDate: "2025-07-25",
    image: "/images/articles/javascript-es2025-header.png",
    featured: false,
    tags: ["JavaScript", "ES2025", "ECMAScript", "Pipe Operator"],
    author: defaultAuthor,
    // contentComponent: JavaScriptES2025,
  },
  {
    id: 5,
    slug: "core-web-vitals-guide",
    title: "Core Web Vitals: A Practical Guide to Measuring What Matters",
    excerpt:
      "A developer's guide to understanding, measuring, and optimizing Google's Core Web Vitals (LCP, INP, CLS) to boost performance, UX, and SEO ranking.",
    category: "Performance",
    readTime: "12 min",
    publishDate: "2024-11-25",
    image: "/images/articles/core-web-vitals-guide-header.png",
    featured: false,
    tags: ["Performance", "SEO", "Web Vitals", "LCP", "INP", "CLS", "UX"],
    author: defaultAuthor,
    // contentComponent: CoreWebVitalsGuide,
  },
  {
    id: 6,
    slug: "react-state-management-redux-toolkit-vs-zustand",
    title:
      "React State Management: Redux Toolkit vs. Zustand - A 2025 Showdown",
    excerpt:
      "A deep-dive comparison of the battle-tested Redux Toolkit and the minimalist Zustand. We break down the differences in boilerplate, performance, and philosophy to help you choose the right tool.",
    category: "React",
    readTime: "13 min",
    publishDate: "2025-07-25",
    image: "/images/articles/redux-vs-zustand-header.png",
    featured: true,
    tags: [
      "React",
      "Redux Toolkit",
      "Zustand",
      "State Management",
      "Hooks",
      "Flux",
    ],
    author: defaultAuthor,
    // contentComponent: ReduxVsZustand,
  },
  {
    id: 7,
    slug: "flexbox-vs-css-grid-choosing-the-right-tool",
    title: "Flexbox vs. Grid: Choosing the Right CSS Layout Tool",
    excerpt:
      "A practical guide to understanding the core differences between Flexbox and CSS Grid, and when to use each for professional, modern web layouts.",
    category: "Design",
    readTime: "10 min",
    publishDate: "2025-07-25",
    image: "/images/articles/flexbox-vs-css-grid-header.png",
    featured: false,
    tags: ["CSS", "Flexbox", "Grid", "Layout", "Responsive Design"],
    author: defaultAuthor,
    // contentComponent: FlexboxVsCssGrid,
  },
  {
    id: 8,
    slug: "frontend-tech-stack-2025-the-complete-guide",
    title: "The Frontend Tech Stack 2025: A Complete Visual Guide",
    excerpt:
      "From React and Vite to Zustand and Playwright, this is a comprehensive guide to the essential tools and technologies for modern frontend development.",
    category: "Web Development",
    readTime: "15 min",
    publishDate: "2025-07-26",
    image: "/images/articles/frontend-tech-stack-2025-header.png",
    featured: false,
    tags: ["Frontend", "Tech Stack", "React", "Vite", "JavaScript", "CSS"],
    author: defaultAuthor,
    // contentComponent: FrontendTechStackGuide,
  },
  {
    id: 9,
    slug: "react-state-management-deep-dive-2025",
    title: "A Deep Dive into React State Management for 2025",
    excerpt:
      "From Redux Toolkit's structured approach to Zustand's minimalist hooks, this guide breaks down the top state management libraries to help you choose the right one.",
    category: "React",
    publishDate: "2025-07-27",
    image: "/images/articles/react-state-management-deep-dive-header.png",
    featured: false,
    tags: [
      "React",
      "State Management",
      "Redux Toolkit",
      "Zustand",
      "Jotai",
      "Recoil",
      "MobX",
    ],
    author: defaultAuthor,
    // contentComponent: StateManagementDeepDive,
    readTime: "14 min",
  },
  {
    id: 10,
    slug: "react-19-next-15-guide",
    title: "React 19 & Next.js 15: A Deep Dive Into the New Era",
    excerpt:
      "From the automatic memoization of the React Compiler to Partial Prerendering in Next.js, explore the paradigm shifts that are redefining modern web development.",
    category: "React & Ecosystem",
    publishDate: "2025-07-28",
    image: "/images/articles/react-19-next-15-header.png",
    featured: false,
    tags: ["React 19", "Next.js 15", "React Compiler", "Server Actions", "PPR"],
    author: defaultAuthor,
    // contentComponent: React19Next15Guide,
    readTime: "14 min",
  },
  {
    id: 11,
    slug: "api-data-fetching-react-guide",
    title: "API & Data Fetching in React: The Complete Guide",
    excerpt:
      "From the classic useEffect to the power of React Query and SWR, this guide covers the best strategies for managing server state in modern React applications.",
    category: "React & Ecosystem",
    publishDate: "2025-08-05",
    image: "/images/articles/api-data-fetching-react-guide-header.png",
    featured: false,
    tags: ["React", "API", "Data Fetching", "React Query", "SWR", "useEffect"],
    author: defaultAuthor,
    // contentComponent: ApiDataFetchingGuide,
    readTime: "14 min",
  },
  {
    id: 12,
    slug: "react-styling-and-ui-components-guide",
    title: "The Ultimate Guide to Styling & UI Components in React",
    excerpt:
      "From Tailwind CSS and CSS-in-JS to component libraries like Shadcn/ui and MUI, we explore the best strategies for building beautiful and maintainable React UIs.",
    category: "CSS & Design",
    publishDate: "2025-08-05",
    image: "/images/articles/react-styling-ui-components-header.png",
    featured: false,
    tags: [
      "React",
      "CSS",
      "Styling",
      "Tailwind CSS",
      "UI Components",
      "MUI",
      "Shadcn/ui",
    ],
    author: defaultAuthor,
    // contentComponent: StylingAndUiComponentsGuide,
    readTime: "14 min",
  },
];

export const recommendedReadsData = [
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    description: "Essential reading for building products efficiently.",
    link: "https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898",
  },
  {
    title: "Don't Make Me Think",
    author: "Steve Krug",
    description: "Timeless principles of intuitive web usability.",
    link: "https://www.amazon.com/Dont-Make-Me-Think-Revisited/dp/0321965515",
  },
  {
    title: "Clean Code",
    author: "Robert Martin",
    description: "A guide to writing maintainable and readable code.",
    link: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
  },
  {
    title: "Hooked",
    author: "Nir Eyal",
    description: "How to build habit-forming products.",
    link: "https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products/dp/1591847788",
  },
];

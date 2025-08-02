// src/data/articles/frontend-tech-stack-2025.tsx

import React from "react";
import TableOfContents from "../../components/TableOfContents";
import {
  Box,
  Code,
  Layers,
  TestTube,
  Cloud,
  Shield,
  Database,
  PenTool,
  CheckSquare,
} from "lucide-react";
import TechCategoryCard from "../../components/TechCategoryCard";

// ================================================================
// مكون احترافي جديد ومميز لهذه المقالة
// ================================================================
// const TechCategoryCard = ({
//   icon,
//   title,
//   description,
//   tools,
// }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   tools: string[];
// }) => (
//   <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 flex flex-col md:flex-row gap-6">
//     <div className="flex-shrink-0 text-blue-400">{icon}</div>
//     <div className="flex-grow">
//       <h2
//         id={title.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}
//         className="text-3xl font-bold mb-3 mt-3 text-blue-400 scroll-mt-20"
//       >
//         {title}
//       </h2>
//       <p className="text-lg text-gray-300 leading-relaxed mb-4">
//         {description}
//       </p>
//       <div className="flex flex-wrap gap-2">
//         {tools.map((tool) => (
//           <span
//             key={tool}
//             className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-mono"
//           >
//             {tool}
//           </span>
//         ))}
//       </div>
//     </div>
//   </section>
// );

const tocHeadings = [
  { id: "frameworks-libraries", title: "Frameworks & Libraries" },
  { id: "styling-ui-components", title: "Styling & UI Components" },
  { id: "state-management", title: "State Management" },
  { id: "build-tools-bundlers", title: "Build Tools & Bundlers" },
  { id: "testing-tools", title: "Testing Tools" },
  { id: "api-data-fetching", title: "API & Data Fetching" },
  { id: "form-handling", title: "Form Handling" },
  { id: "authentication-auth", title: "Authentication & Auth" },
  { id: "deployment-hosting", title: "Deployment & Hosting" },
];

const FrontendTechStackGuide = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <section>
        <h2 className="text-3xl font-bold mb-4 mt-4 text-blue-400">
          The 2025 Frontend Tech Stack: A Visual Guide
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          In a world of unprecedented digital acceleration, user interfaces have
          become the true face of any digital product. Understanding the
          frontend development ecosystem is a necessity for every developer
          aiming to deliver a seamless, aesthetic, and high-performance user
          experience. In this article, we'll take you on an analytical tour of
          the tools and technologies that shape the modern frontend.
        </p>
      </section>

      <TableOfContents headings={tocHeadings} />

      <TechCategoryCard
        icon={<Layers className="h-12 w-12 my-3" />}
        title="Frameworks & Libraries"
        description="Tools for building dynamic interfaces and managing component architecture. These libraries are used to produce high-performance, interactive applications based on a Component-Based Architecture."
        tools={["React", "Vue.js", "Svelte", "Next.js", "Solid.js"]}
      />

      <TechCategoryCard
        icon={<PenTool className="h-12 w-12 my-3" />}
        title="Styling & UI Components"
        description="Tools for designing and styling applications and user interfaces. They enable you to build beautiful, responsive, and easily customizable interfaces."
        tools={[
          "Tailwind CSS",
          "Bootstrap",
          "Material UI",
          "Chakra UI",
          "Shadcn/ui",
        ]}
      />

      <TechCategoryCard
        icon={<Box className="h-12 w-12 my-3" />}
        title="State Management"
        description="For managing application state and synchronizing it across components. These tools allow you to handle changing data in complex applications efficiently and organized."
        tools={["Redux", "Recoil", "MobX", "Zustand", "Jotai"]}
        href="/blog/react-state-management-deep-dive-2025"
      />

      <TechCategoryCard
        icon={<Code className="h-12 w-12 my-3" />}
        title="Build Tools & Bundlers"
        description="Tools for compiling, bundling, and optimizing code performance. They contribute to reducing file sizes, speeding up load times, and improving user experience."
        tools={["Vite", "Webpack", "Rollup", "Parcel", "esbuild"]}
      />

      <TechCategoryCard
        icon={<TestTube className="h-12 w-12 my-3" />}
        title="Testing Tools"
        description="Tools for unit, integration, and end-to-end testing. They help ensure code stability and expected behavior through effective automated tests."
        tools={[
          "Jest",
          "Vitest",
          "Cypress",
          "Playwright",
          "React Testing Library",
        ]}
      />

      <TechCategoryCard
        icon={<Database className="h-12 w-12 my-3" />}
        title="API & Data Fetching"
        description="For managing asynchronous data and communicating with the server. They make it easy to fetch data, cache it, and synchronize it with the user interface."
        tools={["Axios", "React Query", "SWR", "GraphQL Apollo", "tRPC"]}
      />

      <TechCategoryCard
        icon={<CheckSquare className="h-12 w-12 my-3" />}
        title="Form Handling"
        description="For validating forms and managing their state. These tools simplify data input, validation, and user interaction with forms."
        tools={["React Hook Form", "Formik", "Zod", "Yup", "Valibot"]}
      />

      <TechCategoryCard
        icon={<Shield className="h-12 w-12 my-3" />}
        title="Authentication & Auth"
        description="For identity verification and user session management. They provide multiple options to secure your applications and protect user data."
        tools={[
          "Auth0",
          "Clerk",
          "Firebase Auth",
          "Supabase Auth",
          "NextAuth.js",
        ]}
      />

      <TechCategoryCard
        icon={<Cloud className="h-12 w-12 my-3" />}
        title="Deployment & Hosting"
        description="For easily deploying and hosting frontend applications. Cloud tools that allow you to deploy your project quickly, provide preview versions, and achieve high performance."
        tools={[
          "Vercel",
          "Netlify",
          "Firebase Hosting",
          "Render",
          "Cloudflare Pages",
        ]}
      />

      <section>
        <h2
          id="conclusion"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          How to Use This Guide
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          This tech stack is not a checklist, but a map. Your path through it
          depends on your project's needs and your current skill level:
        </p>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-300">
          <li>
            <strong>For Beginners:</strong> Start with the core (HTML, CSS, JS),
            then pick one framework like React or Vue. Add tools as you
            encounter problems they solve.
          </li>
          <li>
            <strong>For Intermediate Developers:</strong> Explore the categories
            you're less familiar with. If you're strong in React, dive deep into
            Data Fetching with React Query or advanced styling with Tailwind.
          </li>
          <li>
            <strong>For Experts:</strong> Use this as a reference to evaluate
            new tools for your next project. Is Vite faster than your current
            Webpack setup? Is Zustand a better fit than Redux for your new
            micro-frontend?
          </li>
        </ul>
        <blockquote className="border-l-4 border-blue-500 bg-gray-800/50 p-6 my-8 italic text-gray-200 text-xl">
          In 2025, it's not just about 'writing code'; it's about building
          intelligent, seamless, and responsive systems. These tools are your
          arsenal in that mission.
        </blockquote>
      </section>
    </div>
  );
};

export default FrontendTechStackGuide;

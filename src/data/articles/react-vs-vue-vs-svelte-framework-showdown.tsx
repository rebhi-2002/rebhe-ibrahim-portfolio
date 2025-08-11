// src/data/articles/react-vs-vue-vs-svelte-framework-showdown.tsx

import TableOfContents from "../../components/blog/TableOfContents";
import CodeBlock from "../../components/blog/CodeBlock";
import { InfoBox } from "../../components/blog/ArticleCallouts";

const FrameworkCard = ({
  logo,
  title,
  children,
}: {
  logo: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
    <div className="flex items-center gap-4 mb-4 mt-4">
      <img
        src={logo}
        alt={`${title} logo`}
        className={`h-12 w-12 object-contain transition-all duration-300 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.4)] ${
          logo.includes("react") ? "animate-spin-slow" : ""
        }`}
      />
      <h3 className="text-2xl font-bold text-blue-400">{title}</h3>
    </div>
    <div className="text-lg text-gray-300 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const ComparisonTable = () => (
  <div className="overflow-x-auto rounded-lg border border-gray-700 my-6">
    <table className="w-full my-0 text-left bg-gray-800/50">
      <thead className="bg-gray-700/50">
        <tr>
          <th className="p-4 text-lg font-semibold text-blue-400">Aspect</th>
          <th className="p-4 text-lg font-semibold text-white">React</th>
          <th className="p-4 text-lg font-semibold text-white">Vue</th>
          <th className="p-4 text-lg font-semibold text-white">Svelte</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-gray-700">
          <td className="p-4">
            <strong>Paradigm</strong>
          </td>
          <td className="p-4">Library (Unopinionated)</td>
          <td className="p-4">Framework (Progressive)</td>
          <td className="p-4">Compiler</td>
        </tr>
        <tr className="border-t border-gray-700">
          <td className="p-4">
            <strong>DOM</strong>
          </td>
          <td className="p-4">Virtual DOM</td>
          <td className="p-4">Virtual DOM</td>
          <td className="p-4">No Virtual DOM (Surgical updates)</td>
        </tr>
        <tr className="border-t border-gray-700">
          <td className="p-4">
            <strong>Learning Curve</strong>
          </td>
          <td className="p-4">Moderate (JSX & hooks)</td>
          <td className="p-4">Easy (Templates & Options API)</td>
          <td className="p-4">Easy (Feels like HTML/CSS/JS)</td>
        </tr>
        <tr className="border-t border-gray-700">
          <td className="p-4">
            <strong>State Management</strong>
          </td>
          <td className="p-4">External (Redux, Zustand)</td>
          <td className="p-4">Built-in (Pinia)</td>
          <td className="p-4">Built-in (Stores)</td>
        </tr>
      </tbody>
    </table>
  </div>
);

// ================================================================
// 2. بيانات جدول المحتويات
// ================================================================
const tocHeadings = [
  { id: "intro", title: "The Battle of the Component-Based Kings" },
  { id: "react", title: "React: The Unopinionated Library" },
  { id: "vue", title: "Vue: The Progressive Framework" },
  { id: "svelte", title: "Svelte: The Disappearing Framework" },
  { id: "comparison-table", title: "At a Glance: The Showdown Table" },
  { id: "conclusion", title: "Conclusion: Which One is for You?" },
];

// ================================================================
// 3. المكون الرئيسي للمقالة
// ================================================================
const FrameworksShowdown = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <section>
        <h2
          id="intro"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          The Battle of the Component-Based Kings
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          In the world of frontend development, choosing a primary tool is a
          critical decision. While many options exist, three names consistently
          dominate the conversation: React, Vue, and Svelte. All three share a
          component-based philosophy but differ fundamentally in their approach,
          performance, and developer experience. This guide provides a deep-dive
          comparison to help you understand their core differences and choose
          the right tool for your next project.
        </p>
        <InfoBox>
          <strong>Why not Angular?</strong> While Angular is a powerful
          platform, it's a full-fledged, opinionated framework often used in
          large enterprise environments. React, Vue, and Svelte are more
          comparable as they offer more flexibility and are often seen as direct
          competitors for a wider range of projects.
        </InfoBox>
      </section>

      <TableOfContents headings={tocHeadings} />

      <section className="space-y-8">
        <h2
          id="react"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          React: The Unopinionated Library
        </h2>
        <FrameworkCard
          logo="/images/logos/react.svg"
          title="Philosophy & Approach"
        >
          <p>
            React is a JavaScript library for building user interfaces. Its key
            strength is its unopinionated nature. It gives you the power to
            build components using JSX, but leaves routing, state management,
            and other concerns to the vast third-party ecosystem. This provides
            ultimate flexibility.
          </p>
        </FrameworkCard>
        <CodeBlock
          code={`
            import { useState } from 'react';

            function Counter() {
              const [count, setCount] = useState(0);
              return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
            }
        `}
        />
      </section>

      <section className="space-y-8">
        <h2
          id="vue"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Vue: The Progressive Framework
        </h2>
        <FrameworkCard
          logo="/images/logos/vue.svg"
          title="Philosophy & Approach"
        >
          <p>
            Vue describes itself as a "progressive framework." You can use it as
            a simple library for small parts of a page, or adopt its full
            ecosystem (routing, state management with Pinia) for a complete
            single-page application. Its single-file components (`.vue` files)
            and template-based syntax are often praised for their readability
            and ease of use.
          </p>
        </FrameworkCard>
        <CodeBlock
          language="html"
          code={`
            <script setup>
            import { ref } from 'vue'
            const count = ref(0)
            </script>

            <template>
              <button @click="count++">Count: {{ count }}</button>
            </template>
        `}
        />
      </section>

      <section className="space-y-8">
        <h2
          id="svelte"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Svelte: The Disappearing Framework
        </h2>
        <FrameworkCard
          logo="/images/logos/svelte.svg"
          title="Philosophy & Approach"
        >
          <p>
            Svelte is radically different. It's a compiler that takes your
            declarative component code and turns it into highly efficient,
            imperative JavaScript that surgically updates the DOM. There is no
            Virtual DOM, which results in smaller bundle sizes and often faster
            performance. Its syntax is the closest to plain HTML, CSS, and JS.
          </p>
        </FrameworkCard>
        <CodeBlock
          language="html"
          code={`
            <script>
              let count = 0;
              function handleClick() {
                count += 1;
              }
            </script>

            <button on:click={handleClick}>
              Count: {count}
            </button>
        `}
        />
      </section>

      <section>
        <h2
          id="comparison-table"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          At a Glance: The Showdown Table
        </h2>
        <ComparisonTable />
      </section>

      <section>
        <h2
          id="conclusion"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Conclusion: Which One is for You?
        </h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 mt-4">
          <li>
            <strong>Choose React if:</strong> You value the largest ecosystem,
            maximum flexibility, and a huge talent pool. It's the industry
            standard for a reason and a safe bet for any project size.
          </li>
          <li>
            <strong>Choose Vue if:</strong> You prioritize developer experience,
            a gentle learning curve, and a well-integrated official ecosystem.
            It's a fantastic choice for teams who want a balance between
            flexibility and structure.
          </li>
          <li>
            <strong>Choose Svelte if:</strong> Top-tier performance and small
            bundle sizes are your main priorities. It's an excellent choice for
            highly interactive pages, web components, or projects where every
            kilobyte matters.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default FrameworksShowdown;

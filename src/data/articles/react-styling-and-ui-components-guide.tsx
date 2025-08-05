// src/data/articles/react-styling-and-ui-components-guide.tsx

import TableOfContents from "../../components/blog/TableOfContents";
import CodeBlock from "../../components/blog/CodeBlock";
import {
  InfoBox,
  ConsCard,
  ProsCard,
} from "../../components/blog/ArticleCallouts";

const tocHeadings = [
  { id: "intro", title: "The Modern Styling Challenge" },
  { id: "strategy-1", title: "Strategy 1: Utility-First with Tailwind CSS" },
  { id: "strategy-2", title: "Strategy 2: CSS-in-JS" },
  { id: "strategy-3", title: "Strategy 3: All-in-One Component Libraries" },
  { id: "strategy-4", title: "Strategy 4: The Modern Hybrid (Shadcn/ui)" },
  { id: "conclusion", title: "Conclusion: Which Strategy is Right for You?" },
];

const StylingAndUiComponentsGuide = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <section>
        <h2
          id="intro"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          The Modern Styling Challenge
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Styling in a component-based world is a complex challenge. How do we
          create beautiful, consistent, and maintainable UIs without our styles
          leaking and becoming a tangled mess? The React ecosystem offers
          several powerful, competing philosophies. This guide will break down
          the four major strategies to help you choose the right one for your
          next project.
        </p>
      </section>

      <TableOfContents headings={tocHeadings} />

      <section>
        <h2
          id="strategy-1"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Strategy 1: Utility-First with Tailwind CSS
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          This is currently the most popular approach. Instead of writing custom
          CSS classes, you build designs by applying pre-existing, low-level
          utility classes directly in your JSX.
        </p>
        <CodeBlock
          language="jsx"
          code={`
          function ProductCard({ name, price }) {
            return (
              <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-white">{name}</h3>
                <p className="mt-2 text-blue-400">{price}</p>
              </div>
            );
          }
        `}
        />
        <ProsCard title="Strengths">
          <ul className="list-disc list-inside space-y-1">
            <li>Extremely fast for rapid prototyping and development.</li>
            <li>
              Enforces a consistent design system (spacing, colors, etc.).
            </li>
            <li>No context switching between JSX and CSS files.</li>
          </ul>
        </ProsCard>
        <ConsCard title="Weaknesses">
          <ul className="list-disc list-inside space-y-1">
            <li>JSX can become verbose and cluttered with many classes.</li>
            <li>
              Can have a steeper learning curve for developers new to the
              utility-first concept.
            </li>
          </ul>
        </ConsCard>
      </section>

      <section>
        <h2
          id="strategy-2"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Strategy 2: CSS-in-JS (Emotion & Styled-Components)
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          This approach involves writing your CSS styles directly inside your
          JavaScript/TypeScript files. Libraries like Emotion and
          Styled-Components create components with styles attached, ensuring
          perfect encapsulation.
        </p>
        <CodeBlock
          language="jsx"
          code={`
          import styled from 'styled-components';

          const Card = styled.div\`
            background-color: #1f2937; /* bg-gray-800 */
            padding: 1.5rem; /* p-6 */
            border-radius: 0.5rem; /* rounded-lg */
          \`;

          function ProductCard({ name, price }) {
            return (
              <Card>
                <h3>{name}</h3>
                <p>{price}</p>
              </Card>
            );
          }
        `}
        />
        <ProsCard title="Strengths">
          <ul className="list-disc list-inside space-y-1">
            <li>Truly scoped styles that don't leak.</li>
            <li>Easy to create dynamic styles based on component props.</li>
            <li>Keeps component logic and styling co-located.</li>
          </ul>
        </ProsCard>
        <ConsCard title="Weaknesses">
          <ul className="list-disc list-inside space-y-1">
            <li>Can add runtime performance overhead.</li>
            <li>May increase initial bundle size.</li>
            <li>
              Can be less familiar to developers with a traditional CSS
              background.
            </li>
          </ul>
        </ConsCard>
      </section>

      <section>
        <h2
          id="strategy-3"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Strategy 3: All-in-One Component Libraries (MUI & Chakra UI)
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          These libraries provide a comprehensive set of pre-built and
          pre-styled components (buttons, modals, forms, etc.). You import them
          and use them directly, allowing you to build complex UIs incredibly
          fast.
        </p>
        <ProsCard title="Strengths">
          <ul className="list-disc list-inside space-y-1">
            <li>Fastest way to build complex UIs like dashboards.</li>
            <li>Ensures consistency and accessibility out of the box.</li>
            <li>Excellent documentation and community support.</li>
          </ul>
        </ProsCard>
        <ConsCard title="Weaknesses">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Less design freedom; apps can look generic or "cookie-cutter".
            </li>
            <li>
              Customizing components to match a unique brand can be difficult.
            </li>
            <li>
              Can add significant weight to your application's bundle size.
            </li>
          </ul>
        </ConsCard>
      </section>

      <section>
        <h2
          id="strategy-4"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Strategy 4: The Modern Hybrid - Shadcn/ui & Headless UI
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          This new approach offers the best of both worlds. It uses "headless"
          libraries like Radix UI to provide accessible behaviors and
          functionality, and then styles them with Tailwind CSS. Shadcn/ui is
          not a library, but a collection of pre-built components that you copy
          and paste directly into your project.
        </p>
        <InfoBox>
          <strong>The Key Benefit:</strong> You are not installing a dependency.
          You own the code. This gives you complete control over styling,
          functionality, and accessibility, combining the speed of pre-built
          components with the flexibility of custom development.
        </InfoBox>
        <ProsCard title="Strengths">
          <ul className="list-disc list-inside space-y-1">
            <li>Complete design control.</li>
            <li>Accessibility and behavior are handled for you.</li>
            <li>
              No "black box" dependencies; you own and can modify the code.
            </li>
          </ul>
        </ProsCard>
        <ConsCard title="Weaknesses">
          <ul className="list-disc list-inside space-y-1">
            <li>Requires more initial setup than a full component library.</li>
            <li>
              You are responsible for maintaining the component code you've
              copied.
            </li>
          </ul>
        </ConsCard>
      </section>

      <section>
        <h2
          id="conclusion"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Conclusion: Which Strategy is Right for You?
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          There's no single best answer, but here's a quick guide:
        </p>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-300 mt-4">
          <li>
            <strong>Choose Tailwind CSS if:</strong> You have a custom design
            system and value rapid development speed.
          </li>
          <li>
            <strong>Choose CSS-in-JS if:</strong> Your components have highly
            dynamic styles that depend heavily on props or state.
          </li>
          <li>
            <strong>Choose MUI or Chakra UI if:</strong> You're building an
            internal tool or dashboard and need to move fast without a unique
            brand identity.
          </li>
          <li>
            <strong>Choose the Shadcn/ui approach if:</strong> You want a
            unique, custom-designed application but don't want to build every
            accessible component from scratch. This is often the best choice for
            modern product development.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default StylingAndUiComponentsGuide;

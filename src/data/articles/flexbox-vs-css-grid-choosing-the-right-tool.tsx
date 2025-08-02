// src/data/articles/flexbox-vs-css-grid.tsx

import { Rows, Columns, Box, Package } from "lucide-react";
import TableOfContents from "../../components/TableOfContents";
import CodeBlock from "../../components/CodeBlock";
import FeatureCard from "../../components/FeatureCard";
import ComparisonTable from "../../components/ComparisonTable";

const tocHeadings = [
  { id: "intro", title: "Introduction: Two Tools, One Goal" },
  { id: "flexbox", title: "Meet Flexbox: The Champion of One-Dimension" },
  { id: "grid", title: "Meet Grid: The Master of Two-Dimensions" },
  { id: "comparison", title: "Head-to-Head Comparison" },
  { id: "verdict", title: "The Verdict: When to Use Which (and Both!)" },
];

const comparisonData = [
  {
    feature: "Dimensions",
    flexbox: "One-dimensional (Row OR Column)",
    grid: "Two-dimensional (Row AND Column)",
  },
  {
    feature: "Primary Use",
    flexbox: "Aligning items within a component",
    grid: "Overall page layout",
  },
  {
    feature: "Item Wrapping",
    flexbox: "Can wrap, but less controllably",
    grid: "Powerful, explicit control over wrapping",
  },
  {
    feature: "Design Approach",
    flexbox: "Content-first",
    grid: "Layout-first",
  },
];

const FlexboxVsCssGrid = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <section>
        <h2
          id="intro"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Introduction: Two Tools, One Goal
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          In modern web development, the debate is no longer "should I use
          Flexbox or Grid?" but rather "WHEN should I use Flexbox or Grid?".
          Both are incredibly powerful tools for creating layouts, but they are
          designed to solve different problems. Understanding their core
          strengths is the key to building clean, efficient, and responsive
          interfaces. This guide will break down what each tool does best.
        </p>
      </section>

      <TableOfContents headings={tocHeadings} />

      <section>
        <h2
          id="flexbox"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Meet Flexbox: The Champion of One-Dimension
        </h2>
        <FeatureCard
          icon={<Rows className="h-8 w-8 text-blue-400" />}
          title="One-Dimensional Alignment & Distribution"
        >
          Flexbox excels at arranging items in a single line, either as a row or
          a column. Its power lies in distributing space and aligning items
          within that line. Think of it as the perfect tool for component-level
          layouts.
        </FeatureCard>
        <p className="text-lg text-gray-300 leading-relaxed mt-6 mb-4">
          Use Flexbox when you need to align a navigation bar, space out buttons
          in a card footer, or vertically center content inside a div.
        </p>
        <CodeBlock
          language="css"
          code={`
          .nav-bar {
            display: flex;
            justify-content: space-between; /* Distributes items along the row */
            align-items: center; /* Vertically aligns items */
          }
        `}
        />
      </section>

      <section>
        <h2
          id="grid"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Meet Grid: The Master of Two-Dimensions
        </h2>
        <FeatureCard
          icon={<Columns className="h-8 w-8 text-blue-400" />}
          title="Two-Dimensional Page Layout"
        >
          Grid is designed for creating complex, two-dimensional layouts
          involving both rows and columns simultaneously. It gives you precise
          control over the entire page structure, allowing items to span
          multiple rows and columns. It's the ideal tool for the overall
          architecture of your page.
        </FeatureCard>
        <p className="text-lg text-gray-300 leading-relaxed mt-6 mb-4">
          Use Grid for your main application layout, photo galleries, or any
          component where you need to align items across a strict grid system.
        </p>
        <CodeBlock
          language="css"
          code={`
          .page-layout {
            display: grid;
            grid-template-columns: 200px 1fr; /* Sidebar and main content */
            grid-template-rows: auto 1fr auto; /* Header, content, footer */
            grid-template-areas:
              "header header"
              "sidebar main"
              "footer footer";
          }
        `}
        />
      </section>

      <section>
        <h2
          id="comparison"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Head-to-Head Comparison
        </h2>
        <ComparisonTable data={comparisonData} />
      </section>

      <section>
        <h2
          id="verdict"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          The Verdict: When to Use Which (and Both!)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400 flex items-center gap-3">
              <Box className="h-6 w-6" />
              Use Flexbox when:
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed space-y-2">
              <li>
                You are arranging items in a single dimension (a row or a
                column).
              </li>
              <li>
                You need to align and distribute space within a component (e.g.,
                a navbar, a card).
              </li>
              <li>
                Your design is content-first and you want items to wrap
                naturally.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400 flex items-center gap-3">
              <Package className="h-6 w-6" />
              Use Grid when:
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-300 leading-relaxed space-y-2">
              <li>You are creating the overall layout for an entire page.</li>
              <li>
                You need to align items in two dimensions (rows and columns).
              </li>
              <li>
                You want to create complex, asymmetrical, or overlapping
                layouts.
              </li>
            </ul>
          </div>
        </div>
        <blockquote className="border-l-4 border-blue-500 bg-gray-800/50 p-6 my-8 italic text-gray-200 text-xl">
          The professional secret: **Don't choose one. Use them together.** Use
          Grid for the main page structure and Flexbox for aligning the
          components inside that structure.
        </blockquote>
      </section>
    </div>
  );
};

export default FlexboxVsCssGrid;

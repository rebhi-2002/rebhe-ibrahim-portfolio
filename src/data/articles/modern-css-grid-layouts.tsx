// src/data/articles/modern-css-grid-layouts.tsx

import TableOfContents from "../../components/TableOfContents";
import CodeBlock from "../../components/CodeBlock";

const tocHeadings = [
  { id: "intro", title: "Introduction to Modern Grid" },
  { id: "grid-areas", title: "Declarative Layouts with Grid Areas" },
  {
    id: "responsive-grids",
    title: "Intrinsic Responsiveness without Media Queries",
  },
  { id: "dense-packing", title: "Filling Gaps with Dense Packing" },
  { id: "subgrid", title: "Aligning Nested Grids with Subgrid" },
  { id: "conclusion", title: "Conclusion: The Power of Modern CSS" },
];

const ModernCssGridLayouts = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <section>
        <h2
          id="intro"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Introduction to Modern Grid
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          CSS Grid has revolutionized how we approach web layout, moving us from
          float-based hacks to a powerful, two-dimensional system. While the
          basics are powerful, the true potential of Grid is unlocked when you
          dive into its advanced features. This guide explores several modern
          techniques to create complex, intrinsically responsive, and
          maintainable layouts with ease.
        </p>
      </section>

      <TableOfContents headings={tocHeadings} />

      <section>
        <h2
          id="grid-areas"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Declarative Layouts with Grid Areas
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          One of the most readable ways to define a layout is with
          `grid-template-areas`. This property allows you to name your grid
          areas and arrange them in a visual, ASCII-art-like format. It makes
          your layout logic incredibly easy to understand and modify, especially
          for page-level structures.
        </p>
        <CodeBlock
          language="css"
          code={`
            .container {
              display: grid;
              grid-template-columns: 1fr 3fr 1fr;
              grid-template-rows: auto 1fr auto;
              grid-template-areas:
                "header header header"
                "nav    main   aside"
                "footer footer footer";
              gap: 1rem;
              min-height: 100vh;
            }

            .header { grid-area: header; }
            .nav    { grid-area: nav; }
            .main   { grid-area: main; }
            .aside  { grid-area: aside; }
            .footer { grid-area: footer; }
          `}
        />
      </section>

      <section>
        <h2
          id="responsive-grids"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Intrinsic Responsiveness without Media Queries
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Forget writing complex media queries for every breakpoint. With
          `repeat()`, `auto-fit`, and `minmax()`, you can create fluid grids
          that automatically adjust the number of columns to fit the available
          space. This is a game-changer for component galleries and card
          layouts.
        </p>
        <CodeBlock
          language="css"
          code={`
            .card-gallery {
              display: grid;
              /* Create as many columns as will fit.
                 Each column will be a minimum of 300px,
                 and will expand to fill any remaining space.
              */
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 1.5rem;
            }
          `}
        />
      </section>

      <section>
        <h2
          id="dense-packing"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Filling Gaps with Dense Packing
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          When you have grid items of varying sizes, the default algorithm can
          leave empty spaces. By setting `grid-auto-flow: dense`, you instruct
          the browser to backtrack and fill these empty slots with smaller items
          that appear later in the DOM, creating a tightly packed,
          "masonry-style" layout without JavaScript.
        </p>
        <CodeBlock
          language="css"
          code={`
            .masonry-layout {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
              grid-auto-rows: 50px;
              grid-auto-flow: dense;
            }

            .item-large {
              grid-column: span 2;
              grid-row: span 2;
            }
          `}
        />
      </section>

      <section>
        <h2
          id="subgrid"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Aligning Nested Grids with Subgrid
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          A long-awaited feature, `subgrid` allows a nested grid container to
          adopt the track sizing of its parent grid. This solves the common
          problem of aligning items across complex, nested components. When a
          grid item also becomes a grid container, you can set its columns or
          rows to `subgrid` to make its children align perfectly with the main
          grid.
        </p>
        <CodeBlock
          language="css"
          code={`
            .parent-grid {
              display: grid;
              grid-template-columns: 1fr 2fr 1fr;
              gap: 1rem;
            }

            .card {
              grid-column: 1 / -1; /* Card spans all parent columns */
              display: grid;
              /* The card's columns are now inherited from the parent! */
              grid-template-columns: subgrid;
              gap: inherit; /* Inherit the gap too */
            }

            .card-title {
              /* Spans the first two tracks of the PARENT grid */
              grid-column: 1 / 3;
            }
          `}
        />
      </section>

      <section>
        <h2
          id="conclusion"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Conclusion: The Power of Modern CSS
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          CSS Grid is more than just a tool for columns and rows; it's a
          complete system for creating sophisticated and resilient layouts. By
          mastering advanced features like named areas, fluid sizing with
          `minmax()`, dense packing, and `subgrid`, you can build designs that
          were once difficult or impossible with CSS alone, all while writing
          cleaner and more maintainable code.
        </p>
      </section>
    </div>
  );
};

export default ModernCssGridLayouts;

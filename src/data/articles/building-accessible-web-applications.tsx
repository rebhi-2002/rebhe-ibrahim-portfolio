// src/data/articles/building-accessible-web-applications.tsx

import TableOfContents from "../../components/blog/TableOfContents";
import CodeBlock from "../../components/blog/CodeBlock";

const tocHeadings = [
  { id: "why-it-matters", title: "Why Accessibility Matters" },
  { id: "semantic-html", title: "Semantic HTML: The Unbreakable Foundation" },
  { id: "keyboard-navigation", title: "Keyboard Navigation is Non-Negotiable" },
  { id: "aria-roles", title: "The Power of ARIA for Rich Applications" },
  { id: "inclusive-design", title: "Inclusive Design and Visuals" },
  { id: "conclusion", title: "Conclusion: An Ongoing Process" },
];

const BuildingAccessibleWebApps = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <section>
        <h2
          id="why-it-matters"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Why Accessibility Matters
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Web accessibility (often abbreviated as a11y) is the inclusive
          practice of ensuring there are no barriers that prevent interaction
          with, or access to, websites on the World Wide Web by people with
          physical disabilities, situational disabilities, and socio-economic
          restrictions on bandwidth and speed. It's not just a feature or a
          checklist; it's a fundamental aspect of creating a web that works for
          everyone. Prioritizing accessibility leads to better products for all
          users, improved SEO, and in many regions, legal compliance.
        </p>
      </section>

      <TableOfContents headings={tocHeadings} />

      <section>
        <h2
          id="semantic-html"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Semantic HTML: The Unbreakable Foundation
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          The cornerstone of an accessible website is using HTML elements for
          their correct purpose. Screen readers and other assistive technologies
          rely on the semantic meaning of tags to interpret the content and
          structure of a page. Using a <code>&lt;div&gt;</code> for everything
          and styling it to look like a button is a common anti-pattern that
          breaks accessibility.
        </p>
        <CodeBlock
          language="html"
          code={`
            <div class="button" onclick="doSomething()">Click me</div>
            <button onclick="doSomething()">Click me</button>
          `}
        />
        <p className="text-lg text-gray-300 leading-relaxed">
          Always use landmarks like <code>&lt;header&gt;</code>,{" "}
          <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, and{" "}
          <code>&lt;footer&gt;</code> to define the structure of your page. This
          allows users with assistive technology to quickly navigate to the
          section they need.
        </p>
      </section>

      <section>
        <h2
          id="keyboard-navigation"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Keyboard Navigation is Non-Negotiable
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Many users navigate the web without a mouse, relying solely on a
          keyboard or other input devices. Ensure all interactive
          elements—links, buttons, form fields—are reachable and operable using
          the Tab key. Crucially, you must provide a visible focus indicator so
          users know where they are on the page. Modern browsers do this well
          with <code>:focus-visible</code>.
        </p>
        <CodeBlock
          language="css"
          code={`
            /* Enhance the default browser focus state for better visibility */
            :focus-visible {
              outline: 3px solid #3b82f6; /* A bright blue outline */
              outline-offset: 2px;
              border-radius: 4px;
            }
          `}
        />
      </section>

      <section>
        <h2
          id="aria-roles"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          The Power of ARIA for Rich Applications
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          ARIA (Accessible Rich Internet Applications) is a set of attributes
          you can add to HTML elements to improve their accessibility,
          especially for complex UI components like modals, tabs, and custom
          dropdowns. ARIA helps bridge the gap where semantic HTML alone isn't
          enough to describe the role or state of a component.
        </p>
        <CodeBlock
          code={`
            <button
              aria-expanded={isOpen}
              aria-controls="my-menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              My Menu
            </button>
            <div id="my-menu" role="menu" hidden={!isOpen}>
              {/* Menu content */}
            </div>
          `}
        />
        <blockquote className="border-l-4 border-blue-500 bg-gray-800/50 p-4 my-6 italic text-gray-300">
          <p>
            The first rule of ARIA is: don't use ARIA. If you can use a native
            HTML element that is already accessible (like{" "}
            <code>&lt;button&gt;</code> or <code>&lt;dialog&gt;</code>), use it
            instead.
          </p>
        </blockquote>
      </section>

      <section>
        <h2
          id="inclusive-design"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Inclusive Design and Visuals
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Accessibility also extends to visual design. Ensure your text has
          sufficient color contrast against its background (WCAG recommends a
          ratio of at least 4.5:1 for normal text). Provide descriptive{" "}
          <code>alt</code> text for all meaningful images so users with screen
          readers can understand the visual content.
        </p>
        <CodeBlock
          language="html"
          code={`
            <img src="chart.png" alt="chart">
            <img src="chart.png" alt="A bar chart showing a 30% increase in user engagement for Q3.">
          `}
        />
      </section>

      <section>
        <h2
          id="conclusion"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Conclusion: An Ongoing Process
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Building accessible web applications is a continuous effort, not a
          final destination. By integrating these principles into your daily
          workflow, you create digital experiences that are not only compliant
          but also more usable and welcoming to everyone. Start with semantic
          HTML, test with your keyboard, and always consider the diverse needs
          of your users.
        </p>
      </section>
    </div>
  );
};

export default BuildingAccessibleWebApps;

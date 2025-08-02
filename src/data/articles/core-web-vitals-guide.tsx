// src/data/articles/core-web-vitals-guide.tsx

import TableOfContents from "../../components/TableOfContents";
import CodeBlock from "../../components/CodeBlock";
import { WarningBox } from "../../components/ArticleCallouts";

const tocHeadings = [
  { id: "intro", title: "What Are Core Web Vitals?" },
  {
    id: "lcp",
    title: "Largest Contentful Paint (LCP): Perceived Loading Speed",
  },
  { id: "inp", title: "Interaction to Next Paint (INP): Responsiveness" },
  { id: "cls", title: "Cumulative Layout Shift (CLS): Visual Stability" },
  { id: "tools", title: "Tools for Measuring Your Vitals" },
  { id: "conclusion", title: "Conclusion: A User-Centric Approach" },
];

const CoreWebVitalsGuide = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <section>
        <h2
          id="intro"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          What Are Core Web Vitals?
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Core Web Vitals are a set of specific metrics that Google considers
          crucial for a website's overall user experience. They measure
          real-world user experience for loading performance, interactivity, and
          visual stability of a page. A good score in Core Web Vitals can lead
          to better engagement, lower bounce rates, and a ranking boost in
          Google search results.
        </p>
      </section>

      <TableOfContents headings={tocHeadings} />

      <section>
        <h2
          id="lcp"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Largest Contentful Paint (LCP): Perceived Loading Speed
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          LCP measures the time it takes for the largest content element (e.g.,
          a hero image or a large block of text) to become visible within the
          viewport. It's a key indicator of how quickly a user feels that the
          page is useful. A good LCP score is **2.5 seconds or less**.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
          How to Fix Common LCP Issues:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-300 leading-relaxed">
          <li>
            <strong>Optimize Images:</strong> Compress images and use modern
            formats like WebP or AVIF.
          </li>
          <li>
            <strong>Preload Critical Resources:</strong> Tell the browser to
            fetch your main LCP image sooner.
          </li>
          <li>
            <strong>Reduce Server Response Time (TTFB):</strong> Use a CDN and
            efficient server-side caching.
          </li>
        </ul>
        <CodeBlock
          language="html"
          code={`
            <link rel="preload" fetchpriority="high" as="image" href="/path/to/hero-image.webp" type="image/webp">
          `}
        />
      </section>

      <section>
        <h2
          id="inp"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Interaction to Next Paint (INP): Responsiveness
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          INP measures how quickly a page responds to user interactions, such as
          clicks, taps, or key presses. It observes the latency of all
          interactions throughout a user's visit and reports a single value. A
          low INP means the page feels responsive and smooth. A good INP score
          is **200 milliseconds or less**.
        </p>
        <WarningBox>
          <strong>Heads Up!</strong> INP has officially replaced First Input
          Delay (FID) as a Core Web Vital as of March 2024. INP is a more
          comprehensive measure of overall responsiveness.
        </WarningBox>
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
          How to Fix Common INP Issues:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-300 leading-relaxed">
          <li>
            <strong>Break Up Long Tasks:</strong> Split long-running JavaScript
            into smaller chunks using `setTimeout` or `requestIdleCallback`.
          </li>
          <li>
            <strong>Optimize Event Callbacks:</strong> Keep your event handling
            code lean and fast.
          </li>
          <li>
            <strong>Avoid Excessive DOM Size:</strong> A large and complex DOM
            tree can slow down rendering and interactivity.
          </li>
        </ul>
        <CodeBlock
          language="javascript"
          code={`
            // Breaking up a long task
            function processLargeArray(array) {
              let i = 0;
              function doChunk() {
                const end = Math.min(i + 100, array.length);
                for (; i < end; i++) {
                  // process item
                }
                if (i < array.length) {
                  setTimeout(doChunk, 0); // Yield to the main thread
                }
              }
              doChunk();
            }
          `}
        />
      </section>

      <section>
        <h2
          id="cls"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Cumulative Layout Shift (CLS): Visual Stability
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          CLS measures the visual stability of a page by quantifying how much
          its content unexpectedly shifts around during loading. A low CLS score
          ensures a delightful experience, preventing users from accidentally
          clicking the wrong thing because an ad or image suddenly loaded. A
          good CLS score is **0.1 or less**.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
          How to Fix Common CLS Issues:
        </h3>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-300 leading-relaxed">
          <li>
            <strong>Include Dimensions on Images/Videos:</strong> Always provide
            `width` and `height` attributes.
          </li>
          <li>
            <strong>Reserve Space for Ads:</strong> If you have ad slots, define
            their size so they don't push content down.
          </li>
          <li>
            <strong>Avoid Inserting Content Above Existing Content:</strong>{" "}
            Load new UI elements below the fold.
          </li>
        </ul>
        <CodeBlock
          language="html"
          code={`
            <img src="my-image.jpg" width="1200" height="800" alt="...">

            <img src="my-image.jpg" alt="...">
          `}
        />
      </section>

      <section>
        <h2
          id="tools"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Tools for Measuring Your Vitals
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          You can't improve what you don't measure. Use these tools to track
          your Core Web Vitals:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-300 leading-relaxed">
          <li>
            <strong>PageSpeed Insights:</strong> Provides both lab and
            real-world (field) data for any public URL.
          </li>
          <li>
            <strong>Google Search Console:</strong> Shows a report of your
            site's performance based on real user data.
          </li>
          <li>
            <strong>Lighthouse:</strong> A developer tool within Chrome for
            auditing performance (lab data).
          </li>
          <li>
            <strong>Web Vitals Chrome Extension:</strong> Measures the vitals
            for your site in real-time as you browse.
          </li>
        </ul>
      </section>

      <section>
        <h2
          id="conclusion"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Conclusion: A User-Centric Approach
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Optimizing for Core Web Vitals is fundamentally about optimizing for
          your users. By focusing on a fast, responsive, and stable experience,
          you're not just appeasing search engines—you're building a better
          product. Treat these metrics as a guide, and continuously monitor and
          improve them as part of your development lifecycle.
        </p>
      </section>
    </div>
  );
};

export default CoreWebVitalsGuide;

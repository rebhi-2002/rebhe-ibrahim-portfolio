// src/data/articles/mastering-react-performance-2024.tsx

import TableOfContents from "../../components/TableOfContents";
import CodeBlock from "../../components/CodeBlock";

const tocHeadings = [
  { id: "step-1", title: "Step 1: Measure, Don't Guess" },
  { id: "step-2", title: "Step 2: Mastering Memoization" },
  { id: "step-3", title: "Step 3: Architectural Patterns" },
  { id: "step-4", title: "Step 4: Holistic Performance Wins" },
  {
    id: "conclusion",
    title: "Conclusion: Building a Performance-First Culture",
  },
];

const MasteringReactPerformance2024 = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <section>
        <h2 className="text-3xl font-bold mb-4 mt-4 text-blue-400">
          Why Performance is the Cornerstone of User Experience
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          In the modern digital landscape, performance isn't just a technical
          metric; it's a critical component of the user experience. A slow,
          janky application leads to user frustration, higher bounce rates, and
          ultimately, a negative impact on business goals. For React
          applications, which power some of the most dynamic interfaces on the
          web, maintaining optimal performance is paramount. This guide provides
          a comprehensive walkthrough of the strategies and tools you need to
          build exceptionally fast React applications in 2024.
        </p>
      </section>

      <TableOfContents headings={tocHeadings} />

      <section>
        <h2
          id="step-1"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Step 1: Measure, Don't Guess
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Before you can optimize, you must identify the bottlenecks. Blindly
          applying performance fixes can be counterproductive. The first rule of
          optimization is to measure everything.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
          Using the React Profiler
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          The React DevTools include a powerful Profiler that helps you find
          performance issues. It records how long your components take to render
          and why they re-render, allowing you to pinpoint costly operations.
        </p>
        <CodeBlock
          code={`
            import { Profiler } from 'react';

            function onRenderCallback(
              id, phase, actualDuration, baseDuration, startTime, commitTime, interactions
            ) {
              console.log(\`\${id}'s \${phase} phase took \${actualDuration}ms\`);
            }

            function App() {
              return (
                <Profiler id="App" onRender={onRenderCallback}>
                  <MyComponent />
                </Profiler>
              );
            }
          `}
        />
        <p className="text-lg text-gray-300 leading-relaxed">
          Use the Profiler to identify components that render too often or take
          too long. Look for wide, yellow bars in the flamegraph, as they
          indicate expensive renders.
        </p>
      </section>

      <section>
        <h2
          id="step-2"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Step 2: Mastering Memoization to Prevent Re-Renders
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          One of the most common performance issues in React is unnecessary
          re-renders. Memoization is a technique to cache the results of
          expensive operations and return the cached result when the same inputs
          occur again.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
          Memoizing Components with React.memo
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          <code>React.memo</code> is a higher-order component that memoizes your
          component. If its props don't change, React will skip re-rendering the
          component and reuse the last rendered result.
        </p>
        <CodeBlock
          code={`
            const MyComponent = React.memo(function MyComponent(props) {
              /* render using props */
            });
          `}
        />
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
          Memoizing Values and Functions with useMemo and useCallback
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          <code>useMemo</code> caches the result of a calculation between
          re-renders, while <code>useCallback</code> caches a function
          definition. This is crucial when passing functions or objects as props
          to memoized child components.
        </p>
        <CodeBlock
          code={`
            function ParentComponent({ a, b }) {
              const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
              
              const handleClick = useCallback(() => {
                // handle click
              }, []);

              return <ChildComponent value={expensiveValue} onClick={handleClick} />;
            }
          `}
        />
        <blockquote className="border-l-4 border-blue-500 bg-gray-800/50 p-4 my-6 italic text-gray-300">
          <p>
            "The cost of memoization isn't free. Profile your application to
            ensure you're optimizing a real bottleneck, not just adding
            complexity."
          </p>
        </blockquote>
      </section>

      <section>
        <h2
          id="step-3"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Step 3: Architectural Patterns for a Faster App
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Why make your users download code for a feature they might never use?
          Code-splitting breaks your app into smaller chunks that are loaded on
          demand.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
          Code-Splitting with React.lazy and Suspense
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          React.lazy and Suspense make code-splitting incredibly simple. Wrap
          your dynamically imported component in <code>Suspense</code> to show a
          loading state while it's being fetched.
        </p>
        <CodeBlock
          code={`
            import React, { Suspense } from 'react';
            const OtherComponent = React.lazy(() => import('./OtherComponent'));

            function MyComponent() {
              return (
                <div>
                  <Suspense fallback={<div>Loading...</div>}>
                    <OtherComponent />
                  </Suspense>
                </div>
              );
            }
          `}
        />
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
          Virtualizing Large Lists
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          Rendering thousands of items in a list can freeze your application.
          Virtualization (or "windowing") solves this by only rendering the
          items currently visible in the viewport. Libraries like{" "}
          <code>react-window</code> are excellent for this.
        </p>
        <CodeBlock
          code={`
            import { FixedSizeList as List } from 'react-window';

            const MyList = () => (
              <List height={500} itemCount={10000} itemSize={35} width={300}>
                {({ index, style }) => (
                  <div style={style}>Row {index}</div>
                )}
              </List>
            );
          `}
        />
      </section>

      <section>
        <h2
          id="step-4"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Step 4: Holistic Performance Wins
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          True performance optimization extends beyond your React code. A fast
          application is the sum of all its parts, from the server to the
          client.
        </p>
        <ul className="list-disc list-inside space-y-4 text-lg text-gray-300 leading-relaxed">
          <li className="pl-2">
            <strong className="font-semibold text-blue-400">
              Image Optimization:
            </strong>{" "}
            Use modern formats like WebP/AVIF and lazy-load offscreen images.
            Frameworks like Next.js provide powerful, built-in image components.
          </li>
          <li className="pl-2">
            <strong className="font-semibold text-blue-400">
              Efficient State Management:
            </strong>{" "}
            Choose a state management library that fits your needs. Zustand
            offers a minimal API with automatic optimization, while Redux
            provides robust tooling and explicit control with selectors.
          </li>
          <li className="pl-2">
            <strong className="font-semibold text-blue-400">
              Debouncing and Throttling:
            </strong>{" "}
            Use these techniques to limit the rate at which a function gets
            called, perfect for handling user input in search bars or window
            resize events.
          </li>
        </ul>
      </section>

      <section>
        <h2
          id="conclusion"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Conclusion: Building a Performance-First Culture
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          React performance is not a one-time fix but an ongoing practice. By
          integrating these techniques into your development workflow, you can
          build applications that are not only feature-rich but also incredibly
          fast and responsive. Start by measuring, identify the real issues, and
          apply targeted optimizations. Your users—and your bottom line—will
          thank you for it.
        </p>
      </section>
    </div>
  );
};

export default MasteringReactPerformance2024;

// import { useState } from "react";
// import { Check, Clipboard } from "lucide-react";
// import TableOfContents from "../../components/TableOfContents";

// // ----------------------------------------------------------------
// // 1. Component that updates a copy button
// // ----------------------------------------------------------------
// const CodeBlock = ({ code }: { code: string }) => {
//   const [hasCopied, setHasCopied] = useState(false);

//   const handleCopy = () => {
//     navigator.clipboard.writeText(code.trim());
//     setHasCopied(true);
//     setTimeout(() => {
//       setHasCopied(false);
//     }, 2000);
//   };

//   return (
//     <div className="relative my-6 group">
//       <button
//         onClick={handleCopy}
//         className="absolute top-3 right-3 p-2 bg-gray-700/60 hover:bg-gray-600/80 rounded-md transition-all opacity-0 group-hover:opacity-100"
//         aria-label="Copy code"
//       >
//         {hasCopied ? (
//           <Check className="h-4 w-4 text-green-400" />
//         ) : (
//           <Clipboard className="h-4 w-4 text-gray-400" />
//         )}
//       </button>
//       <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-5 text-sm overflow-x-auto border border-gray-700 shadow-inner">
//         <code className="language-jsx text-blue-200 font-mono leading-relaxed block whitespace-pre">
//           {code.trim()}
//         </code>
//       </pre>
//     </div>
//   );
// };

// // ----------------------------------------------------------------
// // 2. Table of contents data
// // ----------------------------------------------------------------
// const tocHeadings = [
//   { id: "step-1", title: "Step 1: Measure, Don't Guess" },
//   { id: "step-2", title: "Step 2: Mastering Memoization" },
//   { id: "step-3", title: "Step 3: Architectural Patterns" },
//   { id: "step-4", title: "Step 4: Holistic Performance Wins" },
//   { id: "conclusion", title: "Conclusion" },
// ];

// // ----------------------------------------------------------------
// // 3. Main component of the article
// // ----------------------------------------------------------------
// const MasteringReactPerformance2024 = () => {
//   return (
//     <div className="flex flex-col gap-y24">
//       <section className="mt-4 mb-8">
//         <h2 className="text-3xl font-bold text-blue-400">
//           Why Performance is the Cornerstone of User Experience
//         </h2>
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           In the modern digital landscape, performance isn't just a technical
//           metric; it's a critical component of the user experience. A slow,
//           janky application leads to user frustration, higher bounce rates, and
//           ultimately, a negative impact on business goals. For React
//           applications, which power some of the most dynamic interfaces on the
//           web, maintaining optimal performance is paramount. This guide provides
//           a comprehensive walkthrough of the strategies and tools you need to
//           build exceptionally fast React applications in 2024.
//         </p>
//       </section>

//       <TableOfContents headings={tocHeadings} />

//       <section className="mt-4__mb-8">
//         <h2
//           id="step-1"
//           className="text-3xl font-bold text-blue-400 scroll-mt-20"
//         >
//           Step 1: Measure, Don't Guess
//         </h2>
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           Before you can optimize, you must identify the bottlenecks. Blindly
//           applying performance fixes can be counterproductive. The first rule of
//           optimization is to measure everything.
//         </p>
//         <h3 className="text-2xl font-semibold mb-3 text-blue-400">
//           Using the React Profiler
//         </h3>
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           The React DevTools include a powerful Profiler that helps you find
//           performance issues. It records how long your components take to render
//           and why they re-render, allowing you to pinpoint costly operations.
//         </p>
//         <CodeBlock
//           code={`import { Profiler } from 'react';\n\nfunction onRenderCallback(\n  id, phase, actualDuration, baseDuration, startTime, commitTime, interactions\n) {\n  console.log(\`\${id}'s \${phase} phase took \${actualDuration}ms\`);\n}\n\nfunction App() {\n  return (\n    <Profiler id="App" onRender={onRenderCallback}>\n      <MyComponent />\n    </Profiler>\n  );\n}`}
//         />
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           Use the Profiler to identify components that render too often or take
//           too long. Look for wide, yellow bars in the flamegraph, as they
//           indicate expensive renders.
//         </p>
//       </section>

//       <section className="mt-4__mb-8">
//         <h2
//           id="step-2"
//           className="text-3xl font-bold text-blue-400 scroll-mt-20"
//         >
//           Step 2: Mastering Memoization to Prevent Re-Renders
//         </h2>
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           One of the most common performance issues in React is unnecessary
//           re-renders. Memoization is a technique to cache the results of
//           expensive operations and return the cached result when the same inputs
//           occur again.
//         </p>
//         <h3 className="text-2xl font-semibold mb-3 text-blue-400">
//           Memoizing Components with React.memo
//         </h3>
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           <code>React.memo</code> is a higher-order component that memoizes your
//           component. If its props don't change, React will skip re-rendering the
//           component and reuse the last rendered result.
//         </p>
//         <CodeBlock
//           code={`const MyComponent = React.memo(function MyComponent(props) {\n  /* render using props */\n});`}
//         />
//         <h3 className="text-2xl font-semibold mb-3 text-blue-400">
//           Memoizing Values and Functions with useMemo and useCallback
//         </h3>
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           <code>useMemo</code> caches the result of a calculation between
//           re-renders, while <code>useCallback</code> caches a function
//           definition. This is crucial when passing functions or objects as props
//           to memoized child components.
//         </p>
//         <CodeBlock
//           code={`function ParentComponent({ a, b }) {\n  const expensiveValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);\n  const handleClick = useCallback(() => {\n    // handle click\n  }, []);\n  return <ChildComponent value={expensiveValue} onClick={handleClick} />;\n}`}
//         />
//         <blockquote className="border-l-4 border-blue-500 bg-gray-800/50 p-4 my-6 italic text-gray-300">
//           <p>
//             "The cost of memoization isn't free. Profile your application to
//             ensure you're optimizing a real bottleneck, not just adding
//             complexity."
//           </p>
//         </blockquote>
//       </section>

//       <section className="mt-4__mb-8">
//         <h2
//           id="step-3"
//           className="text-3xl font-bold text-blue-400 scroll-mt-20"
//         >
//           Step 3: Architectural Patterns for a Faster App
//         </h2>
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           Why make your users download code for a feature they might never use?
//           Code-splitting breaks your app into smaller chunks that are loaded on
//           demand.
//         </p>
//         <h3 className="text-2xl font-semibold mb-3 text-blue-400">
//           Code-Splitting with React.lazy and Suspense
//         </h3>
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           React.lazy and Suspense make code-splitting incredibly simple. Wrap
//           your dynamically imported component in <code>Suspense</code> to show a
//           loading state while it's being fetched.
//         </p>
//         <CodeBlock
//           code={`import React, { Suspense } from 'react';\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <OtherComponent />\n      </Suspense>\n    </div>\n  );\n}`}
//         />
//         <h3 className="text-2xl font-semibold mb-3 text-blue-400">
//           Virtualizing Large Lists
//         </h3>
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           Rendering thousands of items in a list can freeze your application.
//           Virtualization (or "windowing") solves this by only rendering the
//           items currently visible in the viewport. Libraries like{" "}
//           <code>react-window</code> are excellent for this.
//         </p>
//         <CodeBlock
//           code={`import { FixedSizeList as List } from 'react-window';\n\nconst MyList = () => (\n  <List height={500} itemCount={10000} itemSize={35} width={300}>\n    {({ index, style }) => (\n      <div style={style}>Row {index}</div>\n    )}\n  </List>\n);`}
//         />
//       </section>

//       <section className="mt-4__mb-8">
//         <h2
//           id="step-4"
//           className="text-3xl font-bold text-blue-400 scroll-mt-20"
//         >
//           Step 4: Beyond React - Holistic Performance Wins
//         </h2>
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           True performance optimization extends beyond your React code. A fast
//           application is the sum of all its parts, from the server to the
//           client.
//         </p>
//         <ul className="list-disc list-inside space-y-4 text-lg text-gray-300 leading-relaxed">
//           <li className="pl-2">
//             <strong className="font-semibold text-blue-400">
//               Image Optimization:
//             </strong>{" "}
//             Use modern formats like WebP/AVIF and lazy-load offscreen images.
//             Frameworks like Next.js provide powerful, built-in image components.
//           </li>
//           <li className="pl-2">
//             <strong className="font-semibold text-blue-400">
//               Efficient State Management:
//             </strong>{" "}
//             Choose a state management library that fits your needs. Zustand
//             offers a minimal API with automatic optimization, while Redux
//             provides robust tooling and explicit control with selectors.
//           </li>
//           <li className="pl-2">
//             <strong className="font-semibold text-blue-400">
//               Debouncing and Throttling:
//             </strong>{" "}
//             Use these techniques to limit the rate at which a function gets
//             called, perfect for handling user input in search bars or window
//             resize events.
//           </li>
//         </ul>
//       </section>

//       <section className="mt-4__mb-8">
//         <h2
//           id="conclusion"
//           className="text-3xl font-bold text-blue-400 scroll-mt-20"
//         >
//           Conclusion: Building a Performance-First Culture
//         </h2>
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           React performance is not a one-time fix but an ongoing practice. By
//           integrating these techniques into your development workflow, you can
//           build applications that are not only feature-rich but also incredibly
//           fast and responsive. Start by measuring, identify the real issues, and
//           apply targeted optimizations. Your users—and your bottom line—will
//           thank you for it.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default MasteringReactPerformance2024;

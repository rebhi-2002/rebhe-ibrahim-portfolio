// src/data/articles/javascript-es2025.tsx

import TableOfContents from "../../components/blog/TableOfContents";
import CodeBlock from "../../components/blog/CodeBlock";
import { InfoBox } from "../../components/blog/ArticleCallouts";

const tocHeadings = [
  { id: "intro", title: "How JavaScript Evolves" },
  {
    id: "pipe-operator",
    title: "The Pipe Operator: A Game-Changer for Readability",
  },
  { id: "set-methods", title: "Powerful New Set Methods" },
  { id: "async-helpers", title: "Asynchronous Helpers: Cleaner Async Code" },
  { id: "conclusion", title: "Conclusion: The Future is Now" },
];

const JavaScriptES2025 = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <section>
        <h2
          id="intro"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          How JavaScript Evolves
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          JavaScript is a living language, constantly evolving through the TC39
          committee's proposal process. Features move through stages, from Stage
          0 (idea) to Stage 4 (finished), before being included in the official
          ECMAScript specification. This article dives into some of the most
          exciting proposals expected for ES2025, features that will
          significantly improve how we write code every day.
        </p>
      </section>

      <TableOfContents headings={tocHeadings} />

      <section>
        <h2
          id="pipe-operator"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          The Pipe Operator: A Game-Changer for Readability
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          One of the most anticipated features is the Pipe Operator (
          <code>{"|>"}</code>). It allows you to chain functions together in a
          clean, linear sequence, eliminating the need for deeply nested
          function calls. This drastically improves the readability of data
          transformation pipelines.
        </p>
        <CodeBlock
          language="javascript"
          code={`
            // ❌ Before: Hard to read nested calls
            const result = capitalize(exclaim(doubleSay("hello"))); // "HELLO, HELLO!"

            // ✅ After: A clean, left-to-right data flow
            const result = "hello"
              |> doubleSay
              |> capitalize
              |> exclaim; // "HELLO, HELLO!"
          `}
        />
        <InfoBox>
          The Pipe Operator is currently a Stage 2 proposal, but it's one of the
          most talked-about features and highlights the language's direction
          towards more functional patterns.
        </InfoBox>
      </section>

      <section>
        <h2
          id="set-methods"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Powerful New Set Methods
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Working with <code>Set</code> objects is about to get much easier.
          ES2025 introduces several new methods for performing common
          mathematical set operations directly, without needing to convert to
          arrays or use complex loops.
        </p>
        <CodeBlock
          language="javascript"
          code={`
            const setA = new Set([1, 2, 3, 4]);
            const setB = new Set([3, 4, 5, 6]);

            // Returns a new set with elements from both: {1, 2, 3, 4, 5, 6}
            const unionSet = setA.union(setB);

            // Returns a new set with common elements: {3, 4}
            const intersectionSet = setA.intersection(setB);

            // Returns a new set with elements from A not in B: {1, 2}
            const differenceSet = setA.difference(setB);
          `}
        />
      </section>

      <section>
        <h2
          id="async-helpers"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Asynchronous Helpers: Cleaner Async Code
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Two new additions aim to simplify common asynchronous patterns, making
          async code cleaner and less error-prone.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
          Promise.withResolvers()
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          This static method solves the common pattern of needing to access a
          promise's <code>resolve</code> and <code>reject</code> functions from
          outside the promise constructor. It's perfect for event-driven or
          stream-based APIs.
        </p>
        <CodeBlock
          language="javascript"
          code={`
            // ❌ Before: The clunky "let resolve" pattern
            let resolvePromise;
            const myPromise = new Promise(resolve => {
              resolvePromise = resolve;
            });
            // Now you can call resolvePromise() from anywhere

            // ✅ After: Clean and self-contained
            const { promise, resolve, reject } = Promise.withResolvers();
            // Now you can use promise, resolve(), and reject() directly
          `}
        />
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
          Array.fromAsync()
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          This helper allows you to easily create an array from an async
          iterable, like data chunks from a streaming API. It simplifies a
          previously complex task into a single, elegant line.
        </p>
        <CodeBlock
          language="javascript"
          code={`
            async function* getApiStream() {
              yield { id: 1 };
              yield { id: 2 };
              yield { id: 3 };
            }

            // Easily convert the async stream into a regular array
            const dataArray = await Array.fromAsync(getApiStream());
            // dataArray is now [{ id: 1 }, { id: 2 }, { id: 3 }]
          `}
        />
      </section>

      <section>
        <h2
          id="conclusion"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Conclusion: The Future is Now
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          The upcoming features in ES2025 demonstrate a clear focus on developer
          ergonomics and functional patterns. From the improved readability of
          the Pipe Operator to the powerful new Set methods and cleaner async
          helpers, these additions will help us write more declarative, robust,
          and maintainable JavaScript. Keeping an eye on the TC39 process is a
          great way to stay ahead and prepare for the future of the web
          platform.
        </p>
      </section>
    </div>
  );
};

export default JavaScriptES2025;

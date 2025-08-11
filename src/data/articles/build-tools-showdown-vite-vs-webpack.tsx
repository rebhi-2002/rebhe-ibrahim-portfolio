import TableOfContents from "../../components/blog/TableOfContents";
import CodeBlock from "../../components/blog/CodeBlock";
import {
  ConsCard,
  InfoBox,
  ProsCard,
} from "../../components/blog/ArticleCallouts";

// ================================================================
// 2. بيانات جدول المحتويات
// ================================================================
const tocHeadings = [
  { id: "intro", title: "Why Do We Need Build Tools?" },
  { id: "webpack", title: "Webpack: The Powerful Veteran" },
  { id: "vite", title: "Vite: The Modern Challenger" },
  { id: "comparison", title: "Head-to-Head: Performance Benchmark" },
  { id: "migration", title: "Migrating from CRA (Webpack) to Vite" },
  { id: "conclusion", title: "Conclusion & The Broader Ecosystem" }, // { id: "conclusion", title: "Conclusion: The Right Tool for the Job" },
];

// ================================================================
// 3. المكون الرئيسي للمقالة
// ================================================================
const BuildToolsShowdown = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <section>
        <h2
          id="intro"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Why Do We Need Build Tools?
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          In modern frontend development, we write code in many files and
          formats (JSX, TypeScript, Sass). Browsers, however, only understand
          plain JavaScript, CSS, and HTML. Build tools and bundlers are the
          essential bridge in this process. They take all our source files,
          process them, optimize them, and bundle them into a few static files
          that the browser can efficiently run. Choosing the right build tool
          can dramatically impact your development speed and your application's
          final performance.
        </p>
      </section>

      <TableOfContents headings={tocHeadings} />

      <section>
        <h2
          id="webpack"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Webpack: The Powerful Veteran
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          For years, Webpack has been the undisputed king of bundlers. Its power
          comes from its extreme configurability. It works by creating a
          **dependency graph**, which maps out every module your project needs,
          and then intelligently bundles them into one or more output files.
          Through a system of loaders and plugins, you can make Webpack handle
          virtually any type of file or transformation. This flexibility made it
          the backbone of tools like Create React App.
        </p>
        <CodeBlock
          language="javascript"
          code={`
            // Example of a simple webpack.config.js
            module.exports = {
              entry: './src/index.js',
              output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist'),
              },
              module: {
                rules: [
                  {
                    test: /\\.css$/,
                    use: ['style-loader', 'css-loader'],
                  },
                  {
                    test: /\\.jsx?$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                  },
                ],
              },
            };
          `}
        />
        <ProsCard title="Strengths">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Massive Ecosystem:</strong> A plugin or loader exists for
              almost any task imaginable.
            </li>
            <li>
              <strong>Highly Configurable:</strong> Gives you granular control
              over every aspect of the build process.
            </li>
            <li>
              <strong>Battle-Tested:</strong> It's mature, stable, and trusted
              by countless large-scale applications.
            </li>
          </ul>
        </ProsCard>
        <ConsCard title="Weaknesses">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Complex Configuration:</strong> The configuration file can
              become very large and difficult to manage.
            </li>
            <li>
              <strong>Slower Performance:</strong> Its bundling approach can
              lead to slower development server start times and hot module
              replacement (HMR).
            </li>
          </ul>
        </ConsCard>
      </section>

      <section>
        <h2
          id="vite"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Vite: The Modern Challenger
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          Vite (French for "fast") is a new generation of build tool that
          focuses on speed and developer experience (DX). Its key innovation is
          leveraging **native ES modules (ESM)** in the browser during
          development. This means it doesn't need to bundle your entire
          application before starting the dev server, resulting in near-instant
          start times. For dependencies, it uses the lightning-fast `esbuild`
          pre-bundler. For production, it uses the highly optimized Rollup
          bundler.
        </p>
        <InfoBox>
          Vite's philosophy is "convention over configuration." It comes with
          sensible defaults for most modern projects, meaning you often need a
          very small or even no configuration file.
        </InfoBox>
        <CodeBlock
          language="javascript"
          code={`
            // Example of a simple vite.config.js (often this is all you need)
            import { defineConfig } from 'vite';
            import react from '@vitejs/plugin-react';

            export default defineConfig({
              plugins: [react()],
            });
          `}
        />
        <ProsCard title="Strengths">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Blazing Fast:</strong> Near-instant dev server startup and
              lightning-fast HMR.
            </li>
            <li>
              <strong>Simple Configuration:</strong> Sensible defaults mean less
              configuration is needed.
            </li>
            <li>
              <strong>Great DX:</strong> Out-of-the-box support for TypeScript,
              JSX, CSS pre-processors, and more.
            </li>
          </ul>
        </ProsCard>
        <ConsCard title="Weaknesses">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Newer Ecosystem:</strong> While growing rapidly, its
              plugin ecosystem is not as vast as Webpack's.
            </li>
            <li>
              <strong>Less Control (by default):</strong> Achieving highly
              complex or unusual build configurations might be more challenging.
            </li>
          </ul>
        </ConsCard>
      </section>

      <section>
        <h2
          id="comparison"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Head-to-Head: Performance Benchmark
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          While actual numbers vary by project size, the performance difference
          is not subtle. Here’s a typical comparison for a medium-sized project:
        </p>
        <div className="overflow-x-auto rounded-lg border border-gray-700">
          <table className="min-w-full my-0 divide-y divide-gray-700 text-left">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-200">
                  Metric
                </th>
                <th className="px-4 py-3 font-semibold text-gray-200">
                  Webpack
                </th>
                <th className="px-4 py-3 font-semibold text-gray-200">Vite</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800 bg-gray-900/50">
              <tr>
                <td className="px-4 py-3 text-gray-300">Dev Server Start</td>
                <td className="px-4 py-3 text-gray-400">~15-30 seconds</td>
                <td className="px-4 py-3 text-green-400 font-semibold">
                  ~1-2 seconds
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-300">
                  Hot Module Replacement (HMR)
                </td>
                <td className="px-4 py-3 text-gray-400">~2-5 seconds</td>
                <td className="px-4 py-3 text-green-400 font-semibold">
                  ~50-200 ms
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-300">Production Build</td>
                <td className="px-4 py-3 text-gray-400">Slower</td>
                <td className="px-4 py-3 text-green-400 font-semibold">
                  Faster (uses Rollup)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2
          id="migration"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Migrating from CRA (Webpack) to Vite
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          Migrating a standard Create React App project to Vite is surprisingly
          straightforward. Here's the high-level process:
        </p>
        <ol className="list-decimal list-inside space-y-3 text-gray-300">
          <li>
            <strong>Install Vite:</strong> Remove `react-scripts` and install
            `vite` and `@vitejs/plugin-react` as dev dependencies.
          </li>
          <li>
            <strong>Create `vite.config.js`:</strong> Add the basic Vite config
            file to your project root.
          </li>
          <li>
            <strong>Move `index.html`:</strong> Move `public/index.html` to the
            project root directory.
          </li>
          <li>
            <strong>Update HTML:</strong> Remove the `%PUBLIC_URL%` placeholders
            from your `index.html` and change the script tag to `
            <script type="module" src="/src/index.jsx"></script>`.
          </li>
          <li>
            <strong>Environment Variables:</strong> Replace any `REACT_APP_`
            environment variable prefixes with `VITE_`.
          </li>
        </ol>
      </section>

      <section>
        <h2
          id="conclusion"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          {/* Conclusion: The Right Tool for the Job */}
          Conclusion & The Broader Ecosystem
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          For the vast majority of new projects in 2025, **Vite is the
          recommended choice**. Its incredible speed and superior developer
          experience are hard to beat. However, **Webpack remains a powerful and
          relevant tool**, especially for large, legacy projects with complex
          and specific build requirements that might not be easily met by Vite's
          plugin ecosystem. The trend is clear: the future is fast, and Vite is
          leading the charge.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          The build tool landscape is always evolving. Keep an eye on other
          players like **Turbopack**, a Rust-based successor to Webpack from
          Vercel promising huge performance gains, and **Parcel**, which
          continues to be a great option for those who want a true
          zero-configuration experience. For now, the trend is clear: the future
          is fast, and Vite is leading the charge.
        </p>
      </section>
    </div>
  );
};

export default BuildToolsShowdown;

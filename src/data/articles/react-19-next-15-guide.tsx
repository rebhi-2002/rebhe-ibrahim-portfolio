// src/data/articles/react-19-next-15-guide.tsx

import TableOfContents from "../../components/blog/TableOfContents";
import CodeBlock from "../../components/blog/CodeBlock";
import { InfoBox, WarningBox } from "../../components/blog/ArticleCallouts";
import { CheckCircle, XCircle, RefreshCw } from "lucide-react";

// Updated Table of Contents to reflect the new structure
const tocHeadings = [
  { id: "intro", title: "A New Era for Web Development" },
  { id: "whats-new", title: "What's New: A Summary" },
  { id: "react-compiler", title: "Deep Dive: The React Compiler" },
  { id: "react-actions-hooks", title: "Deep Dive: Actions & New Hooks" },
  { id: "next15", title: "Next.js 15: The Production Powerhouse" },
  { id: "conclusion", title: "What This Means for Your Workflow" },
];

const React19Next15Guide = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <section>
        <h2
          id="intro"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          A New Era for Web Development
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          The releases of React 19 and Next.js 15 are not just updates; they are
          a paradigm shift. For years, developers have been burdened with manual
          performance optimizations (`useMemo`, `useCallback`) and complex
          client-side state for server interactions. This new era, driven by a
          powerful compiler and first-class support for server-side functions,
          promises to simplify our code, boost performance automatically, and
          blur the lines between client and server.
        </p>
      </section>

      <TableOfContents headings={tocHeadings} />

      <section>
        <h2
          id="whats-new"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          What's New: A Summary
        </h2>
        <div className="my-6 overflow-x-auto rounded-lg border border-gray-700 shadow-md">
          <table className="min-w-full my-0">
            <thead className="bg-gray-800/80">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200 uppercase tracking-wider align-middle">
                  Feature
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-200 uppercase tracking-wider align-middle">
                  In React 19
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-200 uppercase tracking-wider align-middle">
                  In Next.js 15
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-200 uppercase tracking-wider align-middle">
                  Key Impact
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700 text-gray-300">
              <tr className="bg-gray-900/50 hover:bg-gray-800/60 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-medium align-middle">
                  React Compiler
                </td>
                <td className="px-6 py-4 text-center align-middle">
                  <div className="flex items-center justify-center gap-2 text-green-400">
                    <CheckCircle className="h-5 w-5" /> Built-in
                  </div>
                </td>
                <td className="px-6 py-4 text-center align-middle">
                  <div className="flex items-center justify-center gap-2 text-green-400">
                    <CheckCircle className="h-5 w-5" /> Supported
                  </div>
                </td>
                <td className="px-6 py-4 align-middle">
                  Automatic performance gains
                </td>
              </tr>
              <tr className="bg-gray-900/80 hover:bg-gray-800/60 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-medium align-middle">
                  Server Actions
                </td>
                <td className="px-6 py-4 text-center align-middle">
                  <div className="flex items-center justify-center gap-2 text-green-400">
                    <CheckCircle className="h-5 w-5" /> Built-in
                  </div>
                </td>
                <td className="px-6 py-4 text-center align-middle">
                  <div className="flex items-center justify-center gap-2 text-green-400">
                    <CheckCircle className="h-5 w-5" /> Supported
                  </div>
                </td>
                <td className="px-6 py-4 align-middle">
                  Simplified server mutations
                </td>
              </tr>
              <tr className="bg-gray-900/50 hover:bg-gray-800/60 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-medium align-middle">
                  New Hook: <code>use</code>
                </td>
                <td className="px-6 py-4 text-center align-middle">
                  <div className="flex items-center justify-center gap-2 text-green-400">
                    <CheckCircle className="h-5 w-5" /> New
                  </div>
                </td>
                <td className="px-6 py-4 text-center align-middle">
                  <div className="flex items-center justify-center gap-2 text-green-400">
                    <CheckCircle className="h-5 w-5" /> Supported
                  </div>
                </td>
                <td className="px-6 py-4 align-middle">
                  Easier async data & context
                </td>
              </tr>
              <tr className="bg-gray-900/80 hover:bg-gray-800/60 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-medium align-middle">
                  Partial Prerendering (PPR)
                </td>
                <td className="px-6 py-4 text-center align-middle">
                  <div className="flex items-center justify-center text-gray-400">
                    <XCircle className="h-5 w-5" />
                  </div>
                </td>
                <td className="px-6 py-4 text-center align-middle">
                  <div className="flex items-center justify-center gap-2 text-green-400">
                    <CheckCircle className="h-5 w-5" /> Core Feature
                  </div>
                </td>
                <td className="px-6 py-4 align-middle">
                  Static speed with SSR dynamism
                </td>
              </tr>
              <tr className="bg-gray-900/50 hover:bg-gray-800/60 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-medium align-middle">
                  Caching Change
                </td>
                <td className="px-6 py-4 text-center align-middle">
                  <div className="flex items-center justify-center text-gray-400">
                    <XCircle className="h-5 w-5" />
                  </div>
                </td>
                <td className="px-6 py-4 text-center align-middle">
                  <div className="flex items-center justify-center gap-2 text-yellow-400">
                    <RefreshCw className="h-5 w-5" /> Breaking Change
                  </div>
                </td>
                <td className="px-6 py-4 text-left align-middle">
                  <code>fetch</code> requests are now uncached by default
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2
          id="react-compiler"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Deep Dive: The React Compiler
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          The React Compiler is the most significant change. It's an
          auto-memoizing compiler that understands the rules of React and
          JavaScript. It automatically optimizes your code by memoizing
          components and values, eliminating the need for most manual `useMemo`
          and `useCallback` hooks.
        </p>
        <InfoBox>
          <strong>The Goal:</strong> Write simple, clean JavaScript, and let the
          compiler handle the complex performance optimizations. This leads to
          more readable and maintainable codebases.
        </InfoBox>
        <CodeBlock
          code={`
            // ❌ The Old Way: Manual optimization is required and error-prone.
            function ProductPage({ product, onAddToCart }) {
              const formattedPrice = useMemo(() => {
                return formatPrice(product.price);
              }, [product.price]);

              const handleAddToCart = useCallback(() => {
                onAddToCart(product.id);
              }, [onAddToCart, product.id]);
              // ...
            }

            // ✅ The New Way with React Compiler: Simple and clean.
            // The compiler understands dependencies and memoizes automatically.
            function ProductPage({ product, onAddToCart }) {
              const formattedPrice = formatPrice(product.price);
              const handleAddToCart = () => onAddToCart(product.id);
              // ...
            }
          `}
        />
      </section>

      <section>
        <h2
          id="react-actions-hooks"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Deep Dive: Actions & New Hooks
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          React 19 revolutionizes data handling with Actions and a suite of new
          hooks that work seamlessly with them. This creates a powerful,
          integrated way to manage form submissions, mutations, and asynchronous
          operations.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
          The <code>use</code> Hook: Simplified Data Fetching
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          The new <code>use</code> hook simplifies reading the result of a
          Promise. When you pass a promise to <code>use</code>, React will
          suspend rendering until the promise resolves, integrating perfectly
          with <code>&lt;Suspense&gt;</code>.
        </p>
        <CodeBlock
          code={`
            import { use, Suspense } from 'react';
            
            // This function returns a promise
            async function fetchMessage() {
              const res = await fetch('/api/message');
              return res.json();
            }

            function Message() {
              const { text } = use(fetchMessage());
              return <p>{text}</p>;
            }

            function App() {
              return (
                <Suspense fallback={<p>Loading message...</p>}>
                  <Message />
                </Suspense>
              );
            }
          `}
        />
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
          Form Mastery with Actions, `useActionState`, and `useOptimistic`
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          An "Action" is an async function passed to a <code>&lt;form&gt;</code>
          's `action` prop. React now manages the entire lifecycle of this
          submission. The <code>useActionState</code> hook manages form state,
          and <code>useOptimistic</code> provides instant UI feedback.
        </p>
        <CodeBlock
          code={`
            // actions.ts (runs on the server)
            'use server'
            export async function addComment(formData) {
              const comment = formData.get("comment");
              if (comment.length < 3) return { error: "Comment is too short." };
              
              const newComment = await db.comments.insert({ text: comment });
              revalidatePath('/blog/my-post');
              return { success: true, comment: newComment };
            }

            // CommentSection.tsx (Client Component)
            import { useActionState, useOptimistic, useRef } from "react";
            import { useFormStatus } from "react-dom";
            import { addComment } from "./actions";

            function SubmitButton() {
              const { pending } = useFormStatus();
              return <button type="submit" disabled={pending}>{pending ? 'Posting...' : 'Post Comment'}</button>;
            }

            export function CommentSection({ existingComments }) {
              const formRef = useRef(null);
              // The useOptimistic hook
              const [optimisticComments, addOptimisticComment] = useOptimistic(
                existingComments,
                (state, newCommentText) => [...state, { id: 'temp', text: newCommentText, isPending: true }]
              );
              
              const formAction = async (formData) => {
                const newCommentText = formData.get('comment');
                addOptimisticComment(newCommentText); // Update UI instantly
                formRef.current?.reset(); // Reset form
                await addComment(formData); // Call the server action
              };

              return (
                <div>
                  <ul>
                    {optimisticComments.map(c => 
                      <li key={c.id} style={{ opacity: c.isPending ? 0.5 : 1 }}>
                        {c.text}
                      </li>
                    )}
                  </ul>
                  <form action={formAction} ref={formRef}>
                    <textarea name="comment" required />
                    <SubmitButton />
                  </form>
                </div>
              );
            }
          `}
        />
      </section>

      <section>
        <h2
          id="next15"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Next.js 15: The Production Powerhouse
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Next.js 15 is built to make the new React 19 features production-ready
          and easy to use, with its own set of powerful optimizations.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
          Partial Prerendering (PPR)
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          PPR offers the best of both worlds: the speed of static sites (SSG)
          with the dynamism of server-rendered apps (SSR). It serves a fast,
          static HTML "shell" of your page, and any dynamic parts (like a
          shopping cart or user-specific content) are streamed in as they're
          rendered on the server.
        </p>
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
          Breaking Change: Caching in Next.js
        </h3>
        <WarningBox>
          <strong>Heads Up:</strong> In the Next.js App Router,{" "}
          <code>fetch</code> requests are now{" "}
          <strong>uncached by default</strong>. This makes the default behavior
          more dynamic. You must now explicitly opt-in to caching.
        </WarningBox>
        <CodeBlock
          code={`
            // In Next.js 15, this request is dynamic and will not be cached.
            const dynamicData = await fetch('https://api.example.com/data');

            // To opt into caching (the old default behavior), use 'force-cache':
            const staticData = await fetch('https://api.example.com/data', { cache: 'force-cache' });

            // To cache with a revalidation period (Incremental Static Regeneration):
            const revalidatedData = await fetch('https://api.example.com/data', { next: { revalidate: 10 } }); // revalidates every 10s
          `}
        />
        <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
          Accelerated Builds with Turbopack
        </h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          Turbopack, the high-speed bundler written in Rust, is now stable for
          `next build`. This significantly speeds up production build times,
          especially for large applications.
        </p>
      </section>

      <section>
        <h2
          id="conclusion"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          What This Means for Your Workflow
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          The new era of React and Next.js is about simplification and power.
          Developers can now write more straightforward, intuitive code and let
          the tooling handle complex optimizations. The seamless integration of
          client and server logic with Actions reduces the need for boilerplate
          API code. By embracing these changes, you're not just adopting new
          features; you're adopting a more efficient and powerful way to build
          for the web.
        </p>
      </section>
    </div>
  );
};

export default React19Next15Guide;

// // src/data/articles/react-19-next-15-guide.tsx

// import React from "react";
// import TableOfContents from "../../components/TableOfContents";
// import CodeBlock from "../../components/CodeBlock";
// import { Info, AlertTriangle } from "lucide-react";

// // مكونات احترافية لعرض الملاحظات والتحذيرات
// const InfoBox = ({ children }: { children: React.ReactNode }) => (
//   <div className="my-6 flex items-start gap-4 rounded-lg border border-blue-500/30 bg-blue-500/10 p-4">
//     <Info className="h-5 w-5 flex-shrink-0 text-blue-400 mt-1" />
//     <div className="text-sm text-blue-200">{children}</div>
//   </div>
// );

// const WarningBox = ({ children }: { children: React.ReactNode }) => (
//   <div className="my-6 flex items-start gap-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
//     <AlertTriangle className="h-5 w-5 flex-shrink-0 text-yellow-400 mt-1" />
//     <div className="text-sm text-yellow-200">{children}</div>
//   </div>
// );

// const tocHeadings = [
//   { id: "intro", title: "A New Era for React Development" },
//   { id: "the-compiler", title: "Deep Dive: The React Compiler" },
//   { id: "react-actions", title: "Deep Dive: React Actions & Form Handling" },
//   { id: "next15", title: "Next.js 15: The Production Powerhouse" },
//   { id: "conclusion", title: "What This Means for Your Workflow" },
// ];

// const React19Next15Guide = () => {
//   return (
//     <div className="flex flex-col gap-y-10">
//       <section>
//         <h2
//           id="intro"
//           className="text-3xl font-bold mb-4 text-blue-400 scroll-mt-20"
//         >
//           A New Era for React Development
//         </h2>
//         <p className="text-lg text-gray-300 leading-relaxed">
//           The releases of React 19 and Next.js 15 are not just updates; they are
//           a paradigm shift. For years, developers have been burdened with manual
//           performance optimizations (`useMemo`, `useCallback`) and complex
//           client-side state for server interactions. This new era, driven by a
//           powerful compiler and first-class support for server-side functions,
//           promises to simplify our code, boost performance automatically, and
//           blur the lines between client and server.
//         </p>
//       </section>

//       <TableOfContents headings={tocHeadings} />

//       <section>
//         <h2
//           id="the-compiler"
//           className="text-3xl font-bold mb-4 text-blue-400 scroll-mt-20"
//         >
//           Deep Dive: The React Compiler
//         </h2>
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           The React Compiler is the most significant change. It's an
//           auto-memoizing compiler that understands the rules of React and
//           JavaScript. It automatically optimizes your code by memoizing
//           components and values, eliminating the need for most manual `useMemo`
//           and `useCallback` hooks.
//         </p>
//         <InfoBox>
//           <strong>The Goal:</strong> Write simple, clean JavaScript, and let the
//           compiler handle the complex performance optimizations. This leads to
//           more readable and maintainable codebases.
//         </InfoBox>
//         <CodeBlock
//           code={`
//             // ❌ The Old Way: Manual optimization is required
//             // This code is hard to read and easy to get wrong.
//             function ProductPage({ product, onAddToCart }) {
//               const formattedPrice = useMemo(() => {
//                 return formatPrice(product.price);
//               }, [product.price]);

//               const handleAddToCart = useCallback(() => {
//                 onAddToCart(product.id);
//               }, [onAddToCart, product.id]);

//               return (
//                 <div>
//                   <h2>{product.name}</h2>
//                   <p>{formattedPrice}</p>
//                   <Button onClick={handleAddToCart}>Add to Cart</Button>
//                 </div>
//               );
//             }

//             // ✅ The New Way with React Compiler: Simple and clean
//             // The compiler understands the dependencies and memoizes automatically.
//             function ProductPage({ product, onAddToCart }) {
//               const formattedPrice = formatPrice(product.price);
//               const handleAddToCart = () => onAddToCart(product.id);

//               return (
//                 <div>
//                   <h2>{product.name}</h2>
//                   <p>{formattedPrice}</p>
//                   <Button onClick={handleAddToCart}>Add to Cart</Button>
//                 </div>
//               );
//             }
//           `}
//         />
//       </section>

//       <section>
//         <h2
//           id="react-actions"
//           className="text-3xl font-bold mb-4 text-blue-400 scroll-mt-20"
//         >
//           Deep Dive: React Actions & Form Handling
//         </h2>
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           React Actions revolutionize form submissions and data mutations. An
//           "Action" is an async function passed to a <code>&lt;form&gt;</code>'s
//           `action` prop. React now manages the entire lifecycle of this data
//           submission, providing hooks to track the pending state and handle
//           responses. This eliminates the need for manual `useState` for loading
//           states and `useEffect` for handling submission logic.
//         </p>
//         <WarningBox>
//           With Server Actions in Next.js, this function can be defined on the
//           server and called directly from a client component, creating a
//           seamless and secure way to mutate data without writing API endpoints.
//         </WarningBox>
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           The new `useFormStatus` hook lets components inside a form know if the
//           form is submitting, and `useOptimistic` allows for instant UI updates
//           that revert if the action fails.
//         </p>
//         <CodeBlock
//           code={`
//             // A Server Action defined in a separate file (e.g., actions.ts)
//             'use server'
//             export async function addComment(comment) {
//               await db.comments.insert(comment);
//               revalidatePath('/blog/my-post');
//             }

//             // The client component for the form
//             import { useFormStatus } from "react-dom";
//             import { addComment } from "./actions";

//             function SubmitButton() {
//               const { pending } = useFormStatus();
//               return <button type="submit" disabled={pending}>{pending ? 'Posting...' : 'Post Comment'}</button>;
//             }

//             export function CommentForm() {
//               return (
//                 <form action={addComment}>
//                   <textarea name="comment" required />
//                   <SubmitButton />
//                 </form>
//               );
//             }
//           `}
//         />
//       </section>

//       <section>
//         <h2
//           id="next15"
//           className="text-3xl font-bold mb-4 text-blue-400 scroll-mt-20"
//         >
//           Next.js 15: The Production Powerhouse
//         </h2>
//         <p className="text-lg text-gray-300 leading-relaxed mb-4">
//           Next.js 15 is built to make the new React 19 features production-ready
//           and easy to use. It fully supports the React Compiler and Server
//           Actions out of the box. One of its headline features is Partial
//           Prerendering (PPR).
//         </p>
//         <h3 className="text-2xl font-semibold mt-6 mb-3 text-blue-400">
//           Partial Prerendering (PPR)
//         </h3>
//         <p className="text-lg text-gray-300 leading-relaxed">
//           PPR offers the best of both worlds: the speed of static sites (SSG)
//           with the dynamism of server-rendered apps (SSR). It serves a fast,
//           static HTML "shell" of your page, and any dynamic parts (like a
//           shopping cart or user-specific content) are streamed in as they're
//           rendered on the server. This provides an incredibly fast initial load
//           while keeping the page fully dynamic.
//         </p>
//       </section>

//       <section>
//         <h2
//           id="conclusion"
//           className="text-3xl font-bold mb-4 text-blue-400 scroll-mt-20"
//         >
//           What This Means for Your Workflow
//         </h2>
//         <p className="text-lg text-gray-300 leading-relaxed">
//           The new era of React and Next.js is about simplification and power.
//           Developers can now write more straightforward, intuitive code and let
//           the tooling handle the complex optimizations. The seamless integration
//           of client and server logic with Actions reduces the need for
//           boilerplate API code. By embracing these changes, you're not just
//           adopting new features; you're adopting a more efficient and powerful
//           way to build for the web.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default React19Next15Guide;

// src/data/articles/react-19-next-15-guide.tsx

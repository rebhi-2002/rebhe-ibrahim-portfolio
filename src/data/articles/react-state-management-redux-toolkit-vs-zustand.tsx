// src/data/articles/react-state-management-redux-vs-zustand.tsx

import TableOfContents from "../../components/TableOfContents";
import CodeBlock from "../../components/CodeBlock";
import { ProsCard, ConsCard } from "../../components/ArticleCallouts";

const tocHeadings = [
  { id: "intro", title: "The State of State Management" },
  { id: "redux", title: "The Redux Way: Structured & Predictable" },
  { id: "zustand", title: "The Zustand Way: Simple & Minimalist" },
  { id: "comparison", title: "Head-to-Head Comparison" },
  { id: "verdict", title: "The Final Verdict: Which One to Choose?" },
];

const ReduxVsZustand = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <section>
        <h2
          id="intro"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          The State of State Management
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          As React applications grow in complexity, managing state becomes a
          critical challenge. Passing props down multiple levels ("prop
          drilling") can become cumbersome and hard to maintain. This is where
          state management libraries come in. For years, Redux has been the
          battle-tested standard, known for its strict, predictable
          architecture. More recently, Zustand has emerged as a popular
          minimalist alternative, leveraging hooks for a simpler, more modern
          approach. This guide provides a head-to-head comparison to help you
          decide which tool is right for your next project.
        </p>
      </section>

      <TableOfContents headings={tocHeadings} />

      <section>
        <h2
          id="redux"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          The Redux Way: Structured & Predictable
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Redux is built on the principles of a single source of truth,
          immutable state, and explicit state updates through actions and
          reducers. With Redux Toolkit (RTK), much of the historical boilerplate
          has been abstracted away, but the core concepts remain. It provides a
          robust, scalable, and highly debuggable architecture.
        </p>
        <CodeBlock
          code={`
            // 1. Create a "slice" with Redux Toolkit
            import { createSlice, configureStore } from '@reduxjs/toolkit';

            const counterSlice = createSlice({
              name: 'counter',
              initialState: { value: 0 },
              reducers: {
                increment: state => { state.value += 1 },
                decrement: state => { state.value -= 1 },
              },
            });
            
            export const { increment, decrement } = counterSlice.actions;
            const store = configureStore({ reducer: { counter: counterSlice.reducer } });

            // 2. Use it in a component
            import { useSelector, useDispatch } from 'react-redux';

            function Counter() {
              const count = useSelector(state => state.counter.value);
              const dispatch = useDispatch();

              return (
                <div>
                  <button onClick={() => dispatch(increment())}>+</button>
                  <span>{count}</span>
                  <button onClick={() => dispatch(decrement())}>-</button>
                </div>
              );
            }
          `}
        />
        <ProsCard title="Why Choose Redux?">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Predictable State:</strong> The strict data flow makes
              state changes predictable and easy to trace.
            </li>
            <li>
              <strong>Powerful DevTools:</strong> Redux DevTools are
              unparalleled for time-travel debugging and inspecting state.
            </li>
            <li>
              <strong>Large Ecosystem:</strong> A massive ecosystem of
              middleware (like Redux Saga, Thunk) and add-ons.
            </li>
          </ul>
        </ProsCard>
        <ConsCard title="Potential Downsides">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Boilerplate:</strong> Even with RTK, it requires more
              setup code (actions, reducers, store configuration).
            </li>
            <li>
              <strong>Learning Curve:</strong> The concepts of reducers,
              actions, and dispatching can be challenging for beginners.
            </li>
          </ul>
        </ConsCard>
      </section>

      <section>
        <h2
          id="zustand"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          The Zustand Way: Simple & Minimalist
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Zustand (German for "state") takes a much simpler, hook-based
          approach. It provides a single `create` function to build a store,
          which can be accessed from any component using a custom hook. It's
          unopinionated, requires minimal code, and is incredibly fast.
        </p>
        <CodeBlock
          code={`
            // 1. Create a store
            import { create } from 'zustand';

            const useCounterStore = create((set) => ({
              count: 0,
              increment: () => set((state) => ({ count: state.count + 1 })),
              decrement: () => set((state) => ({ count: state.count - 1 })),
            }));

            // 2. Use it in a component
            function Counter() {
              const { count, increment, decrement } = useCounterStore();

              return (
                <div>
                  <button onClick={increment}>+</button>
                  <span>{count}</span>
                  <button onClick={decrement}>-</button>
                </div>
              );
            }
          `}
        />
        <ProsCard title="Why Choose Zustand?">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Minimal Boilerplate:</strong> The amount of code needed to
              get started is incredibly small.
            </li>
            <li>
              <strong>Easy Learning Curve:</strong> If you understand React
              hooks, you can learn Zustand in minutes.
            </li>
            <li>
              <strong>Performance:</strong> It avoids unnecessary re-renders by
              default by subscribing components only to the state slices they
              use.
            </li>
          </ul>
        </ProsCard>
        <ConsCard title="Potential Downsides">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Less Opinionated:</strong> Its flexibility can lead to
              less structured state management in large teams if no conventions
              are set.
            </li>
            <li>
              <strong>Smaller Ecosystem:</strong> While it has middleware, its
              ecosystem is not as vast as Redux's.
            </li>
          </ul>
        </ConsCard>
      </section>

      <section>
        <h2
          id="comparison"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Head-to-Head Comparison
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-400">
              Boilerplate & Code Size
            </h3>
            <p className="text-gray-300">
              Zustand is the clear winner here. The code required to set up a
              simple store is a fraction of what's needed for Redux, leading to
              a smaller bundle size and faster development.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-400">
              Learning Curve
            </h3>
            <p className="text-gray-300">
              Zustand's API is intuitive and builds on existing React hook
              knowledge. Redux requires understanding a specific architecture
              (actions, reducers, store), making its learning curve steeper.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-400">
              DevTools & Ecosystem
            </h3>
            <p className="text-gray-300">
              Redux is the undisputed champion here. The Redux DevTools
              extension is a powerful tool for debugging. The ecosystem of
              middleware for handling side effects, persistence, and more is
              vast and mature.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-blue-400">
              Performance
            </h3>
            <p className="text-gray-300">
              Both can be highly performant. Zustand has a slight edge
              out-of-the-box by making it easy to subscribe to state slices,
              preventing unnecessary re-renders. Redux requires using selectors
              (like with Reselect) to achieve the same level of optimization.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2
          id="verdict"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          The Final Verdict: Which One Should You Choose?
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          The choice depends entirely on your project's needs and your team's
          familiarity with the tools.
        </p>
        <div className="space-y-4">
          <p className="text-gray-300">
            <strong className="text-blue-400">Choose Redux if:</strong> Your
            application is large and complex, you have a large team that
            benefits from a strict structure, and you need the powerful
            debugging capabilities of the Redux DevTools and its extensive
            middleware ecosystem.
          </p>
          <p className="text-gray-300">
            <strong className="text-blue-400">Choose Zustand if:</strong> You're
            working on a small to medium-sized project, you value simplicity and
            speed of development, or you want to add global state without a
            heavy architectural commitment. It's also an excellent choice for
            teams who are already comfortable with React hooks.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ReduxVsZustand;

// src/data/articles/api-data-fetching-react-guide.tsx

import TableOfContents from "../../components/blog/TableOfContents";
import CodeBlock from "../../components/blog/CodeBlock";
import {
  ConsCard,
  InfoBox,
  ProsCard,
} from "../../components/blog/ArticleCallouts";

const tocHeadings = [
  { id: "intro", title: "The Two Types of State: Client vs. Server" },
  { id: "classic-way", title: "The Classic Way: useEffect & useState" },
  { id: "modern-way", title: "The Modern Way: Server-State Libraries" },
  { id: "react-query-deep-dive", title: "Deep Dive: TanStack (React) Query" },
  { id: "swr-quick-look", title: "A Quick Look at SWR" },
  { id: "conclusion", title: "Conclusion: Choosing Your Strategy" },
];

const ApiDataFetchingGuide = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <section>
        <h2
          id="intro"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          The Two Types of State: Client vs. Server
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          In any modern web application, we manage two fundamentally different
          types of state. <strong>Client State</strong> is data that your
          application owns and controls (e.g., UI state like a modal being open,
          form inputs).
          <strong>Server State</strong>, on the other hand, is data that is
          persisted remotely and owned by the server. Your app just borrows and
          caches it. The key challenge is that server state is asynchronous and
          can become stale. This is where modern data-fetching libraries shine.
        </p>
      </section>

      <TableOfContents headings={tocHeadings} />

      <section>
        <h2
          id="classic-way"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          The Classic Way: <code>useEffect</code> & <code>useState</code>
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          For years, the default approach for fetching data in React was to use
          the `useEffect` hook to trigger a fetch request and store the result,
          loading, and error states in `useState`. While this works for simple
          cases, it quickly becomes complex and error-prone.
        </p>
        <CodeBlock
          code={`
            function UserProfile({ userId }) {
              const [user, setUser] = useState(null);
              const [isLoading, setIsLoading] = useState(true);
              const [error, setError] = useState(null);

              useEffect(() => {
                const fetchUser = async () => {
                  try {
                    setIsLoading(true);
                    const response = await fetch(\`/api/users/\${userId}\`);
                    const data = await response.json();
                    setUser(data);
                  } catch (err) {
                    setError(err);
                  } finally {
                    setIsLoading(false);
                  }
                };
                fetchUser();
              }, [userId]);

              if (isLoading) return <div>Loading...</div>;
              if (error) return <div>Error!</div>;
              return <div>{user.name}</div>;
            }
          `}
        />
        <ProsCard title="Strengths">
          <ul className="list-disc list-inside">
            <li>Built-in to React, no extra libraries needed.</li>
          </ul>
        </ProsCard>
        <ConsCard title="Weaknesses">
          <ul className="list-disc list-inside space-y-1">
            <li>
              Requires a lot of boilerplate code for loading/error states.
            </li>
            <li>
              No built-in caching. Data is re-fetched on every component mount.
            </li>
            <li>Doesn't handle stale data or re-fetching on window focus.</li>
            <li>Prone to race conditions if not handled carefully.</li>
          </ul>
        </ConsCard>
      </section>

      <section>
        <h2
          id="modern-way"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          The Modern Way: Server-State Libraries
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          Libraries like TanStack Query and SWR are not just data-fetching
          libraries; they are <strong>server-state management libraries</strong>
          . They handle all the complexities of caching, background updates, and
          stale data for you, allowing you to write declarative and efficient
          data-fetching code.
        </p>
        <InfoBox>
          The core strategy used by these libraries is
          <strong>stale-while-revalidate</strong>. This means they instantly
          show you the cached (stale) data while simultaneously re-fetching the
          latest data in the background. This makes your application feel
          incredibly fast.
        </InfoBox>
      </section>

      <section>
        <h2
          id="react-query-deep-dive"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Deep Dive: TanStack (React) Query
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          TanStack Query is the most powerful and popular solution. It provides
          a simple `useQuery` hook that returns all the state you need,
          abstracting away all the complexity.
        </p>
        <CodeBlock
          code={`
            import { useQuery } from '@tanstack/react-query';

            const fetchUser = async (userId) => {
              const response = await fetch(\`/api/users/\${userId}\`);
              return response.json();
            };

            function UserProfile({ userId }) {
              const { data: user, isLoading, isError } = useQuery({
                queryKey: ['user', userId], // A unique key for this query
                queryFn: () => fetchUser(userId),
              });

              if (isLoading) return <div>Loading...</div>;
              if (isError) return <div>Error!</div>;
              return <div>{user.name}</div>;
            }
          `}
        />
        <p className="text-lg text-gray-300 leading-relaxed mt-4">
          With just a few lines of code, TanStack Query gives you caching,
          automatic re-fetching on window focus, request deduplication, and
          powerful DevTools for debugging.
        </p>
      </section>
      <section>
        <h2
          id="swr-quick-look"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          A Quick Look at SWR
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          SWR, created by Vercel, is a lightweight and excellent alternative. It
          follows the same stale-while-revalidate principle and offers a very
          similar API, making it easy to learn if you know React Query.
        </p>
        <CodeBlock
          code={`
                  import useSWR from 'swr';
                  const fetcher = url => fetch(url).then(res => res.json());
                  function UserProfile({ userId }) {
                    const { data: user, error, isLoading } = useSWR(\`/api/users/\${userId}\`, fetcher);
                    if (isLoading) return <div>Loading...</div>;
                    if (error) return <div>Error!</div>;
                    return <div>{user.name}</div>;
                  }
                `}
        />
        <InfoBox>
          <strong>Where does Axios fit in?</strong> A common question is whether
          these libraries replace tools like Axios. The answer is no. Axios is a
          "fetcher"—its job is to make HTTP requests. TanStack Query and SWR are
          "managers"—their job is to manage the state around those requests. You
          can (and many do) use Axios inside your `queryFn` or `fetcher` for
          more control over your API calls.
        </InfoBox>
      </section>
      <section>
        <h2
          id="conclusion"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Conclusion: Choosing Your Strategy
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          While `useEffect` is fine for one-off, simple data fetches, for any
          professional application that interacts with an API, a dedicated
          server-state library like <strong>TanStack Query</strong> or{" "}
          <strong>SWR</strong> is now the industry standard. They solve a
          complex class of problems with elegant, declarative APIs, leading to
          better performance, a superior user experience, and a more
          maintainable codebase.
        </p>
      </section>
    </div>
  );
};

export default ApiDataFetchingGuide;

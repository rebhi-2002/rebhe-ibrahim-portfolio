// src/data/articles/the-essential-guide-to-react-testing.tsx

import TableOfContents from "../../components/blog/TableOfContents";
import CodeBlock from "../../components/blog/CodeBlock";
import { InfoBox } from "../../components/blog/ArticleCallouts";

const tocHeadings = [
  { id: "intro", title: "Why Testing is Non-Negotiable" },
  { id: "pyramid", title: "The Testing Pyramid: A Strategy for Success" },
  { id: "unit-testing", title: "Level 1: Unit Testing with Vitest & RTL" },
  { id: "integration-testing", title: "Level 2: Integration Testing" },
  {
    id: "e2e-testing",
    title: "Level 3: End-to-End (E2E) Testing with Playwright",
  },
  { id: "conclusion", title: "Conclusion: Building a Culture of Quality" },
];

const ReactTestingGuide = () => {
  return (
    <div className="flex flex-col gap-y-10">
      <section>
        <h2
          id="intro"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Why Testing is Non-Negotiable
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          In professional software development, writing code is only half the
          battle. Ensuring that code works as expected—and continues to work as
          the application evolves—is equally critical. Automated testing
          provides a safety net that allows you to refactor with confidence,
          prevent regressions, and build more reliable applications. This guide
          covers the modern strategies and tools you need to effectively test
          your React applications.
        </p>
      </section>

      <TableOfContents headings={tocHeadings} />

      <section>
        <h2
          id="pyramid"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          The Testing Pyramid: A Strategy for Success
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          A balanced testing strategy is often visualized as a pyramid. The idea
          is to have many fast, cheap, and isolated tests at the base, and
          progressively fewer, slower, and more integrated tests as you move up.
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-300">
          <li>
            <strong>Unit Tests (Base):</strong> Test individual components or
            functions in isolation. They are fast and numerous.
          </li>
          <li>
            <strong>Integration Tests (Middle):</strong> Test how multiple
            components work together. They are slower and fewer.
          </li>
          <li>
            <strong>End-to-End Tests (Top):</strong> Test entire user flows in a
            real browser. They are the slowest and fewest.
          </li>
        </ul>
      </section>

      <section>
        <h2
          id="unit-testing"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Level 1: Unit Testing with Vitest & RTL
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          Unit tests form the foundation of your testing strategy. We test a
          single component to verify it renders correctly and responds to user
          interaction. The modern toolset for this is **Vitest** (a super-fast
          test runner compatible with Vite) and **React Testing Library (RTL)**.
        </p>
        <InfoBox>
          RTL's philosophy is to test your components in the same way a user
          would interact with them. Instead of testing implementation details,
          you find elements by their text or accessibility role and assert their
          behavior.
        </InfoBox>
        <CodeBlock
          code={`
            // Example: Testing a simple Button component
            import { render, screen, fireEvent } from '@testing-library/react';
            import { describe, it, expect, vi } from 'vitest';
            import Button from './Button';

            describe('Button', () => {
              it('should render and be clickable', () => {
                const handleClick = vi.fn(); // Creates a mock function
                render(<Button onClick={handleClick}>Click Me</Button>);

                const buttonElement = screen.getByText('Click Me');
                expect(buttonElement).toBeInTheDocument();

                fireEvent.click(buttonElement);
                expect(handleClick).toHaveBeenCalledTimes(1);
              });
            });
          `}
        />
      </section>

      <section>
        <h2
          id="integration-testing"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Level 2: Integration Testing
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          Integration tests verify that several components work together
          correctly. A common use case is testing a component that fetches and
          displays data. Here, we also use RTL, but we "mock" the API call to
          avoid making real network requests during our tests.
        </p>
        <CodeBlock
          code={`
            // Example: Testing a component that fetches user data
            import { render, screen, waitFor } from '@testing-library/react';
            import { describe, it, expect, vi } from 'vitest';
            import UserProfile from './UserProfile';

            // Mock the global fetch function
            global.fetch = vi.fn(() =>
              Promise.resolve({
                json: () => Promise.resolve({ name: 'Rebhe Ibrahim' }),
              })
            );

            describe('UserProfile', () => {
              it('should fetch and display the user name', async () => {
                render(<UserProfile userId="1" />);
                
                // Wait for the "Rebhe Ibrahim" text to appear on the screen
                await waitFor(() => {
                  expect(screen.getByText('Rebhe Ibrahim')).toBeInTheDocument();
                });
              });
            });
          `}
        />
      </section>

      <section>
        <h2
          id="e2e-testing"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Level 3: End-to-End (E2E) Testing with Playwright
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-4 mt-4">
          E2E tests are at the top of the pyramid. They simulate a complete user
          journey in a real browser. Tools like **Playwright** and **Cypress**
          automate a browser to navigate your live application, fill out forms,
          click buttons, and verify that the entire system works together as
          expected.
        </p>
        <CodeBlock
          language="javascript"
          code={`
            // Example Playwright test for a login flow
            import { test, expect } from '@playwright/test';

            test('should allow a user to log in', async ({ page }) => {
              // 1. Go to the login page
              await page.goto('http://localhost:5173/login');

              // 2. Fill in the form
              await page.fill('input[name="email"]', 'test@example.com');
              await page.fill('input[name="password"]', 'password123');

              // 3. Click the submit button
              await page.click('button[type="submit"]');

              // 4. Assert that the user is redirected to the dashboard
              await expect(page).toHaveURL('http://localhost:5173/dashboard');
              await expect(page.getByText('Welcome back!')).toBeVisible();
            });
          `}
        />
      </section>

      <section>
        <h2
          id="conclusion"
          className="text-3xl font-bold mb-4 mt-4 text-blue-400 scroll-mt-20"
        >
          Conclusion: Building a Culture of Quality
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Automated testing is an investment in the stability and quality of
          your application. By adopting a balanced strategy with a solid
          foundation of unit tests, complemented by integration and E2E tests,
          you can build complex applications with confidence. The modern toolset
          of Vitest, React Testing Library, and Playwright makes testing more
          accessible and efficient than ever before.
        </p>
      </section>
    </div>
  );
};

export default ReactTestingGuide;

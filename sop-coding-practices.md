# Concise Next.js 15 / Tailwind 4 / TypeScript Best Practices

## Core Philosophy & Principles

Use latest nextjs with typescript, tailwindcss, shadcn (but only use components from there if it's better and simpler than raw html). Follow my js-ts.snippets in vs code or existing files in project folder for coding style and stay consistant to that style. Create error free, professional, very secure, of highest SEO grade codes that are modular, reusable and easily maintainable. Follow my coding style exactly reading existing files, do not write comments inside code unless absolutely necessary, always read latest file content before updating.

- **Goal:** Build performant, maintainable apps prioritizing SEO & Security.
- **Approach:** Simplicity, clarity, rapid development via flat structure, concise conventions.
- **AI Assistant:** Generate high-quality code only, no unnecessary comments/explanations. Use Chain of Thought (pseudocode -> code). Suggest improvements. Admit unknowns.
- **Code Quality:**
  - Write clear, self-documenting code (kebab-case names, descriptive vars like `isLoading`).
  - Minimize comments: Explain complex logic ('why') only.
  - Use ESLint + Prettier for consistency.
  - Prefer iteration/modularity over duplication. If a file has more than 100 lines of code, its time to refactor and break it into smalle components.
  - Use `function` keyword for pure functions.
  - Use concise syntax (e.g., avoid unneeded curly braces).
  - Write declarative JSX.
  - Prioritize robust error handling: early returns, guard clauses, proper logging, user-friendly messages, model expected errors in Server Actions, use Error Boundaries.
- **Changes:** Modify only relevant code sections; aim for minimal impactful changes.

## Project Structure (No `src` Directory)

- **`app/`:** App Router essentials. Routing (`page.tsx`), layouts (`layout.tsx`), loading (`loading.tsx`), error (`error.tsx`), API routes (`/api`), SEO files (`sitemap.ts`, `robots.ts`). Keep logic minimal; focus on structure/routing.
- **`components/`:** All UI components.
  - **Page Components:** Group by feature/route (e.g., `components/chat/ChatView.tsx`).
  - **Feature-Specific:** Components/constants used only within one feature reside in its folder (e.g., `components/chat/ChatMessage.tsx`, `components/chat/constants.ts`).
  - **Shared UI:** Reusable UI in `components/ui/` (e.g., Shadcn `Button.tsx`) or `components/shared/` (e.g., custom `Spinner.tsx`).
  - **Custom UI:** Custom built UI components goes here (e.g., `components/custom-ui/DateRange.tsx`).
- **`lib/`:** All non-component logic. Use subfolders (`hooks`, `db`, `utils`, `types`, `consts`, `actions`). Contains shared hooks, DB logic/models, utilities, global types/interfaces, global constants, Server Actions.

## Component Design & Implementation

- **Naming:** Use concise, clear names (e.g., `CardProps`, `getUser`).
- **Pattern:** Standard typed functional components. Allow passing `className` for Tailwind flexibility using `cn` utility.
- **Structure:** Adhere to Single Responsibility Principle (SRP). Compose complex UI from smaller units. Pass data via props.
- **Server vs. Client:** Default to Server Components. Use `'use client'` minimally only for interactivity, hooks, or browser APIs. Keep Client Components small and focused.
- **ISR:** Implement Incremental Static Regeneration where appropriate.

  ```typescript
  // components/ui/Card.tsx
  import { cn } from '@/lib/utils';

  type CardProps = { // Brief type name
    title: string;
    children?: React.ReactNode;
    className?: string; // Allow passing Tailwind classes
  };

  export default function Card({ title, children, className }: CardProps) {
    return (
      // Use semantic elements; combine Tailwind classes
      <section className={cn('border p-4 rounded', className)}>
        <h2>{title}</h2>
        {children}
      </section>
    );
  }
  ```

## Performance (Critical for SEO & UX)

- **PPR & Suspense:** Use Partial Prerendering. Wrap async Server Components fetching data in `<Suspense>` with dimensionally-accurate loading fallbacks (`loading.tsx` or skeletons) to prevent Cumulative Layout Shift (CLS).
- **Images:** Use `next/image` exclusively. Provide `width`, `height`, descriptive `alt` text. Optimize format (WebP) and implement lazy loading.
- **Client JS:** Minimize bundle size. Limit `'use client'`, `useEffect`, `useState`. Favor RSCs.
- **Memoization:** Use `React.memo`, `useMemo`, `useCallback` rarely, only if profiling confirms a significant benefit.

## SEO (Non-Negotiable)

- **Metadata:** Use `generateMetadata` in `layout.tsx` (defaults) and `page.tsx` (specifics) for dynamic `<title>`, `<meta description>`, Open Graph, etc. Fetch data within `generateMetadata` if needed.
- **HTML:** Use semantic tags (`main`, `article`, `nav`, `h1`-`h6`) correctly.
- **Structured Data:** Implement Schema.org (JSON-LD) via `generateMetadata` or Server Components.
- **Crawling:** Generate dynamic `sitemap.ts` and `robots.ts` in `app/`.
- **Content:** Prioritize high-quality content and logical internal linking with descriptive anchors.
- **CWV:** Optimize Core Web Vitals (LCP, INP, CLS).

## Security (Non-Negotiable)

- **Validation:** Always validate/sanitize user/API input on the server (API Routes, Server Actions) using libraries like `zod`. Never trust client input.
- **XSS:** Rely on React's built-in escaping. Sanitize external HTML if using `dangerouslySetInnerHTML`.
- **CSRF:** Server Actions provide protection. Secure API routes handling state changes manually if needed (tokens, header checks).
- **SSRF:** Validate external URLs fetched by the server.
- **AuthN/AuthZ:** Use robust authentication (e.g., NextAuth.js). Enforce strict server-side authorization checks.
- **Headers:** Configure security headers (CSP, HSTS, etc.) via `next.config.mjs` or middleware.
- **Dependencies:** Regularly run `npm audit`.
- **Rate Limiting:** Protect API routes and authentication endpoints.
- **Secrets:** Use `.env.local` (server-side access only). Never use `NEXT_PUBLIC_` for sensitive data.

## Styling & UI/UX (Tailwind 4)

- **Tailwind:** Use utility-first directly in JSX (e.g., `size-*`). Customize `tailwind.config.ts` (theme, CSS vars).
- **`@apply`:** Use _very_ sparingly in `globals.css` only for base element styles (rare) or complex, reusable low-level patterns unsuitable for component abstraction. **Avoid** using it just to shorten component class lists.
- **Responsiveness:** Implement mobile-first design.
- **Components:** Utilize Shadcn UI, Radix UI, and Tailwind CSS Variant Authority.
- **Design:** Aim for creative, professional designs beyond defaults. Use subtle animations. Apply modern UI/UX (descriptive icons, purposeful whitespace).

## TypeScript

- **Config:** Enforce `strict: true` in `tsconfig.json`.
- **Types:** Define specific types (prefer `type` over `interface`). Avoid `any`. Use concise names where clear (e.g., `type Id = string;`).
- **Enums:** Avoid enums; use object literals or mapped types instead.
- **Components:** Use functional components.

## State Management

- **Hierarchy:** Prioritize local state (`useState`, `useReducer`) -> Lift state -> Context API (simple global state like theme/auth) -> External stores (Zustand/Jotai in `lib/store/` for complex client state).
- **Server State:** Handle via Next.js `Workspace`/caching or libraries like React Query/SWR for complex client-side needs.

## Data Fetching & API

- **Server Components:** Fetch data directly using `async`/`await` (leveraging Next.js extended `Workspace` for caching/deduping).
- **Backend Logic:** Implement via Route Handlers (`app/api/`) or Server Actions (`lib/actions/`). Secure and validate rigorously.
- **Type Safety:** Validate API requests/responses (e.g., with `zod`).

## Constants

- **Global:** Define in `lib/consts/` (e.g., `lib/consts/site.ts`).
- **Feature-Specific:** Define within the relevant component folder (e.g., `components/chat/constants.ts`).

## Accessibility (a11y)

- Use semantic HTML.
- Ensure full keyboard navigation.
- Provide meaningful `alt` text for images.
- Use ARIA attributes where native semantics are insufficient.

## Preferred Libraries

- **URL State:** `nuqs`
- **Validation:** `zod`
- **Icons:** `lucide-react` (fallback: `react-icons` with similar style)

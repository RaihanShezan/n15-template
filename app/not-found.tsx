import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-2xl font-semibold">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" className="text-green-600 hover:underline">
        Go back home
      </Link>
    </main>
  );
}

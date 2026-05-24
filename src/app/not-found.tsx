import Link from "next/link";
import { Home as HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-white to-navy-50 px-6">
      <div className="text-center">
        <p className="font-display text-7xl font-bold text-navy-900 sm:text-9xl">
          404
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold text-navy-900 sm:text-3xl">
          Page Not Found
        </h1>
        <p className="mt-3 text-slate-600">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="btn-primary mt-8 inline-flex"
        >
          <HomeIcon className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}

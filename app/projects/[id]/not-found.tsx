import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="font-serif text-5xl font-light mb-4 text-stone-900 dark:text-stone-100">
          404
        </h1>
        <h2 className="font-serif text-2xl font-light mb-4 text-stone-900 dark:text-stone-100">
          Project Not Found
        </h2>
        <p className="text-stone-600 dark:text-stone-400 mb-8">
          The project you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
        <Link
          href="/"
          className="inline-flex px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 font-medium rounded hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
        >
          Back to Portfolio
        </Link>
      </div>
    </div>
  );
}

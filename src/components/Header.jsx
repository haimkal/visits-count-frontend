'use client';

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200/70">
      <div className="mx-auto max-w-3xl px-6 py-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h1 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-zinc-900">
          Visits by Countries
        </h1>

        <div className="text-sm text-zinc-500">
          <span className="mr-2">Made by</span>
          <span className="font-medium text-zinc-700">Haim Kalvo</span>
        </div>
      </div>
    </header>
  );
}

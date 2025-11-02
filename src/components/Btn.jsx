'use client';

export default function Btn({
  type = 'button',
  onClick,
  loading = false,
  disabled = false,
  className = '',
  children,
}) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-medium shadow-sm transition hover:bg-gray-50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 disabled:opacity-50 ${className}`}
      aria-busy={loading ? 'true' : 'false'}
    >
      {loading && (
        <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-transparent" />
      )}
      {children}
    </button>
  );
}

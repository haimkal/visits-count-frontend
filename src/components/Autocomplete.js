'use client';
import { useMemo, useRef, useState } from 'react';

export default function Autocomplete({
  value,
  onChange,
  onSelect,
  options = [],
  disabled = false,
  placeholder = 'Type country code (e.g. US)',
}) {
  const [open, setOpen] = useState(false);
  const hideTimer = useRef(null);

  const raw = (value ?? '').trim().toUpperCase();
  const suggestions = useMemo(() => {
    if (!raw) return [];
    return options.filter((option) => option.startsWith(raw));
  }, [raw, options]);

  function choose(code) {
    onSelect?.(code);
    setOpen(false);
  }

  return (
    <div className="relative flex-1">
      <input
        id="country_code"
        name="country_code"
        type="text"
        value={value}
        disabled={disabled}
        onChange={(e) => {
          onChange?.(e.target.value.toUpperCase());
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => {
          hideTimer.current = setTimeout(() => setOpen(false), 120);
        }}
        placeholder={placeholder}
        maxLength={2}
        className="w-full bg-white rounded-xl border px-3 py-2 text-sm uppercase outline-none focus:ring-2 focus:ring-gray-200"
      />
      {open && suggestions.length > 0 && (
        <ul
          className="absolute z-20 mt-2 max-h-56 w-full overflow-auto rounded-xl border bg-white shadow-md"
          onMouseDown={(e) => {
            e.preventDefault();
            clearTimeout(hideTimer.current);
          }}
        >
          {suggestions.map((c) => (
            <li
              key={c}
              className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-50"
              onClick={() => choose(c)}
            >
              <span className="font-mono tracking-wide">{c}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

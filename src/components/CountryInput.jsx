'use client';

import { useMemo, useState } from 'react';
import { VisitsService } from '@/services/visits.service';
import Autocomplete from './Autocomplete';
import Btn from './Btn';
import { COUNTRY_CODES } from '@/helpers/country-codes';

export default function CountryInput() {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const counryCodes = useMemo(() => COUNTRY_CODES.map((c) => c.toUpperCase()), []);
  const isRealCountryCode = counryCodes.includes(code.trim().toUpperCase());

  async function submit(e) {
    e?.preventDefault();

    if (!isRealCountryCode) {
      setError(
        code.trim()
          ? 'Please choose a valid 2-letter code from the list.'
          : 'Please enter a country code.'
      );
      setMsg('');
      return;
    }

    setLoading(true);
    setError('');
    setMsg('');

    try {
      const res = await VisitsService.add(code); // { country: 'us', count: 7 }
      setMsg(`Added ${res?.country?.toUpperCase()} • total ${res?.count ?? ''}`);
      setCode('');
      setTimeout(() => setMsg(''), 2500);
    } catch (err) {
      setError(err?.message || 'Failed to add visit');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submit} className="w-full max-w-md">
      <section className="input-and-btn flex items-center gap-2">
        <Autocomplete
          value={code}
          onChange={(val) => {
            setCode(val);
            setError('');
            setMsg('');
          }}
          onSelect={(val) => {
            setCode(val);
            setError('');
            setMsg('');
          }}
          options={counryCodes}
          disabled={loading}
        />

        <Btn type="submit" loading={loading} className="px-3 py-2">
          Send
        </Btn>
      </section>
      {(msg || error) && (
        <span className={`text-sm ${error ? 'text-red-700' : 'text-gray-700'}`}>
          {error || msg}
        </span>
      )}
    </form>
  );
}

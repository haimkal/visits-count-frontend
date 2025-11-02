'use client';
import React, { useEffect, useState } from 'react';
import { VisitsService } from '@/services/visits.service';
import Btn from '@/components/Btn';

export default function StatsTable() {
  const [countriesCount, setCountriesCount] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await VisitsService.getAll();
      console.log('res: ', res);
      setCountriesCount(res || {});
    } catch (e) {
      setError(e?.message || 'Failed to load stats');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  console.log('countries', countriesCount);

  const rows = Object.entries(countriesCount).sort((a, b) => b[1] - a[1]);

  return (
    <section className="w-full max-w-md space-y-3">
      <div className="flex items-center gap-3">
        <Btn onClick={fetchStats} loading={loading}>
          Show Statistics
        </Btn>
        {loading && <span className="text-sm text-gray-500">Loading…</span>}
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {error}
        </div>
      )}

      {rows.length === 0 ? (
        <p className="text-sm text-gray-600">No data yet.</p>
      ) : (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left font-semibold tracking-tight">Country</th>
                <th className="px-4 py-3 text-right font-semibold tracking-tight">Count</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {rows.map(([country, num]) => (
                <tr key={country} className="hover:bg-gray-50">
                  <td className="px-4 py-3 uppercase font-medium">{country}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{num}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

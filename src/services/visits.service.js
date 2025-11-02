const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000';
console.log('base: ', BASE_URL);

export class VisitsService {
  static async health() {
    const res = await fetch(`${BASE_URL}/health`);
    return res.json();
  }

  static async getAll() {
    const res = await fetch(`${BASE_URL}/visits`);
    return res.json();
  }

  static async add(country) {
    const res = await fetch(`${BASE_URL}/visits`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ country }),
    });
    return res.json();
  }
}

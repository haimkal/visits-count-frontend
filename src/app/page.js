import CountryInput from '@/components/CountryInput';
import StatsTable from '@/components/StatsTable';
import Header from '@/components/Header';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-6">
      <CountryInput />
      <StatsTable />
    </section>
  );
}

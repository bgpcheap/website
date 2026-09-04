import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProviderData from '@/components/Providers';
import ProviderTable from '@/components/ProvidersTable';

export default function Home() {
  return (
    <div className="directory-page">
      <Header />
      <main>
        <section className="directory-intro" aria-labelledby="directory-heading">
          <h1 id="directory-heading">
            Find BGP infrastructure by location, service, and price.
          </h1>
          <p className="provider-total" aria-label={`${ProviderData.length} providers`}>
            <strong>{ProviderData.length}</strong>
            <span>providers</span>
          </p>
        </section>
        <ProviderTable />
      </main>
      <Footer />
    </div>
  );
}

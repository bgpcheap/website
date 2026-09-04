import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProviderData from '@/components/Providers';
import ProviderTable from '@/components/ProvidersTable';
import Seo from '@/components/Seo';

const title = 'Compare BGP Providers by Price and Location | bgp.cheap';
const description =
  'Compare BGP-capable VPS, bare metal, transit, and IXP access by location, starting price, route delivery, and routing filters.';

const directoryStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://bgp.cheap/#directory',
  name: title,
  description,
  url: 'https://bgp.cheap/',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://bgp.cheap/#website',
    name: 'bgp.cheap',
    url: 'https://bgp.cheap/',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: ProviderData.length,
    itemListElement: ProviderData.map((item) => ({
      '@type': 'Organization',
      name: item.provider.name,
      url: item.link,
      identifier: `AS${item.provider.asn}`,
    })),
  },
};

export default function Home() {
  return (
    <div className="directory-page">
      <Seo
        title={title}
        description={description}
        path="/"
        structuredData={directoryStructuredData}
      />
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

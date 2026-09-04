import Head from 'next/head';

const siteUrl = 'https://bgp.cheap';
const imageUrl = `${siteUrl}/og.png`;

type SeoProps = {
  title: string;
  description: string;
  path: '/' | '/policy';
  structuredData?: object;
};

function serializeStructuredData(value: object) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}

export default function Seo({ title, description, path, structuredData }: SeoProps) {
  const canonicalUrl = `${siteUrl}${path}`;
  const imageAlt = 'bgp.cheap provider directory with an abstract BGP routing diagram';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="application-name" content="bgp.cheap" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="theme-color" content="#f3f5ef" />
      <meta name="color-scheme" content="light" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="bgp.cheap" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeStructuredData(structuredData) }}
        />
      )}
    </Head>
  );
}

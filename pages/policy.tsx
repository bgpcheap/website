import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Seo from '@/components/Seo';

const githubIssueUrl = 'https://github.com/bgpcheap/website/issues/new/choose';
const title = 'Listing Policy | bgp.cheap';
const description =
  'Read the eligibility, record format, pricing, submission process, and fraud warning for provider listings on bgp.cheap.';

const policyStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://bgp.cheap/policy#policy',
  name: title,
  description,
  url: 'https://bgp.cheap/policy',
  dateModified: '2026-09-04',
  isPartOf: {
    '@type': 'WebSite',
    '@id': 'https://bgp.cheap/#website',
    name: 'bgp.cheap',
    url: 'https://bgp.cheap/',
  },
};

export default function Policy() {
  return (
    <div className="policy-page">
      <Seo
        title={title}
        description={description}
        path="/policy"
        structuredData={policyStructuredData}
      />
      <Header />
      <main>
        <header className="policy-intro">
          <h1>Listing policy</h1>
          <p className="policy-lede">
            bgp.cheap is a factual provider directory. A listing is not a recommendation,
            certification, audit, or guarantee of service.
          </p>
        </header>

        <div className="policy-grid">
          <aside className="policy-index" aria-label="Policy sections">
            <p>On this page</p>
            <ol>
              <li><a href="#purpose">Purpose</a></li>
              <li><a href="#eligibility">Eligibility</a></li>
              <li><a href="#records">Record format</a></li>
              <li><a href="#submissions">Submissions</a></li>
            </ol>
            <a className="policy-issue-link" href={githubIssueUrl} target="_blank" rel="noopener noreferrer">
              Open a GitHub issue
              <svg className="external-icon" aria-hidden="true" viewBox="0 0 16 16">
                <path d="M6 3H3v10h10v-3M8 2h6v6M14 2 7 9" />
              </svg>
            </a>
          </aside>

          <article className="policy-copy">
            <section id="purpose">
              <p className="section-number">01</p>
              <div>
                <h2>Purpose</h2>
                <p>
                  The directory helps newcomers and hobbyists compare submitted facts about
                  lower-cost services that support BGP sessions. Visitors should verify current
                  availability, terms, and technical details directly with each provider.
                </p>
              </div>
            </section>

            <section id="eligibility">
              <p className="section-number">02</p>
              <div>
                <h2>Eligibility</h2>
                <p>A submitted listing should meet all of these baseline requirements:</p>
                <ul>
                  <li>Offer a service that supports customer BGP sessions.</li>
                  <li>Advertise a lowest eligible plan of $15 USD or less, or a comparable amount.</li>
                  <li>Keep any required setup fee below $50 USD.</li>
                  <li>Provide a public website and enough information to identify the operator.</li>
                </ul>
                <p>
                  Inclusion records eligibility and submitted information only. Maintainers do not
                  independently rank every provider or promise that a listing remains current.
                </p>
              </div>
            </section>

            <section id="records">
              <p className="section-number">03</p>
              <div>
                <h2>Record format</h2>
                <p>Listings can include the following submitted fields:</p>
                <ul className="field-list">
                  <li>Provider name and ASN</li>
                  <li>Service locations</li>
                  <li>Available products</li>
                  <li>Route delivery</li>
                  <li>IRR, RPKI, and LOA controls</li>
                  <li>BGP fees and USD starting price</li>
                  <li>Provider billing currency</li>
                  <li>Operational notes and provider link</li>
                </ul>
                <p>
                  Prices are shown in USD for comparison. Non-USD listings use the European
                  Central Bank reference rates published on 4 September 2026. The currency flag
                  and code show what the provider actually bills, so the final charge can vary
                  with exchange rates.
                </p>
              </div>
            </section>

            <section id="submissions">
              <p className="section-number">04</p>
              <div>
                <h2>Submissions and corrections</h2>
                <p>
                  To request a listing or correct an existing record, open an issue on GitHub with
                  public supporting details. Changes are reviewed against this policy and the data
                  format used by the directory.
                </p>
                <div className="policy-warning">
                  <strong>Fraud warning</strong>
                  <p>
                    This project does not initiate communication through provider support tickets
                    or live chat. Anyone claiming to be a bgp.cheap auditor is fraudulent.
                  </p>
                </div>
                <p className="effective-date">Effective 29 March 2023 · revised 4 September 2026</p>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

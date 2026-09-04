import Image from 'next/image';
import { useMemo, useState } from 'react';

import ProviderData, {
  type BillingCurrency,
  type ProviderData as ProviderRecord,
} from './Providers';

const githubIssueUrl = 'https://github.com/bgpcheap/website/issues/new/choose';
const exchangeRateDate = '4 Sep 2026';
const currencyFlags: Record<BillingCurrency, string> = {
  USD: 'us',
  EUR: 'european_union',
  GBP: 'gb',
  CHF: 'ch',
  SEK: 'se',
  CZK: 'cz',
  AUD: 'au',
};

function formatUsd(cents: number) {
  return `$${(cents / 100).toFixed(2)} USD`;
}

function uniqueValues(values: string[][]) {
  return Array.from(new Set(values.flat())).sort((a, b) => a.localeCompare(b));
}

function countryCode(location: string) {
  return location.split(',').at(-1)?.trim().toLowerCase() ?? '';
}

function locationSummary(locations: string[], query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  const ordered = [...locations];

  if (normalizedQuery) {
    ordered.sort((a, b) => {
      const aMatches = a.toLowerCase().includes(normalizedQuery) ? 1 : 0;
      const bMatches = b.toLowerCase().includes(normalizedQuery) ? 1 : 0;
      return bMatches - aMatches;
    });
  }

  return ordered.slice(0, 3);
}

function visibleServices(services: string[]) {
  return services.slice(0, 4);
}

function ProviderRow({ item, query }: { item: ProviderRecord; query: string }) {
  const normalizedQuery = query.trim().toLowerCase();
  const billingCurrency = item.billingCurrency ?? 'USD';
  const billingCadence = item.billingCadence ?? 'monthly';
  const displayedLocations = locationSummary(item.locations, query);
  const hiddenLocations = item.locations.filter(
    (location) => !displayedLocations.includes(location),
  );

  return (
    <article className="provider-row">
      <div className="provider-identity">
        <a
          className={`provider-link${item.provider.logo ? ' has-logo' : ' has-name-only'}${
            item.provider.logo && item.provider.logo_include_text ? ' has-wordmark' : ''
          }${item.provider.logo && !item.provider.logo_include_text ? ' has-symbol' : ''}`}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.provider.logo && (
            <Image
              src={item.provider.logo}
              alt={item.provider.logo_include_text ? item.provider.name : ''}
              width={120}
              height={34}
            />
          )}
          {(!item.provider.logo || !item.provider.logo_include_text) && (
            <span className="provider-name">{item.provider.name}</span>
          )}
          <span className="sr-only"> (opens provider website)</span>
        </a>
        <a
          className="asn-tag"
          href={`https://bgp.tools/as/${item.provider.asn}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          AS{item.provider.asn}
        </a>
      </div>

      <div className="provider-price" data-label="Price">
        <span className="price-prefix">
          {billingCadence === 'monthly' ? 'Starting at' : 'Monthly equivalent'}
        </span>
        <span className="price-value">
          <strong>{formatUsd(item.startPrice)}</strong>
          <small>/ month</small>
        </span>
        <span className="billing-currency">
          <Image
            src={`/img/flags/${currencyFlags[billingCurrency]}.svg`}
            alt=""
            width={20}
            height={14}
          />
          Billed {billingCadence} in {billingCurrency}
        </span>
      </div>

      <div className="location-list" data-label="Locations">
        {displayedLocations.map((location) => {
          const match = normalizedQuery && location.toLowerCase().includes(normalizedQuery);
          const code = countryCode(location);

          return (
            <span key={location} className={`location-item${match ? ' is-match' : ''}`}>
              <Image src={`/img/flags/${code}.svg`} alt="" width={20} height={14} />
              <span>{location}</span>
            </span>
          );
        })}
        {hiddenLocations.length > 0 && (
          <details className="more-count overflow-reveal location-overflow-reveal">
            <summary aria-label={`Show ${hiddenLocations.length} more locations`}>
              +{hiddenLocations.length} locations
            </summary>
            <div className="overflow-reveal-panel location-overflow-panel">
              <strong>More locations</strong>
              {hiddenLocations.map((location) => (
                <span key={location} className="location-item">
                  <Image
                    src={`/img/flags/${countryCode(location)}.svg`}
                    alt=""
                    width={20}
                    height={14}
                  />
                  <span>{location}</span>
                </span>
              ))}
            </div>
          </details>
        )}
      </div>

      <div className="service-list" data-label="Services">
        {visibleServices(item.services).map((service) => (
          <span key={service}>{service}</span>
        ))}
        {item.services.length > 4 && (
          <details className="more-count overflow-reveal">
            <summary aria-label={`Show ${item.services.length - 4} more services`}>
              +{item.services.length - 4}
            </summary>
            <div className="overflow-reveal-panel">
              <strong>More services</strong>
              {item.services.slice(4).map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </details>
        )}
      </div>

      <div className="route-cell" data-label="Route delivery">
        <span>{item.routes}</span>
      </div>

      <div className="filter-list" data-label="Filters">
        {item.bgpFilters.length ? (
          item.bgpFilters.map((filter) => <span key={filter}>{filter}</span>)
        ) : (
          <span className="not-submitted">Not submitted</span>
        )}
      </div>

      <details className="record-details">
        <summary>Full record</summary>
        <div className="record-details-panel">
          <div>
            <h3>All locations</h3>
            <ul className="record-location-list">
              {item.locations.map((location) => (
                <li key={location}>
                  <Image
                    src={`/img/flags/${countryCode(location)}.svg`}
                    alt=""
                    width={20}
                    height={14}
                  />
                  {location}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <p>{item.services.join(' · ')}</p>
            <h3>Routing features</h3>
            <p>{item.bgpFeatures.length ? item.bgpFeatures.join(' · ') : 'Not submitted'}</p>
          </div>
          <div>
            <h3>BGP fee</h3>
            <p className="preserve-lines">{item.bgpFee}</p>
            <h3>Pricing in USD</h3>
            <p className="preserve-lines">{item.pricing || 'Not submitted'}</p>
            <p className="billing-currency record-billing-currency">
              <Image
                src={`/img/flags/${currencyFlags[billingCurrency]}.svg`}
                alt=""
                width={20}
                height={14}
              />
              Billed {billingCadence} in {billingCurrency}
            </p>
          </div>
          <div>
            <h3>Notes</h3>
            <p className="preserve-lines">{item.notes || 'No notes submitted.'}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              Visit provider website
              <svg className="external-icon" aria-hidden="true" viewBox="0 0 16 16">
                <path d="M6 3H3v10h10v-3M8 2h6v6M14 2 7 9" />
              </svg>
            </a>
          </div>
        </div>
      </details>
    </article>
  );
}

export default function ProviderTable() {
  const [query, setQuery] = useState('');
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const [route, setRoute] = useState('');
  const [routingFilter, setRoutingFilter] = useState('');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const serviceOptions = useMemo(
    () => uniqueValues(ProviderData.map((item) => item.services)),
    [],
  );
  const locationOptions = useMemo(
    () => uniqueValues(ProviderData.map((item) => item.locations)),
    [],
  );
  const routeOptions = useMemo(
    () => Array.from(new Set(ProviderData.map((item) => item.routes))).sort(),
    [],
  );
  const routingFilterOptions = useMemo(
    () => uniqueValues(ProviderData.map((item) => item.bgpFilters)),
    [],
  );

  const filteredData = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    const matches = ProviderData.filter((item) => {
      const matchesQuery =
        !normalizedQuery ||
        item.provider.name.toLowerCase().includes(normalizedQuery) ||
        String(item.provider.asn).includes(normalizedQuery) ||
        item.locations.some((value) => value.toLowerCase().includes(normalizedQuery)) ||
        item.services.some((value) => value.toLowerCase().includes(normalizedQuery));

      return (
        matchesQuery &&
        (!service || item.services.includes(service)) &&
        (!location || item.locations.includes(location)) &&
        (!route || item.routes === route) &&
        (!routingFilter || item.bgpFilters.includes(routingFilter))
      );
    });

    return matches.sort((a, b) => {
      return a.startPrice - b.startPrice || a.provider.name.localeCompare(b.provider.name);
    });
  }, [location, query, route, routingFilter, service]);

  const clearFilters = () => {
    setQuery('');
    setService('');
    setLocation('');
    setRoute('');
    setRoutingFilter('');
  };

  const activeFilterCount = [service, location, route, routingFilter].filter(Boolean).length;

  return (
    <section className="provider-workspace" aria-label="Provider directory">
      <aside className="filter-rail">
        <div className="search-block">
          <label htmlFor="provider-search">Search provider records</label>
          <div className="search-control">
            <svg aria-hidden="true" viewBox="0 0 24 24">
              <circle cx="10.5" cy="10.5" r="6.5" />
              <path d="m15.5 15.5 5 5" />
            </svg>
            <input
              id="provider-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Name, ASN, city, service"
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} aria-label="Clear search">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m9 9 6 6m0-6-6 6" />
                </svg>
              </button>
            )}
          </div>
          <p className="result-count" aria-live="polite">
            <strong>{filteredData.length} matching</strong>
            <span>/ {ProviderData.length} providers</span>
          </p>
        </div>

        <div className={`filter-block${filtersOpen ? ' is-open' : ''}`}>
          <div className="filter-heading">
            <h2>Filters</h2>
            <button
              className="filter-toggle"
              type="button"
              aria-controls="provider-filter-controls"
              aria-expanded={filtersOpen}
              onClick={() => setFiltersOpen((open) => !open)}
            >
              <span>Filters</span>
              <small>{activeFilterCount ? `${activeFilterCount} active` : 'Show controls'}</small>
              <svg aria-hidden="true" viewBox="0 0 16 16">
                <path d="m3 6 5 5 5-5" />
              </svg>
            </button>
          </div>
          <div className="filter-controls" id="provider-filter-controls">
            <label>
              <span>Service</span>
              <select value={service} onChange={(event) => setService(event.target.value)}>
                <option value="">All</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              <span>Location</span>
              <select value={location} onChange={(event) => setLocation(event.target.value)}>
                <option value="">All</option>
                {locationOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              <span>Route delivery</span>
              <select value={route} onChange={(event) => setRoute(event.target.value)}>
                <option value="">All</option>
                {routeOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              <span>RPKI / IRR / LOA</span>
              <select
                value={routingFilter}
                onChange={(event) => setRoutingFilter(event.target.value)}
              >
                <option value="">All</option>
                {routingFilterOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <a className="github-action" href={githubIssueUrl} target="_blank" rel="noopener noreferrer">
          <svg className="github-mark" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82a9.6 9.6 0 0 1 2.5.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
          </svg>
          <span>Submit or correct a<br />listing on GitHub</span>
          <svg className="external-icon" aria-hidden="true" viewBox="0 0 16 16">
            <path d="M6 3H3v10h10v-3M8 2h6v6M14 2 7 9" />
          </svg>
        </a>

        <div className="directory-note">
          <svg aria-hidden="true" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="13" />
            <path d="M16 14v9M16 9.5v.5" />
          </svg>
          <p>Submitted facts.<br />Not an endorsement.</p>
        </div>

        <div className="currency-note">
          <span aria-hidden="true">$</span>
          <p>
            USD estimates use {exchangeRateDate} rates.<br />Flags show billing currency.
          </p>
        </div>

        {(service || location || route || routingFilter) && (
          <button className="clear-filters" type="button" onClick={clearFilters}>
            Clear all filters
          </button>
        )}
      </aside>

      <div className="provider-register">
        <div className="register-head" aria-hidden="true">
          <span>Provider / ASN</span>
          <span>Price <small>(USD comparison)</small></span>
          <span>Locations <small>(select)</small></span>
          <span>Services <small>(select)</small></span>
          <span>Route delivery</span>
          <span>Filters</span>
        </div>
        <div className="provider-register-body">
          {filteredData.length ? (
            filteredData.map((item) => (
              <ProviderRow key={item.provider.asn} item={item} query={query} />
            ))
          ) : (
            <div className="empty-register">
              <p>No provider records match those filters.</p>
              <button type="button" onClick={clearFilters}>Clear all filters</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

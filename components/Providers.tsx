export type BillingCurrency = 'USD' | 'EUR' | 'GBP' | 'CHF' | 'SEK' | 'CZK';
export type BillingCadence = 'monthly' | 'quarterly' | 'annually';

export interface ProviderData {
    provider: {
        logo: string;
        logo_include_text: boolean;
        name: string;
        asn: number;
    };
    locations: string[];
    services: string[];
    routes: string;
    bgpFee: string;
    bgpFilters: string[];
    bgpFeatures: string[];
    notes: string;
    pricing: string;
    billingCurrency?: BillingCurrency;
    billingCadence?: BillingCadence;
    startPrice: number; // Monthly-equivalent USD in cents
    link: string;
}

const data: ProviderData[] = [
    {
      "provider": {
        "logo": "/img/ifog.png",
        "logo_include_text": true,
        "name": "iFog GmbH",
        "asn": 34927
      },
      "locations": [ "Singapore, SG", "Barcelona, ES", "Frankfurt, DE", "London, GB", "Zurich, CH", "Sydney, AU", "Oslo, NO", "Amsterdam, NL", "Fremont, US", "Kansas City, US", "Ashburn, US", "Houston, US", "Toronto, CA"],
      "services": ["LIR Services", "IXP Access", "VPS", "Baremetal"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Can provide access to numerous IXs such as LocIX, DE-CIX, NL-ix, FogIXP and LoNAP\nCan also provide access to RETN, Cogent and Arelion direct",
      "pricing": "Starting at $4.33 USD/month\n$95.15 USD/year for AS registrations",
      "billingCurrency": "CHF",
      "startPrice": 433,
      "link": "https://my.ifog.ch/order/forms/a/OTM5"
    },
    {
      "provider": {
        "logo": "/img/karabro_loga.png",
        "logo_include_text": true,
        "name": "Karabro AB",
        "asn": 51519
      },
      "locations": ["Malmö, SE"],
      "services": ["LIR Services", "VPS"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],

      "notes": "",
      "pricing": "Starting at $5.23 USD/month",
      "billingCurrency": "SEK",
      "startPrice": 523,
      "link": "https://my.karabro.se/aff.php?aff=1"
    },
    // {
    //   "provider": {
    //     "logo": "/img/misaka.png",
    //     "name": "Misaka"
    //   },
    //   "locations": "10+ locations",
    //   "services": "BGP VPS",
    //   "routes": "Full + default",
    //   "bgpCommunities": "Yes + passthough",
    //   "bgpFee": "$75 USD",
    //   "bgpFilters": "Automatic updates. RPKI + IRR filtering",
    //   "bgpAsSetSupport": "No",
    //   "notes": "Open a ticket to setup an account with BGP. Some locations can take one week+ to update filters",
    //   "pricing": "Starting at $6 USD",
    //   "link": "https://www.misaka.io/services/mc2"
    // },
    // {
    //   "provider": {
    //     "logo": "/img/suble.png",
    //     "logo_include_text": false,
    //     "name": "Suble",
    //     "asn": 199545
    //   },
    //   "locations": ["Copenhagen, DK"],
    //   "services": ["VPS", "IXP Access", "Baremetal", "Transit", "Colocation"],
    //   "routes": "Full + default",
    //   "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
    //   "bgpFee": "None",
    //   "bgpFilters": ["Automatic IRR", "RPKI"],

    //   "notes": "Fully automatic BGP setup from dashboard. Filters submitted to upstreams every monday.\nCan provide access to IX exchange NorthIX",
    //   "pricing": "Starting at $2.00 USD with discount \"bgp.cheap\"",
    //   "startPrice": 200,
    //   "link": "https://www.suble.io/"
    // },
    {
      "provider": {
        "logo": "/img/vultr.svg",
        "logo_include_text": true,
        "name": "Vultr",
        "asn": 20473 
      },
      "locations": ["Chicago, US", "Seattle, US", "Melbourne, AU", "Frankfurt, DE", "Atlanta, US", "Warsaw, PL", "Seoul, KR", "Miami, US", "Stockholm, SE", "Bangalore, IN", "Manchester, GB", "Santiago, CL", "Delhi NCR, IN", "Johannesburg, ZA", "Honolulu, US", "Mumbai, IN", "Sao Paulo, BR", "Mexico City, MX", "Madrid, ES", "Milan, IT", "Toronto, CA", "Silicon Valley, US", "London, GB", "Dallas, US", "Sydney, AU", "Paris, FR", "Amsterdam, NL", "Los Angeles, US", "New Jersey, US", "Singapore, SG", "Tokyo, JP", "Osaka, JP", "Tel Aviv, IL"],
      "services": ["VPS", "Baremetal", "DNS"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough'],
      "bgpFee": "None",
      "bgpFilters": ["RPKI", "LOA Required"],
      "notes": "The lowest generally available paid BGP-eligible plan is IPv6-only. The conditional free tier is not used for this comparison.",
      "pricing": "IPv6-only compute starting at $2.50 USD/month",
      "startPrice": 250,
      "link": "https://www.vultr.com/?ref=6883827"
    },
    {
      "provider": {
        "logo": "/img/xenyth.svg",
        "logo_include_text": true,
        "name": "Xenyth",
        "asn": 835
      },
      "locations": ["Toronto, CA"],
      "services": ["VPS", "Baremetal", "IXP Access"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Minimum s1.small for VPS. Can also provide access to ONIX. The current public catalog could not be verified during the 4 Sep 2026 audit, so the submitted VPS and bare-metal service types and price are retained.",
      "pricing": "Last submitted price: $3.50 USD/month",
      "startPrice": 350,
      "link": "https://xenyth.net/?affid=455"
    },
    {
      "provider": {
        "logo": "/img/vps.svg",
        "logo_include_text": true,
        "name": "V.ps",
        "asn": 3204
      },
      "locations": ["London, GB", "Frankfurt, DE", "Amsterdam, NL", "Düsseldorf, DE", "Tallinn, EE", "San Jose, US", "New York, US", "Seattle, US", "Hong Kong, HK", "Osaka, JP", "Tokyo, JP", "Sydney, AU"],
      "services": ["VPS", "IXP Access"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "$58.11 USD",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Can provide access to IX exchanges DE-CIX, LocIX and AMS-IX",
      "pricing": "Starting at $8.08 USD/month",
      "billingCurrency": "EUR",
      "startPrice": 808,
      "link": "https://vps.hosting/?affid=1286&affplan=1"
    },
    {
      "provider": {
        "logo": "/img/zappie.png",
        "logo_include_text": false,
        "name": "Zappie Host",
        "asn": 61138
      },
      "locations": ["Auckland, NZ"],
      "services": ["VPS", "Baremetal", "LIR Services"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "",
      "pricing": "Starting at $4.50 USD/month",
      "startPrice": 450,
      "link": "https://zappiehost.com/bgp-peering-with-cloud-vps"
    },
    {
      "provider": {
        "logo": "/img/pebblehost.webp",
        "logo_include_text": true,
        "name": "PebbleHost",
        "asn": 212027
      },
      "locations": ["Coventry, GB"],
      "services": ["VPS", "Baremetal"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "",
      "pricing": "Starting at $10.00 USD/month",
      "startPrice": 1000,
      "link": "https://pebblehost.com/"
    },
    {
      "provider": {
        "logo": "/img/f4networks.png",
        "logo_include_text": false,
        "name": "F4 Networks",
        "asn": 21738
      },
      "locations": ["Kansas City, US"],
      "services": ["Baremetal"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Can also provide access to Arelion. The free hobbyist BGP offer was out of stock during the price audit and is not used for this comparison.",
      "pricing": "Currently orderable servers starting at $33.00 USD/month",
      "startPrice": 3300,
      "link": "https://store.f4.network/"
    },
    {
      "provider": {
        "logo": "/img/divergent.png",
        "logo_include_text": true,
        "name": "Divergent Networks",
        "asn": 50391
      },
      "locations": ["London, GB"],
      "services": ["LIR Services", "VPS", "Tunnels"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "",
      "pricing": "Starting at $6.77 USD/month, charged as $81.18 USD annually",
      "billingCurrency": "GBP",
      "billingCadence": "annually",
      "startPrice": 677,
      "link": "https://divergentnetworks.co.uk/"
    },
    {
      "provider": {
        "logo": "/img/virtua.png",
        "logo_include_text": true,
        "name": "Virtua Cloud",
        "asn": 35661
      },
      "locations": ["Paris, FR", "Fremont, US", "Lille, FR", "Frankfurt, DE", "Amsterdam, NL"],
      "services": ["VPS", "LIR Services", "IXP Access"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Can offer access to France-IX and DE-CIX",
      "pricing": "Starting at $5.81 USD/month",
      "billingCurrency": "EUR",
      "startPrice": 581,
      "link": "https://www.virtua.cloud/?ref=6uqf3mtl"
    },
    {
      "provider": {
        "logo": "/img/lagrange.png",
        "logo_include_text": false,
        "name": "Lagrange",
        "asn": 209735
      },
      "locations": ["London, GB"],
      "services": ["VPS", "Baremetal", "IXP Access", "LIR Services"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "$20.30 USD for ASN + /48\nLONAP and LINX ports available for VPS and baremetal",
      "pricing": "Starting at $4.06 USD/month",
      "billingCurrency": "GBP",
      "startPrice": 406,
      "link": "https://lagrange.cloud/"
    },
    {
      "provider": {
        "logo": "/img/neptune.svg",
        "logo_include_text": true,
        "name": "Neptune Networks",
        "asn": 21700,
      },
      "locations": ["New York, US"],
      "services": ["VPS"],
      "routes": "Full",
      "bgpFeatures": [
        "BGP Communities",
        "BGP Community Passthrough",
        "Downstream Support",
      ],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Fully automated BGP pipeline from sign up to announcement.",
      "pricing": "Starting at $8.00 USD/month",
      "link": "https://neptunenetworks.org",
      "startPrice": 800
    },
    {
      "provider": {
        "logo": "/img/getvps.svg",
        "logo_include_text": true,
        "name": "GetVPS",
        "asn": 52025
      },
      "locations": ["Toronto, CA", "Ashburn, US", "Fremont, US", "London, GB", "Kansas City, US", "Frankfurt, DE", "Amsterdam, NL", "Zurich, CH", "Stockholm, SE", "Sydney, AU", "Singapore, SG", "New York, US", "Auckland, NZ"],
      "services": ["VPS", "Transit", "IXP Access"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Can provide access to IX exchanges ONIX, LINX, ERA-IX Amsterdam, LONAP and FREMIX.\nCan also provide access to Cogent, GTT and Arelion direct",
      "pricing": "Starting at $8.12 USD/month for VPS",
      "billingCurrency": "GBP",
      "startPrice": 812,
      "link": "https://getvps.net"
    },
    {
      "provider": {
        "logo": "/img/dutchis.svg",
        "logo_include_text": true,
        "name": "DutchIS",
        "asn": 198468
      },
      "locations": ["Apeldoorn, NL"], 
      "services": ["VPS", "IP Transit", "IXP Access"],
      "routes": "Full + default",
      "bgpFeatures": ['Downstream Support'],
      "bgpFee": "$11.62 USD",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Can provide access to IX exchanges Speed-IX. Public virtual-server pricing does not state which tiers support BGP, so the comparison retains the last submitted BGP-specific price.",
      "pricing": "Starting at $11.62 USD/month",
      "billingCurrency": "EUR",
      "startPrice": 1162,
      "link": "https://dutchis.net"
    },
    {
      "provider": {
        "logo": "/img/melibcom.svg",
        "logo_include_text": true,
        "name": "Melbicom",
        "asn": 8849 
      },
      "locations": ["Amsterdam, NL", "Moscow, RU", "Frankfurt, DE", "Sofia, BG", "Palermo, IT", "Madrid, ES", "Vilnius, LT", "Riga, LV", "Warsaw, PL", "Singapore, SG", "Lagos, NG", "Atlanta, US", "Los Angeles, US", "Fujairah, AE", "Mumbai, IN"],
      "services": ["VPS", "Baremetal", "DNS"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Community Passthrough'],
      "bgpFee": "$5.00 USD/month with $11.62 USD setup fee (per session per protocol)",
      "bgpFilters": ["RPKI"],
      "notes": "",
      "pricing": "VPS starting at $6.50 USD/month",
      "startPrice": 650,
      "link": "https://melbicom.net/"
    },
    {
      "provider": {
        "logo": "/img/hosthatch.svg",
        "logo_include_text": true,
        "name": "HostHatch",
        "asn": 63473 
      },
      "locations": ["Amsterdam, NL", "Vienna, AT", "Stockholm, SE", "Zurich, CH", "Los Angeles, US", "New York, US", "Chicago, US", "Hong Kong, HK", "Tokyo, JP", "Sydney, AU", "Singapore, SG", "London, GB", "Oslo, NO"],
      "services": ["VPS"],
      "routes": "Default",
      "bgpFeatures": ['BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "$10 USD setup fee",
      "bgpFilters": ["RPKI", "LOA Required"],
      "notes": "",
      "pricing": "Starting at $4.00 USD/month",
      "startPrice": 400,
      "link": "https://hosthatch.com/"
    },
    {
      "provider": {
        "logo": "/img/servperso.svg",
        "logo_include_text": true,
        "name": "Servperso",
        "asn": 34872 
      },
      "locations": ["Meppel, NL", "Dusseldorf, DE"],
      "services": ["VPS", "IP Transit", "IXP Access", "Tunnels"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Can provide access to IX exchanges LocIX-Fra, LocIX-Dus and LocIX-NL",
      "pricing": "IPv6-only BGP Starter at $4.65 USD/month, charged as $13.95 USD quarterly\nDual-stack BGP Starter at $6.97 USD/month",
      "billingCurrency": "EUR",
      "billingCadence": "quarterly",
      "startPrice": 465,
      "link": "https://www.servperso.net/"
    },
    {
      "provider": {
        "logo": "/img/hyehost.png",
        "logo_include_text": true,
        "name": "HYEHOST",
        "asn": 47272 
      },
      "locations": ["Wolverhampton, GB"],
      "services": ["VPS", "Baremetal", "Shared Hosting", "IXP Access"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Can provide access to IX exchanges FREMIX.",
      "pricing": "Starting at $2.99 USD/month",
      "startPrice": 299,
      "link": "https://hyehost.org/"
    },
    {
      "provider": {
        "logo": "/img/system36.svg",
        "logo_include_text": true,
        "name": "System36",
        "asn": 59678 
      },
      "locations": ["Piscataway, US"],
      "services": ["VPS", "Baremetal"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "",
      "pricing": "Starting at $6.99 USD/month",
      "startPrice": 699,
      "link": "https://36.services/"
    },
    {
      "provider": {
        "logo": "/img/circlecityservers.png",
        "logo_include_text": true,
        "name": "CircleCityServers",
        "asn": 26006 
      },
      "locations": ["Indianapolis, US"],
      "services": ["VPS", "Baremetal", "IP Transit", "IXP Access", "Colocation"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "",
      "pricing": "Starting at $6.00 USD/month for 1C/1G",
      "startPrice": 600,
      "link": "https://circlecityservers.com/"
    },
    {
      "provider": {
        "logo": "/img/myhostingspace.png",
        "logo_include_text": true,
        "name": "MyHostingSpace",
        "asn": 48070
      },
      "locations": ["Peterborough, GB"],
      "services": ["VPS", "Baremetal", "Colocation"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "$6.77 USD setup fee",
      "bgpFilters": ["Automatic IRR", "RPKI", "LOA Required"],
      "notes": "",
      "pricing": "Starting at $10.01 USD/month",
      "billingCurrency": "GBP",
      "startPrice": 1001,
      "link": "https://myhostingspace.co.uk/"
    },
    {
      "provider": {
        "logo": "/img/skywolfcloud.png",
        "logo_include_text": true,
        "name": "Skywolf Cloud",
        "asn": 7720
      },
      "locations": ["Hong Kong, HK", "Fremont, US"],
      "services": ["VPS", "IP Transit", "Colocation"],
      "routes": "Full",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "AS-SET must be reasonable size. BGP Session on VPS cannot be used for commercial purposes. The starting price is for the Fremont service. Hong Kong Lite plans do not support BGP.",
      "pricing": "Fremont service starting at $2.00 USD/month",
      "startPrice": 200,
      "link": "https://hk.skywolf.cloud/"
    },
    {
      "provider": {
        "logo": "/img/swehosting.png",
        "logo_include_text": false,
        "name": "SweHosting",
        "asn": 208453
      },
      "locations": ["Stockholm, SE"],
      "services": ["VPS", "Baremetal", "IP Transit", "IXP Access", "Colocation"],
      "routes": "Partial + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "IXP access available for SONIX, STHIX, Netnod and SOL-IX.",
      "pricing": "Starting at $5.13 USD/month",
      "billingCurrency": "SEK",
      "startPrice": 513,
      "link": "https://swehosting.se/"
    },
    {
      "provider": {
        "logo": "/img/gamerhost-pro.svg",
        "logo_include_text": true,
        "name": "GamerHost.pro",
        "asn": 50338
      },
      "locations": ["Prague, CZ"],
      "services": ["VPS", "Baremetal", "Tunnels", "IP Transit", "IXP Access", "Colocation"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "",
      "pricing": "Starting at $7.16 USD/month",
      "billingCurrency": "CZK",
      "startPrice": 716,
      "link": "https://gamerhost.pro/"
    },
    {
      "provider": {
        "logo": "/img/myrootpw.svg",
        "logo_include_text": true,
        "name": "MyRootPW",
        "asn": 39409
      },
      "locations": ["Vienna, AT", "Amsterdam, NL"],
      "services": ["LIR Services", "Baremetal", "Tunnels", "IP Transit", "Colocation", "IXP Access"],
      "routes": "Full + default",
      "bgpFeatures": [],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI", "LOA Required"],
      "notes": "The lower advertised dedicated-server tiers were sold out during the audit, so the comparison uses the lowest orderable tier.",
      "pricing": "Currently orderable dedicated servers starting at $52.30 USD/month\nIPv6-only LIR service at $69.73 USD/year",
      "billingCurrency": "EUR",
      "startPrice": 5230,
      "link": "https://myrootpw.com/"
    },
    {
      "provider": {
        "logo": "/img/calibour.png",
        "logo_include_text": true,
        "name": "Calibour",
        "asn": 200950
      },
      "locations": ["Frankfurt, DE"],
      "services": ["VPS", "Baremetal"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough'],
      "bgpFee": "$5.81 USD setup fee",
      "bgpFilters": ["RPKI"],
      "notes": "The current public site does not expose retail pricing. This is the latest provider-submitted price available to the project.",
      "pricing": "Last submitted price: $2.91 USD/month",
      "billingCurrency": "EUR",
      "startPrice": 291,
      "link": "https://calibour.com/"
    },
    {
      "provider": {
        "logo": "/img/cloudmate.png",
        "logo_include_text": true,
        "name": "CloudMate",
        "asn": 214441
      },
      "locations": ["Derby, GB", "Noida, IN"],
      "services": ["VPS", "Baremetal", "LIR Services", "IP Transit", "Colocation"],
      "routes": "Full + default",
      "bgpFeatures": ["Downstream Support"],
      "bgpFee": "$10 USD setup fee",
      "bgpFilters": ["Automatic IRR", "RPKI", "LOA Required"],
      "notes": "",
      "pricing": "Starting at $4.50 USD/month",
      "startPrice": 450,
      "link": "https://cloudmate.in/"
    },
    {
      "provider": {
        "logo": "/img/skhron.png",
        "logo_include_text": true,
        "name": "Skhron",
        "asn": 215467
      },
      "locations": ["Stockholm, SE", "Warsaw, PL"],
      "services": ["VPS"],
      "routes": "Default",
      "bgpFeatures": ['BGP Community Passthrough'],
      "bgpFee": "None",
      "bgpFilters": ["RPKI", "LOA Required"],
      "notes": "",
      "pricing": "Starting at $1.96 USD/month",
      "billingCurrency": "EUR",
      "startPrice": 196,
      "link": "https://skhron.eu/"
    },
    {
      "provider": {
        "logo": "/img/bharat-datacenter.png",
        "logo_include_text": true,
        "name": "Bharat Datacenter",
        "asn": 151704
      },
      "locations": ["New Delhi, IN"],
      "services": ["Baremetal", "IP Transit", "IXP Access", "Colocation"],
      "routes": "Full + default",
      "bgpFeatures": ["Downstream Support"],
      "bgpFee": "None",
      "bgpFilters": ["LOA Required"],
      "notes": "Custom dedicated-server pricing is not published on the provider site. This figure is from the provider submission.",
      "pricing": "Provider-submitted price: $90.00 USD/month",
      "startPrice": 9000,
      "link": "https://bharatdatacenter.com/"
    },
    {
      "provider": {
        "logo": "/img/smc-server-solutions.png",
        "logo_include_text": true,
        "name": "SMC Server Solutions",
        "asn": 400212
      },
      "locations": ["New York City, US", "Sydney, AU"],
      "services": ["VPS", "Baremetal", "Colocation"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', "Downstream Support", "BGP Community Passthrough"],
      "bgpFee": "$25 USD setup fee",
      "bgpFilters": ["Automatic IRR", "RPKI", "LOA Required"],
      "notes": "VPS starting at $2.50/month. Dedicated servers starting at $100.00/month. Colocation starting at $60.00/month.",
      "pricing": "Starting at $2.50 USD/month",
      "startPrice": 250,
      "link": "https://soutarmc.com/"
    },
    {
      "provider": {
        "logo": "/img/pawhost.png",
        "logo_include_text": true,
        "name": "PawHost",
        "asn": 214915
      },
      "locations": ["Düsseldorf, DE"],
      "services": ["VPS", "Baremetal", "Colocation"],
      "routes": "Full",
      "bgpFeatures": ['BGP Communities', "Downstream Support", "BGP Community Passthrough"],
      "bgpFee": "$5.81 USD",
      "bgpFilters": ["Automatic IRR"],
      "notes": "",
      "pricing": "Starting at $4.59 USD/month",
      "billingCurrency": "EUR",
      "startPrice": 459,
      "link": "https://pawhost.de/"
    },
    {
      "provider": {
        "logo": "/img/hostal.svg",
        "logo_include_text": true,
        "name": "Host.al",
        "asn": 213683
      },
      "locations": ["Tirana, AL", "Kansas City, US", "Nuremberg, DE"],
      "services": ["VPS", "Baremetal", "Colocation", "LIR Services"],
      "routes": "Full + default",
      "bgpFeatures": ["BGP Communities", "BGP Community Passthrough", "Downstream Support"],
      "bgpFee": "None",
      "bgpFilters": ["RPKI"],
      "notes": "BGP included with every VPS, dedicated, and colocation package. BGP community passthrough is partial/limited. Active downstream support for ASN setup, IRR, and RPKI. ICANN-accredited domain registrar (IANA #4332).",
      "pricing": "Starting at $3.43 USD/month",
      "billingCurrency": "EUR",
      "startPrice": 343,
      "link": "https://host.al/"
    },
    {
      "provider": {
        "logo": "/img/africloud-mark.svg",
        "logo_include_text": true,
        "name": "AFRICLOUD",
        "asn": 209179
      },
      "locations": ["Lisbon, PT", "Johannesburg, ZA", "Lagos, NG"],
      "services": ["VPS"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI", "LOA Required"],
      "notes": "Peering at NAPAfrica Johannesburg, IXPN Lagos, DE-CIX Lisbon and DE-CIX Madrid. IPv6 included on every server. The starting price uses the recurring 50NEW promotional rate; the standard listed rate is $20.00 USD/month.",
      "pricing": "Starting at $10.00 USD/month with recurring promotional code 50NEW",
      "startPrice": 1000,
      "link": "https://africloud.com/order"
    },
    {
      "provider": {
        "logo": "/img/elcro-digital.png",
        "logo_include_text": true,
        "name": "Elcro Digital",
        "asn": 62553
      },
      "locations": ["Dallas, US"],
      "services": ["VPS", "Baremetal", "IP Transit", "Colocation"],
      "routes": "Full + default",
      "bgpFeatures": ["BGP Community Passthrough", "Downstream Support"],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI", "LOA Required"],
      "notes": "Only clean AS-SETs can be added.",
      "pricing": "Provider-submitted price: $5.85 USD/month",
      "startPrice": 585,
      "link": "https://elcrodigital.com/"
    },
    {
      "provider": {
        "logo": "/img/flybirdhost.png",
        "logo_include_text": true,
        "name": "FlyBirdHost",
        "asn": 14447
      },
      "locations": ["Hong Kong, HK", "Kansas City, US"],
      "services": ["VPS", "IPv6-only VPS", "Baremetal", "Colocation"],
      "routes": "Full + default",
      "bgpFeatures": ["BGP Communities", "BGP Community Passthrough", "Downstream Support"],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Partial-table and no-table options are also available.",
      "pricing": "Charged as $4.84 USD quarterly, equivalent to $1.61 USD/month",
      "billingCadence": "quarterly",
      "startPrice": 161,
      "link": "https://store.flybirdhost.net/"
    },
    {
      "provider": {
        "logo": "/img/sitehub.png",
        "logo_include_text": true,
        "name": "SiteHUB Cloud",
        "asn": 214354
      },
      "locations": ["Ikeja, NG", "Fremont, US"],
      "services": ["VPS", "Cloud Servers", "Baremetal", "LIR Services", "Domain Registration", "Colocation"],
      "routes": "Full",
      "bgpFeatures": ["BGP Community Passthrough", "Downstream Support"],
      "bgpFee": "Free with plans above $20 USD/year or $2 USD/month\n$25 USD one-time fee for cheaper or promotional plans",
      "bgpFilters": ["RPKI", "LOA Required"],
      "notes": "BGP sessions are currently supported only in Nigeria.",
      "pricing": "Charged as $4.00 USD annually, equivalent to $0.33 USD/month",
      "billingCadence": "annually",
      "startPrice": 33,
      "link": "https://sitehub.agency/"
    },
    {
      "provider": {
        "logo": "/img/cilix.png",
        "logo_include_text": true,
        "name": "CilixCloud",
        "asn": 215638
      },
      "locations": ["London, GB"],
      "services": ["VPS", "Baremetal", "IXP Access", "LIR Services", "IP Transit", "Tunnels", "Colocation"],
      "routes": "Full",
      "bgpFeatures": [],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "The BGP Starter VPS is marketed for full-table routing. CilixCloud states that IPv4 and IPv6 BGP sessions are included with network services and that prefix filters update automatically.",
      "pricing": "BGP Starter VPS at $13.53 USD/month with no setup fee",
      "billingCurrency": "GBP",
      "startPrice": 1353,
      "link": "https://cilix.cloud/store/vps"
    },
    {
      "provider": {
        "logo": "/img/soraxus.png",
        "logo_include_text": false,
        "name": "Soraxus Networks",
        "asn": 396993
      },
      "locations": ["Dallas, US", "Vancouver, CA"],
      "services": ["Baremetal", "Colocation", "IP Transit", "Tunnels", "DDoS Protection"],
      "routes": "Full + default",
      "bgpFeatures": ["BGP Community Passthrough", "Downstream Support"],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "No-table sessions are also available.",
      "pricing": "Tunnels starting at $7.00 USD/month\nBaremetal starting at $85.00 USD/month\nColocation starting at $80.00 USD/month",
      "startPrice": 700,
      "link": "https://soraxus.com/"
    },
    {
      "provider": {
        "logo": "",
        "logo_include_text": false,
        "name": "LowPing NL",
        "asn": 215296
      },
      "locations": ["Amsterdam, NL"],
      "services": ["VPS", "IXP Access"],
      "routes": "Full",
      "bgpFeatures": ["BGP Communities", "BGP Community Passthrough"],
      "bgpFee": "First BGP session included\nSecond transit session at $4.65 USD/month",
      "bgpFilters": ["Automatic IRR", "RPKI", "LOA Required"],
      "notes": "Can provide access to exchanges available at Nikhef, including AMS-IX, Frys-IX, nine-ix, and Piter-IX.",
      "pricing": "Starting at $7.55 USD/month",
      "billingCurrency": "EUR",
      "startPrice": 755,
      "link": "https://lowping.nl/"
    },
    {
      "provider": {
        "logo": "/img/rackgenius.png",
        "logo_include_text": true,
        "name": "RackGenius",
        "asn": 32002
      },
      "locations": ["Grand Rapids, US", "Detroit, US"],
      "services": ["VPS", "Baremetal", "Colocation", "IP Transit"],
      "routes": "Full + default",
      "bgpFeatures": ["BGP Communities", "BGP Community Passthrough", "Downstream Support"],
      "bgpFee": "$25 USD one-time; waived for baremetal and colocation customers",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Prefix lists are exported automatically; one upstream requires a manual update request.",
      "pricing": "Provider-submitted price: $3.50 USD/month",
      "startPrice": 350,
      "link": "https://rackgenius.com/"
    },
    {
      "provider": {
        "logo": "/img/greybull.svg",
        "logo_include_text": false,
        "name": "Greybull",
        "asn": 202585
      },
      "locations": ["Enschede, NL"],
      "services": ["VPS", "Colocation", "Email", "Web Hosting"],
      "routes": "Full + default",
      "bgpFeatures": ["BGP Communities", "BGP Community Passthrough", "Downstream Support"],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "",
      "pricing": "Starting at $5.80 USD/month",
      "billingCurrency": "EUR",
      "startPrice": 580,
      "link": "https://greybull.nl/"
    },
    {
      "provider": {
        "logo": "/img/shift-hosting.png",
        "logo_include_text": true,
        "name": "Shift Hosting",
        "asn": 394177
      },
      "locations": ["Dallas, US", "Atlanta, US", "Chicago, US"],
      "services": ["VPS", "Baremetal", "IP Transit", "Transport", "IXP Access", "Colocation", "DDoS Protection"],
      "routes": "Full + default",
      "bgpFeatures": ["BGP Communities", "BGP Community Passthrough", "Downstream Support"],
      "bgpFee": "$25 USD one-time per ASN",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Partial-table sessions are also available.",
      "pricing": "Provider-submitted price: $4.00 USD/month",
      "startPrice": 400,
      "link": "https://shifthosting.com/"
    },
    {
      "provider": {
        "logo": "/img/phylex.svg",
        "logo_include_text": false,
        "name": "Phylex",
        "asn": 213905
      },
      "locations": ["Frankfurt, DE"],
      "services": ["VPS", "Baremetal", "IP Leasing", "IP Transit", "Tunnels"],
      "routes": "Full + default",
      "bgpFeatures": ["BGP Community Passthrough", "Downstream Support"],
      "bgpFee": "$5.81 USD/month for a small session + $5.81 USD setup\nFrom $23.24 USD/month for standard sessions + $11.62 USD setup\n$11.62 USD/month for downstream support",
      "bgpFilters": ["Automatic IRR", "LOA Required"],
      "notes": "Free peering or upstream connectivity may be available case by case. GRE, WireGuard, and direct interconnection are supported.",
      "pricing": "Starting at $4.99 USD/month",
      "billingCurrency": "EUR",
      "startPrice": 499,
      "link": "https://phylex.net/"
    }
  ];

export default data;

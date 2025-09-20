interface ProviderData {
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
    startPrice: number; // USD in cents
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
      "pricing": "Starting at 3.50 CHF/month\n77 CHF/year for AS registrations",
      "startPrice": 443,
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
      "pricing": "Starting at 50 SEK",
      "startPrice": 445,
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
      "locations": ["Chicago, US", "Seattle, US", "Melbourne, AU", "Frankfurt, DE", "Atlanta, US", "Warsaw, PL", "Seoul, KR", "Miami, US", "Stockholm, SE", "Bangalore, IN", "Manchester, GB", "Santiago, CL", "Delhi NCR, IN", "Johannesburg, ZA", "Honolulu, US", "Mumbai, IN", "Sao Paulo, BR", "Mexico City, MX", "Madrid, ES", "Toronto, CA", "Silicon Valley, US", "London, GB", "Dallas, US", "Sydney, AU", "Paris, FR", "Amsterdam, NL", "Los Angeles, US", "New Jersey, US", "Singapore, SG", "Tokyo, JP", "Osaka, JP", "Tel Aviv, IL"],
      "services": ["VPS", "Baremetal", "DNS"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough'],
      "bgpFee": "None",
      "bgpFilters": ["RPKI", "LOA Required"],
      "notes": "",
      "pricing": "Starting at $5 USD",
      "startPrice": 500,
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
      "notes": "Minimum s1.small for VPS. Can also provide access to ONIX",
      "pricing": "Starting at $3.50 USD",
      "startPrice": 350,
      "link": "https://xenyth.net/?affid=455"
    },
    {
      "provider": {
        "logo": "https://v.ps/assets/img/logo_dark.7d4c766e.svg",
        "logo_include_text": true,
        "name": "V.ps",
        "asn": 3204
      },
      "locations": ["London, GB", "Frankfurt, DE", "Amsterdam, NL", "Düsseldorf, DE", "Tallinn, EE", "San Jose, US", "New York, US", "Seattle, US", "Hong Kong, HK", "Osaka, JP", "Tokyo, JP", "Sydney, AU"],
      "services": ["VPS", "IXP Access"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "50 EUR",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Can provide access to IX exchanges DE-CIX, LocIX and AMS-IX",
      "pricing": "Starts at 5.95 EUR",
      "startPrice": 629,
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
      "services": ["VPS", "LIR Services"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "",
      "pricing": "Starting at $4.50 USD",
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
      "pricing": "Starting at $10 USD",
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
      "services": ["VPS", "Baremetal", "Tunnels"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Can also provide access to Arelion",
      "pricing": "Starting at $6 USD",
      "startPrice": 600,
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
      "pricing": "Starting at £5 GBP",
      "startPrice": 606,
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
      "pricing": "Starting at 3 EUR",
      "startPrice": 317,
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
      "notes": "£15 for ASN + /48\nLONAP and LINX ports available for VPS and baremetal",
      "pricing": "Starting at £3 GBP",
      "startPrice": 300,
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
      "pricing": "Starting at $8 USD",
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
      "locations": ["Toronto, CA", "Ashburn, US", "Fremont, US", "London, GB", "Kansas City, US", "Frankfurt, DE", "Amsterdam, NL", "Zurich, CH", "Stockholm, SE"],
      "services": ["VPS", "Transit", "IXP Access", "Baremetal"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Can provide access to IX exchanges ONIX, LINX, ERA-IX Amsterdam, LONAP and FREMIX.\nCan also provide access to Cogent, GTT and Arelion direct",
      "pricing": "£6 GBP/month for VPS",
      "startPrice": 600,
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
      "bgpFee": "10,00 EUR",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Can provide access to IX exchanges Speed-IX",
      "pricing": "Starting at 10,00 EUR/month",
      "startPrice": 1000,
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
      "bgpFee": "5 EUR/mo with 10 EUR setup fee (per session per protocol)",
      "bgpFilters": ["RPKI"],
      "notes": "",
      "pricing": "Starting at 3.9 EUR",
      "startPrice": 390,
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
      "pricing": "Starting at $4/mo USD",
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
      "pricing": "Starting from €4",
      "startPrice": 400,
      "link": "https://www.servperso.net/"
    },
    {
      "provider": {
        "logo": "/img/hyehost.png",
        "logo_include_text": true,
        "name": "HYEHOST",
        "asn": 47272 
      },
      "locations": ["Fremont, US", "Kansas City, US"],
      "services": ["VPS", "IXP Access"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "Can provide access to IX exchanges FREMIX.",
      "pricing": "Starting from $3.99",
      "startPrice": 399,
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
      "pricing": "Starting from $6.99",
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
      "services": ["VPS"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI"],
      "notes": "",
      "pricing": "Starting from $6 for 1C/1G",
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
      "bgpFee": "None",
      "bgpFilters": ["Automatic IRR", "RPKI", "LOA Required"],
      "notes": "",
      "pricing": "Starting from 5.43 GBP",
      "startPrice": 543,
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
      "notes": "AS-SET must be reasonable size. BGP Session on VPS cannot be used for commercial purposes.",
      "pricing": "Starting from $4.20 USD",
      "startPrice": 420,
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
      "notes": "",
      "pricing": "Starting from 49 SEK",
      "startPrice": 500,
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
      "services": ["VPS", "Baremetal", "Tunnels", "IP Transit", "Colocation"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough', 'Downstream Support'],
      "bgpFee": "None",
      "bgpFilters": ["RPKI", "LOA Required"],
      "notes": "",
      "pricing": "Starting from 139 CZK",
      "startPrice": 600,
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
      "notes": "",
      "pricing": "Dedicated servers starting from 15 EUR monthly, and LIR services starting from 60 EUR annually.",
      "startPrice": 1500,
      "link": "https://myrootpw.com/"
    },
    {
      "provider": {
        "logo": "/img/lyratris.png",
        "logo_include_text": true,
        "name": "Lyratris",
        "asn": 200950
      },
      "locations": ["Frankfurt, DE"],
      "services": ["VPS", "Baremetal", "IXP Access"],
      "routes": "Full + default",
      "bgpFeatures": ['BGP Communities', 'BGP Community Passthrough'],
      "bgpFee": "$10 USD setup fee",
      "bgpFilters": ["RPKI"],
      "notes": "Can provide access to LocIX Frankfurt",
      "pricing": "Starting at $5 USD",
      "startPrice": 500,
      "link": "https://lyratris.com/"
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
      "pricing": "Starting at $5 USD",
      "startPrice": 500,
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
      "pricing": "Starting at 1.16 EUR",
      "startPrice": 132,
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
      "notes": "",
      "pricing": "Starting at $90 USD",
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
      "pricing": "Starting at $2.50 USD",
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
      "bgpFee": "5 EUR",
      "bgpFilters": ["Automatic IRR"],
      "notes": "",
      "pricing": "Starting at 2.50 EUR",
      "startPrice": 294,
      "link": "https://pawhost.de/"
    }
  ];

export default data;

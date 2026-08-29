import { brand } from "@/data/brand";
import type { Messages } from "@/messages/es";

export const en = {
  common: {
    brandName: brand.name,
    wordmark: brand.wordmark,
    tagline: brand.tagline.en,
    descriptor: brand.descriptor.en,
    whatsappCta: "Talk on WhatsApp",
    viewTours: "View tours",
    exploreTours: "Explore tours",
    viewItinerary: "View itinerary",
    learnMore: "Learn more",
    contactUs: "Talk to us",
    soon: "Information available soon",
    requestInfo: "Request information",
  },
  nav: {
    tours: "Tours",
    destinations: "Destinations",
    experiences: "Experiences",
    guide: "Balkans Guide",
    about: "About",
  },
  footer: {
    intro:
      "Trips through Serbia and the Balkans in Spanish, with cultural inspiration, human guidance, and authorized local operators where applicable.",
    columns: {
      tours: "Tours",
      destinations: "Destinations",
      experiences: "Experiences",
      guide: "Guide",
      about: "Brand",
      contact: "Contact",
      legal: "Trust",
    },
    guaranteedDepartures: "Guaranteed departures",
    privateTrips: "Private trips",
    trust: "Travel with confidence",
    howItWorks: "How it works",
    operatorNotice:
      "Alma Balcánica supports the Spanish-language experience, communication, and inspiration. Travel packages are formally operated by authorized local operators. For current eligible products: Victor Tours, license OTP 22/2025, Category A.",
    rights: "All rights reserved.",
  },
  home: {
    hero: {
      headline: "Journeys with soul through Serbia and the Balkans.",
      copy:
        "Discover unique cultures, flavors, stories, and landscapes with Spanish-language assistance and local experts in each destination.",
      trust: [
        "Spanish-language support",
        "Small groups",
        "Authorized local operators",
      ],
    },
    intro: {
      eyebrow: "ALMA BALCÁNICA",
      heading: "Some places are visited. Others are felt.",
      copy:
        "The Balkans are not a checklist of countries. They are long meals, cities with memory, monasteries among mountains, living markets, everyday cafes, and forms of hospitality best understood with someone who knows the ground.",
    },
    travelWays: {
      eyebrow: "Ways to travel",
      heading: "How do you want to discover the Balkans?",
      guaranteed: {
        title: "Guaranteed departures",
        copy:
          "Choose your route, reserve your date, and we handle the rest with authorized operators.",
        cta: "View upcoming departures",
      },
      private: {
        title: "Private trips",
        copy:
          "An experience shaped around your group, your interests, and your way of traveling.",
        cta: "Create my trip",
      },
    },
    featuredTours: {
      eyebrow: "Tours",
      heading: "Featured journeys",
      copy:
        "Small-group departures with published itineraries, dates, and fares, always reconfirmed before booking.",
    },
    destinations: {
      eyebrow: "Destinations",
      heading: "One journey. Many stories.",
      copy:
        "Serbia remains an essential gateway, while Alma Balcánica is built for the wider region.",
    },
    whyBalkans: {
      eyebrow: "Why the Balkans",
      heading: "A close, intense, and still unexpected Europe.",
      intro:
        "History, food, nature, hospitality, cultures, and traditions coexist over short distances. The result is a deep trip that still feels approachable.",
      themes: [
        {
          title: "History",
          copy:
            "Cities where empires, recent memory, fortresses, bridges, and neighborhoods need context.",
        },
        {
          title: "Food",
          copy:
            "Generous tables, markets, wines, cafes, bakeries, rakija, and regional cooking that explain the destination through daily life.",
        },
        {
          title: "Nature",
          copy:
            "Mountains, rivers, lakes, canyons, and villages where travel slows without losing intensity.",
        },
        {
          title: "Hospitality",
          copy:
            "Conversations, local recommendations, and a direct way of welcoming travelers that changes the experience.",
        },
        {
          title: "Cultures",
          copy:
            "Mediterranean, Ottoman, Austro-Hungarian, and Slavic influences live together without being simplified.",
        },
        {
          title: "Traditions",
          copy:
            "Music, celebrations, crafts, monasteries, villages, and family details that do not fit a shallow route.",
        },
      ],
    },
    details: {
      eyebrow: "The human experience",
      heading: "The journey is in the details.",
      copy:
        "It is not only hotel, bus, and monuments. It is also tasting a local dish, sitting in a cafe, crossing a market, hearing a family story, or understanding why one bridge matters so much.",
      moments: [
        "Local food",
        "Cafes",
        "Markets",
        "Wine",
        "Rakija",
        "Conversations",
        "Monasteries",
        "Mountain villages",
        "Music",
        "Local guides",
      ],
    },
    trust: {
      eyebrow: "Trust",
      heading: "Travel with confidence.",
      copy:
        "Alma Balcánica guides the Spanish-language experience and curates meaningful proposals. Packages are formally operated by authorized local operators. For current eligible products, Victor Tours acts as the authorized tour operator in Serbia.",
      concepts: [
        "Authorized operator",
        "Travel contract",
        "Secure payments",
        "Professional guides",
        "Spanish-language support",
        "Travel guarantee",
      ],
      cta: "Travel with confidence",
    },
    guide: {
      eyebrow: "Guide",
      heading: "Know the Balkans before you travel.",
      copy:
        "Content prepared to answer real questions from travelers in Mexico, Latin America, Spain, and other Spanish-speaking markets.",
    },
    about: {
      eyebrow: "Purpose",
      heading: "The Balkans, explained in your language.",
      copy:
        "Alma Balcánica exists to bring Serbia and the Balkans closer to Spanish-speaking travelers seeking context, trust, and a more human way to discover the region.",
    },
    finalCta: {
      headline: "Your next story can start here.",
      primary: "Explore tours",
      secondary: "Talk to us",
    },
  },
  toursListing: {
    eyebrow: "Tours",
    heading: "Trips through Serbia and the Balkans",
    copy:
      "Explore guaranteed departures and private trips with Spanish-language support. Pricing, dates, and availability are published only when confirmed.",
    guaranteedHeading: "Guaranteed departures",
    guaranteedCopy:
      "Routes with predefined itinerary, dates, and conditions from authorized local operators.",
    privateHeading: "Private trips",
    privateCopy:
      "Experiences for couples, families, and closed groups, developed case by case.",
    filtersHeading: "Prepared filters",
    filtersCopy:
      "The architecture already supports destination, duration, month, and travel style so it can grow without rebuilding the experience.",
    filters: ["Destination", "Duration", "Month", "Travel style"],
    noPrice: "Price available soon",
    nextDeparture: "Next departure",
    includes: "Highlights",
    countries: "Countries",
    guaranteedBadge: "Guaranteed departure",
    privateBadge: "Private trip",
  },
  tourDetail: {
    overview: "Overview",
    route: "Route",
    highlights: "Highlights",
    itinerary: "Day by day",
    itineraryNote: "Base program subject to final confirmation by the authorized operator.",
    accommodation: "Accommodation",
    included: "What is included",
    notIncluded: "What is not included",
    datesPrices: "Dates and prices",
    practicalInfo: "Practical information",
    forWhom: "Who this trip is for",
    faq: "Frequently asked questions",
    booking: "Booking or inquiry",
    bookingCopy:
      "Tell us which departure or trip style interests you. If the product still has pending data, we will clarify it before moving forward.",
    trust: "Operation and trust",
    cancellation: "Cancellation and changes",
    related: "Related trips",
    day: "Day",
    price: "Price",
    duration: "Duration",
    style: "Style",
  },
  operator: {
    operatedBy: "Operated by",
    authorized: "Authorized tour operator in Serbia",
    license: "License",
  },
  destinationsPage: {
    eyebrow: "Destinations",
    heading: "Serbia and the Balkans, country by country.",
    copy:
      "An editorial architecture ready to grow with real inventory, including core Balkan countries and confirmed regional extensions.",
    featuredHeading: "Main destinations",
    futureCopy:
      "Later, new destinations can be added to this structure easily:",
    currentTours: "Related trips",
  },
  experiencesPage: {
    eyebrow: "Experiences",
    heading: "The region can also be discovered by theme.",
    copy:
      "Culture, gastronomy, nature, and traditions help choose a route beyond the map.",
    relatedTours: "Related trips",
  },
  guidePage: {
    eyebrow: "Balkans Guide",
    heading: "Know the Balkans before you travel.",
    copy:
      "Articles and guides prepared to answer practical questions from Spanish-speaking travelers. In V2 they work as the initial editorial architecture.",
    pending: "Article in preparation",
  },
  trustPage: {
    hero: {
      eyebrow: "Trust",
      heading: "Travel with confidence.",
      copy:
        "Before booking a high-value international trip, you need to know who supports you, who operates the trip, and what information you receive before paying.",
    },
    sections: [
      {
        title: "Who supports you in Spanish",
        copy:
          "Alma Balcánica guides, explains, and supports communication for Spanish-speaking travelers before and during planning.",
      },
      {
        title: "Who formally operates the trip",
        copy:
          "Packages are operated by authorized local operators. For current eligible products in Serbia, the confirmed operator is Victor Tours.",
      },
      {
        title: "What documentation you receive",
        copy:
          "Before confirming, the traveler should receive conditions, included services, responsible operator, and payment details.",
      },
      {
        title: "How payment works",
        copy:
          "The payment method will be stated in the operator's formal proposal. We do not invent processors or unverified conditions.",
      },
      {
        title: "Travel guarantee",
        copy:
          "Victor Tours confirmed license OTP 22/2025, Category A. Specific guarantee or insurance details must be documented before publication.",
      },
      {
        title: "If plans change",
        copy:
          "Change, cancellation, and refund conditions are shown before booking, according to the applicable contract.",
      },
    ],
    operatorHeading: "Confirmed operating partner",
    supportHeading: "Support",
    supportCopy:
      "For questions before booking, use WhatsApp or the contact form. The final channel will be connected once the number is configured.",
  },
  howItWorks: {
    hero: {
      eyebrow: "How it works",
      heading: "A clear path from inspiration to booking.",
      copy:
        "The process is designed to keep the brand approachable without hiding who formally operates each package.",
    },
    steps: [
      "You explore trips, destinations, and experiences in Spanish.",
      "You tell us dates, travelers, interests, and key questions.",
      "We validate availability, price, and conditions with the corresponding operator.",
      "You receive a formal proposal, responsible operator, and conditions before paying.",
      "You travel with Spanish-language support and professional local operation.",
    ],
  },
  about: {
    hero: {
      eyebrow: "About the brand",
      heading: "Alma Balcánica brings Serbia and the Balkans closer to Spanish-speaking travelers.",
      copy:
        "The brand exists to explain the region with context, cultural sensitivity, and clear organization for travelers from Mexico, Latin America, Spain, and other Spanish-speaking markets.",
    },
    sections: [
      {
        title: "Why the Balkans",
        copy:
          "Because the region brings together history, food, landscapes, intense cities, and hospitality in a less obvious and deeply human Europe.",
      },
      {
        title: "Guidance in Spanish",
        copy:
          "Travel changes when you can ask, understand nuance, and make important decisions in your language.",
      },
      {
        title: "Local knowledge",
        copy:
          "The experience is built with context, realistic pacing, professional operators, and details that do not appear on a quick list.",
      },
      {
        title: "Professional partners",
        copy:
          "Packages are operated with authorized local partners where applicable, keeping formal trip responsibility clear.",
      },
    ],
    note:
      "We do not invent founders, reviews, hotels, guarantees, or legal details. Pending information remains marked until it is verifiable.",
  },
  contact: {
    hero: {
      eyebrow: "Contact",
      heading: "Let’s talk about your trip through Serbia and the Balkans.",
      copy:
        "WhatsApp will be a main channel for answering questions, understanding your ideal route, and moving forward with a clear proposal in Spanish.",
    },
    whatsapp: {
      title: "WhatsApp",
      configured: "Open WhatsApp conversation",
      missing:
        "WhatsApp number pending configuration. Add NEXT_PUBLIC_WHATSAPP_NUMBER to activate the direct link.",
    },
    email: {
      missing:
        "Email pending configuration. Add NEXT_PUBLIC_CONTACT_EMAIL when the public channel is ready.",
    },
    formTitle: "Tell us what you are imagining",
    fields: {
      name: "Name",
      email: "Email",
      whatsapp: "WhatsApp",
      country: "Country",
      travelers: "Number of travelers",
      date: "Approximate date",
      tripType: "Trip type",
      message: "Message",
    },
    placeholders: {
      country: "Mexico, Colombia, Spain...",
      travelers: "2",
      date: "May 2027",
      tripType: "Guaranteed departure, private trip, group...",
      message:
        "Tell us destinations of interest, tentative dates, number of travelers, and any important questions.",
    },
    submit: "Send inquiry",
    success:
      "Inquiry prepared. We will connect this form to the backend before the public launch.",
  },
  placeholder: {
    label: "Page in preparation",
    copy:
      "This section is already reserved in the V2 site architecture. Content will be expanded when confirmed information exists.",
    cta: "Back to home",
  },
} satisfies Messages;

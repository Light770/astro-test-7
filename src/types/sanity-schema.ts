// TypeScript type definitions

interface Seo {
  title?: string;
  description?: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
}

interface StickySidebar {
  _type: 'stickySidebar';
  title?: string;
  content?: any[]; // Adjust 'any' to a more specific type if needed
}

interface TextImage {
  _type: 'textImage';
  text?: any[]; // Adjust 'any' to a more specific type if needed
  image?: {
    asset: {
      _ref: string;
    };
  };
  imagePosition?: 'left' | 'right';
}

interface BasicForm {
  _type: 'basicForm';
  title?: string;
  description?: string;
}

interface ContactCards {
  _type: 'contactCards';
  cards?: ContactCard[];
}

interface ContactCard {
  _type: 'contactCard';
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
}

interface BasicDark {
  _type: 'basicDark';
  title?: string;
  content?: any[]; // Adjust 'any' to a more specific type if needed
}

interface BasicLight {
  _type: 'basicLight';
  title?: string;
  content?: any[]; // Adjust 'any' to a more specific type if needed
}

interface Basic {
  _type: 'basic';
  title?: string;
  content?: any[]; // Adjust 'any' to a more specific type if needed
}

interface FaqSticky {
  _type: 'faqSticky';
  title?: string;
  faqs?: Faq[];
}

interface Faq {
  _type: 'faq';
  question?: string;
  answer?: any[]; // Adjust 'any' to a more specific type if needed
}

interface FeatureCards {
  _type: 'featureCards';
  title?: string;
  features?: FeatureCard[];
}

interface FeatureCard {
  _type: 'featureCard';
  title?: string;
  description?: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
}

interface FeatureList {
  _type: 'featureList';
  title?: string;
  features?: FeatureItem[];
}

interface FeatureItem {
  _type: 'featureItem';
  title?: string;
  description?: string;
}

interface FeatureSticky {
  _type: 'featureSticky';
  title?: string;
  content?: any[]; // Adjust 'any' to a more specific type if needed
  image?: {
    asset: {
      _ref: string;
    };
  };
}

interface HomeCTA {
  _type: 'homeCTA';
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface HighlightRows {
  _type: 'highlightRows';
  rows?: HighlightRow[];
}

interface HighlightRow {
  _type: 'highlightRow';
  title?: string;
  description?: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
}

interface SignUp {
  _type: 'signUp';
  title?: string;
  description?: string;
}

interface PricingColumns {
  _type: 'pricingColumns';
  title?: string;
  plans?: PricingPlan[];
}

interface PricingPlan {
  _type: 'pricingPlan';
  name?: string;
  price?: number;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
}

interface BasicFeed {
  _type: 'basicFeed';
  title?: string;
  feedItems?: FeedItem[];
}

interface FeedItem {
  _type: 'feedItem';
  title?: string;
  description?: string;
  link?: string;
}

interface Page {
  _id: string;
  _type: 'page';
  title: string;
  slug: {
    current: string;
  };
  seo?: Seo;
  body?: (StickySidebar | TextImage | BasicForm | ContactCards | BasicDark | BasicLight | Basic | FaqSticky | FeatureCards | FeatureList | FeatureSticky | HomeCTA | HighlightRows | SignUp | PricingColumns | BasicFeed)[];
}

interface BlogPost {
  _id: string;
  _type: 'blogPost';
  title: string;
  slug: {
    current: string;
  };
  publishedAt?: string; // Date string
  excerpt?: string;
  mainImage?: {
    asset: {
      _ref: string;
    };
  };
  body?: any[]; // Adjust 'any' to a more specific type if needed, likely an array of blocks
  tags?: {_ref: string}[];
  seo?: Seo;
}

interface Tag {
  _id: string;
  _type: 'tag';
  title: string;
  slug: {
    current: string;
  };
}

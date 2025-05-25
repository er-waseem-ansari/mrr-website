
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string; // slug of category
  details?: string;
  rating?: number;
  reviews?: number;
  material?: string;
  dimensions?: string; // e.g., "8ft x 10ft"
  dataAiHint?: string;
}

export interface Category {
  slug: string;
  name: string;
  imageUrl: string;
  description?: string;
  dataAiHint?: string;
}

export const categories: Category[] = [
  {
    slug: "persian",
    name: "Persian Classics",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/mirzapur-royale-rugs.firebasestorage.app/o/website_images%2Fvarieties-1.jpg?alt=media&token=cc07fbaa-b83a-4eb9-9958-92014bd34432",
    description: "Timeless elegance from ancient traditions.",
    dataAiHint: "persian rug"
  },
  {
    slug: "modern",
    name: "Modern Designs",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/mirzapur-royale-rugs.firebasestorage.app/o/website_images%2Fvarieties-2.jpg?alt=media&token=803e840b-0cf3-4f92-b81e-a6eacc87eed3",
    description: "Contemporary styles for the modern home.",
    dataAiHint: "modern rug"
  },
  {
    slug: "shag",
    name: "Plush Shags",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/mirzapur-royale-rugs.firebasestorage.app/o/website_images%2Fvarieties-3.jpg?alt=media&token=8fe7ea13-54ab-4209-a21c-ad76dc0283d4",
    description: "Luxurious comfort underfoot.",
    dataAiHint: "shag rug"
  },
  {
    slug: "vintage",
    name: "Vintage Collection",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/mirzapur-royale-rugs.firebasestorage.app/o/website_images%2Fvarieties-4.jpg?alt=media&token=0eed8b96-730a-453a-8b23-81f56824e490",
    description: "Unique pieces with a rich history.",
    dataAiHint: "vintage rug"
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Keshan Persian Rug",
    description: "A magnificent hand-knotted Keshan rug with intricate floral patterns.",
    price: 1299.99,
    imageUrl: "https://placehold.co/400x300.png",
    category: "persian",
    details: "Hand-knotted wool, 100% natural dyes, 200 knots per square inch. Made in Iran.",
    rating: 4.8,
    reviews: 120,
    material: "Wool",
    dimensions: "8ft x 10ft",
    dataAiHint: "persian rug"
  },
  {
    id: "2",
    name: "Azure Dreams Modern Rug",
    description: "Abstract design in shades of blue and grey, perfect for contemporary spaces.",
    price: 499.50,
    imageUrl: "https://placehold.co/400x300.png",
    category: "modern",
    details: "Machine-woven polypropylene, easy to clean, durable. Made in Turkey.",
    rating: 4.5,
    reviews: 85,
    material: "Polypropylene",
    dimensions: "5ft x 7ft",
    dataAiHint: "modern rug abstract"
  },
  {
    id: "3",
    name: "Ivory Cloud Shag Rug",
    description: "Ultra-soft and plush shag rug in a creamy ivory color.",
    price: 349.00,
    imageUrl: "https://placehold.co/400x300.png",
    category: "shag",
    details: "Polyester fibers, 2-inch pile height, non-slip backing. Made in India.",
    rating: 4.7,
    reviews: 210,
    material: "Polyester",
    dimensions: "6ft x 9ft",
    dataAiHint: "shag rug white"
  },
  {
    id: "4",
    name: "Vintage Anatolian Kilim",
    description: "A beautiful one-of-a-kind vintage Kilim with geometric patterns.",
    price: 780.00,
    imageUrl: "https://placehold.co/400x300.png",
    category: "vintage",
    details: "Hand-woven wool, circa 1960s, vegetable dyes. Sourced from Anatolia, Turkey.",
    rating: 4.9,
    reviews: 35,
    material: "Wool",
    dimensions: "4ft x 6ft",
    dataAiHint: "kilim rug vintage"
  },
  {
    id: "5",
    name: "Crimson Tabriz Persian Rug",
    description: "Stunning Tabriz design with a central medallion and rich crimson field.",
    price: 1899.00,
    imageUrl: "https://placehold.co/400x300.png",
    category: "persian",
    details: "Hand-knotted silk and wool blend, extremely fine weave. Made in Iran.",
    rating: 5.0,
    reviews: 65,
    material: "Silk & Wool",
    dimensions: "9ft x 12ft",
    dataAiHint: "persian rug red"
  },
  {
    id: "6",
    name: "Geometric Lines Modern Rug",
    description: "Minimalist modern rug with clean lines and a neutral color palette.",
    price: 399.00,
    imageUrl: "https://placehold.co/400x300.png",
    category: "modern",
    details: "Power-loomed viscose, soft sheen, low pile. Made in Belgium.",
    rating: 4.3,
    reviews: 50,
    material: "Viscose",
    dimensions: "8ft x 10ft",
    dataAiHint: "modern rug geometric"
  },
];

export const featuredProducts: Product[] = products.slice(0, 3);

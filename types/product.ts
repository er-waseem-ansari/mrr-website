// types/product.ts
export type ProductClient = {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  imageUrl: string;
  createdAt: string; // serialized as string
  updatedAt: string;
};
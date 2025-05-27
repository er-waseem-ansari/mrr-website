// components/ProductCard.tsx
'use client';
import Image from 'next/image';

type Product = {
  name: string;
  price: number;
  image_url: string;
};

export default function ProductCard({ name, price, image_url }: Product) {
  return (
    <div className="rounded-xl shadow p-4">
      <Image src={image_url} alt={name} width={300} height={300} className="rounded" />
      <h2 className="text-xl mt-2 font-semibold">{name}</h2>
      <p className="text-lg text-gray-600">₹{price}</p>
    </div>
  );
}
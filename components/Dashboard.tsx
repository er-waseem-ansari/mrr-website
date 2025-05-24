// components/Dashboard.tsx
'use client';

import { useEffect, useState } from 'react';
import { ProductClient } from '@/types/product';

export default function Dashboard() {
  const [products, setProducts] = useState<ProductClient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <h2 className="font-semibold">{product.name}</h2>
              <p>₹{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
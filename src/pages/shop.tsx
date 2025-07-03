"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingSpinner from '@/components/Loading';
import ProductCard from '@/components/ProductCard';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  stock: number;
  createdAt: string;
};

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Our Collection</h1>
          <p className="text-center text-gray-600 mb-12">เลือกชมรองเท้าทั้งหมดจาก ZURFRK ที่เราตั้งใจคัดสรรมาเพื่อคุณ</p>
          
          {loading && <LoadingSpinner />}
          {error && <div className="text-center text-red-500">Error: {error}</div>}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
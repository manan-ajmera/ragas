"use client";
import { useState } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import SlideIn from '@/components/animations/SlideIn';

// Static products data categorized
const productsByCategory = {
  'cotton': [
    {
      id: "1",
      name: 'Premium Cotton Fabric',
      description: 'Soft and breathable cotton fabric, perfect for all types of clothing.',
      price: 10.50,
      image: '/images/products/cotton-fabric.jpg',
    },
    {
      id: "2",
      name: 'Cotton Blend',
      description: 'A perfect blend of cotton with synthetic fibers for durability.',
      price: 8.75,
      image: '/images/products/cotton-blend.jpg',
    }
  ],
  'silk': [
    {
      id: "3",
      name: 'Pure Silk Fabric',
      description: 'Luxurious pure silk that drapes beautifully.',
      price: 24.99,
      image: '/images/products/silk-fabric.jpg',
    },
    {
      id: "4",
      name: 'Silk Satin',
      description: 'Smooth, glossy silk satin for elegant garments.',
      price: 22.50,
      image: '/images/products/silk-satin.jpg',
    }
  ],
  'linen': [
    {
      id: "5",
      name: 'Pure Linen',
      description: 'Natural linen fabric with excellent breathability.',
      price: 15.25,
      image: '/images/products/pure-linen.jpg',
    }
  ]
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  // Default to empty array if category doesn't exist in our data
  const products = productsByCategory[params.category as keyof typeof productsByCategory] || [];

  return (
    <div className="p-8 bg-amber-50">
      <SlideIn direction="top">
        <h1 className="text-3xl font-bold mb-4 text-indigo-800 capitalize">{params.category} Products</h1>
      </SlideIn>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length > 0 ? products.map((product, index) => (
          <div key={product.id} className="opacity-0 animate-fade-in" style={{animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards'}}>
            <ProductCard 
              id={product.id}
              title={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.image}
              onAddToCart={(id) => alert(`Added ${product.name} to cart!`)}
            />
          </div>
        )) : (
          <p className="col-span-3 text-center text-lg text-gray-600">No products found in this category.</p>
        )}
      </div>
    </div>
  );
}
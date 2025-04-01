"use client";
import ProductCard from '@/components/ui/ProductCard';
import FadeIn from '@/components/animations/FadeIn';
import { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: 'Premium Cotton Fabric',
    description: 'Soft and breathable cotton fabric, perfect for all types of clothing.',
    price: 10.00,
    image: '/images/products/cotton-fabric.jpg',
    category: 'fabrics'
  },
  {
    id: 2,
    name: 'Silk Blend Fabric',
    description: 'Luxurious silk blend fabric that adds elegance to any outfit.',
    price: 20.00,
    image: '/images/products/silk-blend-fabric.jpg',
    category: 'fabrics'
  },
  {
    id: 3,
    name: 'Eco-Friendly Linen',
    description: 'Sustainable linen fabric, ideal for summer wear and home decor.',
    price: 15.00,
    image: '/images/products/linen-fabric.jpg',
    category: 'fabrics'
  },
  {
    id: 4,
    name: 'Printed Chiffon',
    description: 'Lightweight chiffon fabric with beautiful prints, great for dresses and scarves.',
    price: 12.00,
    image: '/images/products/chiffon-fabric.jpg',
    category: 'fabrics'
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  if (!mounted) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <p className="mb-8">Loading products...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F9FB] min-h-screen py-12 px-4 md:px-8">
      <div className="container mx-auto">
        <FadeIn>
          <h1 className="text-4xl font-bold text-[#1A535C] mb-2 text-center">Our Products</h1>
          <p className="text-lg text-[#333333] mb-8 text-center max-w-2xl mx-auto">
            Explore our high-quality fabrics and printing materials, designed for various applications.
          </p>
        </FadeIn>

        <FadeIn duration={0.6}>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button 
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === 'all' 
                  ? 'bg-[#1A535C] text-white' 
                  : 'bg-white text-[#1A535C] hover:bg-[#2EC4B6] hover:text-white'
              }`}
            >
              All Products
            </button>
            <button 
              onClick={() => setActiveCategory('fabrics')}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === 'fabrics' 
                  ? 'bg-[#1A535C] text-white' 
                  : 'bg-white text-[#1A535C] hover:bg-[#2EC4B6] hover:text-white'
              }`}
            >
              Fabrics
            </button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <FadeIn key={product.id} duration={0.3 + index * 0.1}>
              <ProductCard 
                id={product.id.toString()} 
                title={product.name} 
                description={product.description} 
                price={product.price} 
                imageUrl={product.image} 
                onAddToCart={(id) => console.log(`Added product ${id} to cart`)}
              />
            </FadeIn>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-10">
            <p className="text-xl text-[#1A535C]">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
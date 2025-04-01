import { useEffect, useState } from 'react';
import ProductCard from '@/components/ui/ProductCard';

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await fetch(`/api/products?category=${params.category}`);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, [params.category]);

  if (loading) {
    return <div className="text-center">Loading products...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{params.category} Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            id={product.id}
            title={product.name}
            description={product.description}
            price={product.price}
            imageUrl={product.image}
            onAddToCart={(id) => {
              // Handle add to cart logic here
              console.log(`Added product ${id} to cart`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
import { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <div className="p-4">Loading...</div>;

  return (
    <div className="cards-grid">
      {products.map(product => <ServiceCard key={product.id} product={product} />)}
    </div>
  );
}

import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

export default function Navbar() {
  const { cartItems } = useCartStore();
  return (
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/" className="font-bold text-xl">Nexus Store</Link>
      <div>
        <Link to="/cart" className="relative">
          🛒
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

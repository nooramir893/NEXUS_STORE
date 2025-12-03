import { useCartStore } from '../store/cartStore';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useCartStore();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <Link
          to="/"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded shadow"
          >
            <div className="flex items-center space-x-4">
              <img src={item.image} alt={item.title} className="h-20 w-20 object-contain" />
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-gray-700">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center">
        <h3 className="text-xl font-bold">Total: ${totalPrice}</h3>
        <div className="space-x-4">
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Clear Cart
          </button>
          <button
            onClick={() => alert('Checkout functionality coming soon!')}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

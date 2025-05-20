// BtnPlusMin.jsx
import { useCart } from "../../hooks/CartContext";

function BtnPlusMin({ id }) {
  const { cartItems, updateQty, removeFromCart } = useCart();

  const product = cartItems.find((item) => item.id === id);
  if (!product) return null;

  const increaseQty = () => {
    updateQty(id, product.qty + 1);
  };

  const decreaseQty = () => {
    const newQty = product.qty - 1;
    if (newQty <= 0) {
      removeFromCart(id);
    } else {
      updateQty(id, newQty);
    }
  };

  return (
    <div className="flex items-center">
      <button
        onClick={decreaseQty}
        className="bg-gray-200 hover:bg-green-300 text-white font-bold rounded-full h-6 w-6 flex items-center justify-center focus:outline-none focus:shadow-outline cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="black">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
        </svg>
      </button>
      <span className="mx-4">{product.qty}</span>
      <button
        onClick={increaseQty}
        className="bg-gray-200 hover:bg-green-300 text-white font-bold rounded-full h-6 w-6 flex items-center justify-center focus:outline-none focus:shadow-outline cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="black">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
        </svg>
      </button>
    </div>
  );
}

export default BtnPlusMin;

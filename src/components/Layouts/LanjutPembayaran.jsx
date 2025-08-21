import { useCart } from "../../hooks/CartContext";
import { useNavigate } from "react-router-dom";

function LanjutPembayaran({ onClick }) {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((total, item) => {
    return total + item.harga * item.qty;
  }, 0);
  const biayaLainnya = 1300;
  const total = subtotal + biayaLainnya;

  const handleClick = () => {
    navigate("/PaymentMethod");
  };

  return (
    <div className="w-full fixed bottom-0 left-0 z-50 flex justify-center">
      <div className="rounded-md bg-white shadow-xl w-full max-w-md px-4 py-3 flex flex-row items-center justify-between gap-4">
        {/* Lanjut Pembayaran */}
        <div>
          Total Pembayaran
          <div className="text-lg font-bold">
            Rp{total.toLocaleString("id-ID")}
          </div>
        </div>
        <button
          onClick={handleClick}
          className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-xl"
        >
          Lanjut Pembayaran
        </button>
      </div>
    </div>
  );
}

export default LanjutPembayaran;

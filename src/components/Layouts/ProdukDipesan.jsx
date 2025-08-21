import PlusMinProdukCard from "../Fragments/BtnPlusMin";
import { useCart } from "../../hooks/CartContext";
import { useNavigate } from "react-router-dom";

function ProdukDipesan() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  console.log(cartItems);
  const validItems = cartItems.filter((item) => item && item.qty > 0);

  const handlePayment = () => {
    // Lanjut ke halaman pembayaran
    navigate("/Pembayaran");
  };

  return (
    <div className="border border-gray-200 rounded-md p-4 mt-2 shadow-sm">
      {cartItems.length === 0 ? (
        <p>Belum ada produk ditambahkan.</p>
      ) : (
        <div className="space-y-4">
          {validItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-gray-300 pb-2"
            >
              <div>
                <span className="font-semibold">{item.nama_produk}</span>
                <p className="text-gray-700 text-sm mt-1">
                  Rp{item.qty * item.harga}
                </p>
              </div>
              <PlusMinProdukCard id={item.id_produk} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProdukDipesan;

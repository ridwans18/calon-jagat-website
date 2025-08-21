import { useCart } from "../../hooks/CartContext";

function RincianPembayaran() {
  const { cartItems } = useCart();

  // Hitung subtotal dan total qty
  const subtotal = cartItems.reduce((total, item) => {
    return total + item.harga * item.qty;
  }, 0);
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  const biayaLainnya = 1300; // Bisa disesuaikan
  const total = subtotal + biayaLainnya;
  console.log("total", total);
  return (
    <div className="mb-4 border-t border-gray-300 pt-4">
      {/* Rincian Pembayaran */}
      <h3 className="font-semibold mb-2">Rincian Pembayaran</h3>

      <div className="flex justify-between">
        <span>
          Subtotal <span className="text-gray-400">({totalQty} Menu)</span>
        </span>
        <span>Rp{subtotal.toLocaleString("id-ID")}</span>
      </div>

      <div className="flex justify-between">
        <span>Biaya Lainnya</span>
        <span>Rp{biayaLainnya.toLocaleString("id-ID")}</span>
      </div>

      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>Rp{total.toLocaleString("id-ID")}</span>
      </div>
    </div>
  );
}

export default RincianPembayaran;

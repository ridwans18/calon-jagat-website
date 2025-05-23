import { useCart } from "../../hooks/CartContext";
import PlusMinProdukCard from "./BtnPlusMin";

function Card_Produk_User({ image, id, name, price, stock }) {
  const { cartItems, addToCart } = useCart();

  // Cari produk ini di cartItems
  const itemInCart = cartItems.find((item) => item.id === id);
  const isAdded = !!itemInCart;

  const handleAdd = () => {
    addToCart({ id, image, name, price, stock });
  };

  return (
    <div className="w-full border border-gray-200 rounded-lg bg-white shadow-md">
      <img src={image} alt={name} className="w-full h-28 object-cover rounded-t-lg" />
      <div className="px-3 pt-2 pb-2 space-y-2">
        <p className="text-sm font-medium line-clamp-2">{name}</p>
        <div className="flex justify-between">
          <p className="text-base font-bold">Rp{price}</p>
          <span className={`text-xs font-semibold px-2 py-1 rounded ${stock > 0 ? "bg-gray-200" : "bg-red-500 text-white"}`}>
            {stock > 0 ? "Tersedia" : "Tidak Tersedia"}
          </span>
        </div>

        {/* Ganti dengan pengecekan dari context */}
        {!isAdded ? (
          <button
            className="w-full border-2 border-green-500 text-green font-semibold rounded-md hover:bg-gray-200"
            onClick={handleAdd}
          >
            Tambah
          </button>
        ) : (
          <div className="flex justify-center">
            <PlusMinProdukCard id={id} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Card_Produk_User;

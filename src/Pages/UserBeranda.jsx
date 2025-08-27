import KategoriSortir from "../components/Layouts/Kategori-Sortir";
import ProdukCard from "../components/Layouts/ProdukCard";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/CartContext";
import Info_UserBeranda from "../components/Layouts/Info_UserBeranda";
import Header_UserBeranda from "../components/Layouts/Header_UserBeranda";

const UserBeranda = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleClick = () => {
    navigate("/ViewPesanan");
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="bg-white">
      <Header_UserBeranda />

      <div className="min-h-screen p-4 bg-white border-l-1 border-r-1 border-gray-200 max-w-md mx-auto">
        <Info_UserBeranda />

        {/* Product Card */}
        <div className="flex flex-col gap-4">
          <ProdukCard />
        </div>
      </div>

      {totalItems > 0 && (
        <div className="flex justify-center sticky bottom-0 z-40">
          <div className="max-w-md bg-transparent p-3">
            <button
              onClick={handleClick}
              className="bg-green-600 text-white font-semibold px-3 py-3 rounded-md shadow-md 
                        hover:bg-green-500 active:bg-green-700 transition duration-200"
            >
              <span className="text-sm p-4">CHECK OUT ({totalItems})</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBeranda;

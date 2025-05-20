import KategoriSortir from "../components/Layouts/Kategori-Sortir";
import ProdukCard from "../components/Layouts/ProdukCard";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/CartContext";

const UserBeranda = () => {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleClick = () => {
    navigate("/ViewPesanan");
  };
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div className="container min-h-screen min-w-screen bg-white mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Sidebar */}
        <KategoriSortir />

        {/* Product Card */}
        <ProdukCard />

        <div className="fixed bottom-3 right-6 flex justify-between items-center mb-4 shadow-lg">
          <button
            onClick={handleClick}
            className="bg-green-600 text-white font-semibold px-4 py-2 rounded-md shadow-md 
                       hover:bg-green-500 focus:ring-2 focus:ring-green-400 
                       active:bg-green-700 transition duration-200"
          >
            <span className="text-sm p-4">CHECKOUT ({totalItems})</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserBeranda;
import KategoriSortir from "../components/Layouts/Kategori-Sortir";
import ProdukCard from "../components/Layouts/ProdukCard";

const UserBeranda = () => {
  return (
    <div className="container min-h-screen min-w-screen bg-white mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Sidebar */}
        <KategoriSortir />

        {/* Product Card */}
        <ProdukCard productId={3} />
        </div>
    </div>
  );
};

export default UserBeranda;
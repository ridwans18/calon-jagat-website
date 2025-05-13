import KategoriSortir from "../components/Layouts/Kategori-Sortir";
import ProdukCard from "../components/Layouts/ProdukCard";

const UserBeranda = () => {
  return (
    <div className="container min-h-screen min-w-screen bg-white mx-auto">
      <div className="flex flex-col lg:flex-row gap-4 p-4">
        {/* Sidebar */}
        <KategoriSortir />

        {/* Product Card */}
        <ProdukCard />
        </div>
    </div>
  );
};

export default UserBeranda;
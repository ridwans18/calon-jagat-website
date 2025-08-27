import SideBar from "../components/Layouts/SideBar";
import Header from "../components/Layouts/Header";
import FilterSearchReset from "../components/Layouts/Filter-Search-Reset";
import ContentPesanan from "../components/Layouts/ContentPesanan";

function Transaksi() {
  return (
    <div className="flex h-screen w-screen bg-white">
      <SideBar />
      <main className="flex-1 p-6 ">
        <h2 className="text-xl font-semibold mb-4">Daftar Transaksi</h2>
        <Header />
        <FilterSearchReset />
        <ContentPesanan />
      </main>
    </div>
  );
}

export default Transaksi;

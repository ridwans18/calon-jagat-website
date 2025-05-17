import SideBar from '../components/Layouts/SideBar';
import TambahProduklay from '../components/Layouts/TambahProduk_layout';
function TambahProduk() {
  return (
    <div className="flex min-h-screen bg-white">
      <SideBar />
      <main className="flex-1 p-6">
        <TambahProduklay />
      </main>
    </div>
  );
}

export default TambahProduk;

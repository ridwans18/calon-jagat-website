import Produk_Layout from "../components/Layouts/Produk_Layout";
import SideBar from "../components/Layouts/SideBar";

function Produk() {
  return (
    <div className="flex h-screen w-screen bg-white">
      <SideBar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Produk_Layout />
      </main>
    </div>
  );
}

export default Produk;

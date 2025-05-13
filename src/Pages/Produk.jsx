import Produk_Layout from "../components/Layouts/Produk_Layout";
import SideBar from "../components/Layouts/SideBar";

function Produk() {
  return (
    <div className="flex min-h-screen bg-white">
      <SideBar />
      <main className="flex-1 p-6">
        {/* Add your content here */}
        <Produk_Layout />
      </main>
    </div>
  );
}

export default Produk;

import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Card_Produk from "../Fragments/Card_Produk";
import { useNavigate } from "react-router-dom";

function Produk_Layout() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/TambahProduk");
  };

  return (
    <section>
      {/* Header dan Tombol Tambah Produk */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Daftar Produk</h2>
        <button
          onClick={handleClick}
          className="bg-green-600 text-white font-semibold px-4 py-2 rounded-md shadow-md 
                     hover:bg-green-500 focus:ring-2 focus:ring-green-400 
                     active:bg-green-700 transition duration-200"
        >
          + Tambah Produk
        </button>
      </div>

      {/* Kontainer Utama */}
      <div className="border border-secondary w-full shadow-sm rounded-md space-y-2 pt-2 pb-2">
        {/* Tab Produk */}
        <div className="flex gap-10 border-b-2 border-secondary px-left pb-2">
          <h2>Semua Produk</h2>
          <h2>Nonaktif</h2>
        </div>

        {/* Pencarian dan Urutan */}
        <div className="px-left pb-2 flex items-center justify-between border-b border-secondary">
          <div className="flex items-center gap-2 border border-secondary rounded-md p-2 w-[250px]">
            <CiSearch />
            <input
              type="text"
              placeholder="Cari nama produk"
              className="outline-none w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 border border-secondary rounded-md p-2">
              <p>Urutkan</p>
              <IoIosArrowDown />
            </div>
          </div>
        </div>

        {/* Header Tabel Produk */}
        <div className="flex gap-2 px-left border-b border-secondary pb-2">
          <div className="flex items-center">
            <input type="checkbox" className="w-4 h-4" />
          </div>
          <p className="min-w-[350px]">INFO PRODUK</p>
          <p className="min-w-[150px] w-full">HARGA</p>
          <p className="min-w-[150px] w-full">STOK</p>
          <p className="min-w-[150px] w-full">AKTIF</p>
          <p className="min-w-[150px] w-full"></p>
        </div>

        {/* List Produk */}
        <div className="px-left space-y-4">
          <Card_Produk />
          <Card_Produk />
          <Card_Produk />
        </div>
      </div>
    </section>
  );
}

export default Produk_Layout;

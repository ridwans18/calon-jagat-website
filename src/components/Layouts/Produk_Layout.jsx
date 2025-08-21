import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Card_Produk from "../Fragments/Card_Produk";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

function Produk_Layout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [page_total, setPage_total] = useState(null);

  const handleClick = () => {
    navigate("/TambahProduk");
  };
  const changepage = (page) => {
    setPage_total(page);
  };
  const handlePagePlus = () => {
    console.log(page_total);
    if (searchParams.get("page") === page_total) return;
    navigate(`?page=${Number(searchParams.get("page")) + 1}`);
  };
  // console.log(page_total);
  const handlePageMin = () => {
    if (searchParams.get("page") === 0) return;
    navigate(`?page=${Number(searchParams.get("page")) - 1}`);
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
                     active:bg-green-700 transition duration-200 cursor-pointer"
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
          <p className="min-w-[350px]">INFO PRODUK</p>
          <p className="min-w-[150px] w-full">HARGA</p>
          <p className="min-w-[150px] w-full">STOK</p>
          <p className="min-w-[150px] w-full">DESKRIPSI</p>
          <p className="min-w-[150px] w-full">STATUS</p>
          <p className="min-w-[150px] w-full"></p>
        </div>

        {/* List Produk */}
        <div className="px-left space-y-4">
          <Card_Produk changepage={changepage} />
        </div>
        <div className="w-full flex justify-end p-4">
          <div className="flex h-[40px] w-[190px] items-center gap-2 border border-gray-400 rounded-lg justify-between">
            <button
              onClick={() => handlePageMin()}
              className="h-[40px] w-[90px] border border-gray-400 rounded-lg hover:bg-gray-200"
            >
              Previous
            </button>
            <div className="h-[40px] w-[40px] flex items-center justify-center">
              2
            </div>
            <button
              onClick={() => handlePagePlus()}
              className="h-[40px] w-[90px] border border-gray-400 rounded-lg hover:bg-gray-200"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Produk_Layout;

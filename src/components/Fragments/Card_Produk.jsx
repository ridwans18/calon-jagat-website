import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { deletedata, fetchData } from "../../services/api";

function Card_Produk() {
  const [produk, setProduk] = useState([]);
  const navigate = useNavigate();
  const { data: products, loading, error } = useFetch(() => fetchData("ayam"));

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem("produk")) || [];
    // setProduk(data);
  }, []);

  const handleSave = (index, updatedData) => {
    const newProduk = [...produk];
    newProduk[index] = updatedData;
    setProduk(newProduk);
    localStorage.setItem("produk", JSON.stringify(newProduk));
  };

  const handleDelete = async (indexToDelete) => {
    await deletedata("ayam", indexToDelete);
    console.log("terhapus");
  };

  const [dropdownIndex, setDropdownIndex] = useState(null);
  const dropdownRefs = useRef([]);

  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownIndex !== null &&
        dropdownRefs.current[dropdownIndex] &&
        !dropdownRefs.current[dropdownIndex].contains(event.target)
      ) {
        setDropdownIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownIndex]);

  return (
    <div className="flex flex-col gap-2 ">
      {products.length === 0 ? (
        <p>Tidak ada produk</p>
      ) : (
        (products || []).map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-start p-4 border rounded-lg shadow-sm bg-white"
          >
            {/* Checkbox */}
            <input type="checkbox" className="w-3 h-3" />

            {/* Gambar dan Nama Produk */}
            <div className="min-w-[323px] flex gap-2">
              {item.images?.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`produk-${i}`}
                  className="w-20 h-20 object-cover border rounded"
                />
              ))}
              <p>{item.nama}</p>
            </div>

            {/* Harga */}
            <div className="min-w-[150px] w-full">
              <div className="flex h-[40px] w-[150px] items-center gap-2  rounded-md overflow-hidden border-secondary border">
                <div className="bg-secondary h-full flex items-center justify-center  min-w-[30px]">
                  <p>Rp</p>
                </div>
                <input
                  type="text"
                  value={item.price}
                  className="w-full outline-none"
                  readOnly
                />
              </div>
            </div>

            {/* Stok */}
            <div className="min-w-[160px] w-full">
              <input type="text" value={item.stok} readOnly />
            </div>

            {/* Deskripsi */}
            <div className="min-w-[150px] w-full">
              <p>{item.deskripsi}</p>
            </div>

            {/* Status */}
            <div className="min-w-[150px] w-full">
              <p>Tersedia</p>
            </div>

            {/* Opsi Dropdown */}
            <div className="min-w-[150px] w-full">
              {/* Tombol Hapus */}
              <div className="relative">
                <div
                  onClick={() => toggleDropdown(index)}
                  ref={(el) => (dropdownRefs.current[index] = el)}
                  className="flex items-center justify-between p-2 border-2 border-secondary rounded-md cursor-pointer hover:bg-green-100"
                >
                  <p>Atur</p>
                  <IoIosArrowDown />
                </div>

                {dropdownIndex === index && (
                  <div className="absolute top-full w-39 bg-white border border-gray-50 shadow-md rounded-md text-sm z-90">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-600 rounded-md"
                    >
                      Hapus
                    </button>
                    <button
                      onClick={() => navigate(`/EditProduk/${item.id}`)}
                      className="w-full text-left px-4 py-2 hover:bg-blue-100 text-blue-600 rounded-md"
                    >
                      Edit
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Card_Produk;

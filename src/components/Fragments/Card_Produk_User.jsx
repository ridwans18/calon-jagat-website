import PlusMinProdukCard from "./BtnPlusMin";

function Card_Produk_User({ image, id, name, price, stock }) {
  return (
    <div
      key={id}
      className="w-full border border-gray-200 rounded-lg bg-white shadow-md hover:shadow-lg transition duration-200"
      style={{ maxHeight: "390px", height: "100%" }}
    >
      {/* Gambar Produk */}
      <img
        src={image}
        alt={name}
        className="w-full h-28 object-cover rounded-t-lg"
      />

      <div className="px-3 pt-2 pb-2 space-y-2">
        {/* Nama Produk */}
        <p className="text-sm font-medium leading-tight line-clamp-2 mb-2">
          {name}
        </p>

        <div className="flex flex-row items-center justify-between">
          {/* Harga Produk */}
          <p className="text-base font-bold">Rp{price}</p>

          {/* Status Produk */}
          <span
            className={`inline-block text-xs font-semibold px-1 py-0.5 rounded ${
              stock > 0 ? "bg-gray-200 text-gray-800" : "bg-red-500 text-white"
            }`}
          >
            {stock > 0 ? "Tersedia" : "Tidak Tersedia"}
          </span>
        </div>

        {/* Button Tambah */}
        <div className="">
          <button
            className="bg-white text-green font-semibold w-full rounded-md
                             hover:bg-gray-200 focus:ring-2 focus:ring-green-400 
                             active:bg-gray-300 transition duration-200
                               border-2 border-green-500"
          >
            <span className="text-sm">Tambah</span>
          </button>
        </div>

        {/* Button Plus Minus */}
        <div className="flex justify-center">
          <PlusMinProdukCard />
        </div>
      </div>
    </div>
  );
}

export default Card_Produk_User;

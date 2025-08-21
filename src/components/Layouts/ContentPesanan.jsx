import ProdukContain from "../Fragments/ProdukContain";
import { fetchData } from "../../services/api";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";
function ContentPesanan() {
  const { data, loading, error, refetch } = useFetch(() => fetchData("orders"));
  console.log(data.data);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data.data && (
        <div className="h-screen overflow-y-scroll">
          {data.data.map((item) => (
            <div className="mt-6 border border-secondary rounded-md shadow-sm overflow-hidden">
              {/* Header */}
              <div className="flex flex-wrap justify-between items-center px-4 py-3 bg-gray-100 border-b border-gray-200 text-sm">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="form-checkbox text-green-600"
                  />
                  <span className="font-medium text-gray-800">
                    Pesanan Selesai
                  </span>
                  <span className="text-green-600 font-semibold">
                    {item.no_invoice}
                  </span>
                  <span className="text-gray-600">
                    / {item.nama_pelanggan} /
                  </span>
                  <span className="text-gray-500">
                    🕒 {new Date(item.tanggal_pembelian).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Isi Pesanan */}
              <div className="p-4 flex justify-between gap-4 w-full ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Nama Produk, Jumlah dan Harga */}
                  {item.produk.map((item) => (
                    <ProdukContain>
                      <div className="font-medium text-gray-800">
                        {item.nama_produk}
                      </div>
                      <div className="text-sm text-gray-600">
                        {item.quantity} x Rp {item.harga}
                      </div>
                    </ProdukContain>
                  ))}
                </div>
                {/* Pembayaran */}

                {/* Garis guat gap */}
                <div className="gap-4 border-l-2 border-gray-300 pl-3 w-[150px]">
                  <div>
                    <div className="font-medium text-gray-700">Pembayaran</div>
                    <div className="text-sm text-gray-600">Qris</div>
                  </div>
                  <div>
                    <span className="bg-green-200 text-gray-900 font-semibold px-2 py-0.5 rounded text-xs">
                      {item.status_pembayaran === "paid" ? (
                        <span className="bg-green-200 text-gray-900 font-semibold px-2 py-0.5 rounded text-xs">
                          Berhasil
                        </span>
                      ) : (
                        <span className="bg-red-200 text-gray-900 font-semibold px-2 py-0.5 rounded text-xs">
                          Tidak Berhasil
                        </span>
                      )}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 px-4 py-3 flex flex-wrap items-center justify-between text-sm">
                {/* Footer Content */}
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-green-100 transition">
                    <i className="fas fa-receipt text-base leading-none text-gray-700"></i>
                    <span>Detail</span>
                  </button>
                </div>
                <div className="text-right font-semibold text-gray-800">
                  Total Pembelian
                  <br />
                  <span className="text-lg">Rp {item.total_pembayaran}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ContentPesanan;

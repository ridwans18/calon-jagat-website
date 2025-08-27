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
        <div className="max-h-[70vh] overflow-y-scroll">
          {data.data.map((item) => (
            <div className="mt-6 border border-secondary rounded-md shadow-sm overflow-hidden bg-white">
              {/* Header */}
              <div className="flex flex-wrap justify-between items-center px-4 py-3 bg-gray-100 border-b border-gray-200 text-sm">
                <div className="flex items-center gap-2">
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
              <div className="p-4 flex justify-start gap-4 w-full ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Nama Produk, Jumlah dan Harga */}
                  {item.produk.map((item) => (
                    <div className="gap-4 border-l-5 border-gray-300 pl-2 w-[180px]">
                      <div className="font-medium text-gray-800">
                        {item.nama_produk}
                      </div>
                      <div className="text-gray-400">
                        {item.quantity} x Rp{item.harga.toLocaleString("id-ID")}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Pembayaran */}

                {/* Garis guat gap */}
                <div className="gap-4 border-l-2 border-gray-300 pl-3 w-[150px]">
                  <div>
                    <span className="bg-green-200 text-gray-900 font-semibold px-2 py-0.5 rounded text-xs">
   
                        <span className="bg-green-200 text-gray-900 font-semibold px-2 py-0.5 rounded text-xs">
                          Berhasil - Gopay
                        </span>

                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mt-3">Total: </div>
                  </div>
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

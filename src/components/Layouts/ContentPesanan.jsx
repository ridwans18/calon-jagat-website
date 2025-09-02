import ProdukContain from "../Fragments/ProdukContain";
import { fetchData } from "../../services/api";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import useDataOrders from "../../../store";
import { useShallow } from "zustand/shallow";

function ContentPesanan() {
  // const { data, loading, error, refetch } = useFetch(() => fetchData("orders"));
  // console.log(data);
  const [produk, setproduk] = useState([]);
  const { data, filterdata, loading } = useDataOrders(
    useShallow((state) => ({
      data: state.data,
      // filterdata: state.filterdata,
      loading: state.loading,
    }))
  );

  useEffect(() => {
    // if (filterdata.length > 0) {
    //   setproduk(filterdata);
    // } else {
    //   setproduk(data);
    // }
  }, [data, filterdata]);
  console.log(data);
  return (
    <div>
      {loading && <div>Loading...</div>}
      {/* {error && <div>Error: {error}</div>} */}
      {data && (
        <div className="max-h-[70vh] overflow-y-scroll">
          {data.map((item) => (
            <div className="mt-6 border border-secondary rounded-md shadow-sm overflow-hidden bg-white">
              {/* Header */}
              <div className="flex flex-wrap justify-between items-center px-4 py-3 bg-gray-100 border-b border-gray-200 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-800">
                    Pesanan Selesai
                  </span>
                  <span className="text-green-600 font-semibold">
                    {item.id_orders}
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
                    {item.status_pembayaran === "paid" && (
                      <span className="bg-green-200 text-gray-900 font-semibold px-2 py-0.5 rounded text-xs">
                        <span className="bg-green-200 text-gray-900 font-semibold px-2 py-0.5 rounded text-xs">
                          Berhasil
                        </span>
                      </span>
                    )}
                    {item.status_pembayaran === "failed" && (
                      <span className="bg-red-200 text-gray-900 font-semibold px-2 py-0.5 rounded text-xs ">
                        <span className=" text-gray-900 font-semibold px-2 py-0.5 rounded text-xs ">
                          Gagal
                        </span>
                      </span>
                    )}
                    {item.status_pembayaran === "pending" && (
                      <span className="bg-yellow-200 text-gray-900 font-semibold px-2 py-0.5 rounded text-xs ">
                        <span className=" text-gray-900 font-semibold px-2 py-0.5 rounded text-xs ">
                          Pending
                        </span>
                      </span>
                    )}
                    {/* <span className="bg-green-200 text-gray-900 font-semibold px-2 py-0.5 rounded text-xs">
                        Berhasil - Gopay
                      </span> */}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-600 mt-3">
                      <p>
                        Total: Rp
                        {item.produk
                          .reduce(
                            (total, item) => total + item.harga * item.quantity,
                            0
                          )
                          .toLocaleString("id-ID")}
                      </p>
                    </div>
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

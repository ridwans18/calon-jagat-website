import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import GarisPembatas from "../components/Fragments/Garis Pembatas";
import HeaderDate_OrderStatus from "../components/Layouts/HeaderDate_OrderStatus";
import Lokasi_OrderStatus from "../components/Layouts/Lokasi_OrderStatus";
import DataPesanan_OrderStatus from "../components/Layouts/DataPesanan_OrderStatus";
import useDataOrders from "../../store";
import { useNavigate } from "react-router-dom";

function OrderStatus() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const findOrder = useDataOrders((state) => state.findOrder);
  const data = useDataOrders((state) => state.data);

  useEffect(() => {
    const order_id = searchParams.get("order_id");
    findOrder(order_id);
  }, []);

  const handleClick = () => {
    navigate("/UserBeranda");
  };
  console.log(data);
  return (
    <div className=" h-screen bg-white shadow-md relative flex justify-center ">
      <div className="w-full xl:w-115 shadow-md p-4 space-y-2">
        {/* Header, Pick Up & Date */}
        <HeaderDate_OrderStatus
          tanggal={data.data && data.data.tanggal_pembelian}
          no_order={data.data && data.data.id_orders}
        />

        {/* Nama & Lokasi */}
        <Lokasi_OrderStatus />

        <GarisPembatas />

        {/* Informasi Pesanan & Subtotal */}
        <DataPesanan_OrderStatus
          name={data.data && data.data.nama_pelanggan}
          produk={data.data && data.data.produk}
          // nomor={data.data.nomor}
          subtotal={data.data && data.data.total_pembayaran}
        />

        <GarisPembatas />

        <div className="flex justify-center bottom-0 z-40">
          <div className="max-w-md bg-transparent p-3">
            <button
              className="bg-green-600 text-white font-semibold px-7 py-3 rounded-md shadow-md 
                        hover:bg-green-500 active:bg-green-700 transition duration-200"
            >
              <span onClick={handleClick} className="text-sm p-4">
                Pesanan Baru
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;

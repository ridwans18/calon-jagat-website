import React from "react";
import { useSearchParams } from "react-router-dom";
import GarisPembatas from "../components/Fragments/Garis Pembatas";
import HeaderDate_OrderStatus from "../components/Layouts/HeaderDate_OrderStatus";
import Lokasi_OrderStatus from "../components/Layouts/Lokasi_OrderStatus";
import DataPesanan_OrderStatus from "../components/Layouts/DataPesanan_OrderStatus";

function OrderStatus() {
  const [searchParams] = useSearchParams();

  const orderid = searchParams.get("orderid");
  return (
    <div className=" h-screen bg-white shadow-md relative flex justify-center ">
      <div className="w-full xl:w-115 shadow-md p-4 space-y-2">
        {/* Header, Pick Up & Date */}
        <HeaderDate_OrderStatus />

        {/* Nama & Lokasi */}
        <Lokasi_OrderStatus />

        <GarisPembatas />

        {/* Informasi Pesanan & Subtotal */}
        <DataPesanan_OrderStatus />

        <GarisPembatas />
        
        <div className="flex justify-center bottom-0 z-40">
          <div className="max-w-md bg-transparent p-3">
            <button
              className="bg-green-600 text-white font-semibold px-7 py-3 rounded-md shadow-md 
                        hover:bg-green-500 active:bg-green-700 transition duration-200"
            >
              <span className="text-sm p-4">Pesanan Baru</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;

import React from "react";
import { useSearchParams } from "react-router-dom";

function OrderStatus() {
  const [searchParams] = useSearchParams();

  const orderid = searchParams.get("orderid");
  return (
    <div className=" h-screen bg-white shadow-md relative flex justify-center ">
      <div className="w-full xl:w-xl shadow-md p-2 space-y-2">
        <div className="text-center">
          <h1>Ringkasan Pesanan</h1>
        </div>
        <div className=" flex justify-between">
          <h1>Order Type</h1>
          <h1>Pick Up</h1>
        </div>
        <div className=" flex justify-between">
          <div>
            <h1>Date</h1>
            <h1>29/xx/xx</h1>
          </div>
          <div>
            <h1>Order Number</h1>
            <h1 className="text-end">adfafafa1231</h1>
          </div>
        </div>
        <div>
          <h1>Informasi Pesanan</h1>
          <h2>Nama Pelanggan: xxxx</h2>
          <h2>Nomor Telepon: xxxxx</h2>
        </div>
        <div>
          <h1 className="font-bold">Pesanan</h1>
          <div>
            <p>1x xxxx</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <h2>Subtotal</h2> <p>Rp. xxx</p>
          </div>
          <div className="flex justify-between">
            <h2>Fee</h2> <p>Rp. xxx</p>
          </div>
          <div className="flex justify-between">
            <h2>Pembayaran</h2> <p className="font-bold">QRIS</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p>Total</p>
          <p>Rp. xxx</p>
        </div>
      </div>
    </div>
  );
}

export default OrderStatus;

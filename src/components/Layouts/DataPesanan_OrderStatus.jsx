import { useState } from "react";
import GarisPembatas from "../Fragments/Garis Pembatas";

function DataPesanan_OrderStatus({ name, nomor, produk, subtotal }) {
  const [total, settotal] = useState(0);
  // console.log(produk);

  return (
    <>
      {/* Informasi Pesanan */}
      <div className="space-y-1">
        <h1 className="font-bold">Informasi Pesanan</h1>
        <div className="flex justify-between">
          <h2>Nama Pelanggan</h2>
          <h2>{name}</h2>
        </div>
        <div className="flex justify-between">
          <h2>Nomor Telepon</h2>
          <h2>{nomor}</h2>
        </div>
      </div>

      <GarisPembatas />

      {/* Pesanan */}
      <div className="space-y-1">
        <h1 className="font-bold mb-2">Pesanan</h1>

        {produk &&
          produk.map((item, index) => (
            <div key={index} className="flex justify-between">
              <p>
                <span className="font-medium">{item.quantity}x</span>{" "}
                {item.nama_produk}
              </p>
              <p>Rp {Number(item.harga).toLocaleString("id-ID")}</p>
            </div>
          ))}
      </div>

      <GarisPembatas />

      {/* Subtotal */}
      <div className="space-y-1">
        <div className="flex justify-between">
          <h2>Subtotal</h2> <p>Rp{Number(subtotal).toLocaleString("id-ID")}</p>
        </div>
        <div className="flex justify-between">
          <h2>Fee</h2> <p>Rp1.300</p>
        </div>
        <div className="flex justify-between">
          <h2>Pembayaran</h2> <p className="font-bold">QRIS</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="font-bold">Total</p>
        <p className="font-bold text-green-700">
          Rp{Number(subtotal + 1300).toLocaleString("id-ID")}
        </p>
      </div>
    </>
  );
}

export default DataPesanan_OrderStatus;

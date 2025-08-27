import { useEffect, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useCart } from "../hooks/CartContext";
import useFetch from "../hooks/useFetch";
import { postdata } from "../services/api";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../services/localstorage";

const PaymentMethod = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const [DataPelanggan, setDataPelanggan] = useState(
    getFromLocalStorage("DataPelanggan") || {}
  );
  const [isDisabled, setIsDisabled] = useState(false);

  const [DataPesanan, setDataPesanan] = useState({
    createdAt: new Date().toISOString(),
    namapelanggan: DataPelanggan.namapelanggan,
    nomorhp: DataPelanggan.nomorhp,
    email: DataPelanggan.email,
    iduser: "2893456", // bisa diganti dinamis
    totalpembayaran: 0,
    produk: cartItems.map((item) => ({
      id_produk: item.id_produk,
      qty: item.qty,
    })),
  });
  // const { data, loading, error, refetch } = useFetch(
  //   () =>
  //     postdata("payment", {
  //       amount: DataPesanan.totalpembayaran,
  //       data_pesanan: DataPesanan.produk,
  //       nama_pelanggan: DataPesanan.namapelanggan,
  //       phone: DataPesanan.nomorhp,
  //       email_pelanggan: DataPesanan.email,
  //     }),
  //   false
  // );

  const handleChange = (e) => {
    setDataPesanan({
      ...DataPesanan,
      [e.target.name]: e.target.value,
    });
  };

  const [paymentMethod, setPaymentMethod] = useState("Online Payment");

  useEffect(() => {
    const total =
      cartItems.reduce((total, item) => {
        return total + item.harga * item.qty;
      }, 0) + 1300;
    setDataPesanan({
      ...DataPesanan,
      totalpembayaran: total,
    });
  }, []);

  const handleSubmit = async () => {
    if (!DataPesanan.namapelanggan && !DataPesanan.nomorhp) {
      alert("Nama dan nomor HP wajib diisi!");
      return;
    }
    setIsDisabled(true);
    saveToLocalStorage("DataPelanggan", {
      namapelanggan: DataPesanan.namapelanggan,
      nomorhp: DataPesanan.nomorhp,
      email: DataPesanan.email,
    });
    console.log(DataPesanan.produk);

    const response = await postdata("payment", {
      amount: DataPesanan.totalpembayaran,
      data_pesanan: DataPesanan.produk,
      nama_pelanggan: DataPesanan.namapelanggan,
      phone: DataPesanan.nomorhp,
      email_pelanggan: DataPesanan.email,
    });

    window.snap.pay(response.token);
    removeFromLocalStorage("cartItems");
  };

  return (
    <div className="min-h-screen bg-white shadow-md relative">
      {/* Header */}
      <div className="w-full fixed top-0 left-0 z-50 h-13 flex justify-center">
        <div className="bg-white rounded-b-lg shadow-md w-full max-w-md px-4 py-3 flex flex-row gap-4">
          <button onClick={() => navigate(-1)} className="left-4">
            <ArrowLeftIcon className="h-6 w-6 text-black" />
          </button>
          <h2 className="font-bold mb-2 absolute left-1/2 transform -translate-x-1/2">
            Pembayaran
          </h2>
        </div>
      </div>

      {/* Form */}
      <div className="min-h-screen p-4 pt-18 pb-28 bg-white shadow-md max-w-md mx-auto">
        <div className="border border-green-200 bg-green-50 rounded-lg px-4 py-1 mb-4 flex justify-between items-center">
          <span className="text-xs text-gray-500 font-bold">Tipe Pemesanan</span>
          <div className="font-bold text-xs flex items-center">
            Ambil Sendiri
            <CheckCircleIcon className="ml-2 w-5 h-5 text-green-500" />
          </div>
        </div>

        <div className="mb-3">
          <h2 className="font-bold mb-2">Informasi Pelanggan</h2>
          {/* Nama Pelanggan */}
          <label className="block text-sm mb-1">
            Nama Lengkap<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="namapelanggan"
            value={DataPesanan.namapelanggan}
            onChange={(e) => handleChange(e)}
            placeholder="Nama Lengkap"
            className="w-full border-2 border-gray-300 px-3 py-2 rounded-lg mb-3"
          />
          {/* Nomor Pelanggan */}
          <label className="block text-sm mb-1">
            No. Handphone<span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="nomorhp"
            value={DataPesanan.nomorhp}
            onChange={(e) => handleChange(e)}
            placeholder="No. Handphone"
            className="w-full border-2 border-gray-300 px-3 py-2 rounded-lg mb-3"
          />
          {/* Email Pelanggan */}
          <label className="block text-sm mb-1">
            Kirim tanda terima ke Email
          </label>
          <input
            type="email"
            value={DataPesanan.email}
            name="email"
            onChange={(e) => handleChange(e)}
            placeholder="Email (opsional)"
            className="w-full border-2 border-gray-300 px-3 py-2 rounded-lg mb-3"
          />
        </div>

        {/* Payment Method */}
        <div>
          <h2 className="font-bold mb-2">Metode Pembayaran</h2>
          <div className="flex gap-2">
            <button
              className={`flex-1 px-3 py-2 rounded-lg border ${
                paymentMethod === "Online Payment"
                  ? "border-green-400 bg-green-50"
                  : "border-gray-300 font"
              }`}
              onClick={() => setPaymentMethod("Online Payment")}
            >
              <span className="font-bold">QRIS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Button Bayar */}
      <div className="w-full fixed bottom-0 left-0 z-50 flex justify-center">
        <div className="rounded-md bg-white shadow-xl w-full max-w-md px-4 py-3 flex flex-row items-center justify-between gap-4">
          <div>
            Total Pembayaran
            <div className="text-lg font-bold">
              Rp{DataPesanan.totalpembayaran.toLocaleString("id-ID")}
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={isDisabled}
            className={` bg-green-600  text-white px-4 py-2 rounded-xl ${
              isDisabled ? "opacity-50" : "hover:bg-green-800"
            }`}
          >
            Bayar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;

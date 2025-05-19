import React, { useState } from "react";
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("Online Payment");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/ViewPesanan");
  };

  return (
    <div className="min-h-screen bg-white shadow-md relative">
      {/* Header */}
      <div className="w-full fixed top-0 left-0 z-50 h-13 flex justify-center">
        <div className="bg-white rounded-b-lg shadow-md w-full max-w-md px-4 py-3 flex flex-row gap-4">
            {/* Icon Panah Kiri */}
          <button 
            onClick={handleClick}
            className="left-4"
          >
            <ArrowLeftIcon className="h-6 w-6 text-black" />
          </button>
          <h2 className="font-bold mb-2 absolute left-1/2 transform -translate-x-1/2">Pembayaran</h2>
        </div>
      </div>

      <div className="min-h-screen p-4 pt-18 pb-28 bg-white shadow-md max-w-md mx-auto">
        {/* Order Type */}
        <div className="border border-green-200 bg-green-50 rounded-lg px-4 py-1 mb-4 flex justify-between items-center">
          <span className="text-xs text-gray-500">Order Type</span>
          <div className="font-bold text-xs flex items-center">Pick Up<CheckCircleIcon className="ml-2 w-5 h-5 text-green-500" /></div>
        </div>

        {/* Customer Information */}
        <div className="mb-6">
          <h2 className="font-bold mb-2">Informasi Pelanggan</h2>
          <label className="block text-sm font-medium mb-1">Nama Lengkap<span className="text-red-500">*</span></label>
          <input type="text" placeholder="Nama Lengkap" className="w-full border-2 border-gray-300 px-3 py-2 rounded-lg mb-3 focus:outline-none hover:border-green-500 transition duration-200" />
          
          <label className="block text-sm font-medium mb-1">No. Handphone<span className="text-red-500">*</span></label>
          <input type="text" placeholder="No. Handphone" className="w-full border-2 border-gray-300 px-3 py-2 rounded-lg mb-3 focus:outline-none hover:border-green-500 transition duration-200" />

          <label className="block text-sm font-medium mb-1">Kirim Tanda Terima ke Email</label>
          <input type="email" placeholder="Kirim Tanda Terima ke Email" className="w-full border-2 border-gray-300 px-3 py-2 rounded-lg mb-3 focus:outline-none hover:border-green-500 transition duration-200" />
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <h2 className="font-bold mb-2">Metode Pembayaran</h2>
          <div className="flex gap-2">
            <button
              className={`flex-1 px-3 py-2 rounded-lg border cursor-pointer ${paymentMethod === "Online Payment" ? "border-green-400 bg-green-50" : "border-gray-300"}`}
              onClick={() => setPaymentMethod("Online Payment")}
            >
              Online
            </button>
            <button
              className={`flex-1 px-3 py-2 rounded-lg border cursor-pointer ${paymentMethod === "Pay at Cashier" ? "border-green-400 bg-green-50" : "border-gray-300"}`}
              onClick={() => setPaymentMethod("Pay at Cashier")}
            >
              Ditempat
            </button>
          </div>
        </div>
        <div className="mb-6">
          <div className="border border-gray-300 rounded-lg flex items-center px-4 py-3 space-x-3 cursor-pointer">
            <span className="text-xl">📱</span>
            <span className="text-sm font-medium">QRIS</span>
            <input type="radio" name="payment_option" className="ml-auto" />
          </div>
        </div>
      </div>

      {/* Pay Section */}
      <div className="w-full fixed bottom-0 left-0 z-50 flex justify-center">
        <div className="rounded-md bg-white shadow-xl w-full max-w-md px-4 py-3 flex flex-row items-center justify-between gap-4">
          <div>
            Total Pembayaran
            <div className="text-lg font-bold">Rp55.000</div>
          </div>
          <button className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-xl">Bayar</button>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
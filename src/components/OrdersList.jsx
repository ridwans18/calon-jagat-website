import React, { useState } from 'react';
import pocongmatotIMG from '../assets/pocongmatot.jpg';

{/* Content Navbar */}
const tabs = [
  'Semua Pesanan',
  'Siap Dikirim',
  'Dalam Pengiriman',
  'Dikomplain',
  'Pesanan Selesai',
  'Dibatalkan'
];

const OrderTabs = () => {
  const [activeTab, setActiveTab] = useState('Semua Pesanan');

  {/* Content Title */}
  return (
    <div className="w-full bg-white rounded-md">
      <h2 className="text-xl font-semibold mb-4">Daftar Pesanan</h2>

      {/* Navbar */}
      <div className="bg-gray-200 rounded-md p-2 shadow-sm">
        <div className="flex flex-wrap gap-2 md:gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium px-3 py-1 rounded-md transition-all duration-200
                ${
                  activeTab === tab
                    ? 'text-green-600 border-b-2 border-green-600'
                    : 'text-gray-700 hover:text-green-600'
                } bg-transparent`}
                >
              {tab}
            </button>
          ))}
        </div>
      </div>
      
      {/* Filter & Search Section */}
      <div className="mt-6 bg-gray-100 p-4 rounded-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Kiri: Dropdown + Checkbox */}
          <div className="flex items-center flex-wrap">
            <select className="border border-gray-300 rounded px-3 py-2 bg-white text-sm text-gray-700">
              <option>Pilih Filter</option>
              <option>Paling Baru</option>
              <option>Paling Lama</option>
            </select>
          </div>

          {/* Kanan: Search + Reset */}
          <div className="flex items-center gap-4">
            <div className="relative bg-white">
              <input
                type="text"
                placeholder="Cari di sini"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded text-sm w-full md:w-64"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </div>

            <button className="text-green-600 text-sm font-semibold hover:underline">Reset Filter</button>
          </div>
        </div>
        
        {/* Select Product + Page Number*/}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Select Product */}
          <label className="mt-4 inline-flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
            <span className="text-sm font-medium text-gray-800">Pilih Semua</span>
          </label>
          
          {/* Page Number */}
          <span className="mt-4 text-right text-green-600 font-semibold text-sm underline">1</span>
        </div>
      </div>

      {/* Card Pesanan */}
      <div className="mt-6 bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center px-4 py-3 bg-gray-100 border-b border-gray-200 text-sm">
          <div className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-green-600" />
            <span className="font-medium text-gray-800">Pesanan Selesai</span>
            <span className="text-green-600 font-semibold">INV/20250123/AYM/84756382956</span>
            <span className="text-gray-600">/</span>
            <span className="text-gray-600">Dontol</span>
            <span className="text-gray-600">/</span>
            <span className="text-gray-400 fas fa-clock mt-1"></span>
            <span className="text-gray-500">28 April 2025, 12:22 WIB</span>
          </div>
        </div>

        {/* Isi Pesanan */}
        <div className="p-4 flex flex-col lg:flex-row lg:justify-between gap-4">
          {/* Produk */}
          <div className="flex items-start gap-4">
            <img
              src={pocongmatotIMG}
              alt="Produk"
              className="w-20 h-20 rounded object-cover"
            />
            <div>
              <div className="font-medium text-gray-800">POCO X3 PRO (6/128) Matot</div>
              <div className="text-sm text-gray-600">1x Rp 800.000</div>
            </div>
          </div>

          {/* Alamat */}
          <div className="hidden lg:block w-px bg-gray-300 mx-4"></div>

          <div className="flex-1 grid md:grid-cols-1 gap-4">
            <div>
              <div className="font-medium text-gray-700">Pembayarn</div>
              <div className="text-sm text-gray-600">Gopay</div>
            </div>
            <div>
              <span className="bg-green-300 text-gray-1000 px-2 py-0.5 rounded text-xs">Berhasil</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-4 py-3 flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-green-100 transition">
            <i className="fas fa-receipt text-base leading-none text-gray-700"></i>
            <span>Detail</span>
          </button>
          </div>
          <div className="text-right font-semibold text-gray-800">
            Total Penjualan<br />
            <span className="text-lg">Rp800.000</span>
          </div>
        </div>
      </div>


    </div>
  );
};

export default OrderTabs;

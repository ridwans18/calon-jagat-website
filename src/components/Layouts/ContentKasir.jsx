import React, { useState } from "react";
import BtnPlusMin from "../Fragments/BtnPlusMin";

const productsKasir = [
  { id: 1, name: "Latte Coffee", price: 25000, image: "☕" },
  { id: 2, name: "Cappuccino", price: 27000, image: "☕" },
  { id: 3, name: "Juice Guava", price: 22000, image: "🧃" },
  { id: 4, name: "Ice Lemonade", price: 23000, image: "🍹" },
  { id: 5, name: "Hot Jasmine tea", price: 15000, image: "🍵" },
  { id: 6, name: "Hot Black Tea", price: 15000, image: "🍵" },
  { id: 7, name: "Coca Cola", price: 18000, image: "🥤" },
  { id: 8, name: "Pepsi", price: 18000, image: "🥤" },
  { id: 9, name: "Donat Gula Pu", price: 10000, image: "🍩" },
  { id: 10, name: "Big Mac Burger", price: 35000, image: "🍔" },
  { id: 11, name: "Fried Potatoes", price: 20000, image: "🍟" },
  { id: 12, name: "Cheesy Pizza", price: 30000, image: "🍕" },
  { id: 13, name: "Fried Chickens", price: 28000, image: "🍗" },
  { id: 14, name: "Croissant Tuna", price: 18000, image: "🥐" },
  { id: 15, name: "Choco Bread", price: 16000, image: "🍞" },
  { id: 16, name: "Choco Long Bread", price: 17000, image: "🥖" },
];

const productOnline = [
    { id: 1, name: "Paha Atas", jumlah: 2},
    { id: 2, name: "Paha Bawah", jumlah: 4},
    { id: 3, name: "Sayap", jumlah: 1},
    { id: 4, name: "Dada", jumlah: 2},
    { id: 5, name: "Sadas", jumlah: 2},
];

const productDitinggal = [
    { id: 1, name: "Pada Atas", jumlah: 1},
    { id: 2, name: "Paha Bawah", jumlah: 3},
    { id: 3, name: "Sayap", jumlah: 3},
    { id: 4, name: "Dada", jumlah: 1},
    { id: 5, name: "Sadas", jumlah: 1},
]

function ContentKasir() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex h-155 bg-white">
      {/* Main Products */}
      <div className="w-2/5 grid grid-cols-3 gap-4 overflow-y-auto h-160">
        {productsKasir.map((product) => (
          <button
            key={product.id}
            onClick={() => addToCart(product)}
            className="border rounded-lg p-4 text-center hover:bg-gray-100 cursor-pointer"
          >
            <div className="text-4xl">{product.image}</div>
            <div className="font-medium mt-2 text-sm">{product.name}</div>
          </button>
        ))}
      </div>

      {/* Cart Section */}
      <div className="w-2/8 p-4 h-164 flex flex-col justify-between border-l border-r">
        <div>
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <div className="text-sm text-gray-500">No</div>
            <div className="flex-1 text-sm text-gray-500 ml-5">Produk</div>
            <div className="text-sm text-gray-500">Jumlah</div>
          </div>

          <div className="space-y-2">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b pb-1"
              >
                <div className="flex items-center gap-2">
                    {/* Nomor */}
                    <div className="flex items-center justify-center">
                        <span className="bg-orange-400 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center">
                            {index + 1}
                        </span>
                    </div>
                    {/* Nama Produk dan Harga */}
                    <div className="flex flex-col ml-2">
                        <span>{item.name}</span>
                        <span className="text-sm text-gray-600">
                        Rp{item.price.toLocaleString("id-ID")}
                        </span>
                    </div>
                </div>
                {/* Button PlusMinus */}
                <div>
                    <BtnPlusMin />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pilihan Pesanan */}
        <div className="pt-4 border-t mt-4">
            <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span>Rp{total.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex gap-2 mt-4">
                <button className="w-1/2 bg-pink-400 hover:bg-pink-500 text-white py-2 rounded-md font-bold 
                                 active:bg-pink-700 transition duration-200 cursor-pointer">
                    Ditinggal
                </button>
                <button className="w-1/2 bg-cyan-500 hover:bg-cyan-600 text-white py-2 rounded-md font-bold
                                 active:bg-cyan-700 transition duration-200 cursor-pointer">
                    Bayar
                </button>
            </div>
            </div>
        </div>
        
        <div className="flex flex-col h-160">
        {/* Pesan Melalui Aplikasi */}
        <div className="w-full px-4 py-0 overflow-y-auto mb-5">
            <h2 className="sticky top-0 text-xl font-semibold bg-white w-full h-9 z-10 text-green-600">Pesan Melalui Website</h2>
            <div className="grid grid-cols-2 gap-4 mt-2">
                {productOnline.map((product, index) => (
                    <div
                        key={product.id}
                        className="flex w-53 h-23 rounded-lg overflow-hidden shadow border border-gray-200"
                    >
                        <div className="flex flex-col items-center gap-2 flex-1 bg-green-100 p-2 overflow-y-auto">
                            <div className="flex justify-between w-full text-xs font-semibold">
                                <span>{product.name}</span>
                                <span>{product.jumlah}</span>
                            </div>
                            <div className="flex justify-between w-full text-xs font-semibold">
                                <span>{product.name}</span>
                                <span>{product.jumlah}</span>
                            </div>
                            <div className="flex justify-between w-full text-xs font-semibold">
                                <span>{product.name}</span>
                                <span>{product.jumlah}</span>
                            </div>
                            <div className="flex justify-between w-full text-xs font-semibold">
                                <span>{product.name}</span>
                                <span>{product.jumlah}</span>
                            </div>
                            <div className="flex justify-between w-full text-xs font-semibold">
                                <span>{product.name}</span>
                                <span>{product.jumlah}</span>
                            </div>
                            <div className="flex justify-between w-full text-xs font-semibold">
                                <span>{product.name}</span>
                                <span>{product.jumlah}</span>
                            </div>
                        </div>

                    {/* KANAN: Kotak atas (nomor) dan bawah ("Proses?") */}
                    <div className="flex flex-col w-15">
                        <div className="flex items-center justify-center bg-orange-400 flex-1 text-white font-bold">
                            {index + 1}
                        </div>
                        <button
                            onClick={() => handleProcess(product)}
                            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 flex-1 text-white text-xs
                                       active:bg-blue-700 transition duration-200 cursor-pointer"
                        >
                            Proses?
                        </button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Pesanan Diambil Nanti */}
        <div className="w-full px-4 py-0 overflow-y-auto">
            <h2 className="sticky top-0 text-xl font-semibold bg-white w-full h-9 z-10 text-pink-600">Diambil Nanti</h2>
            <div className="grid grid-cols-2 gap-4 mt-2">
                {productDitinggal.map((product, index) => (
                    <div
                        key={product.id}
                        className="flex h-23 rounded-lg overflow-hidden shadow border border-gray-200"
                    >
                    {/* KIRI: Gambar & Nama */}
                    <div className="flex flex-col items-center gap-2 flex-1 bg-pink-100 p-2 overflow-y-auto">
                        <div className="flex justify-between w-full text-xs font-semibold">
                            <span>{product.name}</span>
                            <span>{product.jumlah}</span>
                        </div>
                        <div className="flex justify-between w-full text-xs font-semibold">
                            <span>{product.name}</span>
                            <span>{product.jumlah}</span>
                        </div>
                        <div className="flex justify-between w-full text-xs font-semibold">
                            <span>{product.name}</span>
                            <span>{product.jumlah}</span>
                        </div>
                        <div className="flex justify-between w-full text-xs font-semibold">
                            <span>{product.name}</span>
                            <span>{product.jumlah}</span>
                        </div>
                        <div className="flex justify-between w-full text-xs font-semibold">
                            <span>{product.name}</span>
                            <span>{product.jumlah}</span>
                        </div>
                        <div className="flex justify-between w-full text-xs font-semibold">
                            <span>{product.name}</span>
                            <span>{product.jumlah}</span>
                        </div>
                    </div>

                    {/* KANAN: Kotak atas (nomor) dan bawah ("Proses?") */}
                    <div className="flex flex-col w-15">
                        <div className="flex items-center justify-center bg-orange-400 flex-1 text-white font-bold">
                            {index + 1}
                        </div>
                        <button
                            onClick={() => handleProcess(product)}
                            className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 flex-1 text-white text-xs
                                       active:bg-blue-700 transition duration-200 cursor-pointer"
                        >
                            Proses?
                        </button>
                    </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
    </div>
  );
}

export default ContentKasir;
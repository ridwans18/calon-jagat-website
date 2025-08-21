import Cashier_Produk from "../Fragments/Cashier_Produk";
import { useCart } from "../../hooks/CartContext";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from "../../services/localstorage";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { fetchData } from "../../services/api";
import { postdata } from "../../services/api";

function ContentKasir() {
  const { cartItems, updateQty, removeFromCart, addToCart, clearCart } =
    useCart();

  const { data, loading, error } = useFetch(() => fetchData("produk"));
  const { data: orders } = useFetch(() => fetchData("orders"));
  console.log(orders);
  // const [productDitinggal, setProductDitinggal] = useState(
  //   getFromLocalStorage("productDitinggal") || []
  // );
  // const [ProductOnline, setProductOnline] = useState([
  //   {
  //     orderId: "ORD10001",
  //     customerName: "Andi Wijaya",
  //     timestamp: "2025-06-04T08:15:00Z",
  //     isProses: false,
  //     isDone: false,
  //     items: [
  //       { id: 1, name: "Paha Atas", jumlah: 2 },
  //       {
  //         id: 2,
  //         name: "Paha Bawah",
  //         jumlah: 3,
  //       },
  //       { id: 3, name: "Sayap", jumlah: 1 },
  //     ],
  //   },
  //   {
  //     orderId: "ORD10002",
  //     customerName: "Siti Rahma",
  //     timestamp: "2025-06-04T08:45:00Z",
  //     isProses: false,
  //     isDone: false,
  //     items: [
  //       { id: 4, name: "Dada", jumlah: 4 },
  //       {
  //         id: 2,
  //         name: "Paha Bawah",
  //         jumlah: 2,
  //       },
  //     ],
  //   },
  //   {
  //     orderId: "ORD10003",
  //     customerName: "Budi Santoso",
  //     timestamp: "2025-06-04T09:10:00Z",
  //     isProses: false,
  //     isDone: false,
  //     items: [
  //       { id: 3, name: "Sayap", jumlah: 2 },
  //       { id: 5, name: "Sadas", jumlah: 2 },
  //     ],
  //   },
  //   {
  //     orderId: "ORD10004",
  //     customerName: "Rina Marlina",
  //     timestamp: "2025-06-04T09:30:00Z",
  //     isProses: false,
  //     isDone: false,
  //     items: [
  //       { id: 1, name: "Paha Atas", jumlah: 1 },
  //       { id: 4, name: "Dada", jumlah: 3 },
  //     ],
  //   },
  //   {
  //     orderId: "ORD10005",
  //     customerName: "Joko Priyono",
  //     timestamp: "2025-06-04T10:00:00Z",
  //     isProses: false,
  //     isDone: false,
  //     items: [
  //       {
  //         id: 2,
  //         name: "Paha Bawah",
  //         jumlah: 2,
  //       },
  //       { id: 3, name: "Sayap", jumlah: 1 },
  //       { id: 5, name: "Sadas", jumlah: 1 },
  //     ],
  //   },
  // ]);

  const [Total, setTotal] = useState(0);

  useEffect(() => {
    const totalHarga = cartItems.reduce((total, item) => {
      return total + item.harga * item.qty;
    }, 0);

    setTotal(totalHarga);
  }, [cartItems]);

  const addtocart = (product) => {
    addToCart(product);
  };

  const handleProcess = (id) => {
    setProductOnline(
      ProductOnline.map((item) =>
        item.orderId === id ? { ...item, isProses: true } : item
      )
    );
  };

  const handlebayar = async () => {
    console.log(1);
    try {
      const response = await postdata("payment", {
        amount: Total,
        nama_pelanggan: "kasir",
        data_pesanan: cartItems.map((item) => ({
          id_produk: item.id_produk,
          qty: item.qty,
        })),
        phone: "0",
        email_pelanggan: "a@a.com",
      });

      console.log(response);
      clearCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-155 bg-white">
      {/* Main Products */}
      <div className="w-2/5 grid grid-cols-3 overflow-y-auto h-160">
        {data.data &&
          data.data.map((product) => (
            <button
              key={product.id_produk}
              onClick={() => addtocart(product)}
              className="border rounded-lg p-4 text-center hover:bg-gray-100 cursor-pointer mr-4 mb-4"
            >
              <div className="text-4xl">{product.image}</div>
              <div className="font-medium mt-2 text-sm">
                {product.nama_produk}
              </div>
            </button>
          ))}
      </div>

      {/* Cart Section */}
      <div className="w-2/8 p-4 h-164 flex flex-col justify-between border-l border-r">
        <div>
          <div className="flex justify-between items-center border-b pb-2 mb-2 relative">
            <div className="text-sm text-gray-500">No</div>
            <div className="flex-1 text-sm text-gray-500 ml-5">Produk</div>
            <div className="text-sm text-gray-500">Jumlah</div>
          </div>

          <div className="space-y-2">
            {cartItems.map((item, index) => (
              <Cashier_Produk
                key={item.id_produk}
                index={index}
                name={item.nama_produk}
                price={item.harga}
                id={item.id_produk}
              />
            ))}
          </div>
        </div>

        {/* Pilihan Pesanan */}
        <div className="pt-4 border-t mt-4">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>Rp{Total.toLocaleString("id-ID")}</span>
          </div>
          <div className="flex gap-2 mt-4">
            <button
              className="w-1/2 bg-pink-400 hover:bg-pink-500 text-white py-2 rounded-md font-bold 
                                 active:bg-pink-700 transition duration-200 cursor-pointer"
              onClick={clearCart}
            >
              Reset
            </button>
            <button
              className="w-1/2 bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md font-bold active:bg-purple-700 transition duration-200 cursor-pointer"
              onClick={() => handlebayar()}
            >
              Bayar
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-160">
        {/* Pesan Melalui Aplikasi */}
        <div className="w-full px-4 overflow-y-auto mb-5">
          <h2 className="sticky top-0 text-xl font-semibold bg-white w-full h-9 z-10 text-green-600">
            Pesan Melalui Website
          </h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {orders.data &&
              orders.data.map((product, index) => (
                <div
                  key={product.id_orders}
                  className="flex w-53 h-23 rounded-lg overflow-hidden shadow border border-gray-200"
                >
                  <p></p>
                  <div className="flex flex-col items-center gap-2 flex-1 bg-green-100 p-2 overflow-y-auto">
                    {product.produk.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between w-full text-xs font-semibold"
                      >
                        <span>{item.nama_produk}</span>
                        <span>{item.quantity}</span>
                      </div>
                    ))}
                  </div>

                  {/* KANAN: Kotak atas (nomor) dan bawah ("Proses?") */}
                  <div className="flex flex-col w-15">
                    <div className="flex items-center justify-center bg-orange-400 flex-1 text-white font-bold">
                      {index + 1}
                    </div>
                    {product.proses === 0 ? (
                      <button
                        onClick={() => handleProcess(product.id_orders)}
                        className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 flex-1 text-white text-xs
                                       active:bg-blue-700 transition duration-200 cursor-pointer"
                      >
                        Proses?
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDone(product)}
                        className="flex items-center justify-center bg-green-500 hover:bg-green-600 flex-1 text-white text-xs
                                       active:bg-green-700 transition duration-200 cursor-pointer"
                      >
                        Selesai?
                      </button>
                    )}
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

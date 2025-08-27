import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Transaksi from "./Pages/Transaksi.jsx";
import Produk from "./Pages/Produk.jsx";
import Beranda from "./Pages/Beranda.jsx";
import Kasir from "./Pages/Kasir.jsx";
import UserBeranda from "./Pages/UserBeranda.jsx";
import ViewPesanan from "./Pages/ViewPesanan.jsx";
import TambahProduk from "./Pages/Tambahproduk.jsx";
import EditProduk from "./Pages/EditProduk";
import Login from "./Pages/Login.jsx";
import PaymentMethod from "./Pages/PaymentMethod.jsx";
import { CartProvider } from "./hooks/CartContext";
import React from "react";
import Saran from "./Pages/Saran.jsx";
import OrderStatus from "./Pages/OrderStatus.jsx";
import History from "./Pages/History.jsx";
import Pengaturan from "./Pages/Pengaturan.jsx";

const router = createBrowserRouter([
  {
    path: "/UserBeranda",
    element: <UserBeranda />,
  },
  {
    path: "/",
    element: <Beranda />,
  },
  {
    path: "/Kasir",
    element: <Kasir />,
  },
  {
    path: "/Produk",
    element: <Produk />,
  },
  {
    path: "/Transaksi",
    element: <Transaksi />,
  },
  {
    path: "/Saran",
    element: <Saran />,
  },
  {
    path: "/ViewPesanan",
    element: <ViewPesanan />,
  },
  {
    path: "/PaymentMethod",
    element: <PaymentMethod />,
  },
  {
    path: "/TambahProduk",
    element: <TambahProduk />,
  },
  {
    path: "/EditProduk/:id",
    element: <EditProduk />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/orderstatus",
    element: <OrderStatus />,
  },
  {
    path: "/History",
    element: <History />,
  },
  {
    path: "/Pengaturan",
    element: <Pengaturan />,
  },
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

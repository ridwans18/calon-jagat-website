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
import UserSaran from "./Pages/UserSaran.jsx";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
const istoken = localStorage.getItem("token");

const router = createBrowserRouter([
  // {
  //   path: "/UserBeranda",
  //   element: <UserBeranda />,
  // },
  {
    path: "/",
    element: istoken ? <Beranda /> : <Login />,
  },
  {
    path: "/Kasir",
    element: istoken ? <Kasir /> : <Login />,
  },
  {
    path: "/Produk",
    element: istoken ? <Produk /> : <Login />,
  },
  {
    path: "/Transaksi",
    element: istoken ? <Transaksi /> : <Login />,
  },
  {
    path: "/Saran",
    element: istoken ? <Saran /> : <Login />,
  },
  // {
  //   path: "/ViewPesanan",
  //   element: <ViewPesanan />,
  // },
  // {
  //   path: "/PaymentMethod",
  //   element: <PaymentMethod />,
  // },
  // {
  //   path: "/TambahProduk",
  //   element: istoken ? <TambahProduk /> : <Login />,
  // },
  {
    path: "/EditProduk/:id",
    element: istoken ? <EditProduk /> : <Login />,
  },
  {
    path: "/Login",
    element: istoken ? <Beranda /> : <Login />,
  },
  // {
  //   path: "/orderstatus",
  //   element: <OrderStatus />,
  // },
  // {
  //   path: "/History",
  //   element: <History />,
  // },
  {
    path: "/Pengaturan",
    element: istoken ? <Pengaturan /> : <Login />,
  },
  // {
  //   path: "/UserSaran",
  //   element: <UserSaran />,
  // },
  {
    path: "/ForgotPassword",
    element: istoken ? <Beranda /> : <ForgotPassword />,
  },
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

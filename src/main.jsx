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
import PaymentMethod from './Pages/PaymentMethod.jsx';
import { CartProvider } from "./hooks/CartContext";
import React from "react";

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
]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

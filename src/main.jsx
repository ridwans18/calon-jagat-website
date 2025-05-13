import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Transaksi from './Pages/Transaksi.jsx';
import Produk from './Pages/Produk.jsx';
import Beranda from './Pages/Beranda.jsx';
import Kasir from './Pages/Kasir.jsx';
<<<<<<< Updated upstream
=======
import UserBeranda from './Pages/UserBeranda.jsx';
import TambahProduk from './Pages/Tambahproduk.jsx';
>>>>>>> Stashed changes

const router = createBrowserRouter([
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
    path: "/TambahProduk",
    element: <TambahProduk />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
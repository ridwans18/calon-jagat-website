import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Transaksi from './Pages/Transaksi.jsx';
import Produk from './Pages/Produk.jsx';
import Beranda from './Pages/Beranda.jsx';
import Kasir from './Pages/Kasir.jsx';

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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
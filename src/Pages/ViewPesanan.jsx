import HeaderKontenViewPesanan from "../components/Layouts/HeaderKontenViewPesanan";
import ProdukDipesan from "../components/Layouts/ProdukDipesan";
import RincianPembayaran from "../components/Layouts/RincianPembayaran";
import LanjutPembayaran from "../components/Layouts/LanjutPembayaran";
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from "react-router-dom";

const ViewPesanan = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/UserBeranda");
  };

  return (
    <div className="bg-white">
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
          <h2 className="font-bold mb-2 absolute left-1/2 transform -translate-x-1/2">Pesanan</h2>
        </div>
      </div>

      <div className="min-h-screen p-4 pt-18 pb-18 bg-white shadow-md max-w-md mx-auto">
        <div className="mb-4 font-semibold">
          {/* Header Konten Pesanan */}
          <HeaderKontenViewPesanan />

          {/* Produk yang di pesan */}
          <ProdukDipesan />
        </div>

        {/* Rincian Pembayaran */}
        <RincianPembayaran />
      </div>

      {/* Lanjut Pembayaran */}
      <LanjutPembayaran onClick={() => navigate("/PaymentMethod")} />
    </div>
  );
};

export default ViewPesanan;

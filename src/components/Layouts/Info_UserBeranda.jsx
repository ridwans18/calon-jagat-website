import { MapPin } from "lucide-react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

function Info_UserBeranda() {
  const HandleMaps = () => {
    window.open("https://maps.app.goo.gl/APJEnfPxnkq182dJ6?g_st=aw", "_blank");
  };
  return (
    <div>
      {/* Alamat Toko */}
      <div
        onClick={HandleMaps}
        className="bg-gray-100 p-1 rounded-lg shadow-md mb-5"
      >
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-600 ml-2">
            Jl. Tanah Merdeka Utara No.14, RT.14/RW.5, Rambutan, Kec. Ciracas,
            Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13830
          </p>
          <MapPin className="text-gray-600 w-18 h-18 ml-3 mr-3" />
        </div>
      </div>
      <button className="font-medium flex justify-between px-3 py-1 gap-2 border rounded-lg text-sm  border-black">
        + 628 1299 3172 89 - Contuct Us
      </button>

      {/* Order Type */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">Tipe Pemesanan</span>
        <button className="font-medium flex justify-between px-3 py-1 gap-2 border rounded-lg text-sm text-blue-600 border-blue-600">
          <ShoppingBagIcon className="w-5 h-5" />
          Ambil Sendiri
        </button>
      </div>

      {/* Menu Label */}
      <div className="mb-1 flex justify-between items-center">
        <h3 className="font-semibold mr-4">Menu</h3>
        <div className="gap-4 border-y-1 border-gray-200 w-full px-1"></div>
      </div>
    </div>
  );
}

export default Info_UserBeranda;

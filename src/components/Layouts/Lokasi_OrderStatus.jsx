import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { MapPin } from "lucide-react";

function Lokasi_OrderStatus() {
  const HandleMaps = () => {
    window.open("https://maps.app.goo.gl/APJEnfPxnkq182dJ6?g_st=aw", "_blank");
  };
  return (
    <>
      {/* Nama & Lokasi */}
      <div onClick={HandleMaps} className="flex justify-between items-center">
        <div className="flex items-center">
          <BuildingStorefrontIcon className="text-gray-600 w-8 h-8 ml-2 mr-3" />
          <div>
            <h1>Lokasi Gerai</h1>
            <h1 className="font-bold">Sabana - Tanah Merdeka</h1>
          </div>
        </div>
        <MapPin className="text-gray-600 w-8 h-8 ml-3 mr-3 " />
      </div>
    </>
  );
}

export default Lokasi_OrderStatus;

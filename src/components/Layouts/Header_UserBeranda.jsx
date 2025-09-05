import { Bars3Icon } from "@heroicons/react/24/outline";
import SabanaLogo from "../../assets/sabana-logo.png";

function Info_UserBeranda() {
  const HandleMaps = () => {
    window.open("https://maps.app.goo.gl/APJEnfPxnkq182dJ6?g_st=aw", "_blank");
  };
  return (
    <>
      {/* Header */}
      <div className="w-full h-16 flex justify-center">
        <div className="w-full max-w-md bg-blue-950 border-l-1 border-r-1 rounded-b-lg border-gray-200">
          <div className="flex justify-center items-center mt-1 mb-1">
            <img src={SabanaLogo} alt="Logo" className="h-15 w-35" />
          </div>
        </div>
      </div>

      {/* Informasi Toko */}
      <div className="flex justify-center sticky top-0 z-40">
        <div className="w-full max-w-md bg-white">
          <div className="flex justify-between items-start border-l-1 border-r-1 border-gray-200">
            <div>
              <h2 className="font-semibold ml-5 mt-3">
                Sabana Alung - Tanah Merdeka
              </h2>
              <p className="text-sm text-gray-600 ml-5 mb-3">
                <span className="text-green-500 font-medium">Open</span> 10:00 -
                17:00
              </p>
            </div>
            <Bars3Icon className="w-8 h-8 mr-5 mt-4 text-gray-800" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Info_UserBeranda;

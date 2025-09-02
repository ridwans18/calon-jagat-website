import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

function UserSaran() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/History");
  };

  return (
    <div className="min-h-screen bg-white shadow-md relative">
      {/* Header */}
      <div className="w-full fixed top-0 left-0 z-50 h-13 flex justify-center">
        <div className="bg-white rounded-b-lg shadow-md w-full max-w-md px-4 py-3 flex flex-row gap-4">
          <button onClick={handleClick} className="left-4">
            <ArrowLeftIcon className="h-6 w-6 text-black" />
          </button>
          <h2 className="font-bold mb-2 absolute left-1/2 transform -translate-x-1/2">
            Berikan Saran
          </h2>
        </div>
      </div>

      {/* Form */}
      <div className="min-h-screen p-4 pt-18 pb-28 bg-white shadow-md max-w-md mx-auto">
        <div className="mb-3">
          <h2 className="font-bold mb-2">Informasi Pelanggan</h2>
          {/* Nama Pelanggan */}
          <label className="block text-sm mb-1">
            Nama Lengkap<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="namapelanggan"
            placeholder="Nama Lengkap"
            className="w-full border-2 border-gray-300 px-3 py-2 rounded-lg mb-3"
          />
          {/* Email Pelanggan */}
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email (opsional)"
            className="w-full border-2 border-gray-300 px-3 py-2 rounded-lg mb-3"
          />
          {/* Kotak Saran */}
          <label className="block text-sm mb-1">Kotak Saran</label>
          <textarea
            type="saran"
            name="saran"
            placeholder="Berikan kami saran"
            className="w-full border-2 border-gray-300 px-3 py-2 rounded-lg mb-3"
          />
        </div>
      </div>

      <div className="w-full fixed bottom-0 left-0 z-50 flex justify-center">
        <div className="rounded-md bg-white shadow-xl w-full max-w-md px-4 py-3 flex flex-row items-center justify-center gap-4">
          <button
            className={` bg-green-600 text-white px-6 py-2 rounded-xl "opacity-50" : "hover:bg-green-800"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserSaran;

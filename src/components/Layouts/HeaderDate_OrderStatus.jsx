import { CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from "react-router-dom";

function HeaderDate_OrderStatus() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/UserBeranda");
    };

    return (
        <>
            {/* Header */}
            <div className="-mx-4 -my-4 text-center items-center font-bold shadow-md mb-4 p-4">
                <div className="flex justify-between">
                    <button 
                        onClick={handleClick}
                        className="left-4"
                    >
                    <ArrowLeftIcon className="h-6 w-6 text-black" />
                    </button>
                    <div className="flex justify-center w-full">
                        <h1>Ringkasan Pesanan</h1>
                    </div>
                </div>
            </div>
            
            {/* Pick Up */}
            <div className="flex justify-between p-2 mt-5 mb-5 rounded-lg text-sm font-medium bg-green-50 border-2 border-green-500 ">
                <h1 className="ml-3">Tipe Pemesanan</h1>
                <div className="flex items-center">
                <h1 className="font-bold">Ambil Sendiri</h1>
                <CheckCircleIcon className="w-6 h-6 ml-2 mr-3 text-green-600" />
                </div>
            </div>

            {/* Date */}
            <div className="-mx-4 mb-3 flex justify-between bg-gray-100 p-4">
            <div className="space-y-0.5">
                <h1>Tanggal</h1>
                <h1>18 Agustus 2025 12:24</h1>
            </div>
                <div className="flex items-center text-end">
                <div className="space-y-0.5">
                    <h1>Nomor Pesanan</h1>
                    <h1 className="text-end">ORD25L83H7FG90</h1>
                </div>
                </div>
            </div>
        </>
    );
}

export default HeaderDate_OrderStatus;
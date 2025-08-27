import React from "react";
import { useSearchParams } from "react-router-dom";
import GarisPembatas from "../components/Fragments/Garis Pembatas";
import {ChevronRightIcon, CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useNavigate } from "react-router-dom";

function History() {
  const [searchParams] = useSearchParams();

  const orderid = searchParams.get("orderid");

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/UserBeranda");
  };

  return (
    <div className=" h-screen bg-white shadow-md relative flex justify-center ">
      <div className="w-full xl:w-115 shadow-md p-4 space-y-2">
        {/* Header */}
        <div className="-mx-4 -my-4 items-center font-bold shadow-md mb-4 p-4">
            <div className="flex justify-between">
                <button 
                    onClick={handleClick}
                    className="left-4"
                >
                <ArrowLeftIcon className="h-6 w-6 text-black" />
                </button>
                <div className="flex justify-center w-full">
                    <h1>Riwayat Pesanan</h1>
                </div>
          </div>
        </div>


        <div className="p-3 mt-5 mb-5 rounded-lg text-sm border-2 border-gray-200 shadow-md">
            {/* Informasi Pesanan */}
            <div>
                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <h1 className="font-bold">Sabana Alung - Tanah Merdeka</h1>
                        <div className="">
                            <h2>Rp33.000 <span className="text-gray-500">(3 Item)</span></h2>
                        </div>
                        <div className="flex justify-between">
                            <h2>#ORD25L83H7FG90</h2>
                        </div>
                    </div>
                    <ChevronRightIcon className="w-8 h-8"/>
                </div>
                <GarisPembatas />
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <h1 className="font-bold">Ambil Sendiri</h1>
                        <CheckCircleIcon className="w-6 h-6 ml-2 text-green-600" />
                    </div>
                    <div>
                        <h1>18 Agustus 2025</h1>
                    </div>

                </div>
            </div>
        </div>

        <div className="p-3 mt-5 mb-5 rounded-lg text-sm border-2 border-gray-200 shadow-md">
            {/* Informasi Pesanan */}
            <div>
                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <h1 className="font-bold">Sabana Alung - Tanah Merdeka</h1>
                        <div className="">
                            <h2>Rp11.000 <span className="text-gray-500">(1 Item)</span></h2>
                        </div>
                        <div className="flex justify-between">
                            <h2>#ORD37D23E7CB46</h2>
                        </div>
                    </div>
                    <ChevronRightIcon className="w-8 h-8"/>
                </div>
                <GarisPembatas />
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <h1 className="font-bold">Ambil Sendiri</h1>
                        <CheckCircleIcon className="w-6 h-6 ml-2 text-green-600" />
                    </div>
                    <div>
                        <h1>29 Juli 2025</h1>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default History;

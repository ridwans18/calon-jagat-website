import { ArrowUpRight, ArrowDownRight, Users, Package } from "lucide-react";
import useFetch from "../../hooks/useFetch";
import { fetchData } from "../../services/api";
import { useEffect, useState } from "react";

export default function StatsCard() {
  const { data, loading, error } = useFetch(() => fetchData("report/month"));
  const [total_paid, settotal_paid] = useState("");
  const [total_produk, settotal_produk] = useState("");
  // const { total_paid_transaction, total_produk_terjual } = data;
  console.log(data);
  useEffect(() => {
    console.log("reduce", data);
    if (data.success) {
      settotal_paid(
        data.data.reduce((acc, item) => acc + Number(item.total_pemasukan), 0)
      );

      settotal_produk(
        data.report_product
          .reduce((acc, item) => acc + Number(item.total_terjual), 0)
          .toLocaleString("id-ID")
      );
    }
  }, [data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {/* Customers */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-md">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 p-3 rounded-xl">
            <Users className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Pelanggan</p>
            <h2 className="text-2xl font-bold">{data.success && total_paid}</h2>
          </div>
        </div>
        <div className="bg-green-100 text-green-600 px-2 py-1 text-sm rounded-full flex items-center">
          <ArrowUpRight className="w-4 h-4 mr-1" />
          11.01%
        </div>
      </div>

      {/* Orders */}
      <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-md">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 p-3 rounded-xl">
            <Package className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Produk</p>
            <h2 className="text-2xl font-bold">
              {data.success && total_produk}
            </h2>
          </div>
        </div>
        <div className="bg-red-100 text-red-600 px-2 py-1 text-sm rounded-full flex items-center">
          <ArrowDownRight className="w-4 h-4 mr-1" />
          9.05%
        </div>
      </div>
    </div>
  );
}

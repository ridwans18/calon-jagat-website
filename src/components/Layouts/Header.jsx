import { use, useEffect, useState } from "react";
import useDataOrders from "../../../store";
import { useShallow } from "zustand/shallow";

const header = ["Semua", "Berhasil", "Dibatalkan"];

const Header = () => {
  const [activeTab, setActiveTab] = useState("Semua");
  const {
    ResetSearch,
    ResetData,
    fetchOrders,
    fetchOrdersbyStatusSuccess,
    fetchOrdersbyStatusFailed,
  } = useDataOrders(
    useShallow((state) => ({
      ResetSearch: state.ResetSearch,
      ResetData: state.ResetData,
      fetchOrders: state.fetchOrders,
      fetchOrdersbyStatusSuccess: state.fetchOrdersbyStatusSuccess,
      fetchOrdersbyStatusFailed: state.fetchOrdersbyStatusFailed,
    }))
  );

  useEffect(() => {
    ResetSearch();
    ResetData();
    if (activeTab === "Semua") fetchOrders();
    if (activeTab === "Dibatalkan") fetchOrdersbyStatusFailed();
    if (activeTab === "Berhasil") fetchOrdersbyStatusSuccess();
  }, [activeTab]);

  return (
    <div className="bg-gray-100 border border-gray-200 rounded-md p-2 shadow-sm">
      <div className="flex flex-wrap gap-2 md:gap-4">
        {header.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium px-3 py-1 rounded-md transition-all duration-200
              ${
                activeTab === tab
                  ? "text-green-600 border-b-3 border-green-600"
                  : "text-gray-800 hover:text-green-600"
              } bg-transparent`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;

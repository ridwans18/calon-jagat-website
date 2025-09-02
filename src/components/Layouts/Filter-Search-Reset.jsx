import Dropdown from "../Fragments/Dropdown";
import SearchBar from "../Fragments/SearchBar";
import ResetFilter from "../Fragments/ResetFilter";
import useDataOrders from "../../../store";
import { useShallow } from "zustand/shallow";
import { useEffect, useState } from "react";

function FilterSearchReset() {
  const [test, settest] = useState("");
  const {
    search,
    SearchInput,
    DateAsc,
    DateDesc,
    SearchName,
    ResetData,
    ResetSearch,
  } = useDataOrders(
    useShallow((state) => ({
      ResetSearch: state.ResetSearch,
      ResetData: state.ResetData,
      search: state.search,
      SearchInput: state.SearchInput,
      DateAsc: state.DateAsc,
      DateDesc: state.DateDesc,
      SearchName: state.SearchName,
    }))
  );
  const reset = (a) => {
    console.log(a);
  };
  useEffect(() => {
    SearchName();
    if (search === "") ResetData();
  }, [search]);

  return (
    <div className="mt-6 bg-gray-100 border border-gray-200 rounded-md shadow-sm overflow-hidden p-4 ">
      {/* Filter & Search Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Kiri: Dropdown + Checkbox */}
        <select
          onChange={(e) => {
            if (e.target.value === "asc") {
              console.log("Filter Asc jalan");
              DateDesc();
            } else if (e.target.value === "desc") {
              console.log("Filter DESC jalan");

              DateAsc();
            }
          }}
          className="bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-700"
        >
          <option value="asc">Paling Baru</option>
          <option value="desc">Paling Lama</option>
        </select>

        <div className="w-full">
          <button className="text-sm text-gray-700 px-5 h-10 rounded-md border border-gray-200 hover:bg-green-100 bg-white">
            Cetak
          </button>
        </div>

        {/* Kanan: Search + Reset */}
        <div className="flex items-center gap-4">
          <SearchBar search={search} setSearch={SearchInput} />
          <ResetFilter fungsi={ResetSearch} />
          {/* <button onClick={() => reset()}>aa</button> */}
        </div>
      </div>
    </div>
  );
}

export default FilterSearchReset;

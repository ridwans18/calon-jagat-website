import Dropdown from "../Fragments/Dropdown";
import SearchBar from "../Fragments/SearchBar";
import ResetFilter from "../Fragments/ResetFilter";
import { useSaranStore } from "../../../store";
import { useShallow } from "zustand/shallow";

function FilterSaran() {
  const { DateAscSaran, DateDescSaran } = useSaranStore(
    useShallow((state) => ({
      DateAscSaran: state.DateAscSaran,
      DateDescSaran: state.DateDescSaran,
    }))
  );
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-md shadow-sm overflow-hidden p-4 ">
      {/* Filter & Search Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Kiri: Dropdown */}
        <select
          onChange={(e) => {
            if (e.target.value === "asc") {
              console.log("Filter Asc jalan");
              DateDescSaran();
            } else if (e.target.value === "desc") {
              console.log("Filter DESC jalan");
              DateAscSaran();
            }
          }}
          className="bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-700"
        >
          <option value="asc">Paling Baru</option>
          <option value="desc">Paling Lama</option>
        </select>

        {/* Kanan: Search + Reset */}
        {/* <div className="flex items-center gap-4">
          <ResetFilter />
        </div> */}
      </div>
    </div>
  );
}

export default FilterSaran;

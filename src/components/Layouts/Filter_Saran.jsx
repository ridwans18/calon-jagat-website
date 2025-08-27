import Dropdown from "../Fragments/Dropdown";
import SearchBar from "../Fragments/SearchBar";
import ResetFilter from "../Fragments/ResetFilter";

function FilterSaran() {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-md shadow-sm overflow-hidden p-4 ">
      {/* Filter & Search Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Kiri: Dropdown + Checkbox */}
        <Dropdown>
          <option>Pilih Filter</option>
          <option>Paling Baru</option>
          <option>Paling Lama</option>
        </Dropdown>

        {/* Kanan: Search + Reset */}
        <div className="flex items-center gap-4">
          <ResetFilter />
        </div>
      </div>
    </div>
  );
}

export default FilterSaran;

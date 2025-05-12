import Dropdown from "../Fragments/Dropdown";
import SearchBar from "../Fragments/SearchBar";
import ResetFilter from "../Fragments/ResetFilter";

function FilterSearchReset() {
  return (
    <div className="mt-6 bg-gray-100 border border-gray-200 rounded-md shadow-sm overflow-hidden p-4">
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
                <SearchBar />
                <ResetFilter />
            </div>
        </div>
        
        {/* Select Product + Page Number*/} {/* Simpan dulu aja ga tau mau digunain apa ga? */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Select Product */}
            <label className="mt-4 inline-flex items-center space-x-2">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-gray-800">Pilih Semua</span>
            </label>
            {/* Page Number */}
            <span className="mt-4 text-right text-green-600 font-semibold text-sm underline">1</span>
        </div>
    </div>
  );
}

export default FilterSearchReset;

import Dropdown from "../Fragments/Dropdown";
import SearchBar from "../Fragments/SearchBar";
import ResetFilter from "../Fragments/ResetFilter";
import useDataOrders from "../../../store";
import { useShallow } from "zustand/shallow";
import { useEffect, useState } from "react";
import axios from "axios";
import { getexcell } from "../../services/api";
import Download_Excell from "./Download_Excell";
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

  const [Formdate, setFormdate] = useState({
    start: "",
    end: "",
  });

  const [showcetak, setshowcetak] = useState(false);

  onchange = (e) => {
    setFormdate({ ...Formdate, [e.target.name]: e.target.value });
  };
  console.log(Formdate);
  const downloadExcel = async () => {
    // await getexcell("report/excell");
    // console.log(1);
    // console.log(Formdate);
    if (Formdate.start > Formdate.end) {
      alert("Tanggal awal harus lebih kecil dari tanggal akhir");
    } else {
      await getexcell(`report/excell`, Formdate);
      // console.log("berhasil", Formdate);
    }
  };

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

        {/* Filter Tanggal */}

        {/* Button Cetak */}
        <div className="w-full">
          <button
            onClick={() => setshowcetak(!showcetak)}
            className="text-sm text-gray-700 px-5 h-10 rounded-md border border-gray-200 hover:bg-green-100 bg-white"
          >
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
      {showcetak && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full h-full">
          <div
            className="absolute bg-black w-full h-full opacity-50 z-1"
            onClick={() => setshowcetak(!showcetak)}
          ></div>
          <div className="z-99 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Download_Excell
              start={Formdate.start}
              end={Formdate.end}
              onchange={onchange}
              Download={downloadExcel}
            />
            <button
              className="absolute -top-2 right-1 text-2xl"
              onClick={() => setshowcetak(!showcetak)}
            >
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterSearchReset;

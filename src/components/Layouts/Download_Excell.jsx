import React from "react";

function Download_Excell({ startDate, onchange, endDate, Download }) {
  return (
    <div className="flex flex-col gap-2 bg-white border-2 border-white rounded-md p-4  w-full z-99">
      <div className="flex gap-4">
        {/* Input tanggal awal */}
        <input
          type="date"
          value={startDate}
          name="start"
          onChange={(e) => {
            onchange(e);
            console.log("Tanggal awal:", e.target.value);
          }}
          className="border border-gray-300 bg-white rounded-lg p-2 flex-1"
        />

        <span className="self-center">sampai</span>

        {/* Input tanggal akhir */}
        <input
          type="date"
          value={endDate}
          name="end"
          onChange={(e) => {
            onchange(e);
            console.log("Tanggal akhir:", e.target.value);
          }}
          className="border border-gray-300 bg-white rounded-lg p-2 flex-1"
        />
      </div>
      <button
        onClick={() => Download()}
        className="text-sm text-gray-700 px-5 h-10 rounded-md border border-gray-200 hover:bg-green-100 bg-white w-full self-center"
      >
        Download
      </button>
    </div>
  );
}

export default Download_Excell;

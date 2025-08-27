import React from "react";

function Card_Saran({ nama, email, isi_saran }) {
  return (
    <div className="w-full h-fit border-2 border-gray-200 shadow-md rounded-md">
      <div className="rounded-md bg-primary p-3">
        <h1>
          {nama} / {email}
        </h1>
      </div>
      <div className="p-3">
        <h1>{isi_saran}</h1>
      </div>
    </div>
  );
}

export default Card_Saran;

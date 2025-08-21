import React from "react";

function Card_Saran({ nama, email, isi_saran }) {
  return (
    <div className="w-[400px] h-fit border-2 rounded-md">
      <div className=" bg-primary p-2">
        <h1>
          {nama} / {email}
        </h1>
      </div>
      <div className="p-2">
        <h1>{isi_saran}</h1>
      </div>
    </div>
  );
}

export default Card_Saran;

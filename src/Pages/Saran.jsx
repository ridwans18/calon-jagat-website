import Card_Saran from "../components/Fragments/Card_Saran";
import SideBar from "../components/Layouts/SideBar";
import FilterSaran from "../components/Layouts/Filter_Saran";
import { useEffect, useState } from "react";
import { fetchData } from "../services/api";

function Saran() {
  const [Saran_Data, setSaran_Data] = useState([]);

  const getsaran = async () => {
    const response = await fetchData("saran");
    setSaran_Data(response.data);
  };

  useEffect(() => {
    getsaran();
  }, []);
  console.log(Saran_Data);
  return (
    <div className="flex min-h-screen bg-white gap-4">
      <SideBar />
      <div className="flex flex-col flex-1 gap-4 p-4">
        <h2 className="text-xl font-semibold">Saran</h2>
        <FilterSaran />
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
          {Saran_Data.map((item) => (
            <Card_Saran
              nama={item.nama}
              email={item.email}
              isi_saran={item.deskripsi}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Saran;

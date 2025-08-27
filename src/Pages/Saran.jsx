import Card_Saran from "../components/Fragments/Card_Saran";
import SideBar from "../components/Layouts/SideBar";
import FilterSaran from "../components/Layouts/Filter_Saran";

function Saran() {
  return (
    <div className="flex min-h-screen bg-white gap-4">
      <SideBar />
      <div className="flex flex-col flex-1 gap-4 p-4">
        <h2 className="text-xl font-semibold">Saran</h2>
        <FilterSaran />
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(400px,1fr))]">
          <Card_Saran
            nama={"abel"}
            email={"abelarmando79@gmail.com"}
            isi_saran={"Mantap, sukses terus!"}
          />
          <Card_Saran
            nama={"budi"}
            email={"budisaputra19@gmail.com"}
            isi_saran={"Tolong tambahkan fitur baru."}
          />
          <Card_Saran
            nama={"Anggi Kurnia"}
            email={"anggikurnia1702@gmail.com"}
            isi_saran={"Desain website sudah bagus."}
          />
          <Card_Saran
            nama={"Doni"}
            email={"muhammaddoni02@gmail.com"}
            isi_saran={"Akses kadang lambat, mohon diperbaiki."}
          />
        </div>
      </div>  
    </div>
  );
}

export default Saran;

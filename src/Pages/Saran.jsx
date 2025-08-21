import Card_Saran from "../components/Fragments/Card_Saran";
import SideBar from "../components/Layouts/SideBar";

function Saran() {
  return (
    <div className="flex min-h-screen bg-white gap-4">
      <SideBar />
      <h2 className="flex">Saran</h2>
      <div className="flex flex-wrap gap-4 h-fit">
        <Card_Saran
          nama={"abel"}
          email={"abelarmando79@gmail.com "}
          isi_saran={"kontol"}
        />
        <Card_Saran
          nama={"abel"}
          email={"abelarmando79@gmail.com "}
          isi_saran={"kontol"}
        />
        <Card_Saran
          nama={"abel"}
          email={"abelarmando79@gmail.com "}
          isi_saran={"kontol"}
        />
        <Card_Saran
          nama={"abel"}
          email={"abelarmando79@gmail.com "}
          isi_saran={"kontol"}
        />
        <Card_Saran
          nama={"abel"}
          email={"abelarmando79@gmail.com "}
          isi_saran={"kontol"}
        />
        <Card_Saran
          nama={"abel"}
          email={"abelarmando79@gmail.com "}
          isi_saran={"kontol"}
        />
      </div>
    </div>
  );
}

export default Saran;

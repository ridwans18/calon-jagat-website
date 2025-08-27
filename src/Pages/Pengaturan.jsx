import SideBar from "../components/Layouts/SideBar";
import PengaturanLogo from "../components/Layouts/PengaturanLogo";
import PengaturanNamaToko from "../components/Layouts/PengaturanNamaToko";
import PengaturanJamOperasional from "../components/Layouts/PengaturanJamOprasional";
import PengaturanAlamat from "../components/Layouts/PengaturanAlamat";
import PengaturanLink from "../components/Layouts/PengaturanLink";
import PengaturanFee from "../components/Layouts/PengaturanFee";

function Pengaturan() {
  return (
    <div className="flex h-screen w-screen bg-white">
      <SideBar />
      <main className="flex-1 p-6 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Pengaturan</h2>

        <div className="space-y-6">
          <PengaturanLogo />
          <PengaturanNamaToko />
          <PengaturanJamOperasional />
          <PengaturanAlamat />
          <PengaturanLink />
          <PengaturanFee />

          {/* Tombol Simpan */}
          <div className="flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700">
              Simpan Perubahan
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Pengaturan;
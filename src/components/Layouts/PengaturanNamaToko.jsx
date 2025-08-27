

function PengaturanNamaToko() {
  return (
    <>
    {/* Pengaturan Nama Toko */}
    <section className="border-1 border-gray-200 bg-gray-100 p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Nama Toko</h3>
        <input
            type="text"
            placeholder="Masukkan nama toko"
            className="w-full border border-gray-400 rounded-lg p-2"
        />
    </section>
    </>
    );
}

export default PengaturanNamaToko;


function PengaturanLogo() {
  return (
    <>
    {/* Pengaturan Logo */}
    <section className="border-1 border-gray-200 bg-gray-100 p-6 rounded-2xl shadow-md">
        <h3 className="text-lg font-semibold mb-4">Logo Banner</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
            <label className="block font-medium mb-2">Admin</label>
            <input
                type="file"
                className="w-full border border-gray-400 rounded-lg p-2"
            />
            </div>
            <div>
            <label className="block font-medium mb-2">Pelanggan</label>
            <input
                type="file"
                className="w-full border border-gray-400 rounded-lg p-2"
            />
            </div>
        </div>
    </section>
    </>
    );
}

export default PengaturanLogo;
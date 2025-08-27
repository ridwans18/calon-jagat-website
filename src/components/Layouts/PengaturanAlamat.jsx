

function PengaturanAlamat() {
    return (
        <>
        {/* Pengaturan Alamat */}
        <section className="border-1 border-gray-200 bg-gray-100 p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">Alamat Toko</h3>
            <textarea
                rows="3"
                placeholder="Masukkan alamat toko"
                className="w-full border border-gray-400 rounded-lg p-2"
            ></textarea>
        </section>
        </>
    );
}

export default PengaturanAlamat;
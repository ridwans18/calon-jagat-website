
          
function PengaturanFee() {
    return (
        <>
        {/* Pengaturan Nominal Fee */}
        <section className="border-1 border-gray-200 bg-gray-100 p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">Nominal Fee</h3>
            <input
                type="number"
                placeholder="Masukkan nominal fee"
                className="w-full border border-gray-400 rounded-lg p-2"
            />
        </section>
        </>
    );
}

export default PengaturanFee;
function HeaderKontenViewPesanan() {
  return (
    <div className="flex flex-row items-center justify-between">
        <h3 className="text-md font-semibold mb-2 text-lg">Daftar Pesanan (1)</h3>
        <button className="border border-green-700 mb-2 mt-1 rounded-md px-2 py-0.5 text-green-600 text-xs flex items-center">
            <span className="mb-0.5"> + Tambah Pesanan </span>
        </button>
    </div>
  );
}

export default HeaderKontenViewPesanan;
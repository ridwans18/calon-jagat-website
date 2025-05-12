import ProdukContain from '../Fragments/ProdukContain';

function ContentPesanan() {
  return (
    <div className="mt-6 border border-gray-200 rounded-md shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center px-4 py-3 bg-gray-100 border-b border-gray-200 text-sm">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="form-checkbox text-green-600" />
          <span className="font-medium text-gray-800">Pesanan Selesai</span>
          <span className="text-green-600 font-semibold">INV/20250123/AYM/84756382956</span>
          <span className="text-gray-600">/ Dontol /</span>
          <span className="text-gray-500">🕒 28 April 2025, 12:22 WIB</span>
        </div>
      </div>

      {/* Isi Pesanan */}
      <div className="p-4 flex flex-col lg:flex-row lg:justify-between gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Nama Produk, Jumlah dan Harga */}
          <ProdukContain>
            <div className="font-medium text-gray-800">POCONG X3 PRO (6/128) Matot</div> 
            <div className="text-sm text-gray-600">1x Rp 800.000</div> 
          </ProdukContain>
          <ProdukContain>
            <div className="font-medium text-gray-800">POCONG X3 PRO (6/128) Matot</div> 
            <div className="text-sm text-gray-600">1x Rp 800.000</div> 
          </ProdukContain>
                  <ProdukContain>
            <div className="font-medium text-gray-800">POCONG X3 PRO (6/128) Matot</div> 
            <div className="text-sm text-gray-600">1x Rp 800.000</div> 
          </ProdukContain>
          <ProdukContain>
            <div className="font-medium text-gray-800">POCONG X3 PRO (6/128) Matot</div> 
            <div className="text-sm text-gray-600">1x Rp 800.000</div> 
          </ProdukContain>
        </div>

        {/* Pembayaran */}
        <div className="hidden lg:block w-px bg-gray-300 mx-4"/> {/* Garis guat gap */}
        <div className="flex-1 grid md:grid-cols-1 gap-4">
          <div>
            <div className="font-medium text-gray-700">Pembayaran</div>
            <div className="text-sm text-gray-600">Gopay</div>
          </div>
          <div>
            <span className="bg-green-200 text-gray-900 font-semibold px-2 py-0.5 rounded text-xs">Berhasil</span>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-3 flex flex-wrap items-center justify-between text-sm">

        {/* Footer Content */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-800 rounded-md hover:bg-green-100 transition">
            <i className="fas fa-receipt text-base leading-none text-gray-700"></i>
            <span>Detail</span>
          </button>
        </div>
        <div className="text-right font-semibold text-gray-800">
          Total Pembelian<br />
          <span className="text-lg">Rp800.000</span>
        </div>
      </div>
    </div>
  );
}

export default ContentPesanan;

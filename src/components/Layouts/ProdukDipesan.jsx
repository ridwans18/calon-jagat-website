import BtnPlusMin from "../Fragments/BtnPlusMin";

function ProdukDipesan() {
  return (
    <div className="border border-gray-300 rounded-md p-4 flex justify-between items-center mt-2 shadow-sm">
        {/* Produk yang di pesan */}
        <div className="font-semibold">
            <span>
            Paha Bawah Ayam
            </span>
            <p className="text-gray-700 text-sm mt-1">
            Rp11.364
            </p>
        </div>
        <BtnPlusMin />
    </div>
  );
}

export default ProdukDipesan;
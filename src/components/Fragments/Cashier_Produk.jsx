import BtnPlusMin from "./BtnPlusMin";
function Cashier_Produk({ index, name, price, id }) {
  return (
    <div className="flex justify-between items-center border-b pb-1">
      <div className="flex items-center gap-2">
        {/* Nomor */}
        <div className="flex items-center justify-center">
          <span className="bg-orange-400 text-white rounded-full w-6 h-6 text-sm flex items-center justify-center">
            {index + 1}
          </span>
        </div>
        {/* Nama Produk dan Harga */}
        <div className="flex flex-col ml-2">
          <span>{name}</span>
          <span className="text-sm text-gray-600">Rp{price}</span>
        </div>
      </div>
      {/* Button PlusMinus */}
      <div>
        <BtnPlusMin id={id} />
      </div>
    </div>
  );
}

export default Cashier_Produk;

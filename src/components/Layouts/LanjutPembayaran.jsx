function LanjutPembayaran(props) {
  const { onClick } = props;
  return (
    <div className="w-full fixed bottom-0 left-0 z-50 flex justify-center">
        <div className="rounded-md bg-white shadow-xl w-full max-w-md px-4 py-3 flex flex-row items-center justify-between gap-4">
            {/* Lanjut Pembayaran */}
            <div>
              Total Pembayaran
              <div className="text-lg font-bold">11.800</div>
            </div>
            <button 
              onClick={onClick}
              className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-xl">
            Lanjut Pembayaran
            </button>
        </div>
    </div>
  );
}

export default LanjutPembayaran;
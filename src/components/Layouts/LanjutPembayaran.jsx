function LanjutPembayaran() {
  return (
    <div className="w-full fixed bottom-0 left-0 z-50 flex justify-center">
        <div className="rounded-md shadow-xl w-full max-w-md px-4 py-3 flex flex-row items-center justify-between gap-4">
            {/* Lanjut Pembayaran */}
            <div className="text-sm text-left">
            Total Pembayaran
            <div className="font-semibold text-xl">11.800</div>
            </div>
            <button className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-md mt-2 md:mt-0">
            Lanjut Pembayaran
            </button>
        </div>
    </div>
  );
}

export default LanjutPembayaran;
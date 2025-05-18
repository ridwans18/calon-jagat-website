function RincianPembayaran() {
  return (
    <div className="mb-4 border-t border-gray-300 pt-4">
        {/* Rincian Pembayaran */}
        <h3 className="font-semibold mb-2">
            Rincian Pembayaran
        </h3>
        <div className="flex justify-between">
            <span>Subtotal <span className="text-gray-400">(1 Menu)</span></span>
            <span>Rp10.500</span>
            </div>
            <div className="flex justify-between">
            <span>Biaya Lainnya</span>
            <span>Rp1.300</span>
            </div>
            <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>Rp11.800</span>
        </div>
    </div>
  );
}

export default RincianPembayaran;
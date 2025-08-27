import GarisPembatas from "../Fragments/Garis Pembatas";
        
function DataPesanan_OrderStatus() {
    return (
        <>
            {/* Informasi Pesanan */}
            <div className="space-y-1">
                <h1 className="font-bold">Informasi Pesanan</h1>
                <div className="flex justify-between">
                    <h2>Nama Pelanggan</h2><h2>Bagus Pratama</h2>
                </div>
                <div className="flex justify-between">
                    <h2>Nomor Telepon</h2><h2>081284583624</h2>
                </div>
            </div>

            <GarisPembatas />

            {/* Pesanan */}
            <div className="space-y-1">
                <h1 className="font-bold mb-2">Pesanan</h1>
                <div className="flex justify-between">
                    <p><span className="font-medium">1x</span> Paha Atas</p> <p>Rp11.000</p>
                </div>
                <div className="flex justify-between">
                    <p><span className="font-medium">2x</span> Dada</p> <p>Rp22.000</p>
                </div>
            </div>

            <GarisPembatas />

            {/* Subtotal */}
            <div className="space-y-1">
                <div className="flex justify-between">
                    <h2>Subtotal</h2> <p>Rp33.000</p>
                </div>
                <div className="flex justify-between">
                    <h2>Fee</h2> <p>Rp1.300</p>
                </div>
                <div className="flex justify-between">
                    <h2>Pembayaran</h2> <p className="font-bold">QRIS</p>
            </div>
            </div>
            <div className="flex justify-between">
                <p className="font-bold">Total</p>
                <p className="font-bold text-green-700">Rp34.300</p>
            </div>
        </>
    );
}

export default DataPesanan_OrderStatus;
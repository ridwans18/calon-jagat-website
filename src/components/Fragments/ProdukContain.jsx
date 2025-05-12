import pocongmatotIMG from '../../assets/pocongmatot.jpg';

function ProdukContain({ children }) {
    return (
    <div className="flex items-start gap-4">
        <img
        src={pocongmatotIMG}
        alt="Produk"
        className="w-20 h-20 rounded object-cover"
        />
        <div>
            { children }
        </div>
    </div>
    );
}

export default ProdukContain;
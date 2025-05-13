function KategoriSortir() {
    return (
       <aside className="lg:w-1/5 w-full category-sort-container">
        <h4 className="mb-3 text-sm hidden lg:block">Kategori Produk</h4>
        <form method="GET" action="shop.php">
        <div className="hidden lg:block list">
            <a href="shop.php" className="block px-4 py-2 border rounded hover:shadow">Semua Produk</a>
            <a href="shop.php?kategori=Kaos" className="block px-4 py-2 border rounded hover:shadow">Paha Atas</a>
            <a href="shop.php?kategori=Kemeja" className="block px-4 py-2 border rounded hover:shadow">Paha Bawah</a>
            <a href="shop.php?kategori=Jaket" className="block px-4 py-2 border rounded hover:shadow">Dada</a>
            <a href="shop.php?kategori=Celana" className="block px-4 py-2 border rounded hover:shadow">Sayap</a>
        </div>
        <select name="kategori" className="mt-3 block lg:hidden w-full border px-3 py-2 rounded">
            <option value="">Kategori Produk</option>
            <option value="Kaos">Kaos</option>
            <option value="Kemeja">Kemeja</option>
            <option value="Jaket">Jaket</option>
            <option value="Celana">Celana</option>
        </select>
        <h4 className="mt-4 mb-3 text-sm hidden lg:block">Sortir Harga</h4>
        <div className="list" aria-label="Sort by price">
            <button type="submit" name="sortir_harga" value="asc" className="px-4 py-2 border rounded hover:shadow w-full">Rendah ke Tinggi</button>
            <button type="submit" name="sortir_harga" value="desc" className="px-4 py-2 border rounded hover:shadow w-full">Tinggi ke Rendah</button>
        </div>
        </form>
    </aside>
    );
};

export default KategoriSortir;
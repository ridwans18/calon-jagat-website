function KategoriSortir() {
    return (
       <aside className="lg:w-1/5 w-full category-sort-container">
        {/* Filter Harga */}
        <p className="mb-3 text-lg font-bold hidden lg:block">Sortir Harga</p>
        <div className="space-y-2" aria-label="Sort by price">
            <button className="px-4 py-2 border border-gray-200 rounded shadow-sm hover:shadow-md w-full">
                Rendah ke Tinggi
            </button>
            <button className="px-4 py-2 border border-gray-200 rounded shadow-sm hover:shadow-md w-full">
                Tinggi ke Rendah
            </button>
        </div>
    </aside>
    );
};

export default KategoriSortir;
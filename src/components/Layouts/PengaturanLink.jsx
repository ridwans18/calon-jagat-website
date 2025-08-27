

function PengaturanLink() {
    return (
        <>
        {/* Pengaturan Link Icon */}
        <section className="border-1 border-gray-200 bg-gray-100 p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">Link Icon</h3>
            <div className="space-y-3">
                <input
                type="url"
                placeholder="Link Google Maps"
                className="w-full border border-gray-400 rounded-lg p-2"
                />
            </div>
        </section>
        </>
    );
}

export default PengaturanLink;
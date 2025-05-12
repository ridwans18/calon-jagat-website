function SearchBar({ search, setSearch }) {
    return (
    <div className="relative bg-white">
        <input
        type="text"
        placeholder="Cari di sini"
        value={search}
        onChange={(e) => setSearch(e.target.value)} 
        className="pl-10 pr-4 py-2 border border-gray-300 rounded text-sm w-full md:w-64"
        />
        <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z"
        />
        </svg>
    </div>
    );
}

export default SearchBar;
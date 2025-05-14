function PlusMinProdukCard() {
  return (
    <div className="flex items-center">
        <button className="bg-gray-200 hover:bg-green-300 text-white font-bold rounded-full h-6 w-6 flex items-center justify-center focus:outline-none focus:shadow-outline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
        </svg>
        </button>
        <span className="mx-4">
        1
        </span>
        <button className="bg-gray-200 hover:bg-green-300 text-white font-bold rounded-full h-6 w-6 flex items-center justify-center focus:outline-none focus:shadow-outline">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        </button>
    </div>
  );
}

export default PlusMinProdukCard;
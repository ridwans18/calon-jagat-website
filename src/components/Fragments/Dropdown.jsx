function Dropdown({ children }) {
    return (  
    <div className="flex items-center flex-wrap">
        <select className="bg-white border border-gray-300 rounded px-3 py-2 text-sm text-gray-700">
            { children }
        </select>
    </div>
    );
}

export default Dropdown;
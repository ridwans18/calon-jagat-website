import { useState } from 'react';

const header = [
  'Semua',
  'Berhasil',
  'Dibatalkan',
];

const Header = () => {
  const [activeTab, setActiveTab] = useState('Semua');

  return (
    <div className="bg-gray-100 rounded-md p-2 shadow-sm">
      <div className="flex flex-wrap gap-2 md:gap-4">
        {header.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium px-3 py-1 rounded-md transition-all duration-200
              ${
                activeTab === tab
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-gray-800 hover:text-green-600'
              } bg-transparent`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;

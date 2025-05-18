import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  UserIcon,
  HomeIcon,
  CreditCardIcon,
  CubeIcon,
  ClipboardDocumentCheckIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'User Beranda', icon: UserIcon, path: '/UserBeranda' },
  { name: 'Admin Beranda', icon: HomeIcon, path: '/' },
  { name: 'Kasir', icon: CreditCardIcon, path: '/Kasir' },
  { name: 'Produk', icon: CubeIcon, path: '/Produk' },
  { name: 'Transaksi', icon: ClipboardDocumentCheckIcon, path: '/Transaksi' },
  { name: 'Saran', icon: ChatBubbleLeftRightIcon, path: '/Saran' },
];

const pengaturanItem = [
  { nameBott: 'Pengaturan', icon: Cog6ToothIcon, path: '/Pengaturan' },
  { nameBott: 'Keluar', icon: ArrowRightOnRectangleIcon, path: '/Login' },
];

const SideBar = () => {
  const location = useLocation();

  // Ambil nilai awal dari localStorage (true/false)
  const [isOpen, setIsOpen] = useState(() => {
    const saved = localStorage.getItem('sidebarOpen');
    return saved === null ? true : JSON.parse(saved);
  });

  // Simpan setiap perubahan ke localStorage
  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <aside
      className={`${
        isOpen ? 'w-56' : 'w-20'
      } min-h-screen bg-gray-100 border-r border-gray-300 rounded-r-4xl font-semibold shadow-sm p-2 
        flex flex-col justify-between transition-all duration-300 overflow-hidden`}
    >
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center p-2 mb-4 rounded-tr-3xl hover:bg-green-200 transition"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6 text-gray-800" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-gray-800" />
        )}
      </button>

      {/* Logo */}
      <div className="flex items-center justify-center mt-2">
        <img
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Logo"
          className="h-10 w-10"
        />
      </div>

      {/* Informasi */}
      {isOpen && (
        <div className="mt-6 border-t border-b border-gray-300 p-3 text-xs space-y-2">
          <div className="flex justify-between">
            <span>Saldo</span>
            <span>Rp100.000</span>
          </div>
          <div className="flex justify-between">
            <span>Total Transaksi</span>
            <span>34</span>
          </div>
        </div>
      )}

      {/* Navigasi */}
      <nav className="space-y-2 mt-4">
        {navItems.map((item) => (
          <Link
            to={item.path}
            key={item.name}
            className={`flex items-center px-3 py-2 rounded-md hover:bg-green-200 ${
              location.pathname === item.path
                ? 'text-green-600 border-l-4 border-green-600'
                : 'text-gray-800'
            }`}
          >
            <item.icon className={`${ 
              isOpen ? 'mr-3' : 'ml-2'
              } h-5 w-5`} 
            />
            {isOpen && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-4">
        {pengaturanItem.map((itemBott) => (
          <Link
            to={itemBott.path}
            key={itemBott.nameBott}
            className={`flex items-center px-3 py-2 rounded-md hover:bg-green-200 ${
              location.pathname === itemBott.path
                ? 'text-green-600 border-l-4 border-green-600'
                : 'text-gray-800'
            }`}
          >
            <itemBott.icon className={`${ 
              isOpen ? 'mr-3' : 'ml-2'
              } h-5 w-5`} 
            />
            {isOpen && <span>{itemBott.nameBott}</span>}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;

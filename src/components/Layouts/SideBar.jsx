import { Link, useLocation } from "react-router-dom";
import {
  UserIcon,
  HomeIcon,
  CreditCardIcon,
  CubeIcon,
  ClipboardDocumentCheckIcon,
  ChatBubbleLeftRightIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { name: "Beranda", icon: HomeIcon, path: "/" },
  { name: "Kasir", icon: CreditCardIcon, path: "/Kasir" },
  { name: "Produk", icon: CubeIcon, path: "/Produk" },
  { name: "Transaksi", icon: ClipboardDocumentCheckIcon, path: "/Transaksi" },
  { name: "Saran", icon: ChatBubbleLeftRightIcon, path: "/Saran" },
];

const pengaturanItem = {
  name: "Pengaturan",
  icon: Cog6ToothIcon,
  path: "/pengaturan",
};

const SideBar = () => {
  const location = useLocation();

  return (
    <aside className="w-55 min-h-screen bg-primary border border-gray-300 rounded-2xl font-semibold shadow-sm p-2 flex flex-col justify-between">
      {/* Logo */}
      <div className="flex items-center justify-center mt-6">
        <img
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Logo"
          className="h-10 w-10"
        />
      </div>

      {/* Informasi Saldo dan Total Transaksi */}
      <div className="mt-6 bg-gray-100 border-b-1 border-t-1 border-gray-300 p-3 text-xs space-y-2 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-start justify-center">Saldo</div>
          <div className="flex items-end justify-center">Rp100.000</div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-start justify-center">Total Transaksi</div>
          <div className="flex items-end justify-center">34</div>
        </div>
      </div>

      {/* Navigasi SideBar */}
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            to={item.path}
            key={item.name}
            className={`w-full flex items-center px-3 py-2 rounded-md text-gray-800 hover:bg-green-200
              ${
                location.pathname === item.path
                  ? "text-green-600 border-l-5 border-green-600 hover:text-gray-800"
                  : "text-gray-800 hover:text-gray-800"
              }`}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Footer SideBar */}
      <div className="items-center ">
      {pengaturanItem.map((itemBott) => (
          <Link
            to={itemBott.path}
            key={itemBott.nameBott}
            className={`w-full flex items-center px-3 py-2 p-2 rounded-md text-gray-800 hover:bg-green-200
              ${
                location.pathname === itemBott.path
                  ? 'text-green-600 border-l-5 border-green-600 hover:text-gray-800'
                  : 'text-gray-800 hover:text-gray-800'
              }`}
          >
            <itemBott.icon className="h-5 w-5 mr-3" />
            {itemBott.nameBott}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;

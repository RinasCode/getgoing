import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src="/images/getgoinglogo.png" 
            alt="GetGoing Logo" 
            width={60} 
            height={60} 
            className="h-30"
          />
        </Link>
        
        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Cari negara, kota atau guide"
              className="w-full px-4 py-2 pl-12 rounded-full border border-gray-200 focus:outline-none focus:border-red-500"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-red-600 text-white p-2 rounded-full">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/beranda" className="text-gray-600 hover:text-red-600">Beranda</Link>
          <Link to="/servis-kami" className="text-gray-600 hover:text-red-600">Servis Kami</Link>
          <Link to="/blog" className="text-red-600">Blog</Link>
          <Link to="/login" className="text-gray-600 hover:text-red-600 font-medium">LOGIN</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

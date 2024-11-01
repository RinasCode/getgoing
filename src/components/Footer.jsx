import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">INFORMASI KONTAK</h3>
            <div className="space-y-2">
              <p>BSD Green Office Park Lt. 1</p>
              <p>24/7 - Online</p>
              <p>hi@getgoing.co.id</p>
              <p>@getgoing.co.id</p>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">DOWNLOAD DI</h3>
            <div className="flex space-x-4">
              <img
                src="/images/appstore.png"
                alt="App Store"
                width={120}
                height={40}
                className="h-10"
              />
              <img
                src="/images/playstore.png"
                alt="Play Store"
                width={120}
                height={40}
                className="h-10"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">LAINNYA</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:underline">Syarat dan Ketentuan</Link></li>
              <li><Link to="#" className="hover:underline">Kebijakan Privasi</Link></li>
              <li><Link to="#" className="hover:underline">Press</Link></li>
              <li><Link to="#" className="hover:underline">FAQ</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p>© 2024 - PT. Gua Eksplorasi Travel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

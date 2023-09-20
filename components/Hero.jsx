import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex w-full">
      <div className="flex w-1/2 h-full items-center justify-center">
        <div>
          <p>Welcome to my site</p>
        </div>
      </div>
      <div className="w-1/2">
        <div
          className="bg-scroll"
          style={{
            backgroundImage: `url('/stock_barber.jpg')`,
            height: '100vh',
            width: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
          }}
        ></div>
      </div>
    </div>
  );
}

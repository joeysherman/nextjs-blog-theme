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
    <div
      className="bg-gray-600 bg-blend-multiply py-24 px-6 text-center"
      style={{
        backgroundImage: `url('/bibi-drew.jpeg')`,
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '600px',
      }}
    >
      <div className="bg-scroll"></div>
      <h1 className="mt-2 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
        <span className="text-light">{"Bibi's Barbering"}</span>
      </h1>
      <a
        className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
        data-te-ripple-init
        data-te-ripple-color="light"
        href="https://getsquire.com/booking/book/platinum-signature-barbershop-west-des-moines/barber/salvador-flores-4/services"
        target="_blank"
        rel="noreferrer"
        role="button"
      >
        Book now
      </a>
    </div>
  );
}

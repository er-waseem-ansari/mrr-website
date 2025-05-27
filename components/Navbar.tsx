'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const user = useSelector((state: any) => state.auth.user); // Access auth state

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleProfileClick = () => {
    if (user) {
      router.push('/profile');
    } else {
      router.push('/login');
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full backdrop-blur shadow-md flex h-20 items-center justify-between sm:px-5 lg:px-8 bg-white">
        {/* Hamburger for small screens */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 ml-2 text-gray-600 hover:bg-gray-100 rounded-md"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Desktop nav links */}
        <div className="hidden lg:flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/shop" className="hover:text-black transition">Shop</Link>
          <Link href="/about" className="hover:text-black transition">About Mirzapur</Link>
          <Link href="/services" className="hover:text-black transition">Services</Link>
          <Link href="/contact" className="hover:text-black transition">Contact Us</Link>
        </div>

        {/* Logo centered */}
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 text-primary text-2xl font-semibold"
        >
          Mirzapur Royale Rugs
        </Link>

        {/* Right icons */}
        <div className="flex items-center gap-2 ml-auto">
          <button className="p-2 rounded-full hover:bg-gray-100 transition">
            <ShoppingCart className="h-5 w-5 text-gray-600" />
          </button>
          <button
            onClick={handleProfileClick}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <User className="h-5 w-5 text-gray-600" />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="fixed top-20 left-0 w-full bg-white shadow-md z-40 flex flex-col gap-3 px-6 py-4 text-sm font-medium text-gray-700"
        >
          <Link href="/shop" onClick={() => setIsMenuOpen(false)} className="hover:text-black transition">Shop</Link>
          <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-black transition">About Mirzapur</Link>
          <Link href="/services" onClick={() => setIsMenuOpen(false)} className="hover:text-black transition">Services</Link>
          <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-black transition">Contact Us</Link>
        </div>
      )}
    </>
  );
}

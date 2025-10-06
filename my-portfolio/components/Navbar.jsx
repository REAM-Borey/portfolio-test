"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const centerMenu = [
    { name: "project", href: "#" },
    { name: "About me", href: "#" },
    { name: "Education", href: "#" },
    { name: "Contact me", href: "#" },
  ];

  return (
    <nav className="from-indigo-600 to-purple-600 p-9">
      <div className="flex items-center justify-between max-w-7xl mx-auto relative">

        {/* Left - Home */}
        <div>
          <Link
            href="/"
            className="text-2xl text-white font-bold tracking-wide hover:border-white hover:text-orange-500
                       hover:border-b-2 border-b-2 border-transparent transition duration-300"
          >
            Home
          </Link>
        </div>

        {/* Middle - 4 items */}
        <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-10">
          {centerMenu.map((item, index) => (
            <li
              key={index}
              className="text-lg text-white tracking-wide cursor-pointer 
                         hover:text-orange-500 hover:border-white hover:border-b-2 border-b-2 border-transparent 
                         transition duration-300"
            >
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Right - Hire Me button */}
        <div className="hidden md:block">
          <Link
            href="/hire-me"
            className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg 
                       shadow hover:bg-indigo-100 transition duration-300"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <ul className="flex flex-col space-y-4">
            {centerMenu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block text-white hover:text-yellow-400 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/hire-me"
            className="block text-center bg-orange-500 text-white font-semibold px-4 py-2 rounded-lg 
                    shadow hover:bg-orange-600 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Hire Me
          </Link>

        </div>
      )}
    </nav>
  );
}

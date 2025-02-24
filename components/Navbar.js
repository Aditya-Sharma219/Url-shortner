"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-purple-500 text-white">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo */}
        <Link href="/">
          <div className="text-xl font-bold cursor-pointer">Url-Shortener</div>
        </Link>

        {/* Hamburger Icon */}
        <div
          className="md:hidden flex items-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        {/* Navbar Links (Desktop) */}
        <ul className="hidden md:flex gap-6 items-center">
          <Link href="/">
            <li className="cursor-pointer hover:text-purple-300">Home</li>
          </Link>
          <Link href="/about">
            <li className="cursor-pointer hover:text-purple-300">About</li>
          </Link>
          <Link href="/shorten">
            <li className="cursor-pointer hover:text-purple-300">Shorten</li>
          </Link>
          <Link href="/contact">
            <li className="cursor-pointer hover:text-purple-300">Contact Us</li>
          </Link>
          <Link href="/shorten">
            <button className="bg-purple-700 hover:bg-purple-800 transition rounded-lg px-4 py-2 font-bold">
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button className="bg-purple-700 hover:bg-purple-800 transition rounded-lg px-4 py-2 font-bold">
              GitHub
            </button>
          </Link>
        </ul>
      </div>

      {/* Navbar Links (Mobile) */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 items-center bg-purple-600 text-white py-4">
          <Link href="/">
            <li
              className="cursor-pointer hover:text-purple-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className="cursor-pointer hover:text-purple-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </li>
          </Link>
          <Link href="/shorten">
            <li
              className="cursor-pointer hover:text-purple-300"
              onClick={() => setIsOpen(false)}
            >
              Shorten
            </li>
          </Link>
          <Link href="/contact">
            <li
              className="cursor-pointer hover:text-purple-300"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </li>
          </Link>
          <Link href="/shorten">
            <button
              className="bg-purple-700 hover:bg-purple-800 transition rounded-lg px-4 py-2 font-bold"
              onClick={() => setIsOpen(false)}
            >
              Try Now
            </button>
          </Link>
          <Link href="/github">
            <button
              className="bg-purple-700 hover:bg-purple-800 transition rounded-lg px-4 py-2 font-bold"
              onClick={() => setIsOpen(false)}
            >
              GitHub
            </button>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

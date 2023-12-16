"use client";

import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="flex items-center justify-between bg-gray-800 text-white px-4 py-2">
      <nav className="flex space-x-4">
        <a href="#" className="text-base font-semibold hover:underline">
          Home
        </a>
        <a href="#" className="text-base font-semibold hover:underline">
          About
        </a>
        <a href="#" className="text-base font-semibold hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
};

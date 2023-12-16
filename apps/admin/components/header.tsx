"use client";

import { FC } from "react";
import Link from "next/link";
import { Button } from "@repo/ui/components/button";

export const Header: FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-700">
        <Link href="#">Hedge</Link>
      </div>
      <nav className="space-x-4">
        <Link className="text-gray-700 hover:text-gray-900" href="#">
          Feature 1
        </Link>
        <Link className="text-gray-700 hover:text-gray-900" href="#">
          Feature 2
        </Link>
        <Link className="text-gray-700 hover:text-gray-900" href="#">
          Feature 3
        </Link>
      </nav>
      <Button
        className="text-gray-700 border-gray-300 hover:bg-gray-100"
        variant="outline"
      >
        <Link href="#">Login</Link>
      </Button>
    </header>
  );
};

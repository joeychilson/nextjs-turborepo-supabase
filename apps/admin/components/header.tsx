"use client";

import { FC } from "react";
import Link from "next/link";
import { Button } from "@repo/ui/components/button";

export const Header: FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-700">
        <Link href="#">Todo!</Link>
      </div>
      <nav className="space-x-4">
        <Link className="text-gray-700 hover:text-gray-900" href="/todos">
          Todos
        </Link>
      </nav>
      <Button
        className="text-gray-700 border-gray-300 hover:bg-gray-100"
        variant="outline"
      >
        <Link href="signin">Signin</Link>
      </Button>
    </header>
  );
};

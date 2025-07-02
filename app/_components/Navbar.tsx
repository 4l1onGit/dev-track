import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-indigo-950 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">DevTracker</div>
        <ul className="flex space-x-6">
          <li className="hover:-translate-y-1 hover:text-gray-400 transition-transform">
            <Link href="/">Dashboard</Link>
          </li>
          <li className="hover:-translate-y-1 hover:text-gray-400 transition-transform">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="hover:-translate-y-1 hover:text-gray-400 transition-transform">
            <Link href="/notes">Notes</Link>
          </li>
          <li className="hover:-translate-y-1 hover:text-gray-400 transition-transform">
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

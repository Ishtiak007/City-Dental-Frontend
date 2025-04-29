"use client";
import { useState } from "react";
import logo from "../../../../../public/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = (
    <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-6">
      <li>
        <Link className="font-medium text-white" href="/">
          About
        </Link>
      </li>
      <li>
        <Link className="font-medium text-white" href="/">
          Service
        </Link>
      </li>
      <li>
        <Link className="font-medium text-white" href="/">
          Blog
        </Link>
      </li>
      <li>
        <Link className="font-medium text-white" href="/">
          Contact
        </Link>
      </li>
      <li>
        <Link className="font-medium text-white" href="/">
          Gallery
        </Link>
      </li>
      <li>
        <Link className="font-medium text-white" href="/login">
          FAQ
        </Link>
      </li>
    </div>
  );

  return (
    <div className="navbar fixed z-10 bg-[linear-gradient(to_right,_rgba(0,_0,_0,_0.3),_rgba(66,_66,_66,_0.5),_rgba(0,_0,_0,_0.5))] text-white px-4 w-full">
      <div className="navbar-start flex justify-between items-center w-full">
        <div className="flex items-center space-x-4">
          <button
            className="lg:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="text-2xl">☰</span>
          </button>
          <Link href="/">
            <Image src={logo} className="w-[80px] ml-5" alt="Logo" />
          </Link>
        </div>

        <div className={`lg:flex ${menuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end">
          {/* <Link href={"/"} className="text-white font-medium">
            <button className="text-white bg-gradient-to-b from-blue-600 via-blue-700 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none shadow-lg  font-medium rounded-full text-md px-5 py-1.5 text-center me-2 mb-2 text-[15px] my-3 cursor-pointer">
              Request For Appointment
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

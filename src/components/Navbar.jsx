"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    } else {
      setTheme("light");
    }
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href="/">Kitoblar</Link>
              </li>
              <li>
                <Link href="/createBook">Kitob qo'shish</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl text-gray-700">
            Kitoblar <span className="text-red-700 font-mono">Markazi</span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex gap-4 items-center">
          <ul className="menu menu-horizontal px-1 gap-2 items-center">
            <li>
              <Link
                className="btn bg-white border-none hover:bg-white"
                href="/"
              >
                Kitoblar
              </Link>
            </li>
            <li>
              <Link
                className="btn border-zinc-950 bg-black text-[#fff]  hover:bg-black"
                href="/createBook"
              >
                Kitob qo'shish
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="btn btn-ghost text-lg"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

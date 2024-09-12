"use client"; // Enable React state management in Next.js

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    const yes = confirm("Are you sure you want to logout?");
    if (yes) {
      sessionStorage.removeItem("isLoggedIn");
      window.location.reload();
    }
  };

  return (
    <header
      className="fixed top-0 flex w-full shadow-lg py-4 px-4 sm:px-10 bg-white font-sans tracking-wide z-40"
      style={{
        background: "rgba( 255, 255, 255, 0.3)",
        // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 8.5px )",
        webkitBackdropFilter: "blur( 8.5px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
      }}
    >
      <div className=" flex flex-wrap items-center justify-between gap-4 w-full">
        {/* Desktop & Mobile Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:gap-x-5 fixed lg:static top-0 left-0 w-2/3 sm:w-1/2 bg-white lg:bg-transparent shadow-lg lg:shadow-none z-50 h-full lg:h-auto transition-all ease-in-out duration-300`}
        ></div>

        {/* Mobile Menu Toggle (Close) */}
        {isMenuOpen && (
          <button
            onClick={toggleMenu}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
            </svg>
          </button>
        )}

        {/* Login/SignUp & Mobile Menu Toggle (Open) */}
        <div className="flex items-center ml-auto space-x-6">
          <button
            onClick={logout}
            className="px-4 py-2 text-sm rounded-sm font-bold text-white border-2 border-[#007bff] bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]"
          >
            Logout
          </button>

          {/* Mobile Menu Toggle Button */}
          <button id="toggleOpen" onClick={toggleMenu} className="lg:hidden">
            <svg
              className="w-7 h-7"
              fill="#333"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

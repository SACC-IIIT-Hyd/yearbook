import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import NavbarLink from "./navbarLink";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track authentication status
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Function to toggle authentication status
  const toggleAuthentication = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // Function to render user dropdown content based on authentication status
  const renderUserDropdownContent = () => {
    // if (isLoggedIn) {
    //   return (
    //     <div className="px-4 py-3">
    //       <span className="block text-sm text-gray-900 dark:text-white">
    //         Bonnie Green
    //       </span>
    //       <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
    //         name@flowbite.com
    //       </span>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div className="px-4 py-3">
    //       <span className="block text-sm text-gray-900 dark:text-white">
    //         Guest User
    //       </span>
    //     </div>
    //   );
    // }
    return (
      <div className="px-4 py-3">
        <span className="block text-sm text-gray-900 dark:text-white">
          Lorem Ipsum
        </span>
        <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
          test@user.com
        </span>
      </div>
    );
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          passHref
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SACC Yearbook {`${new Date().getFullYear()}`}
          </span>
        </Link>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={toggleDropdown}>
            <span className="sr-only">Open user menu</span>
            <PersonIcon className="w-8 h-8 rounded-full" />
          </button>

          {/* Dropdown menu */}
          <div className="relative">
            <div
              className={`${
                isDropdownOpen ? "" : "hidden"
              } absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg dark:bg-gray-700 dark:divide-gray-600`}
              id="user-dropdown"
              style={{
                top: "2vh",
                right: "1vw",
                zIndex: 10,
              }}>
              {renderUserDropdownContent()}
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    onClick={closeDropdown}>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    onClick={closeDropdown}>
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavbarLink href="/" text="Home" def="y" />
            </li>
            <li>
              <NavbarLink href="/" text="Testimonials" />
            </li>
            <li>
              <NavbarLink href="/" text="Polls" />
            </li>
            <li>
              <NavbarLink href="/" text="Photowall" />
            </li>
            <li>
              <NavbarLink href="/" text="About" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

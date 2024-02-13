import { TbShoppingBag } from "react-icons/tb";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav() {

  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <nav className="flex flex-wrap justify-between items-center">
      {/* Logo nike */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* Burger button */}
      <button onClick={() => setIsMobileMenu(!isMobileMenu)} className="p-2 rounded-lg focus:ring-2 focus:ring-gray-200 lg:hidden">
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu list */}
      <div className={`${!isMobileMenu && "hidden"} w-full lg:w-auto lg:d-block`}>
        <ul className="lg:space-x-8 flex flex-col lg:flex-row p-4 border rounded-lg border-gray-100 bg-gray-50 text-lg lg:bg-transparent lg:border-none">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`cursor-pointer px-3 py-2  
          ${
            i === 0
              ? "bg-blue-500 text-white rounded lg:bg-transparent lg:text-blue-500"
              : "hover:bg-gray-200 rounded lg:bg-transparent"
          }`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Cart button */}
      <div className="fixed bottom-4 left-4 lg:static">
        <div className="flex-center w-12 h-12 bg-white shadow-md rounded-full">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
        }
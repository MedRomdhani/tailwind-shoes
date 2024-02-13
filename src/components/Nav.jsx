import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

const ROUTES = [
  "Home",
  "About",
  "Services",
  "Pricing",
  "Contact"
]

export function Nav() {
  return (
    <nav className="flex flex-wrap justify-between items-center">
      {/* Logo nike */}
      <a href="#">
        <NikeLogo className="h-20 w-20" />
      </a>
      {/* Burger button */}
      <button className="p-2 rounded-lg focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu list */}
      <div className="w-full">
      <ul className="p-4 border rounded-lg border-gray-100 bg-gray-50 text-lg">
        {ROUTES.map((route, i) => {
          return <li className={`cursor-pointer px-3 py-2 
          ${i === 0 
          ? "bg-blue-500 text-white rounded" 
          : "hover:bg-gray-200 rounded"}`} key={route}>{route}</li>
        })}
      </ul>
        
      </div>
    </nav>
  );
}

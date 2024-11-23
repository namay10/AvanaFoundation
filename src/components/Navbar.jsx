import { useState } from "react";
import { Link } from "react-router-dom";

import avana from "../assets/images/avana.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="relative container mx-auto py-3 px-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={avana} alt="Avana Logo" className=" object-contain" />
        </div>

        <Link
          to="#"
          className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
        >
          Contact Us
        </Link>

        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? "open block hamburger md:hidden focus:outline-none"
              : "block hamburger md:hidden focus:outline-none"
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

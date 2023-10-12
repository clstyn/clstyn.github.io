import React, { useState } from "react";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [navbarPhoneOpen, setNavbarPhoneOpen] = useState(false);

  const toggleNavbarPhone = () => {
    setNavbarPhoneOpen(!navbarPhoneOpen);
  };

  const menu = [
    { id: 1, value: "About", toSection: "about" },
    { id: 2, value: "Timeline", toSection: "timeline" },
    { id: 3, value: "Portofolio", toSection: "porto" },
    { id: 4, value: "Tools", toSection: "tools" },
    { id: 5, value: "Random", toSection: "random" },
  ];

  const handleClickNavbar = (section) => {
    document
      .getElementById(section)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return (
    <nav
      role="navigation"
      className="fixed w-full h-16 md:h-24 bg-dark1 z-50 px-4 md:px-8"
    >
      <div className="flex h-full items-center justify-between font-heading text-white">
        <h1 className="text-lg md:text-xl xl:text-3xl">Fiorenza Celestyn</h1>

        <ul className="md:gap-6 lg:gap-16 text-sm xl:text-2xl hidden md:flex">
          {menu.map((item) => {
            return (
              <li
                className="cursor-pointer"
                onClick={() => handleClickNavbar(item.toSection)}
              >
                {item.value}
              </li>
            );
          })}
        </ul>

        <div
          className={`md:hidden transition-all text-2xl relative navbar-phone-icon text-white ${
            navbarPhoneOpen ? "open" : ""
          }`}
          onClick={toggleNavbarPhone}
        >
          {navbarPhoneOpen ? (
            <XMarkIcon className="w-8" />
          ) : (
            <Bars2Icon className="w-8" />
          )}
        </div>
        {navbarPhoneOpen ? (
          <div
            className={`absolute top-0 left-0 -z-10 w-full max-h-fit flex flex-col items-center justify-center bg-dark1 text-white pt-20 pb-4 navbar-menu ${
              navbarPhoneOpen ? "open" : "closed"
            }`}
          >
            {menu.map((item) => {
              return (
                <div
                  key={item.id}
                  className="py-4"
                  onClick={() => {
                    handleClickNavbar(item.toSection);
                    toggleNavbarPhone();
                  }}
                >
                  {item.value}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </nav>
  );
};
export default Navbar;

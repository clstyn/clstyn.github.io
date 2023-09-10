import React from "react";

export const Navbar = () => {
  return (
    <div className="fixed w-full h-24 bg-dark1 z-50 px-8">
      <div className="flex h-full items-center justify-between font-heading text-white">
        <h1 className="text-3xl">Fiorenza Celestyn</h1>

        <ul className="flex gap-16 text-2xl">
          <li>About</li>
          <li>Timeline</li>
          <li>Portofolio</li>
          <li>Tools</li>
          <li>Random</li>
        </ul>
      </div>
    </div>
  );
};

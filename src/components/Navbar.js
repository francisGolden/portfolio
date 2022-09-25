import React from "react";

function Navbar() {
  return (
    <div
      className="text-slate-50 text-2xl
    w-screen p-4"
    id="navbar"
    >
      <nav>
        <ul className="flex gap-2">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

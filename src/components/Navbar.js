import React from "react";

function Navbar() {
  return (
    <div
      className="text-slate-50 text-2xl
    w-screen p-2"
    >
      <nav>
        <ul className="flex gap-2">
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

import React from "react";

function Footer() {
  return (
    <div
      className="flex justify-center items-center flex-col gap-4 cursor-default
    text-4xl text-slate-50 p-4 bg-cyan-500 hover:bg-cyan-400 w-full"
    >
      <a href="#navbar">Go back</a>
      <p className="text-xl flex-col items-center flex gap-2">
        Wallpaper by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.reddit.com/user/ArthurrHB/"
          
        >
          u/ArthurrHB
        </a>
      </p>
    </div>
  );
}

export default Footer;

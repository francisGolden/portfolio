import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="flex justify-between items-center 
  h-screen/2 flex-col w-screen gap-4
text-slate-50 text-2xl p-12 text-center bg-cyan-700"
    >
      Let's connect!
      <div className="flex gap-4">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/francesco-gioele-doria-b23742123/"
        >
          <img
            alt="linkedin"
            src="https://upload.wikimedia.org/wikipedia/commons/f/f8/LinkedIn_icon_circle.svg"
          />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/francisGolden"
        >
          <img
            alt="GitHub"
            src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
            style={{width: "72px"}}
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;

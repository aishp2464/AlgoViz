import React from "react";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto h-16 md:h-20 md:flex md:items-center md:justify-between">
      <div className="text-lg text-gray-800 mr-4">
        &copy; Algo-Canvas - All rights reserved.
      </div>
      <div className="flex items-center justify-center">
        <p className="text-gray-800">Click here for contribution</p>
        <a
          href="https://github.com/aishp2464/AlgoViz"
          target="_blank"
          className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
          aria-label="Github"
        >
          <svg
            className="w-12 h-12 fill-current"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;

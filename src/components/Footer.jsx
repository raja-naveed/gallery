// Footer.js

import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p>&copy; 2023 Google Photos</p>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

// Navbar.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to={"/"}>
            <span className="text-2xl text-white font-bold">Google Photos</span>
          </Link>
        </div>

        <ul className="flex space-x-4">
          <li>
            <Link to={"/"} className="text-white hover:underline">
              Photos
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to={"/upload"} className="text-white hover:underline">
                  Upload
                </Link>
              </li>
              <li>
                <Link to={"/user"} className="text-white hover:underline">
                  Profile
                </Link>
              </li>
              <li>
                <button
                  className="text-white hover:underline"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to={"/login"} className="text-white hover:underline">
                Login
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

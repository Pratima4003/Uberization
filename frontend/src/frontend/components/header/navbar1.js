import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar1({ isLoggedIn }) {
  const reference = useRef(isLoggedIn);
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login logic, navigate to login page
    navigate("/login");
    reference.current = false; // Update reference.current directly
  };

  const handleLogout = () => {
    // Implement logout logic, navigate to home
    navigate("/");
    reference.current = true; // Update reference.current directly
  };

  let navContent;
  if (isLoggedIn) {
    // Render logged-in state with user profile and logout button
    navContent = (
      <>
        <Link
          to="/dashboard"
          className="hover:bg-gray-50 focus:ring-2 focus:ring-gray-100 rounded-lg"
        >
          <img
            src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
            className="mr-3 h-12"
            alt="Logo"
          />
        </Link>
        <button
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
          onClick={handleLogout}
        >
          Logout
        </button>
      </>
    );
  } else {
    // Render login button
    navContent = (
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
        onClick={handleLogin}
      >
        Login
      </button>
    );
  }

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e5/L%26T.png?20141228172036"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/"
              className="text-gray-800 hover:bg-gray-50 focus:ring-2 focus:ring-gray-100 rounded-lg text-xl font-medium px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Home
            </Link>
            {navContent}
          </div>
        </div>
      </nav>
    </header>
  );
}

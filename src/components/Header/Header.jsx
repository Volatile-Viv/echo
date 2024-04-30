import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutBtn from "./LogoutBtn";
import { status } from "../../store/authSlice";

function Header() {
  const authStatus = useSelector(status);
  const navItems = [
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "About",
      slug: "/about",
      active: true,
    },
    {
      name: "GitHub",
      slug: "https://github.com/volatile-viv/echo",
      active: true,
    },
  ];

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <div className="mr-4">
            <Link to="/" className="text-xl font-semibold">
              ECHO
            </Link>
          </div>
          <ul className="flex">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name} className="mr-4">
                    <Link
                      to={item.slug}
                      className="px-3 py-1.5 rounded hover:bg-gray-800"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
            )}
            {authStatus && <LogoutBtn />}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

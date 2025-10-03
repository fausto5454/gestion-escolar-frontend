import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Layout = ({ children, menuItems }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Top bar for mobile view */}
      <div className="fixed top-0 left-0 right-0 bg-slate-800 text-white p-4 flex justify-between items-center md:hidden z-20">
        <h2 className="text-xl font-bold">Menú</h2>
        <button onClick={toggleSidebar} className="p-2 focus:outline-none">
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`w-64 bg-slate-800 text-white shadow-lg flex-col p-6 
                    fixed top-0 left-0 bottom-0 z-10 transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:flex md:translate-x-0`}
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-100">Menú</h2>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                {item.isButton ? (
                  <button
                    onClick={() => {
                      item.action();
                      toggleSidebar();
                    }}
                    className=" text-center py-1 px-6 rounded-lg text-xs font-medium 
                              bg-red-600 hover:bg-red-500 transition-colors duration-200 
                              text-white shadow-sm"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    onClick={toggleSidebar}
                    className="group flex items-center py-2 px-4 rounded-md text-sm 
                               font-medium text-gray-300 hover:text-white 
                               hover:bg-slate-700 transition-colors duration-200"
                  >
                    <span className="ml-3">{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-4 md:p-8 pt-20 md:pt-8">
        <div className="bg-white p-6 rounded-lg shadow-md">{children}</div>
      </main>

      {/* Backdrop for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
        ></div>
      )}
    </div>
  );
};

export default Layout;
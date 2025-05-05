import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import FromLocalhostToProduction from "./pages/Blog/BlogDetail.jsx/from_localhost_to_production";

const ComingSoon = () => (
  <div className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white">
    <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
    <p className="text-lg text-gray-400">
      This page is under construction. Please check back later!
    </p>
  </div>
);

const App = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className={
        theme === "dark"
          ? "dark bg-gradient-to-br from-[#181a20] to-[#23272b] min-h-screen"
          : "bg-white min-h-screen"
      }
    >
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/blog/from_localhost_to_production"
            element={<FromLocalhostToProduction />}
          />
          {/* Add more blog detail routes as needed */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
        {/* Light/Dark Toggle Button */}
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="fixed bottom-6 right-6 z-50 bg-white/80 dark:bg-black/80 border border-gray-300 dark:border-white/10 rounded-full p-3 shadow-lg hover:scale-110 transition-all"
          aria-label="Toggle light/dark mode"
        >
          {theme === "dark" ? (
            // Sun icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41"
              />
            </svg>
          ) : (
            // Moon icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
              />
            </svg>
          )}
        </button>
      </BrowserRouter>
    </div>
  );
};

export default App;

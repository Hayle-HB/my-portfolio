import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import { profile } from "../../data/profile";

const navItems = [
  { name: "AI work", to: "/#ai-work", match: (p, h) => p === "/" && h === "#ai-work" },
  { name: "Experience", to: "/#experience", match: (p, h) => p === "/" && h === "#experience" },
  { name: "Projects", to: "/projects", match: (p) => p.startsWith("/projects") },
  { name: "Writing", to: "/blog", match: (p) => p.startsWith("/blog") },
  { name: "Contact", to: "/contact-me", match: (p) => p === "/contact-me" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname, hash]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-200 ${
        scrolled || open
          ? "border-b border-rule bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-paper/0"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1180px] items-center justify-between px-5 sm:px-8">
        <Link to="/" className="wide whitespace-nowrap py-2.5 text-[1.0625rem] font-bold tracking-[-0.01em]" aria-label="Home">
          {profile.firstName} <span className="font-normal">{profile.lastName}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => {
              const active = item.match(pathname, hash);
              return (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    aria-current={active ? "page" : undefined}
                    className={`tap whitespace-nowrap text-[0.9375rem] transition-colors ${
                      active ? "font-semibold text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-ink px-4 text-[0.875rem] font-semibold text-paper transition-colors hover:bg-signal-dark"
          >
            <FiDownload aria-hidden="true" />
            Résumé
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2.5 flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Main"
        className={`lg:hidden ${open ? "block" : "hidden"} max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-rule bg-paper shadow-[0_12px_24px_-12px_rgb(13_27_42/0.18)]`}
      >
        <ul className="mx-auto max-w-[1180px] px-5 py-4 sm:px-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link to={item.to} className="block py-3 text-[1.0625rem] font-medium">
                {item.name}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-3 text-[0.9375rem] font-semibold text-paper"
            >
              <FiDownload aria-hidden="true" />
              Download résumé
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

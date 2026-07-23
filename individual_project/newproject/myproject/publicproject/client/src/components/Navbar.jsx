import { Link, useLocation } from "react-router-dom";
import { Shield, Menu, X, LogOut, User as UserIcon } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  const navLinks = [
    { to: "/home", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  const isAdmin = user?.role === "admin";
  const dashboardPath = isAdmin ? "/admin/dashboard" : "/user/dashboard";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-xl text-slate-900">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/home" className="inline-flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-sm group-hover:shadow-blue-200 transition-shadow duration-300">
            <img src="logo.png" alt="Logo" />
          </div>
          <div className="hidden sm:block">
            <span className="text-base font-bold text-slate-900 leading-none tracking-tight">
              PublicService
            </span>
            <p className="text-[11px] text-slate-400 leading-none mt-0.5 font-medium">
              {isAdmin ? "Admin Control Panel" : "Secure Gov Portal"}
            </p>
          </div>
        </Link>

        {/* Desktop nav — only when authenticated */}
        {isAuthenticated && (
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-150 ${
                    pathname === to
                      ? "bg-blue-50 text-blue-700 font-semibold"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <Link
                to={dashboardPath}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                  isAdmin
                    ? "bg-violet-50 border border-violet-200 text-violet-700 hover:bg-violet-100"
                    : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                }`}
              >
                <UserIcon className={`h-4 w-4 ${isAdmin ? "text-violet-600" : "text-blue-600"}`} />
                {isAdmin ? "Admin Dashboard" : user?.name ? user.name.split(" ")[0] : "Dashboard"}
              </Link>

              <button
                onClick={logout}
                className="flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-red-50 hover:border-red-200 hover:text-red-600 transition-all duration-200"
              >
                <LogOut className="h-3.5 w-3.5" /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors px-3 py-2">
                Sign in
              </Link>
              <Link
                to="/register"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:shadow-md hover:from-blue-700 hover:to-blue-800 transition-all duration-200 hover:-translate-y-0.5"
              >
                Get started →
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden rounded-lg p-2 text-slate-500 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 pb-6 pt-4 space-y-1 animate-fade-in">
          {isAuthenticated &&
            navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
              >
                {label}
              </Link>
            ))}
          <div className="pt-4 flex flex-col gap-2">
            {isAuthenticated ? (
              <>
                <Link
                  to={dashboardPath}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl border border-slate-200 py-2.5 text-center text-sm font-semibold text-slate-800"
                >
                  Dashboard ({user?.name})
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setOpen(false);
                  }}
                  className="w-full rounded-xl bg-red-50 text-red-600 border border-red-200 py-2.5 text-center text-sm font-semibold"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)} className="block rounded-xl border border-slate-200 py-2.5 text-center text-sm font-semibold text-slate-700">Sign in</Link>
                <Link to="/register" onClick={() => setOpen(false)} className="block rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 py-2.5 text-center text-sm font-semibold text-white">Get started</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
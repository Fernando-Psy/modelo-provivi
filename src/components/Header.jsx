import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Features", href: isHomePage ? "#features" : "/#features" },
    { name: "About", href: isHomePage ? "#about" : "/#about" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact" },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-primary-600">
              AgroTech
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => {
              const isActive =
                item.href === "/" ? location.pathname === "/" : false;

              if (item.href.includes("#")) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    isActive ? "text-primary-600" : "text-gray-700"
                  } hover:text-primary-600 transition-colors duration-200 font-medium`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={isHomePage ? "#contact" : "/#contact"}
              className="btn-primary"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navigation.map((item) => {
              if (item.href.includes("#")) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="px-4 pt-2">
              <a
                href={isHomePage ? "#contact" : "/#contact"}
                className="btn-primary w-full block text-center"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;

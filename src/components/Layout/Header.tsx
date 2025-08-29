import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT US", path: "/contact" },
    { name: "COURSES", path: "/courses" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-piano-cream/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-piano-gold rounded-full flex items-center justify-center">
              <span className="text-piano-dark font-serif text-xl font-bold">R</span>
            </div>
            <div>
              <div className="font-serif text-piano-dark text-lg font-semibold tracking-wider">
                PIANO BY REEMA
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-sans text-sm font-medium tracking-wider transition-colors hover:text-piano-gold ${
                  location.pathname === item.path
                    ? "text-piano-gold"
                    : "text-piano-dark"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Phone number */}
          <div className="hidden lg:flex items-center space-x-2 text-piano-dark">
            <div className="text-xs font-sans">RESERVATION</div>
            <Phone className="w-4 h-4" />
            <a 
              href="tel:+917827444093" 
              className="text-sm font-medium hover:text-piano-gold transition-colors"
            >
              917827444093
            </a>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-piano-dark" />
            ) : (
              <Menu className="h-6 w-6 text-piano-dark" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-piano-cream/95 backdrop-blur-sm border-t border-piano-light">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block font-sans text-sm font-medium tracking-wider transition-colors hover:text-piano-gold ${
                    location.pathname === item.path
                      ? "text-piano-gold"
                      : "text-piano-dark"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-piano-light">
                <div className="flex items-center space-x-2 text-piano-dark">
                  <Phone className="w-4 h-4" />
                  <a 
                    href="tel:+917827444093" 
                    className="text-sm font-medium hover:text-piano-gold transition-colors"
                  >
                    +91 7827444093
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
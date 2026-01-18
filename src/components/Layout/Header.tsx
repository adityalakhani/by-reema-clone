import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "INSTRUCTORS", path: "/instructors" },
    { name: "GALLERY", path: "/gallery" },
    { name: "CONTACT US", path: "/contact" },
    { name: "COURSES", path: "/courses" }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-piano-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-glow">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden shadow-elegant transition-all duration-500 ${
              isScrolled ? 'bg-white' : 'bg-white'
            }`}>
              <img 
                src={logo} 
                alt="Raama Music School Logo" 
                className="w-full h-full object-contain p-1 scale-125"
                loading="lazy"
              />
            </div>
            <div>
              <div className={`font-display text-lg font-semibold tracking-wider transition-colors duration-500 ${
                isScrolled ? 'text-piano-cream' : 'text-white'
              }`}>
                Raama Music School
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link font-sans text-[15px] font-normal tracking-wider transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-piano-gold active"
                    : isScrolled ? "text-piano-cream hover:text-piano-gold" : "text-white hover:text-piano-gold"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Phone number */}
          <div className={`hidden lg:flex items-center space-x-2 transition-colors duration-300 ${
            isScrolled ? 'text-piano-cream' : 'text-white'
          }`}>
            <div className="text-xs font-sans">RESERVATION</div>
            <Phone className="w-4 h-4" />
            <a 
              href="tel:+917827444093" 
              className="text-[15px] font-normal hover:text-piano-gold transition-colors"
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
              <X className={`h-6 w-6 transition-colors ${isScrolled ? 'text-piano-cream' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 transition-colors ${isScrolled ? 'text-piano-cream' : 'text-white'}`} />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-piano-dark/95 backdrop-blur-sm border-t border-piano-light">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block font-sans text-[15px] font-normal tracking-wider transition-colors hover:text-piano-gold ${
                    location.pathname === item.path
                      ? "text-piano-gold"
                      : "text-piano-cream"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-piano-light">
                <div className="flex items-center space-x-2 text-piano-cream">
                  <Phone className="w-4 h-4" />
                  <a 
                    href="tel:+917827444093" 
                    className="text-[15px] font-normal hover:text-piano-gold transition-colors"
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
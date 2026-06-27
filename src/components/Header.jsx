import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const LOGO_URL = "/assets/gripton_safety_logo.png";

const PRODUCT_LINKS = [
  {
    label: "One Way Cargo Lashing",
    path: "/products/one-way-cargo-lashing",
  },
  {
    label: "Ratchet Lashing",
    path: "/products/ratchet-lashing",
  },
  {
    label: "Lifting Slings",
    path: "/products/lifting-slings",
  },
  {
    label: "Hardware",
    path: "/products/hardware",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        
        {/* Logo */}
        <Link to="/">
          <img
            src={LOGO_URL}
            alt="Gripton Safety"
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className={`font-medium ${
              location.pathname === "/"
                ? "text-primary"
                : "text-foreground"
            }`}
          >
            Home
          </Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 font-medium">
              Products
              <ChevronDown className="w-4 h-4" />
            </button>

          <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
            <div className="w-72 bg-white rounded-xl shadow-xl border">
                    
              {PRODUCT_LINKS.map((product) => (
                <Link
                  key={product.path}
                  to={product.path}
                  className="block px-5 py-3 hover:bg-slate-50 transition"
                >
                  {product.label}
                </Link>
              ))}
          
            </div>
          </div>

          </div>

          <Link
            to="/about"
            className={`font-medium ${
              location.pathname === "/about"
                ? "text-primary"
                : "text-foreground"
            }`}
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className={`font-medium ${
              location.pathname === "/contact"
                ? "text-primary"
                : "text-foreground"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="text-right">
            <a
              href="tel:+919309272870"
              className="block text-sm font-semibold text-accent"
            >
              +91 9309272870
            </a>

            <a
              href="tel:+918263066892"
              className="block text-sm font-semibold text-accent"
            >
              +91 8263066892
            </a>
          </div>

          <a
            href="https://wa.me/919309272870"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary text-white">
              <Phone className="w-4 h-4 mr-2" />
              Get a Quote
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 pb-4">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block py-3"
          >
            Home
          </Link>

          <div className="py-3 font-semibold">
            Products
          </div>

          {PRODUCT_LINKS.map((product) => (
            <Link
              key={product.path}
              to={product.path}
              onClick={() => setOpen(false)}
              className="block py-2 pl-4 text-sm"
            >
              {product.label}
            </Link>
          ))}

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="block py-3"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block py-3"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
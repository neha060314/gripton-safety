import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LOGO_URL = "assets/gripton_safety_logo.png";

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Web Sling Belt', path: '/web-sling' },
  { label: 'Lashing Belt', path: '/lashing-belt' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={LOGO_URL} alt="Gripton Safety" className="h-14 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-inter text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact */}
        <div className="hidden md:flex items-center gap-4">
          <div className="text-right">
            <a
              href="tel:+919309272870"
              className="block text-sm font-semibold text-accent hover:text-primary transition-colors"
            >
              +91 9309272870
            </a>
            <a
              href="tel:+918263066892"
              className="block text-sm font-semibold text-accent hover:text-primary transition-colors"
            >
              +91 8263066892
            </a>
          </div>

          <a
            href="https://wa.me/919309272870"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white font-poppins font-semibold px-6">
              <Phone className="w-4 h-4 mr-2" />
              Get a Quote
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 pb-4 space-y-2">

          {NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block py-3 font-inter text-sm font-medium border-b border-border/50 ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-4 space-y-2">
            <a
              href="tel:+919309272870"
              className="block text-sm font-medium text-accent"
            >
              +91 9309272870
            </a>

            <a
              href="tel:+918263066892"
              className="block text-sm font-medium text-accent"
            >
              +91 8263066892
            </a>

            <a
              href="mailto:griptonsafety@gmail.com"
              className="block text-sm text-muted-foreground"
            >
              griptonsafety@gmail.com
            </a>
          </div>

          <a
            href="https://wa.me/919309272870"
            target="_blank"
            rel="noopener noreferrer"
            className="block pt-3"
          >
            <Button className="w-full bg-primary text-white font-poppins font-semibold">
              Get a Quote
            </Button>
          </a>
        </div>
      )}
    </header>
  );
}
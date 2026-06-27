import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const LOGO_URL = "/assets/gripton_safety_logo.png";

export default function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & About */}
          <div>
            <img
              src={LOGO_URL}
              alt="Gripton Safety"
              className="h-16 w-auto mb-4 object-contain"
            />

            <p className="font-inter text-sm text-slate-400 leading-relaxed">
              Premium industrial lifting, lashing and cargo securing
              solutions. Engineered for safety, built for performance.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">

              <a
                href="https://www.instagram.com/gripton_safety/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://facebook.com/YOUR_FACEBOOK"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/company/YOUR_LINKEDIN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-bold text-sm uppercase tracking-wider mb-4 text-primary">
              Quick Links
            </h4>

            <div className="space-y-3">

              <Link
                to="/"
                className="block font-inter text-sm text-slate-400 hover:text-primary transition-colors"
              >
                Home
              </Link>

              <Link
                to="/products"
                className="block font-inter text-sm text-slate-400 hover:text-primary transition-colors"
              >
                Products
              </Link>

              <Link
                to="/about"
                className="block font-inter text-sm text-slate-400 hover:text-primary transition-colors"
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className="block font-inter text-sm text-slate-400 hover:text-primary transition-colors"
              >
                Contact Us
              </Link>

            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-poppins font-bold text-sm uppercase tracking-wider mb-4 text-primary">
              Contact
            </h4>

            <div className="space-y-4 font-inter text-sm text-slate-400">

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />

                <div>
                  <a
                    href="tel:+919309272870"
                    className="block hover:text-primary transition-colors"
                  >
                    +91 9309272870
                  </a>

                  <a
                    href="tel:+918263066892"
                    className="block hover:text-primary transition-colors"
                  >
                    +91 8263066892
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />

                <a
                  href="mailto:griptonsafety@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  griptonsafety@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />

                <span>
                  S. Nos. 392, Plot No. 69,
                  Alyali Near Microwire Company,
                  Palghar West, Palghar,
                  Maharashtra – 401404
                </span>
              </div>

            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-poppins font-bold text-sm uppercase tracking-wider mb-4 text-primary">
              Working Hours
            </h4>

            <div className="space-y-3 font-inter text-sm text-slate-400">

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />

                <div>
                  <p>Mon – Sat: 9:00 AM – 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-700 text-center font-inter text-sm text-slate-500">
          © {new Date().getFullYear()} Gripton Safety. All rights reserved.
          <br />
          Engineered for Safety. Built for Strength. Trusted for Every Journey.
        </div>

      </div>
    </footer>
  );
}
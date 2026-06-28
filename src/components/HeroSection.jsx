import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-orange-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-primary" />

              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Secure. Strong. Reliable.
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-accent">
              Premium Industrial{" "}
              <span className="text-primary">
                Lifting & Lashing
              </span>{" "}
              Solutions
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Gripton Safety manufactures premium quality polyester web
              slings, ratchet lashing belts, cargo securing systems and
              industrial lifting accessories engineered for maximum
              safety, durability and reliable performance across
              construction, logistics, shipping and heavy industries.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              {/* FIXED BUTTON */}

              <Link to="/products">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white px-8 h-14 font-bold"
                >
                  Explore Products

                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-white px-8 h-14 font-bold"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl border bg-white">

              <img
                src="/assets/homepage-banner.png"
                alt="Industrial Lifting Equipment"
                className="w-full h-full object-cover"
              />

            </div>

            <div className="absolute -bottom-5 -left-5 bg-primary text-white rounded-xl px-6 py-4 shadow-xl">

              <h3 className="text-3xl font-bold">
                7:1
              </h3>

              <p className="text-sm">
                Safety Factor
              </p>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
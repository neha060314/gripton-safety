import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";

import { motion } from "framer-motion";
import { CheckCircle, Wrench } from "lucide-react";

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const FEATURES = [
  "High Tenacity Polyester Webbing",
  "Heavy Duty Ratchet Buckle",
  "Low Elongation Under Load",
  "Abrasion Resistant",
  "Weather & UV Resistant",
  "Reinforced Stitching",
  "Easy Tensioning & Release",
  "Available in Multiple Hook Options",
  "Manufactured as per International Standards",
  "Custom Length & Branding Available",
];

const APPLICATIONS = [
  "Truck Cargo Securing",
  "Container Lashing",
  "Logistics & Transportation",
  "Warehousing",
  "Construction Equipment",
  "Steel & Pipe Transport",
  "Machinery Transportation",
  "Industrial Cargo Handling",
];

const SPECS = [
  { label: "Material", value: "High Tenacity Polyester Webbing" },
  { label: "Ratchet Type", value: "Heavy Duty Steel Ratchet" },
  { label: "Width", value: "25mm / 35mm / 50mm / 75mm / 100mm" },
  { label: "Length", value: "Custom Available" },
  { label: "Usage", value: "Reusable" },
  { label: "Hook Options", value: "J Hook / Double J Hook" },
  { label: "Standard", value: "Industrial Grade" },
  { label: "Application", value: "Cargo Securing & Transportation" },
];

const IMAGES = {
  hero: "/assets/lashing_belt.webp",
  applications: "/assets/ratchet_lashing_application.png",
  sizes: "/assets/ratchet_lashing_sizes.png",
};

export default function RatchetLashing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fade}>
              <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">
                Cargo Securing Solutions
              </span>

              <h1 className="mt-3 font-poppins font-extrabold text-4xl sm:text-5xl text-accent">
                Ratchet <span className="text-primary">Lashing Belts</span>
              </h1>

              <p className="mt-6 font-inter text-lg text-muted-foreground leading-relaxed">
                GRIPTON SAFETY manufactures premium quality Polyester Ratchet
                Lashing Belts designed for safe cargo securing during
                transportation, warehousing, logistics, shipping and industrial
                applications.
              </p>

              <p className="mt-4 font-inter text-base text-muted-foreground leading-relaxed">
                Manufactured using high-tenacity polyester webbing and heavy-duty
                ratchet mechanisms to ensure maximum load restraint, durability
                and reliability under demanding operating conditions.
              </p>

              <div className="mt-6 inline-block bg-primary/10 text-primary font-semibold px-5 py-3 rounded-full">
                Engineered for Safety. Built for Strength. Trusted for Every Journey.
              </div>
            </motion.div>

            <motion.div {...fade}>
              <img
                src={IMAGES.hero}
                alt="Ratchet Lashing"
                className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Features
            </span>

            <h2 className="mt-3 text-4xl font-bold text-accent">
              Product Features
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {FEATURES.map((feature) => (
              <div
                key={feature}
                className="flex gap-3 bg-slate-50 rounded-xl p-5 border"
              >
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Applications
            </span>

            <h2 className="mt-3 text-4xl font-bold text-accent">
              Industrial Applications
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {APPLICATIONS.map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl p-5 border text-center"
              >
                <Wrench className="mx-auto mb-2 text-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Specifications
            </span>

            <h2 className="mt-3 text-4xl font-bold text-accent">
              Product Specifications
            </h2>
          </div>

          <div className="rounded-2xl border overflow-hidden">
            {SPECS.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex justify-between px-6 py-4 ${
                  index % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <span className="font-semibold">{spec.label}</span>
                <span>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Product Gallery
            </span>

            <h2 className="mt-3 text-4xl font-bold text-accent">
              Applications & Product Range
            </h2>
          </div>

          <div className="space-y-10">
            <img
              src={IMAGES.applications}
              alt="Ratchet Lashing Applications"
              className="w-full rounded-2xl shadow-xl"
            />

            <img
              src={IMAGES.sizes}
              alt="Ratchet Lashing Sizes"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
}
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";

import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Truck,
  Package,
  Gauge,
} from "lucide-react";

import { Link } from "react-router-dom";

const fade = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const FEATURES = [
  {
    title: "High Strength",
    desc: "Manufactured using premium high-tenacity polyester webbing.",
    icon: ShieldCheck,
  },
  {
    title: "Heavy Duty Ratchet",
    desc: "Engineered with industrial-grade steel ratchet mechanisms.",
    icon: Package,
  },
  {
    title: "Reliable Transportation",
    desc: "Ensures secure cargo restraint during transportation.",
    icon: Truck,
  },
  {
    title: "Long Service Life",
    desc: "Abrasion, weather and UV resistant for extended durability.",
    icon: Gauge,
  },
];

const APPLICATIONS = [
  "Truck Cargo Securing",
  "Container Lashing",
  "Logistics & Transportation",
  "Warehousing",
  "Construction Equipment",
  "Industrial Cargo",
];

const SPECS = [
  { label: "Material", value: "High Tenacity Polyester Webbing" },
  { label: "Ratchet", value: "Heavy Duty Steel" },
  { label: "Available Widths", value: "25mm / 35mm / 50mm / 75mm / 100mm" },
  { label: "Length", value: "Custom Available" },
  { label: "Usage", value: "Reusable" },
  { label: "Hook Options", value: "J Hook / Double J Hook" },
  { label: "Application", value: "Cargo Securing" },
];

export default function RatchetLashing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO */}

      <section className="pt-32 pb-24 bg-gradient-to-br from-slate-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fade}>
              <span className="uppercase tracking-[4px] text-primary font-semibold">
                Cargo Securing Solutions
              </span>

              <h1 className="mt-5 text-5xl lg:text-6xl font-extrabold text-accent">
                Ratchet
                <span className="text-primary"> Lashing Belts</span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-muted-foreground">
                Gripton Safety manufactures premium Polyester Ratchet Lashing
                Belts designed to secure cargo safely during transportation,
                logistics, warehousing and industrial operations. Built with
                high-tenacity polyester webbing and heavy-duty ratchet
                mechanisms, they provide reliable load restraint for demanding
                environments.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {[
                  "Reusable",
                  "Heavy Duty",
                  "Industrial Grade",
                  "High Tensile Polyester",
                ].map((item) => (
                  <span
                    key={item}
                    className="bg-orange-50 text-primary px-5 py-2 rounded-full font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <Link to="/contact">
                <button className="mt-10 bg-primary hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl font-semibold flex items-center">
                  Request Quote
                  <ArrowRight className="ml-3" />
                </button>
              </Link>
            </motion.div>

            <motion.div {...fade}>
              <div className="bg-white rounded-[32px] shadow-2xl p-8">
                <img
                  src="/assets/ratchet_lashing2.jpeg"
                  alt="Ratchet Lashing"
                  className="w-full h-[500px] object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[4px] text-primary font-semibold">
              Product Advantages
            </span>

            <h2 className="mt-4 text-5xl font-bold text-accent">
              Why Choose Ratchet Lashing?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  {...fade}
                  className="bg-slate-50 rounded-3xl p-8 border hover:shadow-xl transition duration-500"
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-accent">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-muted-foreground leading-7">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              ["5", "Width Options"],
              ["2", "Hook Types"],
              ["Custom", "Lengths"],
              ["100%", "Quality Checked"],
            ].map(([number, title]) => (
              <div
                key={title}
                className="bg-primary rounded-2xl text-center p-8 text-white"
              >
                <h3 className="text-4xl font-bold">{number}</h3>

                <p className="mt-2">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fade}>
              <img
                src="/assets/ratchet_lashing_application.png"
                alt="Ratchet Lashing Applications"
                className="rounded-[32px] shadow-xl"
              />
            </motion.div>

            <motion.div {...fade}>
              <span className="uppercase tracking-[4px] text-primary font-semibold">
                Applications
              </span>

              <h2 className="mt-5 text-4xl font-bold text-accent">
                Suitable For Multiple Industries
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Ratchet Lashing Belts are extensively used for safe
                transportation of machinery, industrial equipment, containers
                and commercial cargo across multiple industries.
              </p>

              <div className="mt-10 space-y-5">
                {APPLICATIONS.map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <CheckCircle className="text-primary" />

                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= AVAILABLE CONFIGURATIONS ================= */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[4px] text-primary font-semibold">
              Product Configurations
            </span>

            <h2 className="mt-4 text-5xl font-bold text-accent">
              Available Configurations
            </h2>

            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Gripton Safety Ratchet Lashing Belts are available in multiple
              width options, hook configurations and custom lengths to suit
              various cargo securing applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Width Options */}

            <div className="bg-slate-50 rounded-3xl border p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-accent mb-8">
                Available Widths
              </h3>

              <div className="flex flex-wrap gap-4">
                {["25 mm", "35 mm", "50 mm", "75 mm", "100 mm"].map((size) => (
                  <div
                    key={size}
                    className="bg-primary text-white rounded-full px-5 py-3 font-semibold"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Hook Options */}

            <div className="bg-slate-50 rounded-3xl border p-8 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-accent mb-8">
                Hook Options
              </h3>

              <div className="space-y-5">
                {["J Hook", "Double J Hook"].map((hook) => (
                  <div key={hook} className="flex items-center gap-4">
                    <CheckCircle className="text-primary" />

                    <span className="text-lg">{hook}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Available Options */}

            <div className="bg-gradient-to-br from-primary to-orange-500 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold">Available Options</h3>

              <div className="mt-8 space-y-5">
                {[
                  "Custom Length Available",
                  "Industrial Grade Polyester Webbing",
                  "Multiple Width Options",
                  "Heavy Duty Ratchet Mechanism",
                  "Bulk Supply Available",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <CheckCircle />

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPECIFICATIONS ================= */}

      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="uppercase tracking-[4px] text-primary font-semibold">
              Technical Details
            </span>

            <h2 className="mt-4 text-5xl font-bold text-accent">
              Product Specifications
            </h2>

            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our Ratchet Lashing Belts are manufactured with premium quality
              materials and engineered to provide reliable performance across a
              wide range of industrial cargo securing applications.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-200 bg-white">
            <table className="w-full">
              <tbody>
                {SPECS.map((item, index) => (
                  <tr
                    key={item.label}
                    className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                  >
                    <td className="px-8 py-6 font-semibold text-accent border-b">
                      {item.label}
                    </td>

                    <td className="px-8 py-6 text-muted-foreground border-b">
                      {item.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="py-24 bg-gradient-to-r from-primary to-orange-500">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <span className="uppercase tracking-[4px] font-semibold">
            Looking For Cargo Securing Solutions?
          </span>

          <h2 className="mt-5 text-5xl font-extrabold">
            Secure Every Load With Confidence
          </h2>

          <p className="mt-8 text-lg leading-8 opacity-95 max-w-3xl mx-auto">
            Gripton Safety provides high-performance Ratchet Lashing Belts for
            logistics, transportation, warehousing and industrial cargo securing
            applications. Our products are engineered for durability, safety and
            long-lasting performance.
          </p>

          <Link to="/contact">
            <button className="mt-10 bg-white text-primary hover:bg-slate-100 transition-all duration-300 px-10 py-4 rounded-xl font-bold text-lg flex items-center mx-auto">
              Request a Quote
              <ArrowRight className="ml-3" />
            </button>
          </Link>
        </div>
      </section>

      <ContactCTA />

      <Footer />
    </div>
  );
}

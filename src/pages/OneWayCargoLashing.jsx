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
  "Single Use Cargo Securing",
  "High Tensile Polyester",
  "Cost Effective Solution",
  "Easy Installation",
  "Export Container Safe",
  "Lightweight Design",
  "Weather Resistant",
  "Reliable Cargo Restraint",
];

const APPLICATIONS = [
  "Export Containers",
  "Ocean Freight",
  "Road Transportation",
  "Logistics Industry",
  "Warehouse Operations",
  "Cargo Securing",
  "International Shipping",
  "Heavy Goods Transportation",
];

const SPECS = [
  { label: "Material", value: "High Strength Polyester Webbing" },
  { label: "Type", value: "One Way Cargo Lashing" },
  { label: "Usage", value: "Single Use" },
  { label: "Breaking Strength", value: "Custom Available" },
  { label: "Application", value: "Cargo Securing" },
  { label: "Length", value: "As Per Requirement" },
  { label: "Color", value: "Custom Available" },
  { label: "Packaging", value: "Export Grade Packaging" },
];

const PRODUCT_IMAGE = "/assets/one_way_cargo.jpg";

const APPLICATION_IMAGE =
  "/assets/one_way_cargo_applications.png";

export default function OneWayCargoLashing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <motion.div {...fade}>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Cargo Securing Solutions
              </span>

              <h1 className="mt-3 text-5xl font-extrabold text-accent">
                One Way
                <span className="text-primary"> Cargo Lashing</span>
              </h1>

              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Gripton Safety One Way Cargo Lashing Systems are designed
                to secure cargo safely during transportation and export
                shipments. Manufactured using premium polyester webbing,
                they provide a reliable and economical cargo restraint
                solution.
              </p>

              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Widely used in export containers, logistics operations,
                warehousing and international shipping where safe load
                securing is critical.
              </p>
            </motion.div>

            <motion.div {...fade}>
              <img
                src={PRODUCT_IMAGE}
                alt="One Way Cargo Lashing"
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

          <div className="grid md:grid-cols-4 gap-4">

            {FEATURES.map((feature) => (
              <div
                key={feature}
                className="flex gap-3 p-5 bg-slate-50 rounded-xl border"
              >
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span>{feature}</span>
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

          <div className="grid md:grid-cols-4 gap-4">

            {APPLICATIONS.map((item) => (
              <div
                key={item}
                className="p-5 bg-white rounded-xl border text-center"
              >
                <Wrench className="mx-auto mb-2 text-primary" />
                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-12">

            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Product Gallery
            </span>

            <h2 className="mt-3 text-4xl font-bold text-accent">
              One Way Cargo Lashing Applications
            </h2>

            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
              Our One Way Cargo Lashing Systems are widely used for
              securing export cargo, shipping containers, palletized
              goods, industrial equipment and heavy loads during
              transportation and storage.
            </p>

          </div>

          <motion.div {...fade}>
            <img
              src={APPLICATION_IMAGE}
              alt="One Way Cargo Lashing Applications"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>

        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">

          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Specifications
            </span>

            <h2 className="mt-3 text-4xl font-bold text-accent">
              Product Specifications
            </h2>
          </div>

          <div className="rounded-xl border overflow-hidden bg-white">

            {SPECS.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex justify-between px-6 py-4 ${
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-slate-50"
                }`}
              >
                <span className="font-semibold">
                  {spec.label}
                </span>

                <span>
                  {spec.value}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
}
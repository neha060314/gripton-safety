import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";

import { motion } from "framer-motion";
import {
  CheckCircle,
  ArrowRight,
  Package,
  ShieldCheck,
  Truck,
  Globe,
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
    title: "High Tensile Strength",
    desc: "Manufactured using premium polyester webbing for maximum cargo restraint.",
    icon: ShieldCheck,
  },
  {
    title: "Cost Effective",
    desc: "Designed for single-use applications, reducing logistics costs.",
    icon: Package,
  },
  {
    title: "Easy Installation",
    desc: "Quick and simple installation without requiring complex tools.",
    icon: Truck,
  },
  {
    title: "Global Logistics",
    desc: "Trusted for export containers, shipping, and international freight.",
    icon: Globe,
  },
];

const APPLICATIONS = [
  "Export Containers",
  "Ocean Freight",
  "Road Transportation",
  "Warehouse Logistics",
  "Heavy Machinery",
  "Industrial Cargo",
];

const SPECS = [
  { label: "Material", value: "High Strength Polyester Webbing" },
  { label: "Product Type", value: "One Way Cargo Lashing" },
  { label: "Usage", value: "Single Use" },
  { label: "Breaking Strength", value: "Available on Request" },
  { label: "Length", value: "Customizable" },
  { label: "Packaging", value: "Export Grade Packaging" },
];

export default function OneWayCargoLashing() {
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

              <h1 className="mt-5 text-5xl lg:text-6xl font-extrabold text-accent leading-tight">

                One Way
                <span className="text-primary"> Cargo Lashing</span>

              </h1>

              <p className="mt-8 text-lg leading-8 text-muted-foreground">

                Gripton Safety One Way Cargo Lashing Systems provide a
                dependable and economical solution for securing cargo
                during transportation. Manufactured using premium
                polyester webbing, they ensure excellent load stability
                for export containers, logistics operations, and
                industrial freight movement.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link to="/contact">

                  <button className="bg-primary hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl font-semibold flex items-center">

                    Request Quote

                    <ArrowRight className="ml-3" />

                  </button>

                </Link>

              </div>

            </motion.div>

            <motion.div {...fade}>

              <div className="bg-white rounded-[32px] shadow-2xl p-8">

                <img
                  src="/assets/one_way_cargo_lashing.png"
                  alt="One Way Cargo Lashing"
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

              Why Choose One Way Cargo Lashing?

            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground leading-8">

              Designed for safe cargo transportation, our One Way Cargo
              Lashing systems combine strength, durability and ease of
              installation to provide reliable cargo restraint across
              industrial logistics applications.

            </p>

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

        </div>

      </section>

      {/* APPLICATIONS */}

      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div {...fade}>

              <img
                src="/assets/one_way_cargo_applications.png"
                alt="Applications"
                className="rounded-[32px] shadow-xl"
              />

            </motion.div>

            <motion.div {...fade}>

              <span className="uppercase tracking-[4px] text-primary font-semibold">

                Applications

              </span>

              <h2 className="mt-5 text-4xl font-bold text-accent">

                Ideal For Multiple Industrial Applications

              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">

                Gripton Safety One Way Cargo Lashing is widely used
                across logistics, warehousing and international shipping
                industries where secure cargo transportation is essential.

              </p>

              <div className="mt-10 space-y-5">

                {APPLICATIONS.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <CheckCircle className="text-primary" />

                    <span className="text-lg">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= TECHNICAL SPECIFICATIONS ================= */}

      <section className="py-24 bg-white">

        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-14">

            <span className="uppercase tracking-[4px] text-primary font-semibold">

              Technical Details

            </span>

            <h2 className="mt-4 text-5xl font-bold text-accent">

              Product Specifications

            </h2>

            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">

              Manufactured using premium quality polyester webbing,
              our One Way Cargo Lashing systems are available in
              different configurations to suit various cargo
              securing requirements.

            </p>

          </div>

          <div className="overflow-hidden rounded-3xl shadow-xl border border-slate-200">

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

            Need Custom Solutions?

          </span>

          <h2 className="mt-5 text-5xl font-extrabold">

            Secure Every Shipment
            With Confidence

          </h2>

          <p className="mt-8 text-lg leading-8 opacity-95 max-w-3xl mx-auto">

            Whether you're transporting industrial equipment,
            export cargo or heavy goods, Gripton Safety provides
            dependable One Way Cargo Lashing solutions designed
            for superior load restraint and transportation safety.

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
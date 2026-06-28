import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";

import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function RoundWebSling() {
  return (
    <>
      <Header />

      {/* ================= HERO SECTION ================= */}

      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <span className="uppercase tracking-widest text-primary font-semibold">
                Premium Lifting Solutions
              </span>

              <h1 className="mt-4 text-5xl lg:text-6xl font-extrabold text-accent leading-tight">
                Round
                <span className="text-primary"> Web Sling</span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-muted-foreground">

                Gripton Safety Round Web Slings are manufactured using
                endless high-strength polyester yarn enclosed inside a
                durable woven protective sleeve. Their seamless design
                provides superior flexibility, even load distribution,
                and excellent protection for delicate loads during heavy
                lifting operations.

              </p>

              <div className="mt-10">

                <Link to="/contact">

                  <button className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition flex items-center gap-2">

                    Request Quote

                    <ArrowRight size={18} />

                  </button>

                </Link>

              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <img
                src="/assets/round_sling_images.png"
                alt="Round Web Sling"
                className="rounded-3xl shadow-2xl w-full"
              />

            </motion.div>

          </div>

        </div>
      </section>

      {/* ================= PRODUCT OVERVIEW ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-5xl">

            <h2 className="text-4xl font-bold text-accent">

              Product Overview

            </h2>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">

              Round Web Slings are specially designed for lifting heavy,
              polished, painted, or delicate loads without causing
              surface damage. The endless polyester core distributes the
              load evenly while the outer protective sleeve minimizes
              abrasion and extends service life.

            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">

              Their lightweight construction makes handling easy,
              reduces operator fatigue, and improves workplace safety.
              These slings are widely used across construction,
              manufacturing, logistics, ports, shipyards, and heavy
              engineering industries.

            </p>

          </div>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold text-accent">

              Key Features

            </h2>

            <p className="mt-4 text-muted-foreground">

              Engineered for flexibility, durability and superior lifting
              performance.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "Endless Polyester Core",
              "Protective Outer Sleeve",
              "Excellent Flexibility",
              "Even Load Distribution",
              "High Strength Construction",
              "Lightweight Design",
              "Abrasion Resistant",
              "UV Resistant",
              "Moisture Resistant",
              "Suitable for Delicate Loads",
              "Available from 1 Ton to 100 Ton",
              "Safety Factor 7:1"
            ].map((feature) => (

              <div
                key={feature}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition"
              >

                <div className="flex gap-3">

                  <CheckCircle
                    className="text-primary mt-1"
                    size={22}
                  />

                  <p className="font-medium text-accent">

                    {feature}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= APPLICATIONS ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <img
                src="/assets/round_sling_application.png"
                alt="Round Sling Applications"
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <h2 className="text-4xl font-bold text-accent">

                Industrial Applications

              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">

                Round Web Slings are preferred wherever delicate,
                cylindrical or irregular-shaped loads require secure
                lifting without damaging their surface finish.

              </p>

              <div className="mt-8 space-y-5">

                {[
                  "Steel & Metal Industries",
                  "Wind Energy Projects",
                  "Power Plants",
                  "Oil & Gas Industry",
                  "Shipbuilding & Marine",
                  "Heavy Machinery Installation",
                  "Construction Sites",
                  "Warehouses",
                  "Ports & Logistics",
                  "Infrastructure Projects"
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle
                      className="text-primary"
                      size={20}
                    />

                    <span className="text-lg">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= TECHNICAL SPECIFICATIONS ================= */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-accent">
              Technical Specifications
            </h2>

            <p className="mt-4 text-muted-foreground">
              Manufactured using premium polyester yarn in accordance
              with international lifting standards.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-lg">

            <table className="w-full bg-white">

              <thead className="bg-primary text-white">

                <tr>

                  <th className="py-4 px-6 text-left">
                    Specification
                  </th>

                  <th className="py-4 px-6 text-left">
                    Details
                  </th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">
                    Material
                  </td>
                  <td className="py-4 px-6">
                    High Tenacity Polyester Yarn
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">
                    Construction
                  </td>
                  <td className="py-4 px-6">
                    Endless Core with Protective Sleeve
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">
                    Safety Factor
                  </td>
                  <td className="py-4 px-6">
                    7:1
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">
                    Capacity
                  </td>
                  <td className="py-4 px-6">
                    1 Ton – 100 Ton
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">
                    Length
                  </td>
                  <td className="py-4 px-6">
                    Standard & Custom Sizes Available
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">
                    Temperature Range
                  </td>
                  <td className="py-4 px-6">
                    -40°C to +100°C
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 font-semibold">
                    Standard
                  </td>
                  <td className="py-4 px-6">
                    EN 1492-2
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>
      </section>

      {/* ================= ADVANTAGES ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold text-accent">
              Why Choose Round Web Slings?
            </h2>

            <p className="mt-4 text-muted-foreground">
              Designed for precision lifting and long-lasting performance.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Surface Protection",
                desc: "Soft outer sleeve protects painted, polished and delicate loads."
              },
              {
                title: "Flexible Design",
                desc: "Wraps easily around irregular and cylindrical loads."
              },
              {
                title: "Even Load Distribution",
                desc: "Endless polyester core distributes pressure uniformly."
              },
              {
                title: "Long Service Life",
                desc: "Durable sleeve minimizes abrasion and increases lifespan."
              }
            ].map((item) => (

              <div
                key={item.title}
                className="border rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >

                <CheckCircle
                  className="text-primary mb-5"
                  size={34}
                />

                <h3 className="text-2xl font-bold text-accent">
                  {item.title}
                </h3>

                <p className="mt-4 text-muted-foreground leading-7">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= SAFETY ================= */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4">

          <div className="max-w-5xl mx-auto">

            <h2 className="text-4xl font-bold text-center text-accent">
              Safety & Maintenance
            </h2>

            <div className="mt-12 grid md:grid-cols-2 gap-8">

              <div className="bg-white rounded-2xl p-8 shadow">

                <h3 className="text-2xl font-bold mb-5 text-accent">
                  Safe Usage
                </h3>

                <ul className="space-y-4">

                  <li>✔ Inspect the sling before every lift.</li>

                  <li>✔ Never exceed the rated Working Load Limit.</li>

                  <li>✔ Protect the sling from sharp edges.</li>

                  <li>✔ Avoid dragging the sling on rough surfaces.</li>

                  <li>✔ Replace damaged slings immediately.</li>

                </ul>

              </div>

              <div className="bg-white rounded-2xl p-8 shadow">

                <h3 className="text-2xl font-bold mb-5 text-accent">
                  Storage & Care
                </h3>

                <ul className="space-y-4">

                  <li>✔ Store in a cool and dry location.</li>

                  <li>✔ Avoid prolonged sunlight exposure.</li>

                  <li>✔ Keep away from corrosive chemicals.</li>

                  <li>✔ Clean with mild soap and water.</li>

                  <li>✔ Perform periodic inspections.</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="py-20 bg-primary text-white">

        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-5xl font-bold">

            Looking for Reliable Round Web Slings?

          </h2>

          <p className="mt-6 text-lg opacity-90">

            Gripton Safety provides premium quality Round Web Slings
            designed for safe, efficient and damage-free lifting in
            demanding industrial environments.

          </p>

          <Link
            to="/contact"
            className="inline-flex items-center mt-10 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
          >

            Request a Quote

            <ArrowRight className="ml-2" />

          </Link>

        </div>

      </section>

      <ContactCTA />

      <Footer />

    </>
  );
}
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";

import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function EyeToEye() {
  return (
    <>
      <Header />

      {/* ================= HERO ================= */}

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <span className="uppercase tracking-widest text-primary font-semibold">
                Polyester Web Sling
              </span>

              <h1 className="mt-4 text-5xl lg:text-6xl font-extrabold text-accent leading-tight">
                Eye to Eye
                <span className="text-primary"> Web Sling</span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-muted-foreground">

                Gripton Safety Eye to Eye Web Slings are manufactured
                using premium quality high-tenacity polyester webbing
                to provide safe, reliable and efficient lifting
                solutions for heavy industrial applications.

                Designed with reinforced lifting eyes on both ends,
                these slings offer exceptional strength while remaining
                lightweight, flexible and easy to handle.

              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <a href="/contact">

                  <button className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition flex items-center gap-2">

                    Request Quote

                    <ArrowRight size={18} />

                  </button>

                </a>

              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <img
                src="/assets/eye_to_eye_sling.jpeg"
                alt="Eye to Eye Web Sling"
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

              Eye to Eye Web Slings are one of the safest and most
              versatile lifting accessories used across numerous
              industries. Manufactured from high-strength polyester
              fibers, these slings provide superior lifting capacity
              while minimizing the risk of damaging delicate or painted
              loads.

            </p>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">

              Unlike traditional wire rope or chain slings, polyester
              web slings are lightweight, corrosion-resistant, and easy
              to transport. Their reinforced eyes ensure long service
              life and reliable performance even under demanding lifting
              conditions.

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

              Engineered for maximum safety and superior lifting
              performance.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              "High Tenacity Polyester Webbing",
              "Reinforced Wear Resistant Eyes",
              "Lightweight Construction",
              "Excellent Flexibility",
              "UV Resistant",
              "Abrasion Resistant",
              "Chemical Resistant",
              "Moisture Resistant",
              "Easy Inspection",
              "Color Coded According to Standards",
              "Available from 1 Ton to 50 Ton",
              "Safety Factor 7:1"
            ].map((item) => (

              <div
                key={item}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition"
              >

                <div className="flex items-start gap-3">

                  <CheckCircle
                    className="text-primary mt-1"
                    size={22}
                  />

                  <p className="font-medium text-accent">

                    {item}

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
                src="/assets/lifting_application.jpeg"
                alt="Industrial Lifting"
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div>

              <h2 className="text-4xl font-bold text-accent">

                Industrial Applications

              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">

                Gripton Safety Eye to Eye Web Slings are trusted across
                industries for reliable material handling and heavy-duty
                lifting operations.

              </p>

              <div className="mt-8 space-y-5">

                {[
                  "Construction Industry",
                  "Steel Plants",
                  "Ports & Shipyards",
                  "Manufacturing Units",
                  "Warehouses",
                  "Logistics & Transportation",
                  "Power Plants",
                  "Oil & Gas Industry",
                  "Heavy Engineering",
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
              Manufactured according to international lifting standards.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl shadow-lg">

            <table className="w-full bg-white">

              <thead className="bg-primary text-white">

                <tr>

                  <th className="py-4 px-6 text-left">Specification</th>

                  <th className="py-4 px-6 text-left">Details</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">Material</td>
                  <td className="py-4 px-6">
                    High Tenacity 100% Polyester
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">Safety Factor</td>
                  <td className="py-4 px-6">7:1</td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">Capacity</td>
                  <td className="py-4 px-6">
                    1 Ton – 50 Ton
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">Length</td>
                  <td className="py-4 px-6">
                    Customizable
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

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">
                    Color Coding
                  </td>

                  <td className="py-4 px-6">
                    International Standard
                  </td>

                </tr>

                <tr>

                  <td className="py-4 px-6 font-semibold">
                    Eye Type
                  </td>

                  <td className="py-4 px-6">
                    Reinforced Flat Eyes
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

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-accent">
              Why Choose Gripton Safety?
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Premium Quality",
                desc: "Manufactured using superior polyester fibers for long service life."
              },
              {
                title: "Maximum Safety",
                desc: "Engineered with a 7:1 safety factor for dependable lifting."
              },
              {
                title: "Lightweight",
                desc: "Easy to transport, install and handle during operations."
              },
              {
                title: "Reliable Performance",
                desc: "Consistent lifting efficiency even in demanding environments."
              }
            ].map((item) => (

              <div
                key={item.title}
                className="border rounded-2xl p-8 hover:shadow-xl transition"
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

            <h2 className="text-4xl font-bold text-accent text-center">

              Safety & Maintenance

            </h2>

            <div className="mt-12 grid md:grid-cols-2 gap-8">

              <div className="bg-white rounded-2xl p-8 shadow">

                <h3 className="text-2xl font-bold mb-5 text-accent">

                  Safety Guidelines

                </h3>

                <ul className="space-y-4">

                  <li>✔ Always inspect the sling before use.</li>

                  <li>✔ Never exceed the Working Load Limit.</li>

                  <li>✔ Protect the sling from sharp edges.</li>

                  <li>✔ Avoid twisting or knotting the sling.</li>

                  <li>✔ Follow recommended lifting practices.</li>

                </ul>

              </div>

              <div className="bg-white rounded-2xl p-8 shadow">

                <h3 className="text-2xl font-bold mb-5 text-accent">

                  Maintenance Tips

                </h3>

                <ul className="space-y-4">

                  <li>✔ Store in a dry and clean environment.</li>

                  <li>✔ Avoid prolonged UV exposure.</li>

                  <li>✔ Clean with mild soap and water only.</li>

                  <li>✔ Replace damaged slings immediately.</li>

                  <li>✔ Schedule regular inspections.</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CONTACT CTA ================= */}

      <section className="py-20 bg-primary text-white">

        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-5xl font-bold">

            Need Industrial Lifting Solutions?

          </h2>

          <p className="mt-6 text-lg opacity-90">

            Contact Gripton Safety today for premium quality Eye to Eye
            Web Slings designed to meet your industrial lifting
            requirements.

          </p>

          <a
            href="/contact"
            className="inline-flex items-center mt-10 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
          >

            Contact Us

            <ArrowRight className="ml-2" />

          </a>

        </div>

      </section>

      <ContactCTA />

      <Footer />

    </>
  );
}
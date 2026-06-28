import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";

import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function LiftingSlings() {
  return (
    <>
      <Header />

      {/* ================= HERO ================= */}

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-orange-50">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >

              <span className="uppercase tracking-widest text-primary font-semibold">

                Premium Industrial Lifting Solutions

              </span>

              <h1 className="mt-4 text-5xl lg:text-6xl font-extrabold text-accent leading-tight">

                Polyester
                <span className="text-primary">
                  {" "}Lifting Slings
                </span>

              </h1>

              <p className="mt-8 text-lg leading-8 text-muted-foreground">

                Gripton Safety manufactures premium-quality Polyester
                Lifting Slings designed to provide exceptional lifting
                performance, maximum safety, and long service life.

                Manufactured using high-tenacity polyester yarn,
                our lifting slings are trusted across construction,
                manufacturing, logistics, ports, shipyards,
                steel plants and heavy engineering industries.

              </p>

              <div className="mt-10">

                <Link to="/contact">

                  <button className="bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition flex items-center gap-2">

                    Request Quote

                    <ArrowRight size={18}/>

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

                src="/assets/flat_sling_images.png"

                className="rounded-3xl shadow-2xl"

                alt="Polyester Web Sling"

              />

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold text-accent">

            Safe. Flexible. Reliable.

          </h2>

          <p className="mt-8 text-lg leading-8 text-muted-foreground">

            Polyester lifting slings have become the preferred lifting
            solution because of their lightweight construction,
            exceptional flexibility, superior strength and ability to
            protect valuable loads from scratches or damage.

            Gripton Safety offers a complete range of lifting slings
            suitable for virtually every industrial lifting operation.

          </p>

        </div>

      </section>

      {/* ================= TYPES ================= */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-accent">

              Types of Polyester Lifting Slings

            </h2>

            <p className="mt-5 text-muted-foreground">

              Select the ideal lifting sling according to your lifting
              application.

            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Eye To Eye */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">

              <img

                src="/assets/eye_to_eye_sling2.jpeg"

                className="w-full h-80 object-contain bg-white p-4"

                alt="Eye To Eye Sling"

              />

              <div className="p-8">

                <h3 className="text-3xl font-bold text-accent">

                  Eye to Eye Web Sling

                </h3>

                <p className="mt-5 text-muted-foreground leading-8">

                  Designed with reinforced lifting eyes on both ends,
                  these slings provide exceptional strength while
                  remaining lightweight and highly flexible.

                  They are widely used for crane lifting,
                  construction, fabrication workshops,
                  text-muted-foreground and heavy engineering.

                </p>

                <div className="mt-8 space-y-3">

                  {[
                    "High Tensile Polyester",
                    "Reinforced Eyes",
                    "Abrasion Resistant",
                    "UV Resistant",
                    "Available up to 50 Ton"
                  ].map((item)=>(

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle
                        className="text-primary"
                        size={20}
                      />

                      {item}

                    </div>

                  ))}

                </div>

                <Link
                  to="/products/lifting-slings/eye-to-eye"
                >

                  <button className="mt-10 bg-primary text-white px-7 py-3 rounded-xl hover:bg-orange-600 transition">

                    Explore Product

                  </button>

                </Link>

              </div>

            </div>

            {/* Round Sling */}

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500">

              <img

                src="/assets/round_websling.png"

                className="w-full h-80 object-contain bg-white p-4"

                alt="Round Web Sling"

              />

              <div className="p-8">

                <h3 className="text-3xl font-bold text-accent">

                  Round Web Sling

                </h3>

                <p className="mt-5 text-muted-foreground leading-8">

                  Manufactured using endless polyester yarn enclosed
                  inside a protective sleeve, Round Slings provide
                  superior flexibility and excellent protection for
                  delicate or polished loads.

                </p>

                <div className="mt-8 space-y-3">

                  {[
                    "Endless Polyester Core",
                    "Soft Protective Sleeve",
                    "Even Load Distribution",
                    "High Flexibility",
                    "Available up to 100 Ton"
                  ].map((item)=>(

                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >

                      <CheckCircle
                        className="text-primary"
                        size={20}
                      />

                      {item}

                    </div>

                  ))}

                </div>

                <Link
                  to="/products/lifting-slings/round-web-sling"
                >

                  <button className="mt-10 bg-primary text-white px-7 py-3 rounded-xl hover:bg-orange-600 transition">

                    Explore Product

                  </button>

                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-accent">
              Why Choose Gripton Safety Lifting Slings?
            </h2>

            <p className="mt-5 text-muted-foreground max-w-3xl mx-auto">
              Our lifting slings are engineered to deliver maximum safety,
              exceptional durability and reliable performance across demanding
              industrial environments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Premium Polyester",
                desc: "Manufactured using high-tenacity polyester yarn for outstanding strength."
              },
              {
                title: "Maximum Safety",
                desc: "Designed with a 7:1 safety factor to ensure secure lifting."
              },
              {
                title: "Lightweight",
                desc: "Easy to transport, store and handle compared to wire rope slings."
              },
              {
                title: "Long Service Life",
                desc: "Excellent resistance against abrasion, UV rays and moisture."
              }
            ].map((item) => (

              <div
                key={item.title}
                className="border rounded-2xl p-8 hover:shadow-xl transition duration-300"
              >

                <CheckCircle
                  className="text-primary mb-5"
                  size={36}
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

      {/* ================= INDUSTRIES ================= */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-accent">
              Industries We Serve
            </h2>

            <p className="mt-5 text-muted-foreground">
              Trusted by industries where safety and precision matter.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Construction",
              "Steel Plants",
              "Ports & Shipyards",
              "Warehousing",
              "Logistics",
              "Power Plants",
              "Oil & Gas",
              "Heavy Engineering",
              "Infrastructure Projects",
              "Mining",
              "Manufacturing",
              "Material Handling"
            ].map((industry) => (

              <div
                key={industry}
                className="bg-white rounded-xl shadow p-6 flex items-center gap-3 hover:shadow-lg transition"
              >

                <CheckCircle
                  className="text-primary"
                  size={20}
                />

                <span className="font-medium text-accent">
                  {industry}
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= WORKING LOAD LIMIT CHART ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold text-accent">
              Working Load Limit (WLL) Chart
            </h2>

            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              Polyester web slings are internationally color coded for quick
              identification of their Working Load Limit (WLL). The lifting
              capacity varies depending on the lifting method used.
            </p>

          </div>

          <div className="overflow-x-auto rounded-2xl shadow-xl border">

            <table className="w-full bg-white">

              <thead className="bg-primary text-white">

                <tr>

                  <th className="px-6 py-4 text-left">Color</th>

                  <th className="px-6 py-4 text-left">WLL</th>

                  <th className="px-6 py-4 text-center">Vertical Lift</th>

                  <th className="px-6 py-4 text-center">Choker Hitch</th>

                  <th className="px-6 py-4 text-center">Basket Hitch</th>

                </tr>

              </thead>

              <tbody>

                <tr className="border-b hover:bg-orange-50 transition">

                  <td className="px-6 py-4 font-semibold">🟣 Violet</td>

                  <td className="px-6 py-4">1 Ton</td>

                  <td className="text-center">1000 kg</td>

                  <td className="text-center">800 kg</td>

                  <td className="text-center">2000 kg</td>

                </tr>

                <tr className="border-b hover:bg-orange-50 transition">

                  <td className="px-6 py-4 font-semibold">🟢 Green</td>

                  <td className="px-6 py-4">2 Ton</td>

                  <td className="text-center">2000 kg</td>

                  <td className="text-center">1600 kg</td>

                  <td className="text-center">4000 kg</td>

                </tr>

                <tr className="border-b hover:bg-orange-50 transition">

                  <td className="px-6 py-4 font-semibold">🟡 Yellow</td>

                  <td className="px-6 py-4">3 Ton</td>

                  <td className="text-center">3000 kg</td>

                  <td className="text-center">2400 kg</td>

                  <td className="text-center">6000 kg</td>

                </tr>

                <tr className="border-b hover:bg-orange-50 transition">

                  <td className="px-6 py-4 font-semibold">⚪ Grey</td>

                  <td className="px-6 py-4">4 Ton</td>

                  <td className="text-center">4000 kg</td>

                  <td className="text-center">3200 kg</td>

                  <td className="text-center">8000 kg</td>

                </tr>

                <tr className="border-b hover:bg-orange-50 transition">

                  <td className="px-6 py-4 font-semibold">🔴 Red</td>

                  <td className="px-6 py-4">5 Ton</td>

                  <td className="text-center">5000 kg</td>

                  <td className="text-center">4000 kg</td>

                  <td className="text-center">10000 kg</td>

                </tr>

                <tr className="border-b hover:bg-orange-50 transition">

                  <td className="px-6 py-4 font-semibold">🟤 Brown</td>

                  <td className="px-6 py-4">6 Ton</td>

                  <td className="text-center">6000 kg</td>

                  <td className="text-center">4800 kg</td>

                  <td className="text-center">12000 kg</td>

                </tr>

                <tr className="border-b hover:bg-orange-50 transition">

                  <td className="px-6 py-4 font-semibold">🔵 Blue</td>

                  <td className="px-6 py-4">8 Ton</td>

                  <td className="text-center">8000 kg</td>

                  <td className="text-center">6400 kg</td>

                  <td className="text-center">16000 kg</td>

                </tr>

                <tr className="hover:bg-orange-50 transition">

                  <td className="px-6 py-4 font-semibold">🟠 Orange</td>

                  <td className="px-6 py-4">10 Ton</td>

                  <td className="text-center">10000 kg</td>

                  <td className="text-center">8000 kg</td>

                  <td className="text-center">20000 kg</td>

                </tr>

              </tbody>

            </table>

          </div>

          <div className="mt-8 bg-orange-50 border border-orange-200 rounded-xl p-6">

            <h3 className="text-xl font-bold text-accent mb-3">
              Note
            </h3>

            <p className="text-muted-foreground leading-7">
              The Working Load Limits shown above are indicative values based on
              standard lifting configurations. Actual lifting capacity may vary
              depending on sling angle, load distribution, environmental
              conditions, and applicable safety standards. Always inspect the
              sling before use and never exceed its rated Working Load Limit.
            </p>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="py-20 bg-primary text-white">

        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-5xl font-bold">
            Looking for Reliable Polyester Lifting Slings?
          </h2>

          <p className="mt-6 text-lg opacity-90 leading-8">

            Whether you need Eye to Eye Web Slings or Round Web Slings,
            Gripton Safety delivers premium lifting solutions designed for
            maximum strength, durability and operational safety.

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
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hardware() {
  return (
    <>
      <Header />

      {/* ================= HERO ================= */}

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="uppercase tracking-[4px] text-primary font-semibold">
            Hardware Solutions
          </span>

          <h1 className="mt-5 text-5xl lg:text-6xl font-extrabold text-accent">
            Lifting & Rigging Hardware
          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-muted-foreground">
            Gripton Safety offers premium lifting and cargo securing hardware
            engineered for strength, durability and reliable industrial
            performance.
          </p>
        </div>
      </section>

      {/* ================= J HOOK ================= */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="bg-slate-50 rounded-3xl p-10 shadow-lg">
              <img
                src="/assets/j_hook.png"
                alt="J Hook"
                className="w-full h-[420px] object-contain"
              />
            </div>

            <div>
              <span className="uppercase tracking-[3px] text-primary font-semibold">
                Hardware Product
              </span>

              <h2 className="mt-4 text-4xl font-bold text-accent">J Hook</h2>

              <p className="mt-6 text-lg text-muted-foreground leading-8">
                Gripton Safety J Hooks are manufactured from premium forged
                steel to provide secure attachment points in ratchet lashing
                systems. They deliver superior strength, durability and
                corrosion resistance for demanding cargo securing applications.
              </p>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-accent">
                  Available Capacities
                </h3>

                <div className="flex flex-wrap gap-4 mt-5">
                  {["3 Ton", "5 Ton", "7 Ton", "10 Ton"].map((size) => (
                    <span
                      key={size}
                      className="bg-primary text-white px-5 py-2 rounded-full font-semibold"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-10 space-y-4">
                {[
                  "Forged High Strength Steel",
                  "Corrosion Resistant Finish",
                  "Heavy Duty Construction",
                  "Reliable Cargo Securing",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-primary" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <button className="mt-10 bg-primary hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl font-semibold flex items-center">
                  Request Quote
                  <ArrowRight className="ml-3" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= RATCHET BUCKLE ================= */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 lg:order-1">
              <span className="uppercase tracking-[3px] text-primary font-semibold">
                Hardware Product
              </span>

              <h2 className="mt-4 text-4xl font-bold text-accent">
                Ratchet Buckle
              </h2>

              <p className="mt-6 text-lg text-muted-foreground leading-8">
                Our industrial ratchet buckles are engineered for smooth
                operation and maximum clamping force, ensuring secure cargo
                transportation across logistics, construction and heavy-duty
                industrial applications.
              </p>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-accent">
                  Available Sizes
                </h3>

                <div className="flex flex-wrap gap-4 mt-5">
                  {["25 mm", "35 mm", "50 mm", "75 mm", "100 mm"].map(
                    (size) => (
                      <span
                        key={size}
                        className="bg-primary text-white px-5 py-2 rounded-full font-semibold"
                      >
                        {size}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="mt-10 space-y-4">
                {[
                  "Industrial Grade Steel",
                  "High Load Capacity",
                  "Smooth Locking Mechanism",
                  "Long Service Life",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-primary" />

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact">
                <button className="mt-10 bg-primary hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl font-semibold flex items-center">
                  Request Quote
                  <ArrowRight className="ml-3" />
                </button>
              </Link>
            </div>

            <div className="order-1 lg:order-2 bg-white rounded-3xl shadow-lg p-10">
              <img
                src="/assets/hardware_rachet.jpg"
                alt="Ratchet Buckle"
                className="w-full h-full min-h-[240px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE GRIPTON HARDWARE ================= */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="uppercase tracking-[4px] text-primary font-semibold">
              Why Choose Us
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-accent">
              Why Choose Gripton Hardware?
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground leading-8">
              Our lifting and rigging hardware is manufactured to deliver
              exceptional strength, long service life, and dependable
              performance across demanding industrial applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Premium Steel",
                desc: "Manufactured using high-grade forged steel for maximum durability.",
              },
              {
                title: "Corrosion Resistant",
                desc: "Protective finish ensures long-lasting performance in harsh environments.",
              },
              {
                title: "Heavy Duty",
                desc: "Engineered to withstand demanding lifting and cargo securing operations.",
              },
              {
                title: "Reliable Performance",
                desc: "Precision manufactured to provide safe and dependable operation.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-slate-50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mx-auto">
                  ✓
                </div>

                <h3 className="mt-6 text-2xl font-bold text-accent">
                  {item.title}
                </h3>

                <p className="mt-4 text-muted-foreground leading-7">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}

      <section className="py-20 bg-gradient-to-r from-primary to-orange-500">
        <div className="max-w-5xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Need Premium Lifting Hardware?
          </h2>

          <p className="mt-6 text-lg leading-8 opacity-90">
            Whether you require forged J Hooks, industrial ratchet buckles, or
            complete cargo securing hardware, Gripton Safety provides reliable
            solutions tailored to your operational needs.
          </p>

          <Link to="/contact">
            <button className="mt-10 bg-white text-primary hover:bg-slate-100 transition px-10 py-4 rounded-xl font-bold text-lg">
              Request a Quote
            </button>
          </Link>
        </div>
      </section>

      <ContactCTA />

      <Footer />
    </>
  );
}

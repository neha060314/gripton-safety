import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ShieldCheck,
  BadgeCheck,
  Award,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function CertificationsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-orange-50">

      <div className="max-w-7xl mx-auto px-4">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center"
        >

          <span className="uppercase tracking-[4px] text-primary font-semibold">

            Certified Quality

          </span>

          <h2 className="mt-4 text-5xl font-extrabold text-accent">

            Manufacturing You Can Trust

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-8 text-muted-foreground">

            Gripton Safety follows internationally recognized quality
            management practices to manufacture lifting and lashing
            products that deliver dependable performance, long service
            life and uncompromised safety across industrial applications.

          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="space-y-6">

              {[
                {
                  icon: <ShieldCheck size={34} className="text-primary" />,
                  title: "International Quality Standards",
                  desc: "Our manufacturing process follows internationally recognized quality management practices to ensure reliable and consistent products."
                },
                {
                  icon: <Award size={34} className="text-primary" />,
                  title: "Premium Manufacturing",
                  desc: "Every lifting and lashing product is manufactured using premium raw materials and modern production techniques."
                },
                {
                  icon: <BadgeCheck size={34} className="text-primary" />,
                  title: "Rigorous Inspection",
                  desc: "Each product undergoes multiple quality inspections before dispatch to maintain the highest safety standards."
                }
              ].map((item) => (

                <div
                  key={item.title}
                  className="bg-white rounded-3xl shadow-lg border border-slate-100 p-8 hover:shadow-2xl transition duration-500"
                >

                  <div className="flex gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center flex-shrink-0">

                      {item.icon}

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-accent">

                        {item.title}

                      </h3>

                      <p className="mt-3 text-muted-foreground leading-7">

                        {item.desc}

                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div

            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}

            className="bg-white rounded-[32px] shadow-2xl p-10 border border-slate-100"

          >

            <span className="uppercase tracking-[3px] text-primary font-semibold">

              Why Choose Gripton Safety

            </span>

            <h3 className="mt-5 text-4xl font-bold text-accent leading-tight">

              Quality Isn't Just a Promise,
              It's Our Manufacturing Standard.

            </h3>

            <p className="mt-8 text-lg leading-8 text-muted-foreground">

              We are committed to delivering lifting and lashing solutions
              that industries can trust. From raw material selection to
              final inspection, every stage is carefully monitored to
              ensure durability, reliability and operational safety.

            </p>

            <div className="mt-10 space-y-5">

              {[
                "ISO Quality Management Practices",
                "Premium Polyester Materials",
                "Strict Manufacturing Process",
                "Comprehensive Product Inspection",
                "Reliable Industrial Performance"
              ].map((point) => (

                <div
                  key={point}
                  className="flex items-center gap-4"
                >

                  <CheckCircle
                    className="text-primary"
                    size={22}
                  />

                  <span className="text-lg text-accent font-medium">

                    {point}

                  </span>

                </div>

              ))}

            </div>

            <Link to="/certificates">

              <button className="mt-12 bg-primary hover:bg-orange-600 transition text-white px-8 py-4 rounded-xl font-semibold flex items-center">

                View Certifications

                <ArrowRight className="ml-3" />

              </button>

            </Link>

          </motion.div>

        </div>

        {/* Bottom Statistics */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24"
        >

          <div className="bg-gradient-to-r from-primary to-orange-500 rounded-[32px] shadow-2xl overflow-hidden">

            <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-orange-400">

              <div className="p-10 text-center text-white">

                <h3 className="text-5xl font-extrabold">
                  ISO
                </h3>

                <p className="mt-3 text-orange-100">
                  Certified Quality Management
                </p>

              </div>

              <div className="p-10 text-center text-white">

                <h3 className="text-5xl font-extrabold">
                  100%
                </h3>

                <p className="mt-3 text-orange-100">
                  Quality Inspected Products
                </p>

              </div>

              <div className="p-10 text-center text-white">

                <h3 className="text-5xl font-extrabold">
                  Premium
                </h3>

                <p className="mt-3 text-orange-100">
                  Manufacturing Standards
                </p>

              </div>

              <div className="p-10 text-center text-white">

                <h3 className="text-5xl font-extrabold">
                  Trusted
                </h3>

                <p className="mt-3 text-orange-100">
                  Industrial Safety Solutions
                </p>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
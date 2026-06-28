import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";

import { motion } from "framer-motion";
import {
  Award,
  ShieldCheck,
  BadgeCheck,
  CheckCircle
} from "lucide-react";

const CERTIFICATES = [
  {
    title: "Certificate of Registration",
    image: "/assets/Certificate_of_Registration.jpg",
    description:
      "Recognizes Gripton Safety's commitment to maintaining an effective Quality Management System and delivering consistent manufacturing excellence."
  },
  {
    title: "Management System Certificate",
    image: "/assets/Management_System_Certificate.jpg",
    description:
      "Demonstrates compliance with internationally recognized management standards, ensuring quality, reliability and customer satisfaction."
  }
];

export default function Certificates() {

  return (
    <>
      <Header />

      {/* ================= HERO ================= */}

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-orange-50">

        <div className="max-w-7xl mx-auto px-4">

          <motion.div

            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}

            className="text-center"

          >

            <span className="uppercase tracking-[4px] text-primary font-semibold">

              Quality Assurance

            </span>

            <h1 className="mt-5 text-5xl lg:text-6xl font-extrabold text-accent">

              Our Certifications

            </h1>

            <p className="mt-8 max-w-4xl mx-auto text-lg leading-8 text-muted-foreground">

              Quality is at the heart of everything we manufacture.
              Gripton Safety follows stringent quality control
              procedures and internationally recognized manufacturing
              practices to ensure every lifting and lashing product
              delivers outstanding safety, durability and reliability.

            </p>

          </motion.div>

        </div>

      </section>

      {/* ================= QUALITY ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="rounded-3xl bg-slate-50 p-8 text-center shadow hover:shadow-xl transition">

              <Award
                className="mx-auto text-primary"
                size={45}
              />

              <h3 className="mt-5 text-2xl font-bold text-accent">

                Certified Quality

              </h3>

              <p className="mt-4 text-muted-foreground leading-7">

                Manufactured under internationally accepted quality
                management systems ensuring consistency and excellence.

              </p>

            </div>

            <div className="rounded-3xl bg-slate-50 p-8 text-center shadow hover:shadow-xl transition">

              <ShieldCheck
                className="mx-auto text-primary"
                size={45}
              />

              <h3 className="mt-5 text-2xl font-bold text-accent">

                Safety First

              </h3>

              <p className="mt-4 text-muted-foreground leading-7">

                Every product undergoes rigorous inspection and quality
                verification before reaching our customers.

              </p>

            </div>

            <div className="rounded-3xl bg-slate-50 p-8 text-center shadow hover:shadow-xl transition">

              <BadgeCheck
                className="mx-auto text-primary"
                size={45}
              />

              <h3 className="mt-5 text-2xl font-bold text-accent">

                Trusted Performance

              </h3>

              <p className="mt-4 text-muted-foreground leading-7">

                Trusted by industries that demand dependable lifting,
                cargo securing and material handling solutions.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CERTIFICATES ================= */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-accent">

              Certified Excellence

            </h2>

            <p className="mt-4 text-muted-foreground">

              Our certifications reflect our commitment towards
              delivering premium industrial lifting solutions.

            </p>

          </div>

          <div className="grid lg:grid-cols-2 gap-10">

            {CERTIFICATES.map((item, index)=>(

              <motion.div

                key={item.title}

                initial={{
                  opacity:0,
                  y:40
                }}

                whileInView={{
                  opacity:1,
                  y:0
                }}

                viewport={{
                  once:true
                }}

                transition={{
                  duration:.6,
                  delay:index*.2
                }}

                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"

              >

                <div className="bg-white p-6">

                  <img

                    src={item.image}

                    alt={item.title}

                    className="w-full h-[600px] object-contain rounded-xl"

                  />

                </div>

                <div className="p-8 border-t">

                  <h3 className="text-2xl font-bold text-accent">

                    {item.title}

                  </h3>

                  <p className="mt-5 text-muted-foreground leading-8">

                    {item.description}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= QUALITY COMMITMENT ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold text-accent">

              Our Commitment to Quality

            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              "Premium Raw Materials",
              "Modern Manufacturing Processes",
              "Strict Quality Inspection",
              "Reliable Product Performance",
              "Continuous Process Improvement",
              "Customer Satisfaction"
            ].map((item)=>(

              <div

                key={item}

                className="flex items-center gap-4 bg-slate-50 rounded-xl p-6"

              >

                <CheckCircle
                  className="text-primary"
                />

                <span className="text-lg">

                  {item}

                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= MANUFACTURING & TESTING ================= */}

      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-accent">
              Our Quality Process
            </h2>

            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              Every Gripton Safety product passes through a systematic
              manufacturing and inspection process to ensure superior
              quality, strength, and safety before reaching our customers.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                step: "01",
                title: "Raw Material Inspection",
                desc: "Premium polyester yarn and hardware are carefully inspected before production begins."
              },
              {
                step: "02",
                title: "Precision Manufacturing",
                desc: "Products are manufactured using advanced machinery and controlled production processes."
              },
              {
                step: "03",
                title: "Quality Testing",
                desc: "Each batch undergoes dimensional, visual and strength inspection to maintain consistent quality."
              },
              {
                step: "04",
                title: "Final Approval",
                desc: "Only products meeting our strict quality standards are approved for packaging and dispatch."
              }
            ].map((item) => (

              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-3xl p-8 shadow hover:shadow-xl transition"
              >

                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-6">
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold text-accent">
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

      {/* ================= WHY TRUST US ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold text-accent">
              Why Industries Trust Gripton Safety
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Consistent Product Quality",
                desc: "Every product is manufactured following strict quality control procedures."
              },
              {
                title: "Industrial Reliability",
                desc: "Designed for demanding lifting, cargo securing and material handling operations."
              },
              {
                title: "Customer Satisfaction",
                desc: "Focused on delivering dependable products backed by responsive service."
              },
              {
                title: "Premium Manufacturing",
                desc: "Modern production techniques ensure precision and long-lasting performance."
              },
              {
                title: "Experienced Team",
                desc: "A skilled workforce committed to maintaining high manufacturing standards."
              },
              {
                title: "Quality Commitment",
                desc: "Continuous improvement and rigorous inspections help us exceed customer expectations."
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

      {/* ================= CTA ================= */}

      <section className="py-20 bg-primary text-white">

        <div className="max-w-5xl mx-auto px-4 text-center">

          <h2 className="text-5xl font-bold">
            Quality You Can Depend On
          </h2>

          <p className="mt-6 text-lg leading-8 opacity-90">
            Gripton Safety remains committed to delivering certified,
            high-quality lifting and lashing solutions that meet the
            expectations of industries worldwide. Contact our team to
            learn more about our products, certifications, and quality
            assurance practices.
          </p>

          <a
            href="/contact"
            className="inline-block mt-10 bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition"
          >
            Contact Our Team
          </a>

        </div>

      </section>

      <ContactCTA />

      <Footer />

    </>
  );
}
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";

import { Award, ShieldCheck, Factory, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            About Gripton Safety
          </span>

          <h1 className="mt-4 text-5xl font-extrabold text-accent">
            Delivering Reliable Lifting &
            <span className="text-primary"> Lashing Solutions</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Gripton Safety is committed to providing high-quality lifting,
            lashing, and cargo securing products designed to meet the
            demanding requirements of industrial, logistics, transportation,
            warehousing, and construction sectors.
          </p>

        </div>
      </section>

      {/* Company Overview */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-4xl font-bold text-accent mb-6">
                Who We Are
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Gripton Safety is a trusted manufacturer and supplier of
                lifting slings, ratchet lashings, one-way cargo lashings,
                and industrial hardware solutions.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-4">
                Our products are engineered using premium-quality materials
                and advanced manufacturing processes to ensure safety,
                durability, and consistent performance in demanding
                industrial environments.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                With a focus on quality, innovation, and customer
                satisfaction, we strive to deliver reliable solutions
                that help businesses operate safely and efficiently.
              </p>
            </div>

            <div>
              <img
                src="/assets/gripton_safety_logo.png"
                alt="Gripton Safety"
                className="rounded-2xl shadow-xl"
              />
            </div>

          </div>

        </div>
      </section>

      {/* Mission & Vision */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white rounded-2xl p-8 border">
              <h3 className="text-3xl font-bold text-accent mb-4">
                Our Mission
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                To provide safe, reliable, and high-performance lifting
                and cargo securing products that meet international
                quality standards and customer expectations.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border">
              <h3 className="text-3xl font-bold text-accent mb-4">
                Our Vision
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                To become a trusted global brand in lifting and lashing
                solutions through innovation, quality manufacturing,
                and exceptional customer service.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Why Choose Us */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="text-center mb-14">

            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-4xl font-bold text-accent">
              What Makes Gripton Safety Different
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="bg-white border rounded-2xl p-6 text-center">
              <ShieldCheck className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Quality Assurance</h3>
              <p className="text-sm text-muted-foreground">
                Products manufactured with strict quality control standards.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 text-center">
              <Factory className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Modern Manufacturing</h3>
              <p className="text-sm text-muted-foreground">
                Advanced production techniques for reliable performance.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 text-center">
              <Award className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Industry Standards</h3>
              <p className="text-sm text-muted-foreground">
                Products designed to meet industrial safety requirements.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 text-center">
              <Users className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Customer Focused</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated support and tailored solutions for every client.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Industries */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-accent">
              Industries We Serve
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl border text-center">
              Logistics & Transportation
            </div>

            <div className="bg-white p-6 rounded-xl border text-center">
              Warehousing & Material Handling
            </div>

            <div className="bg-white p-6 rounded-xl border text-center">
              Construction & Infrastructure
            </div>

            <div className="bg-white p-6 rounded-xl border text-center">
              Manufacturing Industry
            </div>

            <div className="bg-white p-6 rounded-xl border text-center">
              Shipping & Cargo Handling
            </div>

            <div className="bg-white p-6 rounded-xl border text-center">
              Engineering Projects
            </div>

          </div>

        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
}
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";

import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    title: "One Way Cargo Lashing",
    description:
      "Reliable single-use cargo securing systems for export containers and freight transportation.",
    image: "/assets/one_way_cargo.jpg",
    path: "/products/one-way-cargo-lashing",
  },
  {
    title: "Ratchet Lashing",
    description:
      "Heavy-duty ratchet tie-down systems for safe transportation and cargo restraint.",
    image: "/assets/lashing_belts.webp",
    path: "/products/ratchet-lashing",
  },
  {
    title: "Lifting Slings",
    description:
      "High-quality polyester lifting slings designed for industrial lifting applications.",
    image: "/assets/flat_sling_images.png",
    path: "/products/lifting-slings",
  },
  {
    title: "Hardware",
    description:
      "Comprehensive range of lifting and rigging hardware accessories.",
    image: "/assets/rachet_hardware.jpg",
    path: "/products/hardware",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Product Range
          </span>

          <h1 className="mt-4 text-5xl font-extrabold text-accent">
            Gripton Safety Products
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Discover our complete range of lifting, lashing and cargo
            securing solutions engineered for industrial safety,
            logistics and transportation applications.
          </p>

        </div>
      </section>

      {/* Product Cards */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-2 gap-8">

            {PRODUCTS.map((product) => (
              <Link
                key={product.title}
                to={product.path}
                className="group bg-white rounded-2xl overflow-hidden border hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-accent mb-3">
                    {product.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>

                  <span className="text-primary font-semibold">
                    View Product →
                  </span>

                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
}
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactCTA from "../components/ContactCTA";

const HARDWARE_PRODUCTS = [
  {
    name: "J Hook 9 mm",
    image: "/assets/j_hook.webp",
    description:
      "Heavy-duty forged J Hook designed for ratchet lashing and cargo securing applications.",
  },
  {
    name: "J Hook 10 mm",
    image: "/assets/j_hook.webp",
    description:
      "High-strength 10 mm J Hook suitable for demanding transportation and logistics operations.",
  },
  {
    name: "Ratchet Buckle 25 mm",
    image: "/assets/ratchet-buckle-25mm.jpg",
    description:
      "Compact ratchet buckle for light-duty cargo securing systems.",
  },
  {
    name: "Ratchet Buckle 35 mm",
    image: "/assets/ratchet-buckle-25mm.jpg",
    description:
      "Reliable ratchet mechanism designed for medium-duty lashing applications.",
  },
  {
    name: "Ratchet Buckle 50 mm",
    image: "/assets/ratchet-buckle-25mm.jpg",
    description:
      "Industrial-grade ratchet buckle for heavy-duty cargo restraint systems.",
  },
  {
    name: "Ratchet Buckle 75 mm",
    image: "/assets/ratchet-buckle-25mm.jpg",
    description:
      "High-capacity ratchet buckle used in transportation and logistics industries.",
  },
  {
    name: "Ratchet Buckle 100 mm",
    image: "/assets/ratchet-buckle-25mm.jpg",
    description:
      "Extra heavy-duty ratchet buckle for specialized cargo securing applications.",
  },
];

export default function Hardware() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}

      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Hardware Solutions
          </span>

          <h1 className="mt-4 text-5xl font-extrabold text-accent">
            Lifting & Rigging Hardware
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            Gripton Safety offers a range of high-quality hardware
            components for lashing, lifting and cargo securing systems,
            engineered for strength, durability and reliability.
          </p>

        </div>
      </section>

      {/* Product Grid */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {HARDWARE_PRODUCTS.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition duration-300"
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-xl font-bold text-accent mb-3">
                    {item.name}
                  </h3>

                  <p className="text-muted-foreground">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why Choose Our Hardware */}

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-center text-4xl font-bold text-accent mb-12">
            Why Choose Gripton Hardware?
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-6 rounded-xl border text-center">
              <h3 className="font-bold mb-2">
                Premium Materials
              </h3>
              <p className="text-sm text-muted-foreground">
                Manufactured using high-quality steel components.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border text-center">
              <h3 className="font-bold mb-2">
                Durable Finish
              </h3>
              <p className="text-sm text-muted-foreground">
                Corrosion-resistant and built for long-term use.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border text-center">
              <h3 className="font-bold mb-2">
                Tested Strength
              </h3>
              <p className="text-sm text-muted-foreground">
                Designed for demanding industrial environments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border text-center">
              <h3 className="font-bold mb-2">
                Wide Range
              </h3>
              <p className="text-sm text-muted-foreground">
                Available in multiple sizes and configurations.
              </p>
            </div>

          </div>

        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
}
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactCTA from '../components/ContactCTA';
import ColorCapacityTable from '../components/ColorCapacityTable';
import SlingTypes from '../components/SlingTypes';
import LiftingMethods from '../components/LiftingMethods';

import { motion } from 'framer-motion';
import { CheckCircle, Wrench } from 'lucide-react';

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const FEATURES = [
  'High strength polyester webbing',
  'Lightweight & flexible',
  'Heavy duty reinforced stitching',
  'Low elongation (≤ 7% at WLL)',
  'Abrasion resistant',
  'Oil & moisture resistant',
  'Easy handling and storage',
  'Color coded as per international standard',
];

const APPLICATIONS = [
  'Material handling',
  'Steel coil lifting',
  'Construction sites',
  'Cargo lifting',
  'Warehouses',
  'Shipping industry',
  'Heavy machinery movement',
  'Logistics & transportation',
];

const SPECS = [
  { label: 'Material', value: '100% High Tenacity Polyester' },
  { label: 'Type', value: 'Flat Woven Webbing Sling (Eye to Eye)' },
  { label: 'Safety Factor', value: '7:1 (Standard)' },
  { label: 'Standard', value: 'EN 1492-1:2000 + A1:2008' },
  { label: 'Capacity Range', value: '1 Ton to 10 Ton' },
  { label: 'Temperature Range', value: '-40°C to +100°C' },
  { label: 'Elongation', value: '≤ 7% at WLL' },
  {
    label: 'Stitching',
    value: 'High strength polyester yarn, multi-stitch pattern',
  },
  {
    label: 'Eye Type',
    value: 'Reinforced flat eye with extra stitching',
  },
  {
    label: 'Color Coding',
    value: 'As per International Standard',
  },
  {
    label: 'Label',
    value: 'Blue label with capacity, length, SF & CE mark',
  },
  {
    label: 'Application',
    value:
      'Lifting & Rigging, Material Handling, Industrial, Construction, Logistics',
  },
];

const IMAGES = {
  flat_sling: '/assets/flat_sling_images.png',
  process_detail: '/assets/flat_sling_process_detail.png',
  making_process: '/assets/flat_sling_making_process.png',
  stitching: '/assets/flat_sling_stitching_process.png',
  specification: '/assets/flat_sling_specification.png',
};

export default function WebSling() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <motion.div {...fade}>
              <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">
                Web Sling Belt
              </span>

              <h1 className="mt-3 font-poppins font-extrabold text-4xl sm:text-5xl text-accent leading-tight">
                Polyester <span className="text-primary">Flat Web Sling</span>
              </h1>

              <p className="mt-6 font-inter text-lg text-muted-foreground leading-relaxed">
                Polyester Flat Web Sling is a high-strength lifting sling
                manufactured from 100% high tenacity polyester woven webbing.
                It is specially designed for safe and efficient lifting of
                heavy materials in industries such as construction, steel,
                logistics, shipping, warehouses, engineering, and cargo
                handling.
              </p>

              <p className="mt-4 font-inter text-base text-muted-foreground leading-relaxed">
                Engineered for flexibility, durability, and exceptional load
                handling with minimal elongation and maximum safety compliance.
              </p>
            </motion.div>

            <motion.div
              {...fade}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src={IMAGES.flat_sling}
                alt="Polyester Flat Sling"
                className="w-full rounded-2xl shadow-2xl shadow-orange-100/50"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...fade} className="text-center mb-12">
            <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">
              Features
            </span>

            <h2 className="mt-3 font-poppins font-extrabold text-3xl sm:text-4xl text-accent">
              Product Features
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">

            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature}
                {...fade}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="flex items-start gap-3 bg-slate-50 rounded-xl p-5 border border-border"
              >
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />

                <span className="font-inter text-sm text-accent font-medium">
                  {feature}
                </span>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...fade} className="text-center mb-12">
            <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">
              Applications
            </span>

            <h2 className="mt-3 font-poppins font-extrabold text-3xl sm:text-4xl text-accent">
              Industrial Applications
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">

            {APPLICATIONS.map((application, index) => (
              <motion.div
                key={application}
                {...fade}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="bg-white rounded-xl p-5 border border-border text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <Wrench className="w-6 h-6 text-primary mx-auto mb-2" />

                <span className="font-inter text-sm text-accent font-medium">
                  {application}
                </span>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* SPECIFICATIONS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...fade} className="text-center mb-12">
            <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">
              Specifications
            </span>

            <h2 className="mt-3 font-poppins font-extrabold text-3xl text-accent">
              Product Specifications
            </h2>
          </motion.div>

          <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">

            {SPECS.map((spec, index) => (
              <div
                key={spec.label}
                className={`flex flex-col sm:flex-row sm:justify-between sm:items-center px-6 py-4 gap-1 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-slate-50'
                } ${
                  index < SPECS.length - 1
                    ? 'border-b border-border'
                    : ''
                }`}
              >
                <span className="font-poppins font-semibold text-sm text-accent">
                  {spec.label}
                </span>

                <span className="font-inter text-sm text-muted-foreground">
                  {spec.value}
                </span>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div {...fade} className="text-center mb-12">
            <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">
              Product Gallery
            </span>

            <h2 className="mt-3 font-poppins font-extrabold text-3xl sm:text-4xl text-accent">
              Manufacturing & Product Details
            </h2>
          </motion.div>

          <div className="space-y-10">

            {/* PROCESS DETAIL */}
            <motion.div {...fade}>
              <img
                src={IMAGES.process_detail}
                alt="Flat Sling Process Detail"
                className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* MAKING PROCESS */}
            <motion.div {...fade}>
              <img
                src={IMAGES.making_process}
                alt="Flat Sling Making Process"
                className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* STITCHING */}
            <motion.div {...fade}>
              <img
                src={IMAGES.stitching}
                alt="Flat Sling Stitching Process"
                className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>

            {/* SPECIFICATION */}
            <motion.div {...fade}>
              <img
                src={IMAGES.specification}
                alt="Flat Sling Specification"
                className="w-full rounded-2xl shadow-xl"
              />
            </motion.div>

          </div>
        </div>
      </section>

      <ColorCapacityTable />
      <SlingTypes />
      <LiftingMethods />
      <ContactCTA />
      <Footer />
    </div>
  );
}
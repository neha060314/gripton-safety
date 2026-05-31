import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactCTA from '../components/ContactCTA';
import { motion } from 'framer-motion';
import { Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

const fade = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const SPECS = [
  { label: 'Material', value: 'High Tenacity Polyester Webbing' },
  { label: 'Hook Type', value: 'Double J Hook / Flat Hook / Claw Hook' },
  { label: 'Ratchet Type', value: 'Standard / Long Handle / Ergo Ratchet' },
  { label: 'Width Options', value: '25mm, 35mm, 50mm' },
  { label: 'Length Options', value: '2m, 5m, 10m, Custom lengths' },
  { label: 'Breaking Strength', value: 'Up to 5000 kg (varies by width)' },
  { label: 'Standard', value: 'EN 12195-2' },
  { label: 'Applications', value: 'Cargo securing, Transport, Logistics' },
];

const WIDTHS = ['25 mm', '35 mm', '50 mm'];
const LENGTHS = ['2m', '5m', '10m', 'Custom'];

const GALLERY = [
  'Manufacturing Process',
  'Stitching Detail',
  'Ratchet Mechanism',
  'Hook Assembly',
  'Cargo Securing Application',
  'Finished Product',
];

export default function LashingBelt() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fade} className="max-w-3xl">
            <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">Lashing Belt</span>
            <h1 className="mt-3 font-poppins font-extrabold text-4xl sm:text-5xl text-accent leading-tight">
              Industrial <span className="text-primary">Cargo Securing</span> Solutions
            </h1>
            <p className="mt-6 font-inter text-lg text-muted-foreground leading-relaxed">
              Heavy-duty lashing belts designed for industrial transportation and logistics. Engineered with high tenacity polyester webbing and premium ratchet mechanisms for maximum cargo safety.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Image Placeholder */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="aspect-[21/9] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center border border-border">
            <div className="text-center">
              <Truck className="w-16 h-16 text-muted-foreground/30 mx-auto mb-3" />
              <p className="font-inter text-sm text-muted-foreground">Lashing Belt Product Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fade} className="text-center mb-12">
            <h2 className="font-poppins font-extrabold text-3xl text-accent">
              {"Manufacturing & Product Gallery"}
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY.map((label, i) => (
              <motion.div key={label} {...fade} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-center">
                  <Package className="w-10 h-10 text-muted-foreground/30 mx-auto mb-2" />
                  <p className="font-inter text-sm text-muted-foreground">{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fade} className="text-center mb-12">
            <h2 className="font-poppins font-extrabold text-3xl text-accent">Available Options</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-slate-50 rounded-2xl p-8 border border-border">
              <h3 className="font-poppins font-bold text-lg text-accent mb-4">Width Options</h3>
              <div className="flex flex-wrap gap-3">
                {WIDTHS.map(w => (
                  <div key={w} className="px-6 py-3 bg-white rounded-xl border border-border font-poppins font-bold text-accent">{w}</div>
                ))}
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-8 border border-border">
              <h3 className="font-poppins font-bold text-lg text-accent mb-4">Length Options</h3>
              <div className="flex flex-wrap gap-3">
                {LENGTHS.map(l => (
                  <div key={l} className={`px-6 py-3 rounded-xl border font-poppins font-bold ${l === 'Custom' ? 'bg-primary/10 border-primary/30 text-primary' : 'bg-white border-border text-accent'}`}>{l}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fade} className="text-center mb-12">
            <h2 className="font-poppins font-extrabold text-3xl text-accent">Product Specifications</h2>
          </motion.div>
          <div className="bg-white rounded-2xl border border-border overflow-hidden">
            {SPECS.map((spec, i) => (
              <div key={spec.label} className={`flex justify-between items-center px-6 py-4 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} ${i < SPECS.length - 1 ? 'border-b border-border' : ''}`}>
                <span className="font-poppins font-semibold text-sm text-accent">{spec.label}</span>
                <span className="font-inter text-sm text-muted-foreground text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
      <Footer />
    </div>
  );
}
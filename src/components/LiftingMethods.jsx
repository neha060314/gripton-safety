import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const METHODS = [
  { name: 'Vertical Lift', angle: '0°', factor: '100%' },
  { name: 'Choker Lift', angle: 'Choker', factor: '80%' },
  { name: 'Basket Lift', angle: '90°', factor: '200%' },
  { name: 'Basket 45°', angle: '45°', factor: '141%' },
  { name: 'Basket 60°', angle: '60°', factor: '173%' },
];

export default function LiftingMethods() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">Lifting Methods</span>
          <h2 className="mt-3 font-poppins font-extrabold text-3xl sm:text-4xl text-accent">Lifting Configurations</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {METHODS.map((method, i) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-slate-50 rounded-2xl border border-border p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mb-4">
                <ArrowUp className="w-10 h-10 text-primary/40" />
              </div>
              <h4 className="font-poppins font-bold text-sm text-accent">{method.name}</h4>
              <p className="font-inter text-xs text-muted-foreground mt-1">{method.angle}</p>
              <p className="font-poppins font-bold text-lg text-primary mt-2">{method.factor}</p>
              <p className="font-inter text-xs text-muted-foreground">of WLL</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center font-inter text-xs text-muted-foreground">
          Lifting method images will be uploaded. Capacity factors shown are standard reference values.
        </p>
      </div>
    </section>
  );
}
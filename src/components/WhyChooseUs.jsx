import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Factory, Award, Ruler } from 'lucide-react';

const ITEMS = [
  { icon: Zap, title: 'High Strength Material', desc: '100% high tenacity polyester for maximum load-bearing capacity.' },
  { icon: Shield, title: 'Heavy Duty Stitching', desc: 'Multi-layer reinforced stitching for industrial-grade safety.' },
  { icon: Globe, title: 'Export Quality', desc: 'Products manufactured to meet international standards EN 1492-1.' },
  { icon: Factory, title: 'Industrial Grade Manufacturing', desc: 'State-of-the-art manufacturing with rigorous quality control.' },
  { icon: Award, title: 'Safety Certified', desc: 'ISO certified with 7:1 safety factor as standard.' },
  { icon: Ruler, title: 'Custom Sizes Available', desc: 'Customized widths, lengths, and capacities per your requirements.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">Why Gripton Safety</span>
          <h2 className="mt-3 font-poppins font-extrabold text-3xl sm:text-4xl text-accent">Why Choose Us</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-orange-100/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <item.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-poppins font-bold text-lg text-accent">{item.title}</h3>
              <p className="mt-2 font-inter text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
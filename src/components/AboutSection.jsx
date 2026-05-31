import { motion } from 'framer-motion';
import { Factory, Globe, ShieldCheck, Users } from 'lucide-react';

const STATS = [
  { icon: Factory, label: 'Manufacturing Units', value: '3+' },
  { icon: Globe, label: 'Export Countries', value: '15+' },
  { icon: ShieldCheck, label: 'Safety Certified', value: '100%' },
  { icon: Users, label: 'Industrial Clients', value: '500+' },
];

export default function AboutSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">About Gripton Safety</span>
            <h2 className="mt-3 font-poppins font-extrabold text-3xl sm:text-4xl text-accent leading-tight">
              Engineering Industrial Safety Since Day One
            </h2>
            <p className="mt-6 font-inter text-base text-muted-foreground leading-relaxed">
              Gripton Safety specializes in manufacturing industrial lifting and cargo securing solutions including polyester web slings and lashing belts designed for heavy-duty industrial applications.
            </p>
            <p className="mt-4 font-inter text-base text-muted-foreground leading-relaxed">
              Our products are manufactured using 100% high tenacity polyester and meet international safety standards including EN 1492-1, ensuring maximum reliability for construction, logistics, and heavy industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow duration-300">
                <stat.icon className="w-8 h-8 text-primary mb-3" />
                <p className="font-poppins font-extrabold text-3xl text-accent">{stat.value}</p>
                <p className="font-inter text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
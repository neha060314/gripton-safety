import { motion } from 'framer-motion';

const TYPES = [
  {
    title: 'Eye to Eye Web Sling',
    desc: 'Flat woven webbing sling with reinforced eye loops at both ends for versatile lifting configurations. Available in 1 to 10 ton capacities.',
    image: 'assets/eye_to_eye_sling.jpeg',
  },
  {
    title: 'Round Web Sling',
    desc: 'Endless round sling with polyester core yarn wrapped in a protective tubular sleeve. Ideal for delicate loads and wide contact surface lifting.',
    image: 'assets/round_sling images.png',
  },
];

export default function SlingTypes() {
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
          <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">Sling Types</span>
          <h2 className="mt-3 font-poppins font-extrabold text-3xl sm:text-4xl text-accent">Web Sling Varieties</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {TYPES.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-white rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-orange-100/40 transition-all duration-500"
            >
              <div className="aspect-[4/3] bg-slate-100 overflow-hidden flex items-center justify-center">
                <img src={type.image} alt={type.title} className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <h3 className="font-poppins font-bold text-xl text-accent">{type.title}</h3>
                <p className="mt-3 font-inter text-sm text-muted-foreground leading-relaxed">{type.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
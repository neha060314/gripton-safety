import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CATEGORIES = [
  {
    title: 'Lashing Belt',
    desc: 'Heavy-duty cargo securing belts designed for industrial transportation and logistics safety.',
    image: 'assets/lashing_belts.webp',
    path: '/lashing-belt',
  },
  {
    title: 'Web Sling Belt',
    desc: 'Industrial lifting slings manufactured using high strength polyester webbing for safe heavy-duty lifting applications.',
    image: 'assets/web_sling_belts.webp',
    path: '/web-sling',
  },
];

export default function ProductCategories() {
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
          <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">Our Products</span>
          <h2 className="mt-3 font-poppins font-extrabold text-3xl sm:text-4xl text-accent">Product Categories</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-orange-100/40 transition-all duration-500"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden flex items-center justify-center">
                {cat.image ? (
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <p className="font-inter text-sm text-muted-foreground">Product Image Placeholder</p>
                )}
              </div>
              <div className="p-8">
                <h3 className="font-poppins font-bold text-2xl text-accent">{cat.title}</h3>
                <p className="mt-3 font-inter text-base text-muted-foreground leading-relaxed">{cat.desc}</p>
                <Link to={cat.path} className="mt-6 inline-block">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-poppins font-semibold">
                    Explore <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
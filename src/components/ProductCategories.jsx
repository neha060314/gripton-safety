import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CATEGORIES = [
  {
    title: 'One Way Cargo Lashing',
    desc: 'Reliable single-use cargo securing systems designed for export containers, freight transportation, and logistics applications.',
    image: '/assets/one_way_cargo.png',
    path: '/products/one-way-cargo-lashing',
  },
  {
    title: 'Ratchet Lashing',
    desc: 'Heavy-duty ratchet tie-down systems engineered for secure cargo restraint and transportation safety.',
    image: '/assets/lashing_belts.webp',
    path: '/products/ratchet-lashing',
  },
  {
    title: 'Lifting Slings',
    desc: 'High-strength polyester lifting slings manufactured for safe material handling and industrial lifting operations.',
    image: '/assets/web_sling_belts.webp',
    path: '/products/lifting-slings',
  },
  {
    title: 'Hardware',
    desc: 'Premium lifting and lashing hardware including J Hooks, Ratchets and other cargo securing accessories.',
    image: '/assets/hardware_rachet.jpg',
    path: '/products/hardware',
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
          <h2 className="mt-3 font-poppins font-extrabold text-4xl text-accent">Product Categories</h2>
        </motion.div>

        {/* Increased Grid Padding Layout Framework */}
        <div className="grid md:grid-cols-2 gap-12">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-border hover:shadow-2xl hover:shadow-orange-100/40 transition-all duration-500 flex flex-col h-full"
            >
              {/* Scaled Up Image Card Outer Bounds Container */}
              <div className="w-full h-80 bg-white overflow-hidden flex items-center justify-center relative p-4 border-b border-neutral-100">
                {cat.image ? (
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                  />
                ) : (
                  <p className="font-inter text-sm text-muted-foreground">Product Image Placeholder</p>
                )}
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-poppins font-bold text-2xl text-accent group-hover:text-primary transition-colors">{cat.title}</h3>
                <p className="mt-3 font-inter text-base text-muted-foreground leading-relaxed flex-grow">{cat.desc}</p>
                <Link to={cat.path} className="mt-6 inline-block">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-poppins font-semibold px-6 py-5 rounded-xl">
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
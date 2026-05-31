import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-orange-50/30 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-5 h-5 text-primary" />
              <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">Secure. Strong. Reliable.</span>
            </div>
            <h1 className="font-poppins font-extrabold text-4xl sm:text-5xl lg:text-6xl text-accent leading-tight tracking-tight">
              Premium Industrial{' '}
              <span className="text-primary">{"Lifting & Lashing"}</span>{' '}
              Solutions
            </h1>
            <p className="mt-6 font-inter text-lg text-muted-foreground leading-relaxed max-w-xl">
              Gripton Safety manufactures high-performance lashing belts and polyester web sling belts engineered for industrial durability, reliability, and safety.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/web-sling">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-poppins font-bold px-8 h-14 text-base">
                  Explore Products <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-accent text-accent font-poppins font-bold px-8 h-14 text-base hover:bg-accent hover:text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-100 to-orange-50 rounded-2xl aspect-square lg:aspect-[4/3] flex items-center justify-center overflow-hidden shadow-2xl shadow-orange-100/50">
              <img
                src="public/assets/flat_sling_images.png"
                alt="Polyester Flat Sling - Industrial Lifting Solutions"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-white rounded-xl px-6 py-4 shadow-lg">
              <p className="font-poppins font-bold text-2xl">7:1</p>
              <p className="font-inter text-xs">Safety Factor</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
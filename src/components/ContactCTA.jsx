import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section className="py-24 bg-accent">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="font-poppins font-extrabold text-3xl sm:text-4xl text-white leading-tight">
            Need Bulk Orders or Product Information?
          </h2>

          <p className="mt-4 font-inter text-lg text-slate-400">
            Contact our team for custom requirements,
            bulk pricing, and technical specifications.
          </p>

          {/* Contact Details */}
          <div className="mt-8 space-y-3">

            <div className="flex items-center justify-center gap-2 text-white">
              <Phone className="w-4 h-4 text-primary" />
              <a
                href="tel:+919309272870"
                className="hover:text-primary transition-colors"
              >
                +91 9309272870
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-white">
              <Phone className="w-4 h-4 text-primary" />
              <a
                href="tel:+918263066892"
                className="hover:text-primary transition-colors"
              >
                +91 8263066892
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-white">
              <Mail className="w-4 h-4 text-primary" />
              <a
                href="mailto:griptonsafety@gmail.com"
                className="hover:text-primary transition-colors"
              >
                griptonsafety@gmail.com
              </a>
            </div>

          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link to="/contact">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-poppins font-bold px-8 h-14 text-base"
              >
                <Phone className="mr-2 w-5 h-5" />
                Contact Us
              </Button>
            </Link>

            <a
              href="https://wa.me/919309272870"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-accent font-poppins font-bold px-8 h-14 text-base"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Inquiry
              </Button>
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
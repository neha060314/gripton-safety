import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const fade = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9309272870\n+91 8263066892',
    href: null,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'griptonsafety@gmail.com',
    href: 'mailto:griptonsafety@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value:
      'S. Nos. 392, Plot No. 69, Alyali Near Microwire Company, Palghar West, Palghar, Maharashtra – 401404',
    href: null,
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon–Sat: 9:00 AM – 6:00 PM',
    href: null,
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [sending, setSending] = useState(false);

  /** @param {React.FormEvent<HTMLFormElement>} e */
  const handleSubmit = (e) => {
    e.preventDefault();

    setSending(true);

    setTimeout(() => {
      toast.success('Your inquiry has been submitted. We will contact you shortly.');

      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });

      setSending(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-28 pb-20 bg-gradient-to-br from-slate-50 via-white to-orange-50/30">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <motion.div {...fade} className="text-center mb-16">

            <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">
              Contact Us
            </span>

            <h1 className="mt-3 font-poppins font-extrabold text-4xl sm:text-5xl text-accent">
              Get In Touch
            </h1>

            <p className="mt-4 font-inter text-lg text-muted-foreground max-w-xl mx-auto">
              Contact us for bulk orders, custom requirements,
              or product information.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form */}
            <motion.div {...fade} className="lg:col-span-3">

              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-border p-8 shadow-sm space-y-5"
              >

                <div className="grid sm:grid-cols-2 gap-5">

                  <div>
                    <label className="font-inter text-sm font-medium text-accent block mb-2">
                      Full Name *
                    </label>

                    <Input
                      value={form.name}
                      onChange={(/** @type {React.ChangeEvent<HTMLInputElement>} */ e) => setForm({ ...form, name: e.target.value })}
                      required
                      placeholder="Your name"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-sm font-medium text-accent block mb-2">
                      Email *
                    </label>

                    <Input
                      type="email"
                      value={form.email}
                      onChange={(/** @type {React.ChangeEvent<HTMLInputElement>} */ e) => setForm({ ...form, email: e.target.value })}
                      required
                      placeholder="your@email.com"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">

                  <div>
                    <label className="font-inter text-sm font-medium text-accent block mb-2">
                      Phone
                    </label>

                    <Input
                      value={form.phone}
                      onChange={(/** @type {React.ChangeEvent<HTMLInputElement>} */ e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 00000 00000"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-sm font-medium text-accent block mb-2">
                      Company
                    </label>

                    <Input
                      value={form.company}
                      onChange={(/** @type {React.ChangeEvent<HTMLInputElement>} */ e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Company name"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-inter text-sm font-medium text-accent block mb-2">
                    Message *
                  </label>

                  <Textarea
                    value={form.message}
                    onChange={(/** @type {React.ChangeEvent<HTMLTextAreaElement>} */ e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    placeholder="Describe your requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-poppins font-bold h-14 text-base"
                  disabled={sending}
                >
                  {sending ? 'Sending...' : 'Send Inquiry'}
                </Button>

              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              {...fade}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >

              {CONTACT_INFO.map(item => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl border border-border p-6 flex items-start gap-4"
                >

                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>

                  <div>
                    <p className="font-poppins font-bold text-sm text-accent">
                      {item.label}
                    </p>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-inter text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-inter text-sm text-muted-foreground whitespace-pre-line">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/919309272870"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-600 hover:bg-green-700 transition-colors text-white rounded-2xl p-6 text-center"
              >

                <MessageCircle className="w-8 h-8 mx-auto mb-2" />

                <p className="font-poppins font-bold text-lg">
                  WhatsApp Inquiry
                </p>

                <p className="font-inter text-sm text-green-100 mt-1">
                  Quick response on WhatsApp
                </p>
              </a>

              {/* Map */}
              <div className="aspect-[4/3] bg-slate-100 rounded-2xl border border-border flex items-center justify-center">

                <div className="text-center">

                  <MapPin className="w-10 h-10 text-muted-foreground/30 mx-auto mb-2" />

                  <p className="font-inter text-sm text-muted-foreground">
                    Google Maps Placeholder
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
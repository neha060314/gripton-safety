import { motion } from 'framer-motion';

const CERTS = [
  {
    title: 'Certificate of Registration',
    desc: 'ISO quality management system certification for manufacturing excellence.',
    image: '/assets/Certificate_of_Registration.jpg',
  },
  {
    title: 'Management System Certificate',
    desc: 'Compliance with international safety and quality management standards.',
    image: '/assets/Management_System_Certificate.jpg',
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">
            Certifications
          </span>

          <h2 className="mt-3 font-poppins font-extrabold text-3xl sm:text-4xl text-accent">
            Quality You Can Trust
          </h2>

          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Gripton Safety follows strict manufacturing and quality standards
            to ensure reliable industrial lifting and lashing solutions.
          </p>
        </motion.div>

        {/* Certificate Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500"
            >
              
              {/* Certificate Image */}
              <div className="h-[500px] bg-white flex items-center justify-center p-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Certificate Content */}
              <div className="p-6 border-t border-slate-100">
                <h3 className="font-poppins font-bold text-xl text-accent">
                  {cert.title}
                </h3>

                <p className="mt-3 font-inter text-sm leading-relaxed text-muted-foreground">
                  {cert.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';

const DATA = [
  { color: 'Violet', capacity: '1 Ton', hex: '#7B2D8E', width: 25, thickness: 2.0, eyeLength: 250, breaking: 7.0, weight: 0.14 },
  { color: 'Green', capacity: '2 Ton', hex: '#22C55E', width: 50, thickness: 2.2, eyeLength: 250, breaking: 14.0, weight: 0.26 },
  { color: 'Yellow', capacity: '3 Ton', hex: '#EAB308', width: 75, thickness: 2.4, eyeLength: 300, breaking: 21.0, weight: 0.38 },
  { color: 'Grey', capacity: '4 Ton', hex: '#94A3B8', width: 100, thickness: 2.8, eyeLength: 350, breaking: 28.0, weight: 0.52 },
  { color: 'Red', capacity: '5 Ton', hex: '#EF4444', width: 125, thickness: 3.0, eyeLength: 400, breaking: 35.0, weight: 0.65 },
  { color: 'Brown', capacity: '6 Ton', hex: '#92400E', width: 150, thickness: 3.2, eyeLength: 450, breaking: 42.0, weight: 0.78 },
  { color: 'Blue', capacity: '8 Ton', hex: '#3B82F6', width: 200, thickness: 3.6, eyeLength: 500, breaking: 56.0, weight: 1.05 },
  { color: 'Orange', capacity: '10 Ton', hex: '#F26522', width: 300, thickness: 4.0, eyeLength: 600, breaking: 70.0, weight: 1.45 },
];

export default function ColorCapacityTable() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-inter text-sm font-semibold text-primary tracking-wider uppercase">Specification Table</span>
          <h2 className="mt-3 font-poppins font-extrabold text-3xl sm:text-4xl text-accent">Color Coded Capacity Chart</h2>
          <p className="mt-3 font-inter text-muted-foreground">As per EN 1492-1 | Safety Factor 7:1 | 100% High Tenacity Polyester</p>
        </motion.div>

        <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="bg-accent text-white">
                <th className="px-5 py-4 text-left font-poppins text-sm font-bold">WLL (Ton)</th>
                <th className="px-5 py-4 text-left font-poppins text-sm font-bold">Color</th>
                <th className="px-5 py-4 text-left font-poppins text-sm font-bold">Width (mm)</th>
                <th className="px-5 py-4 text-left font-poppins text-sm font-bold">Thickness (mm)</th>
                <th className="px-5 py-4 text-left font-poppins text-sm font-bold">Eye Length (mm)</th>
                <th className="px-5 py-4 text-left font-poppins text-sm font-bold">Breaking Strength (Ton)</th>
                <th className="px-5 py-4 text-left font-poppins text-sm font-bold">Weight/Mtr (Kg)</th>
              </tr>
            </thead>
            <tbody>
              {DATA.map((row, i) => (
                <tr key={row.color} className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'} hover:bg-orange-50/50 transition-colors`}>
                  <td className="px-5 py-4 font-poppins font-bold text-accent">{row.capacity}</td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg shadow-sm border border-border" style={{ backgroundColor: row.hex }} />
                      <span className="font-inter text-sm font-medium text-foreground">{row.color}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4 font-inter text-sm text-muted-foreground">{row.width}</td>
                  <td className="px-5 py-4 font-inter text-sm text-muted-foreground">{row.thickness}</td>
                  <td className="px-5 py-4 font-inter text-sm text-muted-foreground">{row.eyeLength}</td>
                  <td className="px-5 py-4 font-inter text-sm text-muted-foreground">{row.breaking}</td>
                  <td className="px-5 py-4 font-inter text-sm text-muted-foreground">{row.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 font-inter text-xs text-muted-foreground text-center">
          Other widths (25mm–300mm) and customized lengths (1 Mtr to 12 Mtr) available as per requirement.
        </p>
      </div>
    </section>
  );
}
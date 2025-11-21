import { motion } from 'framer-motion'
import { ShieldCheck, Target, Star } from 'lucide-react'

const primary = '#1B5E20'
const secondary = '#2E7D32'

const points = [
  { icon: ShieldCheck, title: 'Strengths', desc: 'Consistent, reliable, and calm under pressure.' },
  { icon: Target, title: 'Vision & Mission', desc: 'Use tech and content to educate and empower others.' },
  { icon: Star, title: 'Unique Value', desc: 'Bridges networking knowledge with creative storytelling.' },
]

export default function Branding() {
  return (
    <section id="branding" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: primary }}>Personal Branding</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">What defines the way I work and create.</p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <motion.div
                initial={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 260, damping: 15 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: '#A5D6A733' }}
              >
                <Icon size={24} color={secondary} />
              </motion.div>
              <h3 className="font-semibold text-lg" style={{ color: primary }}>{title}</h3>
              <p className="mt-1 text-gray-700 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

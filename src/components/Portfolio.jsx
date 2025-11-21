import { motion } from 'framer-motion'
import { ExternalLink, Image as ImageIcon, Cpu } from 'lucide-react'

const primary = '#1B5E20'
const secondary = '#2E7D32'

const items = [
  { title: 'Content Project Placeholder', tag: 'Content', icon: ImageIcon },
  { title: 'IT Lab Practice Placeholder', tag: 'IT', icon: Cpu },
  { title: 'Editing Showcase Placeholder', tag: 'Editing', icon: ImageIcon },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: primary }}>Portfolio</h2>
        <p className="mt-3 text-center text-gray-600">Sample placeholders for upcoming work.</p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map(({ title, tag, icon: Icon }, idx) => (
            <motion.a
              key={title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden border border-gray-200 bg-[#F5F5F5] shadow-sm hover:shadow-md"
            >
              <div className="aspect-video flex items-center justify-center">
                <Icon size={40} color={secondary} className="opacity-80" />
              </div>
              <div className="p-5 bg-white">
                <div className="text-xs px-2 py-1 rounded-full inline-block" style={{ backgroundColor: '#A5D6A744', color: secondary }}>{tag}</div>
                <h3 className="mt-2 font-semibold" style={{ color: primary }}>{title}</h3>
                <div className="mt-2 inline-flex items-center gap-1 text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                  View details <ExternalLink size={16} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

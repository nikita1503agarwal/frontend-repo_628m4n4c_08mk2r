import { motion } from 'framer-motion'
import { Instagram, Mail, Music2 } from 'lucide-react'

const primary = '#1B5E20'
const secondary = '#2E7D32'

const links = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/', color: '#E1306C' },
  { icon: Music2, label: 'TikTok', href: 'https://tiktok.com/@', color: '#111111' },
  { icon: Mail, label: 'Email', href: 'mailto:someone@example.com', color: secondary },
]

export default function Social() {
  return (
    <section id="social" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-3 gap-4">
          {links.map(({ icon: Icon, label, href, color }, idx) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group flex items-center gap-3 bg-[#F5F5F5] p-4 rounded-xl border border-gray-200 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#FFFFFF' }}>
                <Icon size={20} color={color} />
              </div>
              <span className="font-medium" style={{ color: primary }}>{label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

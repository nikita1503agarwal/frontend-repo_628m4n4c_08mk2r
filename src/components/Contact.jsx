import { motion, useScroll, useTransform } from 'framer-motion'

const primary = '#1B5E20'
const secondary = '#2E7D32'
const accent = '#A5D6A7'

export default function Contact() {
  // Parallax background based on scroll
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Parallax soft green background */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{ y, background: `linear-gradient(180deg, #F5FFF5, #EAF6EA)` }}
      />

      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: primary }}>Contact</h2>
        <p className="mt-3 text-center text-gray-600">Let’s build something meaningful together.</p>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input required type="text" className="mt-1 w-full rounded-xl border-gray-200 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#A5D6A7]" />
            </div>
            <div>
              <label className="text-sm text-gray-700">Email</label>
              <input required type="email" className="mt-1 w-full rounded-xl border-gray-200 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#A5D6A7]" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-gray-700">Message</label>
            <textarea required rows="5" className="mt-1 w-full rounded-xl border-gray-200 focus:border-[#2E7D32] focus:ring-2 focus:ring-[#A5D6A7]"></textarea>
          </div>
          <div className="mt-6 flex justify-end">
            <button className="px-5 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-0.5" style={{ backgroundColor: primary, color: '#FFFFFF' }}>
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

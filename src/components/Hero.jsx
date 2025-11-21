import { motion } from 'framer-motion'
import { Leaf, Sparkles } from 'lucide-react'

const primary = '#1B5E20'
const secondary = '#2E7D32'
const accent = '#A5D6A7'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background gradient and subtle shapes */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F5] via-white to-[#F5F5F5]" />

      {/* Animated gradient blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 w-[36rem] h-[36rem] rounded-full blur-3xl opacity-30"
        style={{ background: `radial-gradient(closest-side, ${accent}, transparent)` }}
        animate={{ scale: [1, 1.05, 1], rotate: [0, 8, -6, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-32 -right-20 w-[40rem] h-[40rem] rounded-full blur-3xl opacity-30"
        style={{ background: `radial-gradient(closest-side, ${secondary}, transparent)` }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, -6, 6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
          style={{ borderColor: accent, backgroundColor: '#FFFFFF80', backdropFilter: 'blur(6px)' }}
        >
          <Leaf size={18} color={secondary} />
          <span className="text-sm" style={{ color: secondary }}>Forest Green Aesthetic</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          style={{ color: primary }}
        >
          Hi, I’m Muhammad Fadli Saputra
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-3 text-lg md:text-xl font-medium"
          style={{ color: secondary }}
        >
          IT Enthusiast • Network Student • Content Creator
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-700"
        >
          Passionate about technology, creativity, and meaningful storytelling. I blend
          network fundamentals with digital content to inspire, educate, and solve
          real-world problems with a calm, focused mindset.
        </motion.p>

        {/* CTA badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-8 flex items-center justify-center gap-4 flex-wrap"
        >
          <a
            href="#contact"
            className="px-5 py-3 rounded-xl font-semibold shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-0.5"
            style={{ backgroundColor: primary, color: '#FFFFFF' }}
          >
            Let’s Connect
          </a>
          <a
            href="#portfolio"
            className="px-5 py-3 rounded-xl font-semibold border hover:shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
            style={{ borderColor: secondary, color: primary, backgroundColor: '#FFFFFF' }}
          >
            View Work
          </a>
        </motion.div>

        {/* Minimalist animated separators */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mt-10 h-1 w-40 origin-left rounded-full"
          style={{ background: `linear-gradient(90deg, ${secondary}, ${accent})` }}
        />

        <div className="mt-10 flex items-center justify-center gap-3 text-sm text-gray-600">
          <Sparkles size={16} color={secondary} />
          <span>Smooth animations, clean aesthetics, and thoughtful interactions</span>
        </div>
      </div>
    </section>
  )
}

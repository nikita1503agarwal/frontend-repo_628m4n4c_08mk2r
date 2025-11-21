import { motion } from 'framer-motion'
import { Network, Code2, Languages, Image, Video, Lightbulb } from 'lucide-react'

const skills = [
  { icon: Network, title: 'Networking', desc: 'Basics of routing, switching, IP, and topology.' },
  { icon: Code2, title: 'Basic Programming', desc: 'Fundamentals of logic with simple scripts.' },
  { icon: Languages, title: 'English Learning', desc: 'Active practice in speaking and writing.' },
  { icon: Image, title: 'Photo/Video Editing', desc: 'Enhancing visuals to tell better stories.' },
  { icon: Video, title: 'Content Creation', desc: 'Planning, scripting, and posting consistently.' },
  { icon: Lightbulb, title: 'Problem Solving', desc: 'Calm, structured approach to challenges.' },
]

const primary = '#1B5E20'
const secondary = '#2E7D32'

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: primary }}>Skills</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
          A balanced mix of technical understanding and creative execution.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group bg-[#F5F5F5] rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                   style={{ backgroundColor: '#A5D6A733' }}>
                <Icon size={24} color={secondary} />
              </div>
              <h3 className="font-semibold text-lg" style={{ color: primary }}>{title}</h3>
              <p className="mt-1 text-gray-600 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

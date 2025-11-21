import { motion } from 'framer-motion'

const primary = '#1B5E20'
const secondary = '#2E7D32'

export default function About() {
  return (
    <section id="about" className="relative py-20 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: primary }}>About Me</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I’m a focused and curious learner with a calm, collaborative personality. I study at SMK with a major in Teknik Jaringan Komputer (Computer Network Engineering). I enjoy exploring how systems connect, how information flows, and how technology can be used to solve everyday problems.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="space-y-3">
              <h3 className="font-semibold" style={{ color: secondary }}>Interests</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Networking and IT fundamentals</li>
                <li>Content creation and digital storytelling</li>
                <li>Learning English and communication skills</li>
                <li>Editing photo and video to enhance messages</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold" style={{ color: secondary }}>Philosophy</h3>
              <p>
                Keep it simple, be consistent, and stay curious. I believe small improvements every day lead to meaningful results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

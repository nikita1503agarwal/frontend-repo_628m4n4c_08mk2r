import { motion } from 'framer-motion'

const primary = '#1B5E20'

const experiences = [
  {
    title: 'School Experience',
    period: 'SMK • Teknik Jaringan Komputer',
    desc: 'Hands-on learning in computer networking, fundamental configurations, and teamwork in lab projects.'
  },
  {
    title: 'Organization Experience',
    period: 'Ketua Acara Kemerdekaan',
    desc: 'Led a student independence day event—coordinating roles, schedules, and stage flow with clear communication.'
  },
  {
    title: 'Content Creator Journey',
    period: 'Ongoing',
    desc: 'Creating useful, simple content around tech, learning, and daily productivity.'
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center" style={{ color: primary }}>Experience</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="text-sm text-gray-500">{exp.period}</div>
              <h3 className="mt-1 font-semibold text-xl" style={{ color: primary }}>{exp.title}</h3>
              <p className="mt-2 text-gray-700">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

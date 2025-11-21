const primary = '#1B5E20'
const secondary = '#2E7D32'
const accent = '#A5D6A7'

export default function Footer() {
  return (
    <footer className="relative">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: `linear-gradient(180deg, #FFFFFF, ${accent})` }}
      />
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-700">
            © {new Date().getFullYear()} Muhammad Fadli Saputra
          </div>
          <div className="text-sm" style={{ color: secondary }}>
            Crafted with simplicity • Forest Green Aesthetic
          </div>
        </div>
      </div>
    </footer>
  )
}

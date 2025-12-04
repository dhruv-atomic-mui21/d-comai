const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '80+', label: 'Enterprise Clients' },
  { value: '25+', label: 'Team Experts' },
  { value: '99.9%', label: 'Uptime Guarantee' }
];

export default function Stats() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Trusted by enterprises worldwide for AI, web development, and security solutions
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-300 text-lg font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
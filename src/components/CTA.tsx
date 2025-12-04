import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(239,68,68,0.15),transparent_50%)]"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Elevate Your Digital Presence?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Whether you need AI solutions, custom web development, or comprehensive security services, our team of experts is ready to help. Schedule a free consultation to discuss your project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <button className="group bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                  Get Started Now
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20">
                  View Case Studies
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <Mail className="text-red-400" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Email Us</div>
                    <div className="font-semibold">contact@dcomai.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/20 rounded-lg">
                    <Phone className="text-red-400" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Call Us</div>
                    <div className="font-semibold">+1 (555) 123-4567</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
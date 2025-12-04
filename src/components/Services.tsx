import { Brain, Code, Shield, Lock, Sparkles, Zap, Database, Cloud, ArrowRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { FloatingCard } from './ServiceCard3D';

const services = [
  {
    icon: Brain,
    title: 'AI Solutions',
    tagline: 'Intelligence that scales',
    description: 'Transform your business with cutting-edge artificial intelligence. From machine learning models to natural language processing, we build AI systems that learn, adapt, and deliver measurable results.',
    features: [
      { icon: Sparkles, text: 'Custom ML Models' },
      { icon: Zap, text: 'Predictive Analytics' },
      { icon: Database, text: 'Data Processing' },
      { icon: Brain, text: 'Neural Networks' }
    ],
    gradient: 'from-red-500 to-orange-500',
    bgGradient: 'from-red-50 to-orange-50'
  },
  {
    icon: Code,
    title: 'Contract Web Development',
    tagline: 'Built for your vision',
    description: 'Professional contract-based web development services delivering scalable, high-performance applications. We bring your ideas to life with modern tech stacks and best practices.',
    features: [
      { icon: Code, text: 'Full-Stack Development' },
      { icon: Cloud, text: 'Cloud Architecture' },
      { icon: Zap, text: 'Performance Optimized' },
      { icon: Sparkles, text: 'Modern UI/UX' }
    ],
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50'
  },
  {
    icon: Shield,
    title: 'Security Services',
    tagline: 'Protection you can trust',
    description: 'Comprehensive security solutions to protect your digital assets. From penetration testing to security audits, we ensure your systems are fortified against evolving threats.',
    features: [
      { icon: Shield, text: 'Security Audits' },
      { icon: Lock, text: 'Penetration Testing' },
      { icon: Database, text: 'Data Encryption' },
      { icon: Cloud, text: 'Infrastructure Security' }
    ],
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
            <span className="text-red-600 text-sm font-semibold">Our Core Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What We Do Best
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three pillars of excellence powering digital transformation for businesses worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-3xl transform transition-all duration-500 group-hover:scale-105`}></div>

              <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-200 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <div className="h-64 mb-6 rounded-2xl overflow-hidden relative">
                  <Canvas>
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1} />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />
                    <FloatingCard
                      position={[0, 0, 0]}
                      rotation={[0.2, 0, 0]}
                    />
                  </Canvas>
                </div>

                <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} />
                </div>

                <div className="mb-2">
                  <span className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.tagline}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <feature.icon size={16} className={`bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`} />
                      <span>{feature.text}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 px-6 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 group/btn`}>
                  Learn More
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}

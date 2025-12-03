import { Brain, Code, Lightbulb, Zap, BarChart, Shield } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Consultancy',
    description: 'Strategic AI advisory services to identify opportunities and implement intelligent solutions tailored to your business needs.'
  },
  {
    icon: Code,
    title: 'Web Solutions',
    description: 'Modern, responsive web applications built with cutting-edge technologies and AI-powered features for enhanced user experiences.'
  },
  {
    icon: Zap,
    title: 'AI Software Development',
    description: 'Custom AI-driven software solutions including machine learning models, natural language processing, and computer vision applications.'
  },
  {
    icon: Lightbulb,
    title: 'Intelligent Tools',
    description: 'Innovative AI tools and platforms designed to automate workflows, enhance productivity, and unlock new capabilities.'
  },
  {
    icon: BarChart,
    title: 'Data Analytics',
    description: 'Advanced analytics and business intelligence solutions powered by AI to transform your data into actionable insights.'
  },
  {
    icon: Shield,
    title: 'AI Integration',
    description: 'Seamless integration of AI capabilities into your existing systems and workflows with minimal disruption.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive AI solutions designed to drive innovation and deliver measurable results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 hover:-translate-y-1"
            >
              <div className="mb-5 inline-flex p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
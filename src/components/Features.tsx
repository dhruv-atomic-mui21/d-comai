import { CheckCircle2, Rocket, Users, Award } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    description: 'Fast-track your AI initiatives with our streamlined development process and proven methodologies.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Work with seasoned AI specialists, data scientists, and engineers who bring years of industry experience.'
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Successfully delivered 100+ AI projects across various industries with measurable business impact.'
  }
];

const benefits = [
  'End-to-end AI solution development',
  'Scalable and future-proof architecture',
  'Continuous support and optimization',
  'Transparent pricing and timelines',
  'ROI-focused implementation',
  'Compliance and security first'
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose D COM AI
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We combine technical excellence with business acumen to deliver AI solutions that drive real value and competitive advantage.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-2 bg-red-100 rounded-lg">
                    <feature.icon className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">What You Get</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-red-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
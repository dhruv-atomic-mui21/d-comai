import { CheckCircle2, Rocket, Users, Award, Target, TrendingUp, Shield } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Sphere, Box, Torus } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedGeometry() {
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time * 0.5) * 0.5;
      sphereRef.current.rotation.y = time * 0.3;
    }

    if (boxRef.current) {
      boxRef.current.position.y = Math.cos(time * 0.7) * 0.5;
      boxRef.current.rotation.x = time * 0.4;
      boxRef.current.rotation.y = time * 0.3;
    }

    if (torusRef.current) {
      torusRef.current.position.y = Math.sin(time * 0.6 + 1) * 0.5;
      torusRef.current.rotation.x = time * 0.2;
      torusRef.current.rotation.z = time * 0.5;
    }
  });

  return (
    <>
      <Sphere ref={sphereRef} args={[0.8, 32, 32]} position={[-1.5, 0, 0]}>
        <meshStandardMaterial
          color="#ef4444"
          metalness={0.8}
          roughness={0.2}
          emissive="#ef4444"
          emissiveIntensity={0.3}
        />
      </Sphere>

      <Box ref={boxRef} args={[1, 1, 1]} position={[1.5, 0, 0]}>
        <meshStandardMaterial
          color="#3b82f6"
          metalness={0.8}
          roughness={0.2}
          emissive="#3b82f6"
          emissiveIntensity={0.3}
        />
      </Box>

      <Torus ref={torusRef} args={[0.6, 0.2, 16, 32]} position={[0, 1.5, 0]}>
        <meshStandardMaterial
          color="#10b981"
          metalness={0.8}
          roughness={0.2}
          emissive="#10b981"
          emissiveIntensity={0.3}
        />
      </Torus>
    </>
  );
}

const features = [
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    description: 'Launch your projects faster with our efficient development process and agile methodologies.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Work with industry veterans across AI, web development, and cybersecurity domains.'
  },
  {
    icon: Award,
    title: 'Proven Excellence',
    description: 'Track record of 100+ successful projects with measurable business outcomes.'
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'Every solution is tailored to meet your specific business objectives and KPIs.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Future-proof architecture that grows with your business needs.'
  },
  {
    icon: Shield,
    title: 'Security First',
    description: 'Built-in security best practices and compliance from day one.'
  }
];

const benefits = [
  'End-to-end solution development',
  'Scalable and future-proof architecture',
  '24/7 support and maintenance',
  'Transparent pricing and timelines',
  'ROI-focused implementation',
  'Industry compliance guaranteed'
];

export default function Features() {
  return (
    <section id="features" className="py-32 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full">
            <span className="text-red-600 text-sm font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Excellence in Every Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine technical mastery with strategic thinking to deliver solutions that exceed expectations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-red-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl">
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ef4444" />
                <AnimatedGeometry />
              </Canvas>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-2xl border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">What You Get With Every Project</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <CheckCircle2 className="text-red-500 flex-shrink-0" size={24} />
                <span className="text-gray-700 text-lg font-medium">{benefit}</span>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}

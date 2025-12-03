import { Github, Linkedin, Twitter, Globe } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="h-10 w-10" />
              <span className="font-orbitron font-black text-sm bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent">D_COM AI</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Building a better world with AI. We deliver innovative solutions that transform businesses and drive meaningful impact.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-red-400 transition-colors">Services</a></li>
              <li><a href="#features" className="hover:text-red-400 transition-colors">Features</a></li>
              <li><a href="#about" className="hover:text-red-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/5 hover:bg-red-500 rounded-lg transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-red-500 rounded-lg transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-red-500 rounded-lg transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-red-500 rounded-lg transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 D COM AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <img
            src="/assets/generated/location-icon.dim_200x200.png"
            alt="Location Icon"
            className="w-32 h-32 animate-wiggle"
          />
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white cartoon-text mb-4">
          GET IN <span className="text-cyan-400 glow-text-cyan">TOUCH!</span>
        </h1>
        <p className="text-2xl text-cyan-300 font-bold">Contact Information</p>
      </div>

      {/* Contact Info */}
      <div className="max-w-3xl mx-auto mb-12">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl border-4 border-cyan-400 p-8 shadow-neon-cyan">
          <h2 className="text-4xl font-black text-white cartoon-text mb-8 text-center">
            CONTACT US
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <div className="flex items-start gap-4 bg-slate-900/50 rounded-2xl border-3 border-cyan-300 p-6">
                <Mail className="w-10 h-10 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-black text-white mb-2 cartoon-text">EMAIL</h3>
                  <p className="text-lg text-cyan-100 font-bold">info@sharklan.com</p>
                  <p className="text-lg text-cyan-100 font-bold">support@sharklan.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl border-4 border-purple-400 p-8 shadow-neon-purple text-center">
          <h2 className="text-4xl font-black text-white cartoon-text mb-4">
            QUESTIONS?
          </h2>
          <p className="text-xl text-purple-100 font-bold mb-6">
            We're here to help! Send us an email and we'll get back to you as soon as possible.
          </p>
          <div className="bg-yellow-400 text-slate-950 rounded-2xl border-3 border-yellow-300 p-6">
            <p className="text-xl font-black cartoon-text">
              💡 TIP: Check out our Support page for FAQs and event rules!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

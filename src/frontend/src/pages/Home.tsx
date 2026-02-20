import { Zap, Users, Trophy, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16 relative">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 to-transparent blur-3xl" />
        <div className="relative">
          <img
            src="/assets/generated/shark-lan-banner.dim_1200x400.png"
            alt="Shark LAN Banner"
            className="w-full max-w-5xl mx-auto rounded-3xl border-4 border-cyan-400 shadow-neon-cyan-strong mb-8 animate-float"
          />
          <h1 className="text-7xl md:text-9xl font-black text-white cartoon-text mb-4 animate-pulse-glow">
            SHARK <span className="text-cyan-400 glow-text-cyan">LAN</span>
          </h1>
          <p className="text-3xl font-bold text-cyan-300 mb-6 cartoon-text">
            The Ultimate Gaming Event Experience!
          </p>
          <div className="inline-block bg-yellow-400 text-slate-950 px-8 py-4 rounded-2xl border-4 border-yellow-300 shadow-neon-yellow font-black text-2xl cartoon-button animate-bounce-slow">
            <Calendar className="inline-block w-8 h-8 mr-2" />
            DATE & TIME TBD
          </div>
        </div>
      </section>

      {/* Mascot Section */}
      <section className="mb-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <img
            src="/assets/generated/shark-mascot.dim_400x400.png"
            alt="Shark Mascot"
            className="w-full max-w-md mx-auto rounded-3xl border-4 border-blue-500 shadow-neon-blue animate-wiggle"
          />
        </div>
        <div className="flex-1 space-y-6">
          <h2 className="text-5xl font-black text-white cartoon-text">
            Join the <span className="text-cyan-400 glow-text-cyan">FRENZY!</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Shark LAN is the most electrifying gaming event of the year! Compete in epic tournaments,
            meet fellow gamers, and experience non-stop action in a high-energy atmosphere.
          </p>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl border-4 border-blue-400 p-8 shadow-neon-blue cartoon-card hover:scale-105 transition-transform">
          <Zap className="w-16 h-16 text-yellow-300 mb-4 animate-pulse" />
          <h3 className="text-3xl font-black text-white mb-3 cartoon-text">HIGH ENERGY</h3>
          <p className="text-lg text-blue-100">
            Non-stop gaming action with tournaments, prizes, and epic battles!
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-3xl border-4 border-cyan-400 p-8 shadow-neon-cyan cartoon-card hover:scale-105 transition-transform">
          <Users className="w-16 h-16 text-white mb-4 animate-pulse" />
          <h3 className="text-3xl font-black text-white mb-3 cartoon-text">50 PLAYERS</h3>
          <p className="text-lg text-cyan-100">
            Limited spots available! Bring your own PC or console and compete!
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl border-4 border-purple-400 p-8 shadow-neon-purple cartoon-card hover:scale-105 transition-transform">
          <Trophy className="w-16 h-16 text-yellow-300 mb-4 animate-pulse" />
          <h3 className="text-3xl font-black text-white mb-3 cartoon-text">EPIC PRIZES</h3>
          <p className="text-lg text-purple-100">
            Win amazing prizes and bragging rights as the ultimate champion!
          </p>
        </div>
      </section>

      {/* Crowd Image */}
      <section className="text-center">
        <img
          src="/assets/generated/cheering-crowd.dim_800x400.png"
          alt="Cheering Crowd"
          className="w-full max-w-4xl mx-auto rounded-3xl border-4 border-pink-500 shadow-neon-pink animate-float"
        />
      </section>
    </div>
  );
}

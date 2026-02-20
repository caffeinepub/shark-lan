import { MapPin, Mail, Phone, Navigation } from 'lucide-react';

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
          FIND <span className="text-cyan-400 glow-text-cyan">US!</span>
        </h1>
        <p className="text-2xl text-cyan-300 font-bold">Location & Contact Information</p>
      </div>

      {/* Venue Info */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl border-4 border-cyan-400 p-8 shadow-neon-cyan">
          <h2 className="text-4xl font-black text-white cartoon-text mb-8 text-center">
            EVENT VENUE
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-slate-900/50 rounded-2xl border-3 border-cyan-300 p-6">
                <MapPin className="w-10 h-10 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-black text-white mb-2 cartoon-text">ADDRESS</h3>
                  <p className="text-lg text-cyan-100 font-bold">
                    Shark LAN Gaming Arena
                    <br />
                    123 Gaming Street
                    <br />
                    Tech District
                    <br />
                    London, UK
                    <br />
                    SW1A 1AA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate-900/50 rounded-2xl border-3 border-cyan-300 p-6">
                <Mail className="w-10 h-10 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-black text-white mb-2 cartoon-text">EMAIL</h3>
                  <p className="text-lg text-cyan-100 font-bold">info@sharklan.com</p>
                  <p className="text-lg text-cyan-100 font-bold">support@sharklan.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-slate-900/50 rounded-2xl border-3 border-cyan-300 p-6">
                <Phone className="w-10 h-10 text-cyan-300 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-black text-white mb-2 cartoon-text">PHONE</h3>
                  <p className="text-lg text-cyan-100 font-bold">+44 20 1234 5678</p>
                  <p className="text-sm text-cyan-200 mt-1">Mon-Fri: 9AM - 6PM</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-2xl border-3 border-cyan-300 p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-full h-64 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl border-3 border-cyan-300 flex items-center justify-center mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjIiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
                  <MapPin className="w-24 h-24 text-white animate-bounce-slow relative z-10" />
                </div>
                <p className="text-xl font-black text-white cartoon-text">INTERACTIVE MAP</p>
                <p className="text-cyan-100 font-bold">Coming Soon!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Directions */}
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl border-4 border-purple-400 p-8 shadow-neon-purple">
          <div className="flex items-center gap-4 mb-6">
            <Navigation className="w-12 h-12 text-yellow-300" />
            <h2 className="text-4xl font-black text-white cartoon-text">HOW TO GET HERE</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 rounded-2xl border-3 border-purple-300 p-6">
              <div className="text-4xl mb-3">🚇</div>
              <h3 className="text-2xl font-black text-white mb-3 cartoon-text">BY TUBE</h3>
              <p className="text-lg text-purple-100 font-bold">
                Nearest Station: Tech District
                <br />
                Lines: Central, Northern
                <br />
                5 minute walk from exit
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-2xl border-3 border-purple-300 p-6">
              <div className="text-4xl mb-3">🚌</div>
              <h3 className="text-2xl font-black text-white mb-3 cartoon-text">BY BUS</h3>
              <p className="text-lg text-purple-100 font-bold">
                Bus Routes: 12, 45, 78, 156
                <br />
                Stop: Gaming Street
                <br />
                Right outside venue
              </p>
            </div>

            <div className="bg-slate-900/50 rounded-2xl border-3 border-purple-300 p-6">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="text-2xl font-black text-white mb-3 cartoon-text">BY CAR</h3>
              <p className="text-lg text-purple-100 font-bold">
                Parking: Multi-story nearby
                <br />
                £10 all-day rate
                <br />
                Limited spaces available
              </p>
            </div>
          </div>

          <div className="mt-8 bg-yellow-400 text-slate-950 rounded-2xl border-3 border-yellow-300 p-6 text-center">
            <p className="text-xl font-black cartoon-text">
              💡 TIP: Arrive early to secure parking and get the best setup spots!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

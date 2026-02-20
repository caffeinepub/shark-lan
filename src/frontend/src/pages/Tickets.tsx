import { Ticket, Monitor, Gamepad2, Users, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Tickets() {
  const tickets = [
    {
      name: 'BRONZE SHARK',
      price: '£5',
      number: '#001-017',
      color: 'from-orange-600 to-orange-800',
      border: 'border-orange-400',
      shadow: 'shadow-neon-orange',
      features: ['Event Access', 'BYO Setup Space', 'Tournament Entry'],
    },
    {
      name: 'SILVER SHARK',
      price: '£10',
      number: '#018-033',
      color: 'from-gray-500 to-gray-700',
      border: 'border-gray-300',
      shadow: 'shadow-neon-white',
      features: ['All Bronze Features', 'Priority Seating', 'Event Swag Bag'],
      popular: true,
    },
    {
      name: 'GOLD SHARK',
      price: '£15',
      number: '#034-050',
      color: 'from-yellow-500 to-yellow-700',
      border: 'border-yellow-300',
      shadow: 'shadow-neon-yellow',
      features: ['All Silver Features', 'VIP Lounge Access', 'Exclusive Merch'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <img
            src="/assets/generated/ticket-icon.dim_200x200.png"
            alt="Ticket Icon"
            className="w-32 h-32 animate-wiggle"
          />
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white cartoon-text mb-4">
          GET YOUR <span className="text-cyan-400 glow-text-cyan">TICKETS!</span>
        </h1>
        <p className="text-2xl text-cyan-300 font-bold mb-4">Choose Your Tier & Dive In!</p>
        <div className="inline-block bg-yellow-400 text-slate-950 px-6 py-3 rounded-xl border-3 border-yellow-300 shadow-neon-yellow font-black text-xl cartoon-button">
          <Calendar className="inline-block w-6 h-6 mr-2" />
          DATE & TIME TBD
        </div>
      </div>

      {/* Important Info */}
      <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl border-4 border-cyan-400 p-8 shadow-neon-cyan">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-center gap-4">
            <Monitor className="w-12 h-12 text-cyan-300 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-black text-white cartoon-text">BYO PC</h3>
              <p className="text-cyan-100">Bring Your Own Computer</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Gamepad2 className="w-12 h-12 text-cyan-300 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-black text-white cartoon-text">BYO CONSOLE</h3>
              <p className="text-cyan-100">Bring Your Own Console</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Users className="w-12 h-12 text-cyan-300 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-black text-white cartoon-text">50 PLAYERS MAX</h3>
              <p className="text-cyan-100">Limited Capacity Event</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Ticket className="w-12 h-12 text-cyan-300 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-black text-white cartoon-text">NUMBERED TICKETS</h3>
              <p className="text-cyan-100">Each Ticket is Unique</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {tickets.map((ticket) => (
          <div
            key={ticket.name}
            className={`relative bg-gradient-to-br ${ticket.color} rounded-3xl border-4 ${ticket.border} p-8 ${ticket.shadow} cartoon-card hover:scale-105 transition-transform`}
          >
            {ticket.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-6 py-2 rounded-full border-3 border-pink-300 shadow-neon-pink font-black text-sm animate-bounce-slow">
                MOST POPULAR!
              </div>
            )}
            <div className="text-center mb-6">
              <h3 className="text-3xl font-black text-white cartoon-text mb-2">{ticket.name}</h3>
              <div className="text-6xl font-black text-white mb-2">{ticket.price}</div>
              <div className="text-lg font-bold text-white/80">{ticket.number}</div>
            </div>
            <ul className="space-y-3 mb-8">
              {ticket.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-white font-bold">
                  <div className="w-2 h-2 bg-cyan-300 rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button className="w-full bg-white text-slate-950 hover:bg-cyan-300 font-black text-xl py-6 rounded-xl border-3 border-white/50 shadow-lg cartoon-button">
              BUY NOW
            </Button>
          </div>
        ))}
      </div>

      {/* Setup Images */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src="/assets/generated/gaming-pc-setup.dim_600x400.png"
            alt="Gaming PC Setup"
            className="w-full rounded-3xl border-4 border-blue-500 shadow-neon-blue"
          />
          <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-6 py-3 rounded-xl border-3 border-blue-400 font-black text-xl cartoon-button">
            PC GAMING
          </div>
        </div>
        <div className="relative">
          <img
            src="/assets/generated/gaming-console.dim_600x400.png"
            alt="Gaming Console"
            className="w-full rounded-3xl border-4 border-purple-500 shadow-neon-purple"
          />
          <div className="absolute bottom-4 left-4 bg-purple-600 text-white px-6 py-3 rounded-xl border-3 border-purple-400 font-black text-xl cartoon-button">
            CONSOLE GAMING
          </div>
        </div>
      </div>
    </div>
  );
}

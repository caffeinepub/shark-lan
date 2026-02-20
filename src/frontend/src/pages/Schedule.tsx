import { useState } from 'react';
import { Calendar, Trophy, Gamepad2, Clock } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Schedule() {
  const [selectedDay, setSelectedDay] = useState('day1');

  const schedules = {
    day1: [
      { time: '09:00 AM', event: 'Doors Open & Registration', icon: Clock },
      { time: '10:00 AM', event: 'Opening Ceremony', icon: Trophy },
      { time: '11:00 AM', event: 'Fortnite Tournament - Round 1', icon: Gamepad2 },
      { time: '01:00 PM', event: 'Lunch Break', icon: Clock },
      { time: '02:00 PM', event: 'Rocket League Tournament', icon: Gamepad2 },
      { time: '04:00 PM', event: 'Call of Duty: Warzone - Qualifiers', icon: Gamepad2 },
      { time: '06:00 PM', event: 'Free Play & Networking', icon: Gamepad2 },
      { time: '08:00 PM', event: 'Day 1 Wrap-Up', icon: Trophy },
      { time: '00:00', event: 'Event Ends', icon: Clock },
    ],
    day2: [
      { time: '10:00 AM', event: 'Doors Open', icon: Clock },
      { time: '11:00 AM', event: 'Valorant Tournament - Semi Finals', icon: Gamepad2 },
      { time: '01:00 PM', event: 'Lunch Break', icon: Clock },
      { time: '02:00 PM', event: 'League of Legends - Finals', icon: Trophy },
      { time: '04:00 PM', event: 'Super Smash Bros Ultimate', icon: Gamepad2 },
      { time: '06:00 PM', event: 'Grand Finals & Prize Ceremony', icon: Trophy },
      { time: '08:00 PM', event: 'Closing Party', icon: Trophy },
      { time: '00:00', event: 'Event Ends', icon: Clock },
    ],
  };

  const games = [
    'Fortnite',
    'Rocket League',
    'Call of Duty: Warzone',
    'Valorant',
    'League of Legends',
    'Super Smash Bros Ultimate',
    'Minecraft',
    'Among Us',
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <img
            src="/assets/generated/schedule-icon.dim_200x200.png"
            alt="Schedule Icon"
            className="w-32 h-32 animate-wiggle"
          />
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white cartoon-text mb-4">
          EVENT <span className="text-cyan-400 glow-text-cyan">SCHEDULE</span>
        </h1>
        <p className="text-2xl text-cyan-300 font-bold mb-4">Plan Your Gaming Adventure!</p>
        <div className="inline-block bg-yellow-400 text-slate-950 px-6 py-3 rounded-xl border-3 border-yellow-300 shadow-neon-yellow font-black text-xl cartoon-button">
          <Calendar className="inline-block w-6 h-6 mr-2" />
          DATE & TIME TBD
        </div>
      </div>

      {/* Day Selector */}
      <div className="max-w-2xl mx-auto mb-12">
        <label className="block text-2xl font-black text-white cartoon-text mb-4 text-center">
          SELECT DAY:
        </label>
        <Select value={selectedDay} onValueChange={setSelectedDay}>
          <SelectTrigger className="w-full h-16 text-2xl font-black bg-slate-800 border-4 border-cyan-400 rounded-xl shadow-neon-cyan cartoon-button">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-4 border-cyan-400">
            <SelectItem value="day1" className="text-xl font-bold cursor-pointer hover:bg-cyan-600">
              🦈 DAY 1 - Saturday
            </SelectItem>
            <SelectItem value="day2" className="text-xl font-bold cursor-pointer hover:bg-cyan-600">
              🦈 DAY 2 - Sunday
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Schedule Timeline */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl border-4 border-cyan-400 p-8 shadow-neon-cyan">
          <h2 className="text-4xl font-black text-white cartoon-text mb-6 text-center">
            {selectedDay === 'day1' ? '🦈 DAY 1 SCHEDULE' : '🦈 DAY 2 SCHEDULE'}
          </h2>
          <div className="space-y-4">
            {schedules[selectedDay as keyof typeof schedules].map((item, index) => {
              const Icon = item.icon;
              const isLastItem = index === schedules[selectedDay as keyof typeof schedules].length - 1;
              return (
                <div
                  key={index}
                  className={`flex items-center gap-4 bg-slate-900/50 rounded-2xl border-3 p-4 hover:scale-102 transition-transform cartoon-card ${
                    isLastItem ? 'border-yellow-400 shadow-neon-yellow' : 'border-cyan-300'
                  }`}
                >
                  <div className={`px-4 py-2 rounded-xl font-black text-lg border-2 min-w-[120px] text-center ${
                    isLastItem 
                      ? 'bg-yellow-400 text-slate-950 border-yellow-300' 
                      : 'bg-cyan-400 text-slate-950 border-cyan-300'
                  }`}>
                    {item.time}
                  </div>
                  <Icon className={`w-8 h-8 flex-shrink-0 ${isLastItem ? 'text-yellow-300' : 'text-cyan-300'}`} />
                  <div className="text-xl font-bold text-white">{item.event}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Game Lineup */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-5xl font-black text-white cartoon-text mb-8 text-center">
          GAME <span className="text-cyan-400 glow-text-cyan">LINEUP</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {games.map((game) => (
            <div
              key={game}
              className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl border-3 border-purple-400 p-4 shadow-neon-purple text-center cartoon-card hover:scale-105 transition-transform"
            >
              <Gamepad2 className="w-12 h-12 text-white mx-auto mb-2" />
              <div className="text-lg font-black text-white">{game}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Network Cables Image */}
      <div className="text-center">
        <img
          src="/assets/generated/network-cables.dim_500x300.png"
          alt="Network Cables"
          className="w-full max-w-2xl mx-auto rounded-3xl border-4 border-green-500 shadow-neon-green animate-float"
        />
      </div>
    </div>
  );
}

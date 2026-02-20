import { useState } from 'react';
import { HelpCircle, Shield, Mail, Wrench } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function Support() {
  const [selectedSection, setSelectedSection] = useState('faq');

  const faqs = [
    {
      question: 'What should I bring to Shark LAN?',
      answer: 'Bring your own PC or console, peripherals (keyboard, mouse, controller), power cables, and any games you want to play. We provide tables, chairs, and internet connection!',
    },
    {
      question: 'Is there an age limit?',
      answer: 'Shark LAN is open to all ages! Players under 16 must have parental consent. We maintain a friendly, inclusive environment for everyone.',
    },
    {
      question: 'What if I don\'t have a team?',
      answer: 'No problem! We have solo entry options and can help match you with other players. Many friendships start at Shark LAN!',
    },
    {
      question: 'Are there food and drinks available?',
      answer: 'Yes! We have food vendors on-site and designated break areas. You can also bring your own snacks and drinks (non-alcoholic).',
    },
    {
      question: 'Can I leave and come back?',
      answer: 'Absolutely! Your ticket grants you re-entry throughout the event. Just show your wristband at the door.',
    },
  ];

  const rules = [
    'Respect all players, staff, and equipment at all times',
    'No cheating, hacking, or exploiting in any tournaments',
    'Keep your gaming area clean and organized',
    'No alcohol or illegal substances on premises',
    'Follow tournament rules and staff instructions',
    'Be a good sport - win or lose with grace',
    'No harassment, bullying, or toxic behavior',
    'Report any issues to staff immediately',
  ];

  const troubleshooting = [
    {
      issue: 'Internet Connection Problems',
      solution: 'Check your ethernet cable connection. If using WiFi, ensure you\'re connected to "SharkLAN_Guest". Contact tech support if issues persist.',
    },
    {
      issue: 'Power Issues',
      solution: 'Verify your power strip is plugged in and switched on. Don\'t overload outlets. Ask staff for additional power if needed.',
    },
    {
      issue: 'Game Installation',
      solution: 'Download and install games before arriving. We have limited bandwidth. Bring games on external drives if possible.',
    },
    {
      issue: 'Tournament Registration',
      solution: 'Register at the tournament desk 30 minutes before start time. Bring your ticket and valid ID.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <img
            src="/assets/generated/support-icon.dim_200x200.png"
            alt="Support Icon"
            className="w-32 h-32 animate-wiggle"
          />
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white cartoon-text mb-4">
          SUPPORT <span className="text-cyan-400 glow-text-cyan">CENTER</span>
        </h1>
        <p className="text-2xl text-cyan-300 font-bold">We're Here to Help!</p>
      </div>

      {/* Section Selector */}
      <div className="max-w-2xl mx-auto mb-12">
        <label className="block text-2xl font-black text-white cartoon-text mb-4 text-center">
          SELECT TOPIC:
        </label>
        <Select value={selectedSection} onValueChange={setSelectedSection}>
          <SelectTrigger className="w-full h-16 text-2xl font-black bg-slate-800 border-4 border-cyan-400 rounded-xl shadow-neon-cyan cartoon-button">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-4 border-cyan-400">
            <SelectItem value="faq" className="text-xl font-bold cursor-pointer hover:bg-cyan-600">
              ❓ FAQ
            </SelectItem>
            <SelectItem value="rules" className="text-xl font-bold cursor-pointer hover:bg-cyan-600">
              📋 Event Rules
            </SelectItem>
            <SelectItem value="contact" className="text-xl font-bold cursor-pointer hover:bg-cyan-600">
              📧 Contact Form
            </SelectItem>
            <SelectItem value="troubleshooting" className="text-xl font-bold cursor-pointer hover:bg-cyan-600">
              🔧 Troubleshooting
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto">
        {selectedSection === 'faq' && (
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl border-4 border-cyan-400 p-8 shadow-neon-cyan">
            <div className="flex items-center gap-4 mb-6">
              <HelpCircle className="w-12 h-12 text-cyan-300" />
              <h2 className="text-4xl font-black text-white cartoon-text">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-slate-900/50 rounded-2xl border-3 border-cyan-300 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-xl font-bold text-white hover:text-cyan-300 py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-cyan-100 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}

        {selectedSection === 'rules' && (
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl border-4 border-purple-400 p-8 shadow-neon-purple">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-12 h-12 text-yellow-300" />
              <h2 className="text-4xl font-black text-white cartoon-text">EVENT RULES</h2>
            </div>
            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-slate-900/50 rounded-2xl border-3 border-purple-300 p-4"
                >
                  <div className="bg-yellow-400 text-slate-950 w-10 h-10 rounded-full flex items-center justify-center font-black text-xl flex-shrink-0 border-2 border-yellow-300">
                    {index + 1}
                  </div>
                  <p className="text-lg font-bold text-white pt-1">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedSection === 'contact' && (
          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl border-4 border-cyan-400 p-8 shadow-neon-cyan">
            <div className="flex items-center gap-4 mb-6">
              <Mail className="w-12 h-12 text-white" />
              <h2 className="text-4xl font-black text-white cartoon-text">CONTACT US</h2>
            </div>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-xl font-black text-white mb-2 block">
                  NAME
                </Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  className="h-14 text-lg bg-slate-900 border-3 border-cyan-300 text-white placeholder:text-gray-400 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-xl font-black text-white mb-2 block">
                  EMAIL
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  className="h-14 text-lg bg-slate-900 border-3 border-cyan-300 text-white placeholder:text-gray-400 rounded-xl"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-xl font-black text-white mb-2 block">
                  MESSAGE
                </Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={6}
                  className="text-lg bg-slate-900 border-3 border-cyan-300 text-white placeholder:text-gray-400 rounded-xl"
                />
              </div>
              <Button className="w-full h-16 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-2xl rounded-xl border-3 border-yellow-300 shadow-neon-yellow cartoon-button">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        )}

        {selectedSection === 'troubleshooting' && (
          <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-3xl border-4 border-green-400 p-8 shadow-neon-green">
            <div className="flex items-center gap-4 mb-6">
              <Wrench className="w-12 h-12 text-yellow-300" />
              <h2 className="text-4xl font-black text-white cartoon-text">TROUBLESHOOTING</h2>
            </div>
            <div className="space-y-6">
              {troubleshooting.map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-900/50 rounded-2xl border-3 border-green-300 p-6"
                >
                  <h3 className="text-2xl font-black text-yellow-300 mb-3 cartoon-text">
                    {item.issue}
                  </h3>
                  <p className="text-lg text-white font-bold">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

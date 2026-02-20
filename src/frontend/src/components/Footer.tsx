import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'shark-lan';

  return (
    <footer className="bg-slate-950 border-t-4 border-cyan-400 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-white text-lg font-bold flex items-center justify-center gap-2">
            © {currentYear} Shark LAN. Built with{' '}
            <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

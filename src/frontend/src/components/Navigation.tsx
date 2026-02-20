import { Link, useRouterState } from '@tanstack/react-router';
import { Gamepad2 } from 'lucide-react';

export default function Navigation() {
  const router = useRouterState();
  const currentPath = router.location.pathname;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/tickets', label: 'Tickets' },
    { path: '/schedule', label: 'Schedule' },
    { path: '/support', label: 'Support' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b-4 border-cyan-400 shadow-neon-cyan">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Gamepad2 className="w-10 h-10 text-cyan-400 animate-pulse-glow" />
              <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            </div>
            <span className="text-3xl font-black text-white cartoon-text tracking-wider">
              SHARK <span className="text-cyan-400">LAN</span>
            </span>
          </Link>

          <ul className="flex gap-2">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`
                      relative px-6 py-3 font-bold text-lg tracking-wide
                      rounded-xl border-3 transition-all duration-200
                      cartoon-button
                      ${
                        isActive
                          ? 'bg-cyan-400 text-slate-950 border-cyan-300 shadow-neon-cyan-strong scale-105'
                          : 'bg-slate-800 text-white border-slate-600 hover:border-cyan-400 hover:shadow-neon-cyan hover:scale-105'
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

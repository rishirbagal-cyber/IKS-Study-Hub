
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { auth, logoutUser } from '../firebase/config';
import { User } from 'firebase/auth';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  
  const location = useLocation();

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  const navItems = [
    { label: 'Home', path: '/', icon: '🏠' },
    { label: 'Topics', path: '/topics', icon: '📖' },
    { label: 'Flashcards', path: '/flashcards', icon: '🃏' },
    { label: 'Roadmap', path: '/roadmap', icon: '🗺️' },
    { label: 'AI Helper', path: '/chat', icon: '🤖' },
    { label: 'Study Mats', path: '/materials', icon: '📁' },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 sticky top-0 h-screen p-6">
        <div className="flex items-center gap-2 mb-10">
          <div className="bg-indigo-600 text-white p-2 rounded-lg font-bold text-xl">IKS</div>
          <h1 className="font-display text-xl font-bold text-slate-800">Study Hub</h1>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                location.pathname === item.path
                  ? 'bg-indigo-50 text-indigo-700 font-semibold'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-100">
          <div className="bg-orange-50 p-4 rounded-xl">
            <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-1">Weekly Goal</p>
            <div className="h-2 w-full bg-orange-200 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 w-[65%]"></div>
            </div>
            <p className="text-xs text-orange-700 mt-2">65% of your path completed!</p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="text-sm font-semibold truncate text-slate-700">
              {user?.displayName || user?.email || 'Student'}
            </div>
            <button 
              onClick={() => logoutUser()} 
              className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Top Nav */}
      <header className="md:hidden bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 text-white p-1.5 rounded-lg font-bold">IKS</div>
          <h1 className="font-display text-lg font-bold text-slate-800">Study Hub</h1>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="bg-white w-3/4 h-full p-6 animate-slide-in" onClick={e => e.stopPropagation()}>
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium p-2"
                >
                  <span>{item.icon}</span> {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 max-w-6xl mx-auto w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;

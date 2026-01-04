import React from 'react';
import { Logo } from './Logo';
import { Printer } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  hideNav?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, hideNav = false }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white selection:bg-brand-light selection:text-white flex flex-col">
      {/* Navigation */}
      {!hideNav && (
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 py-4 px-6 print:hidden">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link to="/">
              <Logo />
            </Link>
            
            <div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest text-gray-500">
              {isHome ? (
                <>
                  <a href="#overview" className="hover:text-brand-dark transition-colors">Overview</a>
                  <a href="#process" className="hover:text-brand-dark transition-colors">Process</a>
                  <a href="#system" className="hover:text-brand-dark transition-colors">System</a>
                  <a href="#pricing" className="hover:text-brand-dark transition-colors">Pricing</a>
                </>
              ) : (
                <Link to="/" className="hover:text-brand-dark transition-colors">Product Strategy</Link>
              )}
              <Link to="/blog" className="hover:text-brand-dark transition-colors text-brand-dark">Insights / Blog</Link>
            </div>

            <div className="flex items-center gap-4">
              {isHome && (
                <button 
                  onClick={handlePrint}
                  className="flex items-center gap-2 text-gray-500 hover:text-brand-dark transition-colors text-xs font-bold uppercase tracking-widest"
                  title="Print or Save as PDF"
                >
                  <Printer size={16} />
                  <span className="hidden sm:inline">Save as PDF</span>
                </button>
              )}
              <button className="bg-brand-dark text-white px-6 py-2 rounded font-bold text-xs uppercase tracking-widest hover:bg-brand-light transition-colors">
                Deploy ASR
              </button>
            </div>
          </div>
        </nav>
      )}

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-brand-dark text-white border-t border-white/10 py-12 px-6 print:hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <Logo variant="light" />
            <div className="flex gap-8 text-sm opacity-60">
                <span>© 2024 Luis F Romo</span>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
            </div>
        </div>
      </footer>
    </div>
  );
};
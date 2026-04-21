import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-accent font-display text-2xl font-bold">小说分析与创作助手</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-accent transition-colors">
              首页
            </Link>
            <Link to="/analyzer" className="hover:text-accent transition-colors">
              分析工具
            </Link>
            <Link to="/creator" className="hover:text-accent transition-colors">
              创作助手
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
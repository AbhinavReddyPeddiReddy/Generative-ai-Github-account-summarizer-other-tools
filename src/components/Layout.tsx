import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <nav className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold text-white">AI Tools Hub</span>
            </Link>
            <div className="flex space-x-4">
              <Link to="/history" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                History
              </Link>
              <Link to="/settings" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Settings
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function ToolLayout({ title, description, children }: Props) {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate('/')}
          className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-400" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      {children}
    </div>
  );
}
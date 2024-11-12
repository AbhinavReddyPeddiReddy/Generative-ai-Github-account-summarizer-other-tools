import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { Tool } from '../types';

type Props = {
  tool: Tool;
};

export default function ToolCard({ tool }: Props) {
  const Icon = Icons[tool.icon as keyof typeof Icons];

  return (
    <Link
      to={tool.path}
      className="block group hover:scale-105 transition-transform duration-200"
    >
      <div className="p-6 rounded-xl bg-gray-800 border border-gray-700 hover:border-purple-500 transition-colors">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
              {tool.name}
            </h3>
            <p className="text-gray-400 text-sm mt-1">{tool.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
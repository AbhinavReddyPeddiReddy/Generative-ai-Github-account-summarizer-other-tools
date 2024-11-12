import React from 'react';
import { Bot, FileText, Youtube, Github } from 'lucide-react';
import ToolCard from '../components/ToolCard';
import { Tool } from '../types';

const tools: Tool[] = [
  {
    id: 'story-generator',
    name: 'Story Generator',
    description: 'Create engaging stories with AI assistance',
    icon: 'Bot',
    path: '/tools/story-generator',
  },
  {
    id: 'pdf-summarizer',
    name: 'PDF Summarizer',
    description: 'Extract key insights from PDF documents',
    icon: 'FileText',
    path: '/tools/pdf-summarizer',
  },
  {
    id: 'youtube-summarizer',
    name: 'YouTube Summarizer',
    description: 'Get concise summaries of YouTube videos',
    icon: 'Youtube',
    path: '/tools/youtube-summarizer',
  },
  {
    id: 'github-analyzer',
    name: 'GitHub Analyzer',
    description: 'Analyze GitHub profiles and repositories',
    icon: 'Github',
    path: '/tools/github-analyzer',
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          AI-Powered Tools for Everyone
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Transform your workflow with our suite of intelligent tools. Generate stories,
          summarize documents, and extract insights with the power of AI.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      <section className="bg-gray-800/50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Powered by Google Gemini
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Experience state-of-the-art AI capabilities with Google's Gemini technology.
          Get started by adding your API key in the settings.
        </p>
      </section>
    </div>
  );
}
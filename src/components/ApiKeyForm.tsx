import React, { useState } from 'react';
import { toast } from 'sonner';
import { Key } from 'lucide-react';
import { getGeminiKey, setGeminiKey } from '../lib/gemini';

export default function ApiKeyForm() {
  const [apiKey, setApiKey] = useState(getGeminiKey() || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim()) {
      toast.error('Please enter an API key');
      return;
    }
    setGeminiKey(apiKey.trim());
    toast.success('API key saved successfully');
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
      <div className="flex items-center space-x-3 mb-4">
        <Key className="w-6 h-6 text-purple-400" />
        <h2 className="text-xl font-semibold text-white">Google Gemini API Key</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="apiKey" className="block text-sm font-medium text-gray-300 mb-2">
            Enter your API key
          </label>
          <input
            type="password"
            id="apiKey"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="sk-..."
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
        >
          Save API Key
        </button>
      </form>
    </div>
  );
}
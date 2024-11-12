import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import useGemini from '../../hooks/useGemini';

export default function StoryGenerator() {
  const [prompt, setPrompt] = useState('');
  const [story, setStory] = useState('');
  const { generateContent, loading } = useGemini('story-generator');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    try {
      const result = await generateContent(
        `Generate a creative story based on this prompt: ${prompt}`
      );
      setStory(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ToolLayout
      title="Story Generator"
      description="Create engaging stories with AI assistance"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-2">
            Enter your story prompt
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            rows={4}
            placeholder="Once upon a time..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
        >
          {loading ? 'Generating...' : 'Generate Story'}
        </button>
      </form>

      {story && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Generated Story</h2>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 whitespace-pre-wrap">{story}</p>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
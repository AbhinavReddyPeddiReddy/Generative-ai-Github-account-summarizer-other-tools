import React, { useState } from 'react';
import ToolLayout from '../../components/ToolLayout';
import useGemini from '../../hooks/useGemini';

export default function PdfSummarizer() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const { generateContent, loading } = useGemini('pdf-summarizer');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const result = await generateContent(
        `Summarize the following text in a clear and concise way: ${text}`
      );
      setSummary(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ToolLayout
      title="PDF Summarizer"
      description="Extract key insights from text content"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="text" className="block text-sm font-medium text-gray-300 mb-2">
            Paste your text here
          </label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            rows={8}
            placeholder="Paste the text you want to summarize..."
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
        >
          {loading ? 'Summarizing...' : 'Generate Summary'}
        </button>
      </form>

      {summary && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Summary</h2>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 whitespace-pre-wrap">{summary}</p>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
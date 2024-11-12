import React, { useState } from 'react';
import { AlertCircle, Loader2 } from 'lucide-react';
import ToolLayout from '../../components/ToolLayout';
import useGemini from '../../hooks/useGemini';
import { getTranscript } from '../../lib/youtube';

export default function YoutubeSummarizer() {
  const [url, setUrl] = useState('');
  const [fetchingTranscript, setFetchingTranscript] = useState(false);
  const [error, setError] = useState('');
  const [summary, setSummary] = useState('');
  const { generateContent, loading } = useGemini('youtube-summarizer');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setError('');
    setSummary('');
    setFetchingTranscript(true);

    try {
      const transcript = await getTranscript(url);
      const result = await generateContent(
        `Summarize this YouTube video transcript in a clear and concise way, highlighting the main points and key takeaways: ${transcript}`
      );
      setSummary(result);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setFetchingTranscript(false);
    }
  };

  const isProcessing = fetchingTranscript || loading;

  return (
    <ToolLayout
      title="YouTube Summarizer"
      description="Get concise summaries of YouTube videos"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-300 mb-2">
            YouTube Video URL
          </label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="https://youtube.com/watch?v=..."
          />
        </div>

        {error && (
          <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-4 rounded-lg">
            <AlertCircle className="w-5 h-5" />
            <p>{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isProcessing || !url.trim()}
          className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          {isProcessing && <Loader2 className="w-5 h-5 animate-spin" />}
          <span>
            {fetchingTranscript
              ? 'Fetching Transcript...'
              : loading
              ? 'Generating Summary...'
              : 'Generate Summary'}
          </span>
        </button>
      </form>

      {summary && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Video Summary</h2>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 whitespace-pre-wrap">{summary}</p>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
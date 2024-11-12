import React, { useState } from 'react';
import { AlertCircle, Loader2, Github } from 'lucide-react';
import ToolLayout from '../../components/ToolLayout';
import useGemini from '../../hooks/useGemini';
import { fetchGitHubProfile } from '../../lib/github';

export default function GithubAnalyzer() {
  const [username, setUsername] = useState('');
  const [fetchingProfile, setFetchingProfile] = useState(false);
  const [error, setError] = useState('');
  const [analysis, setAnalysis] = useState('');
  const { generateContent, loading } = useGemini('github-analyzer');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setError('');
    setAnalysis('');
    setFetchingProfile(true);

    try {
      const { profile, repos } = await fetchGitHubProfile(username);
      
      const prompt = `Analyze this GitHub profile and provide insights about the developer:
      
Profile:
- Username: ${profile.login}
- Name: ${profile.name || 'Not specified'}
- Bio: ${profile.bio || 'Not specified'}
- Location: ${profile.location || 'Not specified'}
- Public repos: ${profile.public_repos}
- Followers: ${profile.followers}
- Following: ${profile.following}
- Account created: ${new Date(profile.created_at).toLocaleDateString()}

Recent Repositories:
${repos.map(repo => `- ${repo.name} (${repo.language || 'N/A'}): ${repo.description || 'No description'}`).join('\n')}

Please provide:
1. A brief overview of the developer's focus and expertise
2. Analysis of their main programming languages and technologies
3. Notable projects or contributions
4. Activity level and engagement in the GitHub community`;

      const result = await generateContent(prompt);
      setAnalysis(result);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setFetchingProfile(false);
    }
  };

  const isProcessing = fetchingProfile || loading;

  return (
    <ToolLayout
      title="GitHub Profile Analyzer"
      description="Get insights about any GitHub user's profile and activity"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
            GitHub Username
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Github className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full pl-10 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="octocat"
            />
          </div>
        </div>

        {error && (
          <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-4 rounded-lg">
            <AlertCircle className="w-5 h-5" />
            <p>{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isProcessing || !username.trim()}
          className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center justify-center space-x-2"
        >
          {isProcessing && <Loader2 className="w-5 h-5 animate-spin" />}
          <span>
            {fetchingProfile
              ? 'Fetching Profile...'
              : loading
              ? 'Analyzing Profile...'
              : 'Analyze Profile'}
          </span>
        </button>
      </form>

      {analysis && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">Profile Analysis</h2>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <p className="text-gray-300 whitespace-pre-wrap">{analysis}</p>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}
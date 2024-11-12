import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from './components/Layout';
import Home from './pages/Home';
import Settings from './pages/Settings';
import History from './pages/History';
import StoryGenerator from './pages/tools/StoryGenerator';
import PdfSummarizer from './pages/tools/PdfSummarizer';
import YoutubeSummarizer from './pages/tools/YoutubeSummarizer';
import GithubAnalyzer from './pages/tools/GithubAnalyzer';

const App = () => {
  return (
    <BrowserRouter>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="history" element={<History />} />
          <Route path="tools/story-generator" element={<StoryGenerator />} />
          <Route path="tools/pdf-summarizer" element={<PdfSummarizer />} />
          <Route path="tools/youtube-summarizer" element={<YoutubeSummarizer />} />
          <Route path="tools/github-analyzer" element={<GithubAnalyzer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
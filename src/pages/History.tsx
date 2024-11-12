import React, { useState, useEffect } from 'react';
import { getHistory } from '../lib/history';
import HistoryList from '../components/HistoryList';

export default function History() {
  const [history, setHistory] = useState(getHistory());

  useEffect(() => {
    setHistory(getHistory());
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-4">History</h1>
        <p className="text-gray-400">
          View your past interactions with our AI tools
        </p>
      </div>
      <HistoryList history={history} onClear={() => setHistory([])} />
    </div>
  );
}
import React from 'react';
import { Clock, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { HistoryEntry } from '../types';
import { clearHistory } from '../lib/history';

type Props = {
  history: HistoryEntry[];
  onClear: () => void;
};

export default function HistoryList({ history, onClear }: Props) {
  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all history?')) {
      clearHistory();
      onClear();
      toast.success('History cleared successfully');
    }
  };

  if (history.length === 0) {
    return (
      <div className="text-center py-12">
        <Clock className="w-12 h-12 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400">No history yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">History</h2>
        <button
          onClick={handleClear}
          className="flex items-center space-x-2 text-red-400 hover:text-red-300"
        >
          <Trash2 className="w-4 h-4" />
          <span>Clear All</span>
        </button>
      </div>
      <div className="space-y-4">
        {history.map((entry) => (
          <div
            key={entry.id}
            className="bg-gray-800 rounded-lg p-4 border border-gray-700"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-sm text-gray-400">
                {new Date(entry.timestamp).toLocaleString()}
              </span>
              <span className="text-sm text-purple-400">{entry.toolId}</span>
            </div>
            <div className="space-y-2">
              <p className="text-gray-300">Input: {entry.input}</p>
              <p className="text-white">Output: {entry.output}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
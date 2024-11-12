import { HistoryEntry } from '../types';

export const getHistory = (): HistoryEntry[] => {
  const history = localStorage.getItem('history');
  return history ? JSON.parse(history) : [];
};

export const addToHistory = (entry: HistoryEntry) => {
  const history = getHistory();
  history.unshift(entry);
  localStorage.setItem('history', JSON.stringify(history.slice(0, 50)));
};

export const clearHistory = () => {
  localStorage.removeItem('history');
};
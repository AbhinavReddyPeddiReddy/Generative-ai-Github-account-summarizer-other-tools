export type Tool = {
  id: string;
  name: string;
  description: string;
  icon: string;
  path: string;
};

export type HistoryEntry = {
  id: string;
  toolId: string;
  timestamp: number;
  input: string;
  output: string;
};
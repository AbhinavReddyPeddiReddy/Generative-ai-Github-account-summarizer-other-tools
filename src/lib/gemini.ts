import { GoogleGenerativeAI } from '@google/generative-ai';

export const getGeminiKey = () => localStorage.getItem('gemini-api-key');

export const setGeminiKey = (key: string) => {
  localStorage.setItem('gemini-api-key', key);
};

export const initGemini = () => {
  const apiKey = getGeminiKey();
  if (!apiKey) throw new Error('No API key found');
  return new GoogleGenerativeAI(apiKey);
};
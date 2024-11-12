import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'sonner';
import { initGemini } from '../lib/gemini';
import { addToHistory } from '../lib/history';

export default function useGemini(toolId: string) {
  const [loading, setLoading] = useState(false);

  const generateContent = async (prompt: string) => {
    setLoading(true);
    try {
      const genAI = initGemini();
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const result = await model.generateContent(prompt);
      const response = result.response;
      const output = response.text();

      addToHistory({
        id: uuidv4(),
        toolId,
        timestamp: Date.now(),
        input: prompt,
        output,
      });

      return output;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'An error occurred';
      toast.error(message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { generateContent, loading };
}
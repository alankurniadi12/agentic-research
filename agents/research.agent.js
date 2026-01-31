import { callLLM } from '../services/llm.service.js';
import { researchPrompt } from '../promps/research.promt.js';

export async function researchAgent(topic) {
  const prompt = researchPrompt(topic);
  const response = await callLLM({prompt, temperature: 0.3});
  return {
    role: 'research',
    content: response,
  };
}
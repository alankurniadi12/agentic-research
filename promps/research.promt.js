export function researchPrompt(topic) {
  return `You are a professional research analyst.

Task:
Collect high-level factual insights and trends about the topic below.

Topic:
${topic}

Rules:
- Be concise
- Use bullet points
- Focus on facts and trends
- No opinions

Output format:
- Bullet list
`;
}
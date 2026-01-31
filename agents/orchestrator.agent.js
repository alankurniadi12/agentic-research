import { researchAgent } from "./research.agent.js";

export async function orchestratorAgent({topic}) {
  const researchResult = await researchAgent({topic});
    return {
        topic,
        steps: [
            researchResult
        ]
    };
}
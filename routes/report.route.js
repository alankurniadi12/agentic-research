import express from 'express';
import { orchestratorAgent } from '../agents/orchestrator.agent.js';

const router = express.Router();

router.post('/report', async (req, res) => {
  console.log('Received /report request with body:', req.body);
  const { topic } = req.body;   
  const result = await orchestratorAgent({ topic });
  res.json(result);
});

export default router;
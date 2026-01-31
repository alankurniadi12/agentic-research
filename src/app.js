import express from 'express';
import reportRoute  from '../routes/report.route.js';

const app = express();
app.use(express.json());

app.use('/api', reportRoute);

export default app;
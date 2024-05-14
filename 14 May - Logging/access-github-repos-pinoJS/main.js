import express from 'express';
import pino from 'pino';
import fetch from 'node-fetch'

const app = express();
const port = 3000;

// Create a Pino logger
const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: true,
    },
  },
});

// Middleware to parse JSON request bodies
app.use(express.json());

// GET /users/:username/repo
app.get('/users/:username/repo', async (req, res) => {
  const username = req.params.username;
  const repoUrl = `https://api.github.com/users/${username}/repos`;

  try {
    logger.info(`Fetching repository data for user ${username}`);
    const response = await fetch(repoUrl);

    if (!response.ok) {
      logger.error(`Error fetching repository data for user ${username}: ${response.status} ${response.statusText}`);
      return res.status(response.status).json({ error: `Error fetching repository data: ${response.statusText}` });
    }

    const repositories = await response.json();
    logger.info(`Successfully fetched repository data for user ${username}`);
    res.json(repositories);
  } catch (err) {
    logger.error(`Error fetching repository data for user ${username}: ${err.message}`);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  logger.info(`API listening at http://localhost:${port}`);
});
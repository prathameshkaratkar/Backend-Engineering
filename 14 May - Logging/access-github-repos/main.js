import express from 'express';
import winston from 'winston';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

// configure winston Logger 

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    defaultMeta:{service: 'github-repository'},
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: 'logs/error.log', level: 'error'}),
        new winston.transports.File({filename: 'logs/combined.log'})
    ]
})

// Middleware to parse JSON requests bodies
app.use(express.json());

//GET  /users/:username/repositories
app.get('/users/:username/repos',async(req, res) =>{
    const {username} = req.params;
    const repoUrl = `https://api.github.com/users/${username}/repos`;

    try{
        logger.info(`Fetching repositories for ${username}`)
        const response = await fetch(repoUrl)

        if(!response.ok) {
            logger.error(`Error fetching repositories data for user ${username}: ${response.status}`);
            return res.status(response.status).json({error: `Error fetching repository data: ${response.statusText}`})
        }
        
        const repositories = await response.json();
        logger.info(`Successfully fetched repository data for user ${username}`);
        res.json(repositories)
    } catch(err) {
        logger.error(`Error fetching repositories data for user ${username}: ${err}`)
        return res.status(500).json({error: `Error fetching repository data: ${err}`})
    }
})

app.listen(port , () => {
    logger.info(`API listening at http://localhost:${port}` )
})
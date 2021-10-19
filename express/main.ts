import * as os from 'os';
import express from 'express';
import cors from 'cors';
import { getProjects, getProjectDetails } from './projectsRepo';

const PORT = 7000;
const app = express();

app.set('port', PORT);
app.use(cors());

app.get('/projects', (req, res, _next) => {
    const { pageNumber, limit } = req.query;
    res.status(200).json(getProjects(Number(pageNumber), Number(limit)));
});

app.get('/projects/:id', (req, res, _next) => {
    const { id } = req.params;
    const project = getProjectDetails(id);
    res.status(project ? 200 : 404).json(project);
});

app.listen(PORT, () => {
    console.log(`Express app started on ${os.hostname()}:${PORT}`);
});

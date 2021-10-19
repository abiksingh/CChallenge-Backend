import { generateProjects, randomConsultants } from './generateProjects';

const projects = generateProjects(100);

function getProjects(pageNumber: number = 1, limit: number = 10) {
    return projects.slice((pageNumber - 1) * limit, pageNumber * limit);
}

function getProjectDetails(id: string) {
    const project = projects.find((proj) => proj.id === id);
    return {
        ...project,
        consultants: randomConsultants(),
    };
}

export { getProjects, getProjectDetails };

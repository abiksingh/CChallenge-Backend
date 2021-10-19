import * as faker from 'faker';

const STATUSES = ['request', 'running', 'done'] as const;

function randomStatus() {
    return STATUSES[faker.datatype.number({ min: 0, max: 2 })];
}

function randomDuration(status: string) {
    let start: Date;
    let end: Date;

    if (status === 'request') {
        start = faker.date.future(1);
        end = faker.date.future(3);
    } else if (status === 'running') {
        start = faker.date.past(1);
        end = faker.date.soon(30);
    } else {
        start = faker.date.past(2);
        end = faker.date.past(1);
    }

    return {
        start,
        end,
    };
}

function generateProjects(numberOfProjects: number) {
    const projects = [];
    for (let i = 0; i < numberOfProjects; i++) {
        const status = randomStatus();

        projects.push({
            seq: i + 1,
            id: faker.datatype.uuid(),
            name: faker.company.companyName(),
            status,
            duration: randomDuration(status),
            description: faker.lorem.words(100),
        });
    }

    return projects;
}

function randomConsultants() {
    const numConsultants = faker.datatype.number(3);
    const consultants = [];
    for (let i = 0; i < numConsultants; i++) {
        const id = faker.datatype.uuid();
        consultants.push({
            id,
            avatar: 'https://i.pravatar.cc/100?u=' + id,
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
        });
    }
    return consultants;
}

export { generateProjects, randomConsultants };

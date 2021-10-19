# Sample Projects API

A simple express API that generates random projects. This is not production code: it is used for assessment purposes.

## Setup

Run `yarn` to install, then `yarn start-server` to run the Express service. On startup, 100 projects will be generated.

## Endpoints

### GET /projects

Parameters

-   pageNumber - page number of results
-   limit - the maximum number of results to be returned

### GET /projects/:id

-   projectId - ID of the project

# Uber BPMN Model Implementation - Node.js

This repository contains the implementation of an Uber BPMN model using Camunda and Node.js.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone git@github.com:umutyesildal/UE2BPA.git

2. Navigate to the Node.js directory:

   ```bash
   cd node.js
   
3. Install the required dependencies:

   ```bash
   npm install --save zeebe-node

4. Deploy and start an instance of the Uber BPMN model:

   ```bash
   node deploy-and-start-instance.js
   
5. Activate workers for service tasks:

   ```bash
   node service-task-workers.js


## Workflow Execution

*User Tasks:* Utilize forms provided by Camunda for each user task to collect necessary information from the user.

*Driver Assignment* (Service Task): A worker is implemented to randomly choose a driver for the ride.

*Rating Submission:* At the end of the process, a worker handles the rating submission based on the user's experience.


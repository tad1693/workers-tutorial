const { parentPort } = require('worker_threads');
const fs = require('fs');

parentPort.once("message", (message) => {
    console.log("Recieved data from mainWorker...");
    fs.writeFile('data.json', message, 'utf8', () => {
        parentPort.postMessage("Data written successfully");
    });
});


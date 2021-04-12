/* main.js */
// Create worker

const workerUrl = 'http://localhost:8001/worker.js';

const url = window.URL || window.webkitURL;
const blob = new Blob(["importScripts('" + workerUrl + "');"], { "type": 'application/javascript' });
const blobUrl = url.createObjectURL(blob);

const myWorker = new Worker(blobUrl);
// Send message to worker
myWorker.postMessage('Hello from index!');
// Receive message from worker
myWorker.onmessage = function(e) {
  console.log("Index log:", e.data);
};

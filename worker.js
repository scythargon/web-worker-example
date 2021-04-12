/* worker.js */
// Receive message from main file
self.onmessage = function(e) {
  console.log("worker log:", e.data);
// Send message to main file
  self.postMessage("Hello from worker");
};

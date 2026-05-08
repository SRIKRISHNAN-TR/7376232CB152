// logging_middleware/log.js
async function Log(stack, level, package, message) {
  try {
    const response = await fetch("http://4.224.186.213/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stack: stack,      // "frontend" or "backend"
        level: level,      // "debug", "info", "warn", "error", "fatal"
        package: package,  // handler, repository, service, etc.
        message: message
      })
    });
    return await response.json();
  } catch (err) {
    console.error("Log error:", err);
  }
}

module.exports = { Log };




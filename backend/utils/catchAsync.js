// Wraps an async route handler so any rejected promise is forwarded to
// Express's error-handling middleware instead of crashing the process.
module.exports = (fn) => (req, res, next) => {
  fn(req, res, next).catch(next);
};

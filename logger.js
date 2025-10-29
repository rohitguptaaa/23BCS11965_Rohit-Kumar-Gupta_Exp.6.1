function logger(req, res, next) {
  const currentTime = new Date().toLocaleString();
  console.log(`[${currentTime}] ${req.method} ${req.url}`);
  next();
}

module.exports = logger;
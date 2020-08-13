const { RateLimiterMemory } = require("rate-limiter-flexible");
const config = require("../config/index");

const opts = {
  points: config.RATE.POINTS,
  duration: config.RATE.DURATION,
  blockDuration: config.RATE.BLOCKDURATION,
}; //confug?? pm2 config

const rateLimiter = new RateLimiterMemory(opts);

/**
 * @param  {Request} req http request
 * @param  {Response} res http response
 * @param  {NextFunction} next Function to continue
 */
const rateLimiterMiddleware = (req, res, next) => {
  rateLimiter
    .consume(req.ip)
    .then(() => {
      next();
    })
    .catch(() => {
      res.status(429).send("Too Many Requests");
    });
};
module.exports = rateLimiterMiddleware;

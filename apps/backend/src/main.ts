/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import {isHttpError} from 'http-errors'
import * as express from 'express';
const cors = require('cors');
import moviedbRoutes from './routes/moviedb'
import logSomething from './middlewares/log-something'
const app = express();
const allowedOrigins = ['http://localhost:3000'];

app.use(cors())
app.use(logSomething)
moviedbRoutes(app)
app.use((error, req, res, next) => {
  if (isHttpError(error)) {
    return res.status(error.statusCode).json({
      errors: [{ message: error.message }],
    })
  }
  return res.status(500).json({
    errors: [{ message: 'SERVER_ERROR' }],
  })
})

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);

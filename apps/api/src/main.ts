// /**
//  * This is not a production server yet!
//  * This is only a minimal backend to get started.
//  */

// import * as express from 'express';

// const app = express();

// app.get('/api', (req, res) => {
//   res.send({ message: 'Welcome to api!' });
// });

// const port = process.env.port || 3333;
// const server = app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}/api`);
// });
// server.on('error', console.error);

import * as express from 'express';
import { Ticket } from "@first-nx-app/data";

const app = express();

const tickets: Ticket[] = [
  {
    id: 1,
    title: 'Login page is broken'
  },
  {
    id: 2,
    title: 'Everything is broken!!!'
  }
];

app.get('/api/tickets', (req, res) => {
  res.send(JSON.stringify(tickets));
});

const port = 3333;
app.listen(port, () => {
  // if (err) {
  //   console.error(err);
  // }
  console.log(`Listening at http://localhost:${port}`);
});


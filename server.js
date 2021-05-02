// const express = require("express");
// const next = require("next");

// const port = parseInt(process.env.PORT, 10) || 3000;
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev: false });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();

//   server.all("*", (req, res) => {
//     return handle(req, res);
//   });

//   server.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://localhost:${port}`);
//   });
// });

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";

const port = !dev ? process.env.PORT : 3000;

// Create the Express-Next App
const app = next({});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;
      handle(req, res, parsedUrl);
      console.log("pathname", pathname);
    }).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

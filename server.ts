import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
import { readFileSync } from 'fs';
import { renderModuleFactory } from '@angular/platform-server';
import * as express from 'express';
import { join } from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 3000;
// const DIST_FOLDER = join(process.cwd(), 'dist');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory } = require('./dist/server/main');
const index = readFileSync(join('browser', 'index.html'), 'utf-8').toString();

// Server static files from /browser
app.get('*.*', express.static(join('browser')));

// tslint:disable-next-line: max-line-length
app.route('*').get((req: express.Request, res: express.Response) => {
  renderModuleFactory(AppServerModuleNgFactory, {
    document: index,
    url: req.url
  })
    .then(html => {
      res.status(200).send(html);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});

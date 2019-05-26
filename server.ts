import 'zone.js/dist/zone-node';
import { enableProdMode } from '@angular/core';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import * as SendGrid from '@sendgrid/mail';
// import mail = require('@sendgrid/mail');
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import { Request, Response } from 'express-serve-static-core';
import { join } from 'path';

// Express Engine
// Import module map for lazy loading
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// express middleware
app.use(cors());

// cors
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://sendgrid.api-docs.io');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
// tslint:disable-next-line: max-line-length
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});


const PORT = process.env.PORT || 3000;
// const DIST_FOLDER = join(process.cwd());

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP)]
  })
);

app.set('view engine', 'html');
app.set('views', join('browser'));

// Example Express Rest API endpoints
// app.get('/api/**', (req, res) => { });

// Server static files from /browser
app.get(
  '*.*',
  express.static('browser', {
    maxAge: '1y'
  })
);

app.post('/contact', (req: Request, res: Response) => {
  if (req.body) {
    SendGrid.setApiKey('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');
    const msg = {
      to: req.body.email,
      from: 'portfolio@takudzwa.online',
      subject: `Message from ::: ${req.body.name}`,
      text: req.body.message,
      html: `<p>${req.body.message}</p><br/>Regards ${req.body.name}`
    };
    SendGrid.send(msg).then(data => {
      return res.status(200).send(data[0].body);
    });
  }

  return res.status(500).send({
    status: 'failed',
    message: 'Internal Server Error',
  });
});

// All regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});

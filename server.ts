import "zone.js/dist/zone-node";

import { ngExpressEngine } from "@nguniversal/express-engine";
import * as express from "express";
import { join } from "path";
import * as cors from "cors";
import { AppServerModule } from "./src/main.server";
import { APP_BASE_HREF } from "@angular/common";
import * as SendGrid from "@sendgrid/mail";
import { existsSync, readFileSync } from "fs";
import * as path from "path";
import * as domino from "domino";


export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), "dist/browser");
  const indexHtml = existsSync(join(distFolder, "index.original.html"))
    ? "index.original.html"
    : "index";

  const template = existsSync(join(distFolder, "index.original.html"))
    ? readFileSync(path.join(distFolder, "index.original.html")).toString()
    : readFileSync(path.join(distFolder, "index.html")).toString();

  // Shim for the global window and document objects.
  const window = domino.createWindow(template);
  // global["window"] = window;
  global["document"] = window.document;

  server.engine(
    "html",
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set("view engine", "html");
  server.set("views", distFolder);

  server.use(cors());

  server.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://sendgrid.api-docs.io");
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, GET, POST, DELETE, OPTIONS"
    );

    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials"
    );
    res.header("Access-Control-Allow-Credentials", "true");
    next();
  });

  server.use(express.json());

  server.use(express.urlencoded());

  server.get(
    "*.*",
    express.static(distFolder, {
      maxAge: "1y",
    })
  );

  server.post("/contact", (req, res) => {

    if (req.body) {
      SendGrid.setApiKey(
        "API_KEY"
      );
      const msg = {
        to: "SENDING_ADDRESS",
        from: "FROM_ADDRESS",
        subject: `[Portfolio] ${req.body.name} sent you a message (${req.body.email})`,
        text: req.body.message,
        html: `<p>${req.body.message}<br/> You can contact me on ${req.body.email}</p><br/>Regards ${req.body.name}`,
      };
      console.info(msg);
      SendGrid.send(msg)
        .then((data) => {
          return res.status(200).send({
            status: 200,
            data: data[0].body,
          });
        })
        .catch((reason) => {
          return res.status(500).send({
            status: 500,
            data: reason,
          });
        });
    }
  });

  // All regular routes use the Universal engine
  server.get("*", (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: req.baseUrl,
        },
      ],
    });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || "";
if (moduleFilename === __filename || moduleFilename.includes("iisnode")) {
  run();
}

export * from "./src/main.server";

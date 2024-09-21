import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";
import { createContext } from "./context";
import { restaurantRouter } from "./routers/restaurantRouter";
var cors = require("cors");

const createContextHandler = ({
  req,
  res,
}: {
  req: express.Request;
  res: express.Response;
}) => {
  return createContext({ req, res });
};

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: restaurantRouter,
    createContext: createContextHandler,
  })
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

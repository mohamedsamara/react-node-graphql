import path from "path";
import express from "express";
import { ApolloServer } from "apollo-server-express";

import config from "@config/keys";
import { setupDatabase } from "@utils/setup";
import { schema } from "@/graphql/schema";

const PORT = config.port;

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
});

const app = express();
server.applyMiddleware({ app });

app.use(express.static(path.resolve(__dirname, "../static")));
if (config.node_env === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../static/index.html"));
  });
}

const start = async () => {
  await setupDatabase();

  app.listen(PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};

(async () => {
  await start();
})();

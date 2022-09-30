import { makeExecutableSchema } from "@graphql-tools/schema";

import resolvers from "@/graphql/resolvers";
import typeDefs from "@/graphql/schemas";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

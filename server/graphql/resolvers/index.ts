import { mergeResolvers } from "@graphql-tools/merge";

import userResolvers from "./user";

const resolvers = [userResolvers];

export default mergeResolvers(resolvers);

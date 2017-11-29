import { createGraphqlSchema } from "mongo-graphql-starter";
import projectSetupA from "./projectSetupA";
import projectSetupB from "./projectSetupB";
import projectSetupC from "./projectSetupC";
import projectSetupD from "./projectSetupD";
import projectSetupE from "./projectSetupE";
import projectSetupF from "./projectSetupF";

import path from "path";

createGraphqlSchema(projectSetupA, path.resolve("./test/testProject1"));
createGraphqlSchema(projectSetupB, path.resolve("./test/testProject2"));
createGraphqlSchema(projectSetupC, path.resolve("./test/testProject3"));
createGraphqlSchema(projectSetupD, path.resolve("./test/testProject4"));
createGraphqlSchema(projectSetupE, path.resolve("./test/testProject5"));
createGraphqlSchema(projectSetupF, path.resolve("./test/testProject6"));

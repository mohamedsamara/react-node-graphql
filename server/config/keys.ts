import "dotenv/config";

import { IConfigKeys } from "@/types/config";

const ENV = process.env;
const PORT: number = parseInt(ENV.PORT as string, 10);

const config: IConfigKeys = {
  node_env: ENV.NODE_ENV || "production",
  port: PORT || 3000,
};

export default config;

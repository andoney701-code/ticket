import { buildApp } from "./app";
import { env } from "./config/env";

const app = buildApp();

async function start() {
  try {
    await app.listen({
      port: env.port,
      host: "0.0.0.0",
    });

    console.log(`API running on port ${env.port}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

start();
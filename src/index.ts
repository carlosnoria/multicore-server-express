import os from "os";
import cluster from "cluster";
import environment from "./config/env";
import app from "./server/buildServer";

const clusterWorkerSize = os.cpus().length;

if (clusterWorkerSize > 1) {
  if (cluster.isPrimary) {
    for (let i = 0; i < clusterWorkerSize; i += 1) {
      cluster.fork();
    }

    cluster.on("exit", (worker) => {
      // eslint-disable-next-line no-console
      console.log("Worker", worker.id, " has exitted.");
    });
  } else {
    app.listen(environment.PORT, () => {
      // eslint-disable-next-line no-console
      console.log(
        `Express server listening on port ${environment.PORT} and worker ${process.pid}`
      );
    });
  }
} else {
  app.listen(environment.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(
      `Express server listening on port ${environment.PORT} with the single worker ${process.pid}`
    );
  });
}

/* eslint-disable no-console */
import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://todoapp:todoapp@cluster0.s1acxwp.mongodb.net/tour-management-system?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Connected to MongoDB!!!");

    server = app.listen(5000, () => {
      console.log("KST Tour Management System Server is running on port 5000");
    });
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

startServer();

// unhandled rejection error
process.on("unhandledRejection", (error) => {
  console.log("Unhandled Rejection detected.Server is Shutting Down...", error);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
// ------------------------------

// uncaught exception error
process.on("uncaughtException", (error) => {
  console.log("Uncaught Exception detected.Server is Shutting Down...", error);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
// ------------------------------

// signal termination sigterm
process.on("SIGTERM", () => {
  console.log("SIGTERM received.Server is Shutting Down...");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
// ------------------------------

// signal termination sigint
process.on("SIGINT", () => {
  console.log("SIGINT received.Server is Shutting Down...");

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
// ------------------------------

/**
 * unhandled rejection error
 * uncaught rejection error
 * signal termination sigterm
 */

import express from "express";
import { Server } from "http";
import mongoose from "mongoose";

let server: Server;

const app = express();

const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://todoapp:todoapp@cluster0.s1acxwp.mongodb.net/tour-management-system?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("Connected to MongoDB!!!");

    server = app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

startServer();

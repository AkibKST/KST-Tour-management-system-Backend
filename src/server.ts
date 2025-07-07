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

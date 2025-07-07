import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to KST Tour Management System API",
    status: "success",
  });
});

export default app;

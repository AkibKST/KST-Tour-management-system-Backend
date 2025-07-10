import express, { Request, Response } from "express";
import cors from "cors";
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import notFound from "./app/middleware/notFound";

const app = express();

app.use(express.json());
app.use(cors());

// app -> routes -> module route
app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to KST Tour Management System API",
    status: "success",
  });
});

// Global error handler
app.use(globalErrorHandler);

// Not found route
app.use(notFound);

export default app;

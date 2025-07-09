import express, { Request, Response } from "express";
import { UserRoutes } from "./app/modules/user/user.route";
import cors from "cors";
import {router} from "./app/routes";

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

export default app;

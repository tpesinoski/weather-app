import { NextFunction, Request, Response, Router } from "express";
import { Authentication } from "../auth";
import { requestHandler } from "../utils/response-handler";

const router = Router();

router.post(
    "/register",
    requestHandler.handle((req: Request, _res: Response) => {
        return new Authentication().registerUser(req.body);
    })
);

router.post(
	"/login",
	requestHandler.handle((req: Request, _res: Response) => {
		return new Authentication().login(req.body);
	})
);

export default router;
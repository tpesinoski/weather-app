import { Response, Router } from "express";
import { AuthenticatedRequest, requestHandler } from "@utils/response-handler";

const router = Router();

router.get(
	"/",
	requestHandler.handle((req: AuthenticatedRequest, _res: Response) => {
		return { done: true, user: req?.id };
	})
);

export default router;
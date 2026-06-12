import { Request, Response } from "express";
import { codedError } from "@utils/coded-error";
import { checkJwt } from "./jwt-auth";

type RequestHandler = (
	req: Request,
	res: Response
) => Promise<unknown> | unknown;

export interface AuthenticatedRequest extends Request {
	id?: string;
}

export const requestHandler = {
	handle: (handler: RequestHandler) => {
		return async (req: AuthenticatedRequest, res: Response) => {
			try {
				const contentType = req.get("content-type");
				if (contentType && !contentType.toLowerCase().includes("application/json")) {
                    throw codedError(400, "Unsupported Content-Type");
				}
				if (req.path !== "/register" && req.path !== "/login") {
					const token = req?.headers["authorization"]?.replace("Bearer ","");
					console.log(token);
					if (!token) {
						throw codedError(401, "Unauthorized");
					}
					const decodedToken = await checkJwt(token);
					if (decodedToken && typeof decodedToken === "object" && "id" in decodedToken) {
						req.id = decodedToken.id;
					}
				}
				res.set({ "Content-Type": "application/json" });
				const result = await handler(req, res);
				res.status(200);
				return res.send(result);
			} catch (error: any) {
				console.log(error);
				if (error.code && error.message) {
					return res.status(error.code).json({ error: error.message });
				} else {
					return res.status(500).send("Internal Server Error");
				}
			}
		};
	},
};
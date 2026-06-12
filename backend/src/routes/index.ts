import { Router } from "express";
import UsersAPI from "./users";
import AuthAPI from "./auth";

const router = Router();

router.use("/users", UsersAPI);
router.use("/auth", AuthAPI);

export default router;
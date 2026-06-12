import jwt from "jsonwebtoken";
import { codedError } from "./coded-error";

export const checkJwt = async (token: string) => {
    try {
        const check = await jwt.verify(token, "test");
        if (!check) {
            throw codedError(401, "Unaothorized");
        }
        return check;
    } catch (err) {
        throw codedError(400, "Invalid token");
    }
}

export const createJwtToken = (userData: any) => {
    const token = jwt.sign(userData, "test", { expiresIn: "1h" });
    return token;
}
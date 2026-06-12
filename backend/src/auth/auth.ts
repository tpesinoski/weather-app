import { CreateUser, LoginPayload } from "@shared/index";
import { User } from "@database/entities";
import { codedError } from "@utils/coded-error";
import bcrypt from "bcrypt";
import { createJwtToken } from "src/utils/jwt-auth";

export class Authentication {
	async registerUser(payload: CreateUser) {
		const existingUser = await User.findOneBy({ email: payload.email });
		if (existingUser) {
			throw codedError(400, "User with this email already exist!");
		}
		if (payload.password !== payload.confirmPassword) {
			throw codedError(400, "Password doesn't match!");
		}
		const hashPassword = await bcrypt.hash(payload.password, 10);
		const user = await User.create({
			name: payload.name,
			lastname: payload.lastname,
			email: payload.email,
			password: hashPassword,
		}).save();
		const { password, ...userData } = user;
		const token = createJwtToken(userData);
		return { token };
	}

	async login(payload: LoginPayload) {
		const user = await User.findOneBy({ email: payload.email });
		if (!user) {
			throw codedError(404, "User with this email does not exist!");
		}
		const comparePass = await bcrypt.compare(payload.password, user.password);
		console.log(comparePass);
		if (!comparePass) {
			console.log("Test");
			throw codedError(401, "Incorrect email or password.");
		}
		const { password, ...userData } = user;
		const token = createJwtToken(userData);
		return { token };
	}
}

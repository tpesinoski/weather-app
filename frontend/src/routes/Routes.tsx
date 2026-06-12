import * as ReactRouter from "react-router-dom";
import AuthGuard from "./AuthGuard";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

export function Routes() {
	return (
		<ReactRouter.Routes>
			<ReactRouter.Route
				element={
					<AuthGuard>
						<Home />
					</AuthGuard>
				}
				path="/"
			/>
			<ReactRouter.Route element={<Login />} path="/login" />
			<ReactRouter.Route element={<Register />} path="/register" />
		</ReactRouter.Routes>
	);
}

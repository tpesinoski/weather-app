import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { User } from "../types";
import { jwtDecode } from "jwt-decode";

export interface AuthContext {
	user: User | null;
	token: string | null;
}

export const AuthContext = createContext<AuthContext>({ user: null, token: null });

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }: any) => {
	const [user, setUser] = useState<any>(null);
	const [cookies, setCookies] = useCookies(["Authorization"]);

	useEffect(() => {
		if (cookies.Authorization) {
			try {
				const decoded = jwtDecode(cookies.Authorization);
				console.log(decoded);
				setUser(decoded);
			} catch (err) {
				console.log(err);
			}
		}
	}, []);

	return (
		<AuthContext.Provider value={{ user, token: cookies.Authorization }}>{children}</AuthContext.Provider>
	);
};

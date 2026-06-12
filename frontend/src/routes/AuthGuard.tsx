import { jwtDecode } from "jwt-decode";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

interface AuthGuardProps {
	children: React.ReactNode;
}

const checkExpire = (token: string) => {
	try {
		const decoded = jwtDecode(token);
		if (!decoded) {
			return true;
		}
		if (decoded.exp && (decoded.exp * 1000 as number < Date.now())) {
			console.log(decoded.exp);
			console.log(Date.now());
			console.log(new Date(Date.now()))
			console.log("Is true");
			return true;
		}
		return false;
	} catch (err) {	
		return true;
	}
}

function AuthGuard({ children }: AuthGuardProps) {
	const [cookies] = useCookies(["Authorization"]);
	console.log("Cookie", cookies.Authorization);
	if (!cookies.Authorization) {
		return <Navigate to="/login" />
	}
	const isExpired = checkExpire(cookies.Authorization);
	console.log(isExpired);
	return !isExpired ? children : <Navigate to="/login" />;
}

export default AuthGuard;

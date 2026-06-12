import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [cookies, setCookies] = useCookies(["Authorization"]);

	const navigate = useNavigate();

	const handleLogin = async () => {
		try {
			const response = await axios.post("http://localhost:3001/auth/login", {
				email,
				password,
			});
			console.log(response.data);
			if (response?.data?.token) {
				setCookies("Authorization", response.data.token);
				navigate("/");
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="grid grid-cols-2 h-[100vh] p-3 bg-[#111015]">
			<div className="h-[100%] flex flex-col items-center justify-center">
				<div className="flex flex-col items-center gap-2">
					<h1 className="text-[40px]">Welcome back!</h1>
					<p className="max-w-[300px] text-center">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
						facere?
					</p>
					<div className="flex flex-col gap-5 mt-10">
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="text"
							placeholder="Email"
							className="w-[300px] bg-[#1E1E1E] text-sm rounded-3xl py-4 px-4 text-[#FEFEFE]"
						/>
						<input
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							placeholder="Password"
							className="w-[300px] bg-[#1E1E1E] text-sm rounded-3xl py-4 px-4 text-[#FEFEFE]"
						/>
						<div className="mt-10 flex flex-col items-center justify-center gap-5">
							<input
								className="bg-blue-500 py-2 rounded-3xl w-[300px]"
								onClick={handleLogin}
								type="button"
								value="Login"
							/>
							<Link to="/register">
								<p className="text-sm text-blue-500">Don't have account, register</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[url(images/login-bg.jpg)] bg-cover rounded-lg"></div>
		</div>
	);
};

export default Login;

import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const Register = () => {
	const [name, setName] = useState<string>("");
	const [lastname, setLastanme] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [cookies, setCookies] = useCookies(["Authorization"]);

	const handleRegister = async () => {
		try {
			const response = await axios.post("http://localhost:3001/auth/register", {
				name,
				lastname,
				email,
				password,
				confirmPassword
			});
			console.log(response.data);
			if (response?.data?.token) {
				setCookies("Authorization", response.data.token);
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
					<div className="grid grid-rows-3 gap-5 mt-10">
						<div className="w-[100%] grid grid-cols-2 gap-3">
							<input
								onChange={(e) => setName(e.target.value)}
								type="text"
								placeholder="Name"
								className="w-[100%] bg-[#1E1E1E] text-sm rounded-3xl py-4 px-4 text-[#FEFEFE]"
							/>
							<input
								onChange={(e) => setLastanme(e.target.value)}
								type="text"
								placeholder="Lastname"
								className="w-[100%] bg-[#1E1E1E] text-sm rounded-3xl py-4 px-4 text-[#FEFEFE]"
							/>
						</div>
						<input
							onChange={(e) => setEmail(e.target.value)}
							type="text"
							placeholder="Email"
							className="bg-[#1E1E1E] text-sm rounded-3xl py-4 px-4 text-[#FEFEFE]"
						/>
						<div className="grid grid-cols-2 gap-3">
							<input
								onChange={(e) => setPassword(e.target.value)}
								type="password"
								placeholder="Password"
								className="bg-[#1E1E1E] text-sm rounded-3xl py-4 px-4 text-[#FEFEFE]"
							/>
							<input
								onChange={(e) => setConfirmPassword(e.target.value)}
								type="password"
								placeholder="Confirm password"
								className="bg-[#1E1E1E] text-sm rounded-3xl py-4 px-4 text-[#FEFEFE]"
							/>
						</div>
						<div className="mt-10 flex flex-col items-center justify-center gap-5">
							<input
								className="bg-blue-500 py-2 rounded-3xl w-[300px]"
								onClick={handleRegister}
								type="button"
								value="Login"
							/>
							<Link to="/login">
								<p className="text-sm text-blue-500">
									Already have account, login
								</p>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[url(images/login-bg.jpg)] bg-cover rounded-lg"></div>
		</div>
	);
};

export default Register;

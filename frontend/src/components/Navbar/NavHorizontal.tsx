import { GrAppsRounded } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";
import { FiBell, FiSun } from "react-icons/fi";
import { Switch } from "radix-ui";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import axios from "axios";
import { useAuthContext } from "../../providers";

const NavHorizontal = ({ setCity, setCoordinates } : { setCity: Function, setCoordinates: Function }) => {
    const [isChecked, setIsChecked] = useState(true);
	const [value, setValue] = useState("");
	const { user } = useAuthContext();
    const getCoordinates = async () => {
			try {
				const response = await axios.get(
					`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=1&appid=bc4b33b43de8c4decd970a29bacf6383`
				);
                console.log(response);
                setCity(value);
				setCoordinates(response.data[0]);
			} catch (err) {
				console.log(err);
			}
		};

		const handleKeyDown = async (
			event: React.KeyboardEvent<HTMLInputElement>
		) => {
			if (event.key === "Enter") {
				await getCoordinates();
			}
		};
	return (
		<div className="w-[100%] grid grid-cols-16 gap-4">
			<div className="flex items-center justify-between col-span-12">
				<div className="flex items-center gap-3">
					<div className="bg-[#1E1E1E] rounded-full p-2">
						<GrAppsRounded />
					</div>
					<div className="bg-[#1E1E1E] rounded-full p-2">
						<FiBell />
					</div>
					<div className="p-2 flex items-center gap-3">
						<GrLocation />
						<p className="text-sm text-[#FEFEFE]">Vevcani</p>
					</div>
				</div>
				<div>
					<input
						type="text"
						placeholder="Search city..."
						onKeyDown={handleKeyDown}
						onChange={(e) => setValue(e.target.value)}
						className="w-[300px] bg-[#1E1E1E] text-xs rounded-lg py-2 px-4 text-[#FEFEFE]"
					/>
				</div>
			</div>
			<div className="flex items-center justify-end gap-3 col-span-4">
				<Switch.Root
					className="SwitchRoot"
					checked={isChecked}
					onCheckedChange={() => setIsChecked(!isChecked)}
				>
					<Switch.Thumb className="SwitchThumb">
						{isChecked ? (
							<FaMoon color="#1E1E1E" size={12} />
						) : (
							<FiSun color="#1E1E1E" size={12} />
						)}
					</Switch.Thumb>
				</Switch.Root>
				<div className="bg-blue-100 rounded-full h-[30px] w-[30px] flex items-center justify-center">
					<p className="text-sm text-[#1E1E1E] font-bold">{user?.name.charAt(0)}{user?.lastname.charAt(0)}</p>
				</div>
			</div>
		</div>
	);
};

export default NavHorizontal;

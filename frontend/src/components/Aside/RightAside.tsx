import axios from "axios";
import React, { useState } from "react";
import { GrLocation } from "react-icons/gr";
import { FaWind } from "react-icons/fa";
import { CiDroplet } from "react-icons/ci";

const RightAside = ({setCoordinates, weatherData }: {setCoordinates: Function, weatherData: any}) => {

	const [city, setCity] = useState<string>("");

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setCity(e.target.value);
	}

	const getCoordinates = async () => {
		try {
			const response = await axios.get(
				`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=bc4b33b43de8c4decd970a29bacf6383`
			);
			console.log(response);
			setCoordinates(response.data[0]);
		} catch (err) {
			console.log(err);
		}
	}

	const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			await getCoordinates();
		}
	};

	return (
		<div className="col-span-5 bg-[#2d2a54] rounded-tr-lg rounded-br-lg grid grid-rows-16 gap-5 p-5">
			<div className="row-span-2 flex items-center">
				<input
					onChange={handleOnChange}
					onKeyDown={handleKeyDown}
					className="bg-[#313060] rounded-md text-sm p-2"
					placeholder="Search..."
					type="text"
				/>
			</div>
			<div className="bg-linear-to-br from-cyan-500 to-blue-500 row-span-11 rounded-lg flex flex-col p-3">
				<div className="flex items-center gap-2">
					<GrLocation className="font-bold" size={22} />
					<p className="font-bold">{weatherData?.name}</p>
				</div>
				<div className="flex flex-col items-center justify-center mt-3">
					<img
						width="100px"
						height="100px"
						src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@2x.png`}
					/>
					<p>
						Today,{" "}
						{new Date().toLocaleDateString("en-GB", {
							day: "2-digit",
							month: "long",
						})}
					</p>
					<p className="text-[60px] font-bold">
						{Math.ceil(weatherData?.main?.temp)}°
					</p>
					<p>{weatherData?.weather[0]?.main}</p>
				</div>
			</div>
			<div className="bg-linear-to-br from-[#ffc27e] to-[#fdac53] row-span-3 rounded-lg flex justify-between p-3 px-5">
				<div className="flex flex-col justify-between">
					<div className="flex items-center gap-3">
						<div className="flex items-center gap-2 w-[60px]">
							<FaWind />
							<p className="text-sm font-bold">Wind</p>
						</div>
						<div className="border-l-2 pl-2">
							<p className="text-xs">{weatherData?.wind?.speed} km/h</p>
						</div>
					</div>
					<div className="flex items-center gap-3">
						<div className="flex items-center gap-2 w-[60px]">
							<CiDroplet />
							<p className="text-sm font-bold">Hum</p>
						</div>
						<div className="border-l-2 pl-2">
							<p className="text-xs">{weatherData?.main?.humidity} %</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-end justify-between">
					<div className="flex items-center gap-2">
						<GrLocation className="font-bold" size={15} />
						<p className="font-semibold text-sm">{weatherData?.name}</p>
					</div>
					<p>30</p>
				</div>
			</div>
		</div>
	);
};

export default RightAside;

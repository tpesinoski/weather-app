import React from "react";
import Navbar from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";

const LeftAside = ({
	airData,
	forecastData,
	weatherData,
}: {
	airData: any;
	forecastData: any;
	weatherData: any;
}) => {
	return (
		<div className="col-span-11 flex gap-5 p-5 pl-0">
			<div className="flex items-center">
				<Navbar />
			</div>
			<div className="w-[100%] rounded-lg">
				<Dashboard airData={airData} forecastData={forecastData} weatherData={weatherData} />
			</div>
		</div>
	);
};

export default LeftAside;

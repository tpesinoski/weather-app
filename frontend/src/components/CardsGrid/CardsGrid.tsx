import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import { Switch } from "radix-ui";
import { FaMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import Cards from "./Cards";
import AirQuality from "../Dashboard/AirQuality";

const CardsGrid = ({ forecastData, airData } : { forecastData: any, airData: any }) => {
	const [isChecked, setIsChecked] = useState(true);

	return (
		<div className="grid grid-cols-16 w-[100%] h-[100%] gap-4 px-4">
			<div className="col-span-12 flex flex-col">
				<div className="grid grid-cols-16">
					<div className="text-md flex items-center gap-3 col-span-12">
						<p className="text-[#818085]">Today</p>
						<p className="text-[#818085]">Tomorrow</p>
						<p>Next 5 Days</p>
					</div>
					<div className="col-span-4 flex justify-end">
						
					</div>
                </div>
                <div className="w-[100%] h-[100%]">
                    <Cards forecastData={forecastData}  />
                </div>
			</div>
			<div className="col-span-4 flex flex-col">
                <p>Air Quality</p>
                <div className="h-[100%] pt-[16px]">
                    <div className="bg-[#1B1B1D] h-[100%] w-[100%] rounded-lg">
                        <AirQuality airData={airData} />
                    </div>
                </div>
			</div>
		</div>
	);
};

export default CardsGrid;

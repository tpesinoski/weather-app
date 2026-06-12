import React, { useState } from 'react'
import { Switch } from "radix-ui";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import SmallCard from './SmallCard';
import AirQuality from './AirQuality';
import Sunset from './Sunset';

const Dashboard = ({
	airData,
	forecastData,
	weatherData
}: {
	airData: any;
		forecastData: any;
		weatherData: any;
}) => {
	const [isChecked, setIsChecked] = useState(true);
	return (
		<div className="grid grid-rows-16 gap-5 h-[100%]">
			<div className="row-span-7 grid grid-rows-6 gap-5">
				<div className="flex justify-between row-span-2">
					<div>
						<h1 className="text-3xl font-semibold">07:32 AM</h1>
					</div>
					<div>
						<Switch.Root
							className="SwitchRoot"
							checked={isChecked}
							onCheckedChange={() => setIsChecked(!isChecked)}
						>
							<Switch.Thumb className="SwitchThumb">
								{isChecked ? <FaMoon /> : <FiSun />}
							</Switch.Thumb>
						</Switch.Root>
					</div>
				</div>
				<div className="row-span-4 grid grid-cols-5 gap-5">
					{
						forecastData?.slice(0,5).map((item: any, index: number) => {
							return <SmallCard data={item} index={index} />
						})
					}
				</div>
			</div>
			<div className="row-span-9 grid grid-cols-2 gap-5">
				<div className="grid grid-rows-2 gap-5">
					<AirQuality airData={airData} />
					<AirQuality airData={airData} />
				</div>
				<Sunset weatherData={weatherData} />
			</div>
		</div>
	);
};

export default Dashboard
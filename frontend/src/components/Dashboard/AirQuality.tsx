import axios from 'axios';
import React, { useEffect, useState } from 'react'

const colors = new Map<string, string>([
	["Good", "bg-gradient-to-b from-[#00cf5b] to-[#32de84]"],
	["Fair", "bg-gradient-to-b from-[#00cf5b] to-[#b1cf00]"],
	["Moderate", "bg-gradient-to-b from-[#b1cf00] to-[#f78282]"],
	["Poor", "bg-gradient-to-b from-[#f78282] to-[#ec5050]"],
]);

const AirQuality = ({ airData }: { airData: any }) => {
  
  useEffect(() => {
    console.log(airData);
  }, [airData]);

  return (
		<div className="h-[100%] rounded-lg flex flex-col p-3 gap-3">
			{/* <div>
				<p className="text-sm font-semibold">Air Quality</p>
			</div> */}
			<div className="h-[100%] grid grid-cols-4 gap-3">
				<div
					className={`${colors.get(
						airData ? airData["pm2_5"]?.name : "Good"
					)} rounded-lg flex flex-col items-center justify-center h-[100%]`}
				>
					<h1 className="text-sm font-semibold">
						{airData ? airData["pm2_5"]?.value : ""}
					</h1>
					<p className="text-[10px]">PM2</p>
				</div>
				<div
					className={`${colors.get(
						airData ? airData["pm10"]?.name : "Good"
					)} rounded-lg flex flex-col items-center justify-center`}
				>
					<h1 className="text-sm font-semibold">
						{airData ? airData["pm10"]?.value : ""}
					</h1>
					<p className="text-[10px]">PM10</p>
				</div>
				<div
					className={`${colors.get(
						airData ? airData["so2"]?.name : "Good"
					)} rounded-lg flex flex-col items-center justify-center`}
				>
					<h1 className="text-sm font-semibold">
						{airData ? airData["so2"]?.value : ""}
					</h1>
					<p className="text-[10px]">
						SO<sub>2</sub>
					</p>
				</div>
				<div
					className={`${colors.get(
						airData ? airData["co"]?.name : "Good"
					)} rounded-lg flex flex-col items-center justify-center`}
				>
					<h1 className="text-sm font-semibold">
						{airData ? airData["co"]?.value : ""}
					</h1>
					<p className="text-[10px]">CO</p>
				</div>
				{/* <div
					className={`${colors.get(
						airData ? airData["o3"]?.name : "Good"
					)} rounded-lg flex flex-col items-center justify-center`}
				>
					<h1 className="text-sm font-semibold">
						{airData ? airData["o3"]?.value : ""}
					</h1>
					<p className="text-[10px]">
						O<sub>3</sub>
					</p>
				</div> */}
			</div>
		</div>
	);
}

export default AirQuality;
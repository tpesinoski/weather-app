import React from "react";
import SmallWeatherCard from "./SmallWeatherCard";

const Cards = ({ forecastData }: { forecastData: any }) => {
	return (
		<div className="w-[100%] h-[100%] grid grid-cols-16 gap-8 pt-4">
			<div className="col-span-4 bg-[#BBD7EC] rounded-lg flex flex-col">
				<div className="bg-[#AECADF] rounded-t-lg flex items-center justify-between font-semibold text-[#0F0F11] text-sm p-2">
					<p>{forecastData ? forecastData[0].day : ""}</p>
					<p>11:45 AM</p>
				</div>
				<div className="h-[100%] w-[100%] flex justify-between p-3">
					<div className="flex flex-col justify-between">
						<h1 className="text-[30px] text-[#0F0F11] font-bold">
							{forecastData ? Math.ceil(forecastData[0].main?.temp) : "10"}°
						</h1>
						<div className="flex flex-col gap-1">
							<p className="text-xs text-[#4F5658]">
								Real feel{" "}
								<span className="text-[#0F0F11] font-bold">
									{forecastData
										? Math.ceil(forecastData[0].main?.feels_like)
										: "10"}
									°
								</span>
							</p>
							<p className="text-xs text-[#4F5658]">
								Humidity{" "}
								<span className="text-[#0F0F11] font-bold">
									{forecastData
										? Math.ceil(forecastData[0].main?.humidity)
										: "10"}
									%
								</span>
							</p>
							<p className="text-xs text-[#4F5658]">
								Wind{" "}
								<span className="text-[#0F0F11] font-bold">
									{forecastData ? forecastData[0].wind?.speed : "3.5"}
									km/h
								</span>
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center">
						<img
							width="80px"
							height="80px"
							src={`https://openweathermap.org/img/wn/${
								forecastData?.at(0)?.weather[0].icon
							}@2x.png`}
						/>
						<p className="text-[#0F0F11] text-xs font-bold">
							{forecastData?.at(0)?.weather[0].main}
						</p>
					</div>
				</div>
			</div>
			{forecastData?.slice(1, 5)?.map((item: any) => {
				return <SmallWeatherCard item={item} />;
			})}
		</div>
	);
};

export default Cards;

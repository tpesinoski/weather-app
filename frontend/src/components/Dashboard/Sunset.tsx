import React from "react";

const Sunset = ({weatherData} : {weatherData: any}) => {

	return (
		<div className="bg-[#3e3c71] rounded-lg p-4 grid grid-rows-2 gap-4">
			<div className="bg-[#313060] rounded-lg flex p-3 px-5 grid grid-cols-2">
				<div className="flex items-center gap-3">
					<img src="/images/sunrise.png" height="40px" width="40px" />
					<div className="flex flex-col gap-2">
						<p className="text-sm">Sunrise</p>
						<p className="text-md font-bold">
							{new Date(weatherData?.sys?.sunrise * 1000)
								.toUTCString()
								.split(" ")[4]?.slice(0,5)}
						</p>
					</div>
				</div>
				<div className="flex items-center gap-3 justify-end">
					<img src="/images/moon.png" height="40px" width="40px" />
					<div className="flex flex-col gap-2">
						<p className="text-sm">Sunset</p>
						<p className="text-md font-bold">
							{new Date(weatherData?.sys?.sunset * 1000)
								.toUTCString()
								.split(" ")[4]?.slice(0,5)
								}
						</p>
					</div>
				</div>
			</div>
			<div className="bg-[#313060] rounded-lg"></div>
		</div>
	);
};

export default Sunset;

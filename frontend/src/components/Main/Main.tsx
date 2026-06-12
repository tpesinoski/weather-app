import { useEffect, useState } from "react";
import LeftAside from "../Aside/LeftAside";
import RightAside from "../Aside/RightAside";
import axios from "axios";
import { mapAirData } from "../../utils/air-data-mapper";
import { mapForecastData } from "../../utils/forecast-data-mapper";
import NavHorizontal from "../Navbar/NavHorizontal";
import CardsGrid from "../CardsGrid/CardsGrid";
import GoogleMaps from "../CardsGrid/GoogleMaps";

const Main = () => {
	const [forecastData, setForecastData] = useState<any>(null);
	const [airData, setAirData] = useState<any>(null);
	const [weather, setWeather] = useState<any>(null);
	const [coordinates, setCoordinates] = useState<any>({
		lat: 41.2402702,
		lon: 20.592266,
	});
	const [city, setCity] = useState("Vevcani");

	useEffect(() => {
		const getGeoLocation = () => {
			const location = navigator.geolocation.getCurrentPosition((position) => {
				console.log(position);
			});
			console.log(location);
		}
		const getAirData = async () => {
			try {
				const response = await axios.get(
					`http://api.openweathermap.org/data/2.5/air_pollution?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=bc4b33b43de8c4decd970a29bacf6383`
				);
				const data = mapAirData(response.data);
				setAirData(data);
			} catch (err) {
				console.log(err);
			}
		};
		const getForecastData = async () => {
			try {
				const response = await axios.get(
					`http://api.openweathermap.org/data/2.5/forecast?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=bc4b33b43de8c4decd970a29bacf6383&units=metric`
				);
				const mapped = mapForecastData(response.data);
				setForecastData(mapped);
				console.log("Mapped: ", mapped);
			} catch (err) {
				console.log(err);
			}
		};
		const getWeather = async () => {
			try {
				const response = await axios.get(
					`http://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=bc4b33b43de8c4decd970a29bacf6383&units=metric`
				);
				console.log("Response weather: ", response.data);
				setWeather(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		if (coordinates) {
			getAirData();
			getForecastData();
			getWeather();
		}
		getGeoLocation();
	}, [coordinates]);

	return (
		// <div className="h-[100%] w-[100%] bg-[#313060] rounded-lg grid grid-cols-16">
		// 	<LeftAside airData={airData} forecastData={forecastData} weatherData={weather} />
		//     <RightAside setCoordinates={setCoordinates} weatherData={weather} />
		// </div>
		<div className="h-[100%] w-[100%] bg-[#111015] flex flex-col py-2">
			<div className="py-2 px-4">
				<NavHorizontal setCity={setCity} setCoordinates={setCoordinates} />
			</div>
			<div className="h-[100%] grid grid-rows-16 gap-4">
				<div className="row-span-6 h-[100%] w-[100%]">
					<CardsGrid forecastData={forecastData} airData={airData} />
				</div>
				<div className="row-span-10 flex flex-col w-[100%] h-[100%]">
					<div className="w-[100%] grid grid-cols-16 px-4 gap-4">
						<div className="col-span-12">
							<p>Today's Overview</p>
						</div>
						<div className="col-span-4">
							<p>Other Cities</p>
						</div>
					</div>
					<div className="w-[100%] h-[100%] p-4 grid grid-cols-16 gap-4">
						<div className="col-span-7 grid grid-cols-2 grid-rows-2 gap-4">
							<div className="bg-[#1B1B1D] text-sm rounded-lg flex flex-col justify-between p-3">
								<p>Wind Status</p>
								<img src="/images/wind.png" />
								<p className="font-bold">
									{weather?.wind?.speed} <span className="font-normal">km/h</span>
								</p>
							</div>
							<div className="bg-[#1B1B1D] text-sm rounded-lg flex flex-col justify-between p-3">
								<p>Pressure</p>
								<div className="flex flex-col items-center justify-between h-[100%]">
									<img src="/images/uv.png" className="h-[60px] w-[80px]" />
									<p className="font-bold">
										{weather?.main?.pressure} <span className="font-normal">hPa</span>
									</p>
								</div>
							</div>
							<div className="bg-[#1B1B1D] text-sm rounded-lg flex flex-col justify-between p-3">
								<p>Humidity</p>
								<div className="flex flex-col items-center justify-between h-[100%]">
									<img
										src="/images/humidity.png"
										className="h-[60px] w-[60px]"
									/>
									<p className="font-bold">
										{weather?.main?.humidity} <span className="font-normal">%</span>
									</p>
								</div>
							</div>
							<div className="bg-[#1B1B1D] text-sm rounded-lg flex flex-col justify-between p-3">
								<p>Visibility</p>
								<div className="flex flex-col items-center justify-between h-[100%]">
									<img
										src="/images/visibility.png"
										className="h-[60px] w-[60px]"
									/>
									<p className="font-bold">
										{weather?.visibility / 100} <span className="font-normal">%</span>
									</p>
								</div>
							</div>
						</div>
						<div className="col-span-9 grid grid-cols-9 gap-4">
							<div className="bg-blue-500 col-span-5 rounded-lg">
								<GoogleMaps city={city} />
							</div>
							<div className="col-span-4 rounded-lg grid grid-rows-3 gap-4">
								<div className="bg-[#1B1B1D] rounded-xl flex items-center justify-between px-4">
									<div className="flex flex-col gap-1">
										<p>Bejing</p>
										<p className="text-[#777777] text-xs">Clouds</p>
									</div>
									<p className="text-lg font-bold">27°</p>
									<img
										src="/images/visibility.png"
										className="h-[50px] w-[50px]"
									/>
								</div>
								<div className="bg-[#1B1B1D] rounded-xl flex items-center justify-between px-4">
									<div className="flex flex-col gap-1">
										<p>Tokio</p>
										<p className="text-[#777777] text-xs">Clouds</p>
									</div>
									<p className="text-lg font-bold">15°</p>
									<img
										src="/images/visibility.png"
										className="h-[50px] w-[50px]"
									/>
								</div>
								<div className="bg-[#1B1B1D] rounded-xl flex items-center justify-between px-4">
									<div className="flex flex-col gap-1">
										<p>Skopje</p>
										<p className="text-[#777777] text-xs">Clouds</p>
									</div>
									<p className="text-lg font-bold">18°</p>
									<img
										src="/images/visibility.png"
										className="h-[50px] w-[50px]"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;

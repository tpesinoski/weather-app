import React from 'react'

const SmallWeatherCard = ({ item } : { item: any}) => {
  return (
		<div className="col-span-3 bg-[#1B1B1D] rounded-lg flex flex-col">
			<div className="flex items-center justify-center p-2 border-b border-[#39393A]">
              <p>{item.day.slice(0,3).toUpperCase()}</p>
			</div>
			<div className="flex flex-col items-center justify-center">
				<img
					width="70px"
					height="70px"
					src={`https://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
				/>
              <p className="font-bold text-xl">{Math.ceil(item?.main?.temp)}°</p>
			</div>
		</div>
	);
}

export default SmallWeatherCard
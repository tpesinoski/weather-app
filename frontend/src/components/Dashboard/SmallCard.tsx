import React from 'react'

const SmallCard = ({ data, index } : { data: any, index: number }) => {
  return (
		<div
			className={`${
				index === 0
					? "bg-linear-to-br from-cyan-500 to-blue-500"
					: "bg-[#3e3c71]"
			} rounded-lg flex flex-col items-center justify-center p-3`}
		>
			<img
				width="50px"
				height="50px"
				src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
			/>
			<div className="flex flex-col items-center">
				<p className="text-lg font-bold">{Math.ceil(data?.main?.temp)}°</p>
				<p className="text-xs">{data?.day}</p>
			</div>
		</div>
	);
}

export default SmallCard;
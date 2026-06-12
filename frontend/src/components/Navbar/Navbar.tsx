import React, { useState } from 'react'
import NavItem from './NavItem';
import { GrAppsRounded } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";
import { FaChartColumn } from "react-icons/fa6";
import { BsCalendar2Date } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";

const Navbar = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="bg-gradient-to-br from-[#b6ceff] to-[#689bfe] w-full flex flex-col gap-3 rounded-tr-2xl rounded-br-2xl">
			{[
				<GrAppsRounded size={20} />,
				<GrLocation size={20} />,
				<FaChartColumn size={20} />,
				<BsCalendar2Date size={20} />,
				<LuSettings size={20} />,
			].map((icon, index) => (
				<NavItem
					key={index}
					icon={icon}
					isActive={activeIndex === index}
					onClick={() => setActiveIndex(index)}
				/>
			))}
		</div>
	);
};


export default Navbar
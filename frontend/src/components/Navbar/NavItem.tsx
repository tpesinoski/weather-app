import React, { MouseEventHandler, ReactNode } from "react";

const NavItem = ({
	icon,
	isActive,
	onClick,
}: {
	icon: ReactNode;
	isActive: boolean;
	onClick: MouseEventHandler;
}) => {
	return (
		<div
			onClick={onClick}
			className={`w-[100%] cursor-pointer flex items-center justify-center p-4 rounded-tr-2xl rounded-br-2xl transition-all duration-300 ease-in-out ${
				isActive ? "bg-linear-to-br from-[#fe95ba] to-[#ff1c6f]" : ""
			}`}
		>
			{icon}
		</div>
	);
};
export default NavItem;

{
	/* <div
			className={`w-[100%] flex items-center justify-center p-5 rounded-tr-2xl rounded-br-2xl ${
				isActive ? "bg-linear-to-br from-[#fe95ba] to-[#ff1c6f]" : ""
			}`}
		> */
}

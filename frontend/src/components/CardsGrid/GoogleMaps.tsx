import React from 'react'

const GoogleMaps = ({ city } : { city: string }) => {
  return (
		<div className="h-[100%] w-[100%] rounded-lg">
			<div id="my-map-canvas" className="h-[100%] w-[100%] rounded-lg">
				<iframe
					className="h-[100%] w-[100%] rounded-lg"
					src={`https://www.google.com/maps/embed/v1/place?q=${city}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
				></iframe>
			</div>
		</div>
	);
}

export default GoogleMaps
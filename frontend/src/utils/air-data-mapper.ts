export const mapAirData = (data: any) => {
	const components: Record<string, { value: number, name: string }> = {}; // Better type safety

	// Loop through each entry in the components list
	Object.entries(data.list[0].components).forEach(([key, value]) => {
		// Using forEach instead of map
		let name = "";

		if (key === "pm2_5" || key === "pm10") {
			name = mapPM2(value as number);
		} else if (key === "o3") {
			name = mapO3(value as number);
		} else if (key === "so2") {
			name = mapSO2(value as number);
		} else if (key === "co") {
			name = mapCO(value as number);
		}

		// Assigning the values to the components object
		components[key] = { value: value as number, name };
	});

	// Returning the final components object
	return components;
};

const mapPM2 = (value: number) => {
	if (value >= 0 && value < 10) {
		return "Good";
	} else if (value >= 10 && value < 25) {
		return "Fair";
	} else if (value >= 25 && value < 50) {
		return "Moderate";
	} else {
		return "Poor";
	}
};

const mapO3 = (value: number) => {
	if (value >= 0 && value < 60) {
		return "Good";
	} else if (value >= 60 && value < 100) {
		return "Fair";
	} else if (value >= 100 && value < 140) {
		return "Moderate";
	} else {
		return "Poor";
	}
};

const mapSO2 = (value: number) => {
	if (value >= 0 && value < 20) {
		return "Good";
	} else if (value >= 20 && value < 80) {
		return "Fair";
	} else if (value >= 80 && value < 250) {
		return "Moderate";
	} else {
		return "Poor";
	}
};

const mapCO = (value: number) => {
	if (value >= 0 && value < 4400) {
		return "Good";
	} else if (value >= 4400 && value < 9400) {
		return "Fair";
	} else if (value >= 9400 && value < 12400) {
		return "Moderate";
	} else {
		return "Poor";
	}
};

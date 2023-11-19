import React, { useState, useEffect } from "react";

function Clock() {
	const [currentDateTime, setCurrentDateTime] = useState(new Date());

	useEffect(() => {
		// Update the current date and time every second
		const interval = setInterval(() => {
			setCurrentDateTime(new Date());
		}, 1000);

		// Clear the interval when the component unmounts
		return () => clearInterval(interval);
	}, []);

	const hours = currentDateTime.getHours();
	const minutes = currentDateTime.getMinutes();
	const seconds = currentDateTime.getSeconds();

	// Format the date as dd/mm/yyyy
	const day = currentDateTime.getDate();
	const month = currentDateTime.getMonth() + 1; // Months are 0-based
	const year = currentDateTime.getFullYear();
	const formattedDate = `${day}/${month}/${year}`;

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<h1 style={{ margin: "0" }}>
				{formattedDate} | {hours}:
				{minutes < 10 ? `0${minutes}` : minutes}:
				{seconds < 10 ? `0${seconds}` : seconds}
			</h1>
		</div>
	);
}

export default Clock;

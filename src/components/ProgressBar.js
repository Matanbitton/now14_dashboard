import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

function ProgressBar({ currentCount, goal }) {
	const percentage = (currentCount / goal) * 100;

	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Box sx={{ width: "100%", mr: 1 }}>
				<LinearProgress variant="determinate" value={percentage} />
			</Box>
			<Box sx={{ minWidth: 35 }}>{`${Math.round(percentage)}%`}</Box>
		</Box>
	);
}

export default function LinearWithValueLabel() {
	const [articleCount, setArticleCount] = useState(100); // Initial count
	const goal = 1000; // Goal number of articles

	const increaseCount = () => {
		setArticleCount((prevCount) => prevCount + 1);
	};

	return (
		<div>
			<button onClick={increaseCount}>Add Article</button>
			<ProgressBar currentCount={articleCount} goal={goal} />
		</div>
	);
}

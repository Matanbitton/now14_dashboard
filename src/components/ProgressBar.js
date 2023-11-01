import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Title from "./Title";

export default function ProgressBar({ summary, style }) {
	const [currentCount, goal] = [summary.articles || 1, summary.target || 1];
	const percentage = (currentCount / goal) * 100;

	if (style == "target") {
		return (
			<div style={{ display: "flex", flexDirection: "column" }}>
				<h1>מטרת כתבות יומית</h1>
				<p style={{ padding: "none", margin: "none" }}>
					הושג {currentCount} מתוך {goal}
				</p>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Box sx={{ width: "100%", mr: 1 }}>
						<LinearProgress
							variant="determinate"
							value={percentage}
							sx={{ height: "10px" }}
						/>
					</Box>

					<Box sx={{ minWidth: 35 }}>{`${Math.round(
						percentage
					)}%`}</Box>
				</Box>
			</div>
		);
	} else {
		return (
			<div style={{ display: "flex", flexDirection: "column" }}>
				<Title
					align="right"
					sx={{ fontWeight: "bold", justifySelf: "right" }}
				>
					מטרת כתבות יומית
				</Title>
				<p style={{ padding: "none", margin: "none" }}>
					הושג {currentCount} מתוך {goal}
				</p>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Box sx={{ width: "100%", mr: 1 }}>
						<LinearProgress
							variant="determinate"
							value={percentage}
							sx={{ height: "10px" }}
						/>
					</Box>

					<Box sx={{ minWidth: 35 }}>{`${Math.round(
						percentage
					)}%`}</Box>
				</Box>
			</div>
		);
	}
}

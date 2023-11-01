import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import VisibilityIcon from "@mui/icons-material/Visibility";

function preventDefault(event) {
	event.preventDefault();
}

export default function Summary({ summary }) {
	const { views, articles, pushNotifications } = summary;
	const today = new Date();

	// Extract the date, month, and year from the Date object
	const day = today.getDate();
	const month = today.getMonth() + 1; // Month is 0-based, so add 1
	const year = today.getFullYear();

	const formattedDate = `${day}/${month}/${year}`;
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "100vh",
			}}
		>
			<Typography
				component="p"
				variant="h5"
				sx={{
					fontWeight: "bold",
					color: "gray",
					display: "flex",
					gap: "20px",
					alignItems: "center",
				}}
			>
				<div
					style={{
						height: "40px",
						width: "40px",
						backgroundColor: "rgb(240 119 127)",
						borderRadius: "1em",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<VisibilityIcon
						sx={{
							color: "white",
							borderRadius: "2em",
							fontSize: "20px",
						}}
					/>
				</div>
				צפיות
			</Typography>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Typography
					component="p"
					variant="h3"
					sx={{ fontWeight: "bold" }}
				>
					{views}
				</Typography>
				<Typography component="p" variant="h6" color="text.secondary">
					{formattedDate}
				</Typography>
			</div>
		</div>
	);
}

import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Image } from "@mui/icons-material";
import eyeIcon from "../Images/eyeIcon.svg";

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
				display: "grid",
				gridTemplateColumns: "1fr 1fr",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<div
				style={{
					color: "white",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
					gap: "20px",
				}}
			>
				<Typography
					className="text-[#00D3E0] font-sans"
					component="p"
					variant="h3"
					sx={{
						fontWeight: "900",
					}}
				>
					{views}
				</Typography>
				<Typography
					component="p"
					variant="h6"
					className="tracking-wide	"
				>
					{formattedDate}
				</Typography>
			</div>
			<Typography
				component="p"
				variant="h5"
				sx={{
					color: "white",
					fontWeight: "bold",
					color: "gray",
					display: "flex",
					flexDirection: "column",
					gap: "20px",
					alignItems: "center",
				}}
			>
				<img src={eyeIcon} width={"117"}></img>
				<h1 className=" font-bold text-white">צפיות</h1>
			</Typography>
		</div>
	);
}

// MostPublishedPerson.js
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import ParticlesContainer from "./ConfettiNew";
import Confetti from "./Confetti";
import "./MostPublishedPerson.css";
import now14Circle from "../Images/now14Circle.png";

export default function MostPublishedPersonWeek({
	mostActiveAuthors,
	authors,
}) {
	const displayData = mostActiveAuthors.week || {}; // Use the first entry or an empty object

	return (
		<div className="grid items-center justify-between h-full relative">
			<div className="flex justify-center ">
				<img
					className="flex justify-center rounded-full w-[60px] items-center border-[2px solid #C4C4C4]
                    bg-[#24265A] 
                    shadow-[0px 2px 4px 0px rgba(0, 0, 0, 0.25)]
"
					src={now14Circle}
				></img>
			</div>
			<div>
				<div>
					<h2 className="text-sm  text-white font-black">
						{authors.map((author) =>
							displayData.author_id == author.id
								? author.display_name
								: ""
						)}
					</h2>
				</div>

				<h2 className="text-xs  text-white font-black">
					פרסמ.ה הכי הרבה
					<span className="text-[#FBBF00] pr-1">השבוע</span>
				</h2>
			</div>
		</div>
	);
}
